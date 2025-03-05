import { useRef, useCallback, useEffect } from "react"

export function useCarouselScroll({ api, current, itemsLength }) {
  // For both horizontal and vertical gestures
  const deltaXRef = useRef(0);
  const deltaYRef = useRef(0);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);
  
  // Make these extremely low for higher sensitivity
  const SWIPE_THRESHOLD = 5;
  const SCROLL_DEBOUNCE = 150;
  
  // Debug mode
  const enableLogging = true;

  const handleWheel = useCallback((e) => {
    if (!api) return;
    
    // Log wheel events for debugging
    if (enableLogging && (Math.abs(e.deltaX) > 2 || Math.abs(e.deltaY) > 2)) {
      console.log(`Wheel: deltaX=${e.deltaX.toFixed(2)}, deltaY=${e.deltaY.toFixed(2)}`);
    }
    
    // Accumulate both directions
    deltaXRef.current += e.deltaX;
    deltaYRef.current += e.deltaY;
    
    // Use the larger value (some trackpads report horizontal swipes as deltaY)
    const primaryDelta = Math.abs(deltaXRef.current) > Math.abs(deltaYRef.current) 
      ? deltaXRef.current 
      : (Math.abs(deltaYRef.current) > SWIPE_THRESHOLD ? deltaYRef.current : 0);
    
    if (Math.abs(primaryDelta) >= SWIPE_THRESHOLD && !isScrollingRef.current) {
      if (enableLogging) {
        console.log(`Threshold crossed: ${primaryDelta}`);
      }
      
      isScrollingRef.current = true;
      
      // Direction based on the primary delta
      const direction = primaryDelta > 0 ? 1 : -1;
      
      if (direction > 0 && current < itemsLength - 2) {
        if (enableLogging) console.log("Scrolling next");
        api.scrollNext();
      } else if (direction < 0 && current > 1) {
        if (enableLogging) console.log("Scrolling previous");
        api.scrollPrev();
      }
      
      // Reset values
      deltaXRef.current = 0;
      deltaYRef.current = 0;
      
      // Set timeout to allow another scroll after debounce
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        if (enableLogging) console.log("Reset scroll lock");
      }, SCROLL_DEBOUNCE);
    }
  }, [api, current, itemsLength]);

  useEffect(() => {
    if (!api?.container?.current) return;
    
    const container = api.container.current;
    console.log("✅ Setting up wheel listeners on carousel container");
    
    // Try multiple methods to catch all wheel events
    
    // 1. Direct container listener (non-passive)
    container.addEventListener("wheel", handleWheel, { passive: false });
    
    // 2. Document listener to catch events that might bubble up
    document.addEventListener("wheel", (e) => {
      // Only handle if the event target is within our container
      if (container.contains(e.target)) {
        handleWheel(e);
      }
    }, { passive: false });
    
    // 3. Try mousewheel event as a fallback (older browsers)
    container.addEventListener("mousewheel", handleWheel, { passive: false });
    
    // 4. React to scroll events too
    container.addEventListener("scroll", () => {
      if (enableLogging) console.log("Scroll event detected");
    }, { passive: true });
    
    return () => {
      container.removeEventListener("wheel", handleWheel);
      document.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousewheel", handleWheel);
      container.removeEventListener("scroll", handleWheel);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [api, handleWheel]);

  return {};
}