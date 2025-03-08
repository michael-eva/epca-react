import { useRef, useState, useEffect, useCallback } from "react"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { cn } from "../../lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function FiniteCarCarousel() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(1)
  const carouselRef = useRef(null)
  
  // Track swipe gesture values
  const deltaXRef = useRef(0)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)
  
  // Touch tracking
  const startXRef = useRef(0)
  const startYRef = useRef(0)
  const isTouchingRef = useRef(false)
  const isSwipingRef = useRef(false)
  const lastTouchXRef = useRef(0)
  const isTwoFingerSwipeRef = useRef(false)
  const twoFingerStartXRef = useRef(0)

  const carouselItems = [
    {
      image: null,
      title: "",
      description: "",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Even Quieter",
      description:
        "An updated wheel and tyre package offers a smoother driving experience. Redesigned body castings reduce parts from 70 to 1 for fewer gaps. All to create a whisper-quiet ride.",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "More Efficient",
      description:
        "Redesigned to improve aerodynamics and reduce energy consumption for extended range and better performance.",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Advanced Safety",
      description:
        "State-of-the-art safety features with enhanced structural integrity and intelligent driver assistance systems.",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Premium Interior",
      description:
        "Luxurious cabin with sustainable materials, advanced climate control, and intuitive technology integration.",
    },
    {
      image: null,
      title: "",
      description: "",
    },
  ]

  // Update current index when carousel changes
  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      const selectedIndex = api.selectedScrollSnap()
      setCurrent(selectedIndex)
    }

    api.on("select", handleSelect)
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  // Modify the navigation prevention to only work when interacting with the carousel
  useEffect(() => {
    // Only prevent navigation when actually interacting with the carousel
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    let isInteractingWithCarousel = false;

    const handleCarouselInteractionStart = () => {
      isInteractingWithCarousel = true;
    };

    const handleCarouselInteractionEnd = () => {
      isInteractingWithCarousel = false;
    };

    // Modified popstate handler that only prevents navigation during carousel interaction
    const handlePopState = (e) => {
      if (isInteractingWithCarousel) {
        // Only prevent navigation if actively interacting with carousel
        e.preventDefault();
        if (window.history && window.history.pushState) {
          window.history.pushState({ noBackPlease: true }, '', window.location.href);
        }
        
        // If we can navigate back in our carousel, do that instead
        if (api && current > 1) {
          api.scrollPrev();
        }
      }
    };

    // Modified touch handler that only prevents default when near carousel edges
    const preventBackNavigation = (e) => {
      if (!isInteractingWithCarousel) return;

      // Only process if touch is on or near the carousel
      if (carouselElement.contains(e.target)) {
        if (e.touches && e.touches.length > 0) {
          const touchX = e.touches[0].clientX;
          const carouselRect = carouselElement.getBoundingClientRect();
          const edgeThreshold = 50; // pixels from edge to consider as edge zone

          // Only prevent default if touch is near the edges of the carousel
          if (touchX < carouselRect.left + edgeThreshold || 
              touchX > carouselRect.right - edgeThreshold) {
            e.preventDefault();
          }
        }
      }
    };

    // Add interaction listeners to the carousel
    carouselElement.addEventListener('mousedown', handleCarouselInteractionStart);
    carouselElement.addEventListener('touchstart', handleCarouselInteractionStart);
    document.addEventListener('mouseup', handleCarouselInteractionEnd);
    document.addEventListener('touchend', handleCarouselInteractionEnd);

    // Add navigation prevention listeners
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('touchstart', preventBackNavigation, { 
      passive: false, 
      capture: true 
    });

    // Cleanup
    return () => {
      carouselElement.removeEventListener('mousedown', handleCarouselInteractionStart);
      carouselElement.removeEventListener('touchstart', handleCarouselInteractionStart);
      document.removeEventListener('mouseup', handleCarouselInteractionEnd);
      document.removeEventListener('touchend', handleCarouselInteractionEnd);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('touchstart', preventBackNavigation, { capture: true });
    };
  }, [api, current]);

  // Handle wheel events directly in the component
  const handleWheel = useCallback((e) => {
    if (!api) return
    
    // Detect if this is a two-finger trackpad swipe
    const isTwoFingerTrackpadSwipe = !e.ctrlKey && Math.abs(e.deltaX) > 0;
    
    // Check if the scroll is predominantly horizontal
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    
    // Process two-finger trackpad swipes or horizontal mouse wheel scrolls
    if (!isHorizontalScroll && !isTwoFingerTrackpadSwipe) return;

    // Prevent default browser behavior for horizontal scrolls
    e.preventDefault();
    
    // Calculate how much to scroll based on the input delta
    // EXTREMELY reduced sensitivity
    const scrollMultiplier = 0.1; // Reduced by 10x for ultra-slow scrolling
    
    // Add constraints to prevent moving more than one slide at a time
    const maxScrollPerEvent = 0.1; // Reduced by 10x for ultra-slow movement
    
    // Calculate the raw scroll amount
    let scrollAmount = e.deltaX * scrollMultiplier;
    
    // Constrain the scroll amount to prevent skipping multiple slides
    scrollAmount = Math.max(-maxScrollPerEvent, Math.min(maxScrollPerEvent, scrollAmount));
    
    // Get current scroll position and update it proportionally
    if (api.scrollTo) {
      // Get the current index
      const currentIndex = api.selectedScrollSnap();
      const totalSlides = carouselItems.length;
      
      // Calculate current progress manually (0 to 1)
      const currentProgress = currentIndex / (totalSlides - 1);
      
      // Calculate new target progress
      const targetProgress = Math.max(0, Math.min(1, currentProgress + scrollAmount));
      
      // Convert back to slide index
      const targetIndex = Math.round(targetProgress * (totalSlides - 1));
      
      // Only scroll if the accumulated delta is significant enough
      deltaXRef.current += e.deltaX;
      
      // Set different thresholds for mobile and desktop
      // Use window.innerWidth to detect device type
      const isMobile = window.innerWidth < 768; // Common breakpoint for mobile devices
      const SLIDE_THRESHOLD = isMobile ? 20 : 80; // 20 for mobile, 80 for desktop
      
      if (Math.abs(deltaXRef.current) > SLIDE_THRESHOLD) {
        // FIX: Prevent scrolling to first or last slide (indices 0 and totalSlides-1)
        if (deltaXRef.current > 0 && currentIndex < totalSlides - 2) {
          // Extremely long duration
          api.scrollNext({ duration: 5000 }); // Increased from 3000 to 5000 ms for even slower animation
          deltaXRef.current = 0; // Reset after action
        } else if (deltaXRef.current < 0 && currentIndex > 1) {
          // Extremely long duration
          api.scrollPrev({ duration: 5000 }); // Increased from 3000 to 5000 ms for even slower animation
          deltaXRef.current = 0; // Reset after action
        } else {
          // Reset the delta if we're at the boundaries
          deltaXRef.current = 0;
        }
      }
    }
    
    // Track that we're in an active scrolling session
    clearTimeout(scrollTimeoutRef.current);
    isScrollingRef.current = true;
    
    // Set a timeout to detect when scrolling stops (user lifts fingers)
    scrollTimeoutRef.current = setTimeout(() => {
      // User has stopped scrolling, now snap to nearest slide
      if (api) {
        // Snap to nearest slide - no need to check isDragging
        api.scrollTo(api.selectedScrollSnap());
      }
      isScrollingRef.current = false;
      deltaXRef.current = 0; // Reset accumulated delta
    }, 150);
  }, [api, carouselItems.length]);

  // Touch event handlers
  const handleTouchStart = useCallback((e) => {
    if (!api) return
    
    // Check if this is a touch near the edge of the screen
    const touchX = e.touches[0].clientX;
    const viewportWidth = window.innerWidth;
    
    // If touch is within edge zones (first 20% or last 20% of screen width)
    if (touchX < viewportWidth * 0.2 || touchX > viewportWidth * 0.8) {
      // Always prevent default for touches near edges to block browser gestures
      e.preventDefault();
    }
    
    isTouchingRef.current = true;
    isSwipingRef.current = false;
    
    // Store the initial touch position
    startXRef.current = e.touches[0].clientX;
    startYRef.current = e.touches[0].clientY;
    lastTouchXRef.current = e.touches[0].clientX;
  }, [api]);

  const handleTouchMove = useCallback((e) => {
    if (!api || !isTouchingRef.current) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    
    // Calculate deltas
    const deltaX = startXRef.current - currentX;
    const deltaY = startYRef.current - currentY;
    
    // Update last touch position
    lastTouchXRef.current = currentX;
    
    // Determine if the swipe is primarily horizontal
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) * 1.2;
    
    // Special handling for edge swipes
    const viewportWidth = window.innerWidth;
    const isNearLeftEdge = startXRef.current < viewportWidth * 0.2;
    const isNearRightEdge = startXRef.current > viewportWidth * 0.8;
    
    // If we're starting near an edge or already in a horizontal swipe, take control
    if (isNearLeftEdge || isNearRightEdge || isHorizontalSwipe) {
      // Prevent default to block browser navigation
      e.preventDefault();
      e.stopPropagation();
      
      // Mark as swiping if not already
      if (!isSwipingRef.current && isHorizontalSwipe) {
        isSwipingRef.current = true;
      }
    }

    // Let the dragFree option handle most of the scrolling behavior
    // Only handle navigation for full slides when needed
  }, [api, current, carouselItems.length]);

  const handleTouchEnd = useCallback((e) => {
    if (!api || !isTouchingRef.current) return;
    
    const SWIPE_THRESHOLD = 70; // Increased threshold for a swipe
    
    if (isSwipingRef.current) {
      // Calculate the final touch position and distance
      let deltaX = 0;
      
      // For touchend we need to use the last recorded touch
      if (e.changedTouches && e.changedTouches.length > 0) {
        deltaX = startXRef.current - e.changedTouches[0].clientX;
      }
      
      // If the swipe distance meets our threshold, navigate
      if (Math.abs(deltaX) >= SWIPE_THRESHOLD && !isScrollingRef.current) {
        // Swiping left (positive deltaX) = next slide
        if (deltaX > 0 && current < carouselItems.length - 2) {
          api.scrollNext({ duration: 3000 }); // Extremely slow animation
        } 
        // Swiping right (negative deltaX) = previous slide
        else if (deltaX < 0 && current > 1) {
          api.scrollPrev({ duration: 3000 }); // Extremely slow animation
        }
      }
    }
    
    // Reset tracking state
    isTouchingRef.current = false;
    isSwipingRef.current = false;
  }, [api, current, carouselItems.length]);

  // Handle two-finger gesture events (for trackpads)
  const handleGestureStart = useCallback((e) => {
    if (!api) return;
    
    // Mark as a two-finger gesture
    isTwoFingerSwipeRef.current = true;
    twoFingerStartXRef.current = e.clientX || 0;
    
    // Prevent default to avoid browser back/forward navigation
    e.preventDefault();
  }, [api]);
  
  const handleGestureChange = useCallback((e) => {
    if (!api || !isTwoFingerSwipeRef.current) return;
    
    // Prevent default browser behavior
    e.preventDefault();
    
    // Calculate the horizontal delta
    const deltaX = twoFingerStartXRef.current - (e.clientX || 0);
    
    // Threshold for gesture movement
    const GESTURE_THRESHOLD = 70; // Increased
    
    if (Math.abs(deltaX) > GESTURE_THRESHOLD && !isScrollingRef.current) {
      isScrollingRef.current = true;
      
      // Determine direction and navigate with increased duration parameter
      if (deltaX > 0 && current < carouselItems.length - 2) {
        api.scrollNext({ duration: 3000 });
      } else if (deltaX < 0 && current > 1) {
        api.scrollPrev({ duration: 3000 });
      }
      
      // Reset for next gesture
      twoFingerStartXRef.current = e.clientX || 0;
      
      // Increase debounce timeout to prevent rapid transitions
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800); // Increased significantly
    }
  }, [api, current, carouselItems.length]);
  
  const handleGestureEnd = useCallback(() => {
    isTwoFingerSwipeRef.current = false;
  }, []);

  // Add event listeners for wheel, touch, gesture, and pointer events
  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    // Wheel event for desktop (including two-finger trackpad swipes)
    const wheelHandler = (e) => {
      handleWheel(e);
    };

    // Touch events for mobile
    const touchStartHandler = (e) => {
      // Check if this is a two-finger touch
      if (e.touches.length === 2) {
        // This is a two-finger touch, mark it specially
        isTwoFingerSwipeRef.current = true;
        // Use the center point between the two fingers
        const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        twoFingerStartXRef.current = centerX;
        e.preventDefault(); // Prevent default to avoid browser gestures
      } else {
        // Regular single-finger touch
        handleTouchStart(e);
      }
    };
    
    const touchMoveHandler = (e) => {
      if (isTwoFingerSwipeRef.current && e.touches.length === 2) {
        // Handle two-finger swipe
        e.preventDefault(); // Always prevent default for two-finger swipes
        
        // Calculate center point between fingers
        const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const deltaX = twoFingerStartXRef.current - centerX;
        
        // Only process if we're not already scrolling
        if (Math.abs(deltaX) > 30 && !isScrollingRef.current) {
          isScrollingRef.current = true;
          
          // FIX: Enforce the same boundaries as other handlers with longer duration
          if (deltaX > 0 && current < carouselItems.length - 2) {
            api.scrollNext({ duration: 3000 }); // Extremely slow animation
          } else if (deltaX < 0 && current > 1) {
            api.scrollPrev({ duration: 3000 }); // Extremely slow animation
          }
          
          // Update starting position
          twoFingerStartXRef.current = centerX;
          
          // Longer debounce
          clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
          }, 800); // Increased significantly
        }
      } else {
        // Regular single-finger handling
        handleTouchMove(e);
      }
    };
    
    const touchEndHandler = (e) => {
      if (isTwoFingerSwipeRef.current) {
        isTwoFingerSwipeRef.current = false;
      } else {
        handleTouchEnd(e);
      }
    };
    
    // Gesture events for Safari/WebKit (handles two-finger swipes on trackpads)
    const gestureStartHandler = (e) => handleGestureStart(e);
    const gestureChangeHandler = (e) => handleGestureChange(e);
    const gestureEndHandler = () => handleGestureEnd();

    // Add all listeners
    carouselElement.addEventListener('wheel', wheelHandler, { passive: false });
    carouselElement.addEventListener('touchstart', touchStartHandler, { passive: false });
    carouselElement.addEventListener('touchmove', touchMoveHandler, { passive: false });
    carouselElement.addEventListener('touchend', touchEndHandler, { passive: false });
    
    // Add gesture events (primarily for Safari)
    if ('ongesturestart' in window) {
      carouselElement.addEventListener('gesturestart', gestureStartHandler, { passive: false });
      carouselElement.addEventListener('gesturechange', gestureChangeHandler, { passive: false });
      carouselElement.addEventListener('gestureend', gestureEndHandler, { passive: false });
    }

    // Cleanup
    return () => {
      carouselElement.removeEventListener('wheel', wheelHandler);
      carouselElement.removeEventListener('touchstart', touchStartHandler);
      carouselElement.removeEventListener('touchmove', touchMoveHandler);
      carouselElement.removeEventListener('touchend', touchEndHandler);
      
      if ('ongesturestart' in window) {
        carouselElement.removeEventListener('gesturestart', gestureStartHandler);
        carouselElement.removeEventListener('gesturechange', gestureChangeHandler);
        carouselElement.removeEventListener('gestureend', gestureEndHandler);
      }
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd, 
      handleGestureStart, handleGestureChange, handleGestureEnd, api, current, carouselItems.length]);

  // Remove or modify the global event handler that blocks all browser gestures
  useEffect(() => {
    // Only add touch-action CSS to the carousel itself
    if (typeof document === 'undefined' || !carouselRef.current) return;

    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .carousel-container {
        touch-action: pan-y pinch-zoom;
        overflow-x: hidden;
      }
    `;
    
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div 
      className="relative w-full" 
      ref={carouselRef}
      style={{ 
        userSelect: 'none', 
        WebkitUserSelect: 'none',
        // Prevent browser gestures
        overscrollBehavior: 'none',
        overscrollBehaviorX: 'none',
        overflow: 'hidden',
        touchAction: 'pan-y pinch-zoom', // Allow vertical scrolling but handle horizontal ourselves
      }}
    >
      {/* Add left arrow - only show when not at start */}
      {current > 1 && (
        <button
          onClick={() => api?.scrollPrev({ duration: 3000 })}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 backdrop-blur-sm transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Add right arrow - only show when not at end */}
      {current < carouselItems.length - 2 && (
        <button
          onClick={() => api?.scrollNext({ duration: 3000 })}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 backdrop-blur-sm transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          containScroll: "keepSnaps",
          slidesToScroll: 1,
          dragFree: true,
          startIndex: 1,
          friction: 0.995, // Extremely high friction (almost 1.0) for very slow movement
          dragThreshold: 30, // Significantly increased to require much more deliberate movement
          inViewThreshold: 0.2,
          skipSnaps: false,
          bounds: { min: 1, max: carouselItems.length - 2 }
        }}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem 
              key={index} 
              className={cn(

                "md:basis-full lg:basis-[90%]",
                index === 0 || index === carouselItems.length - 1 ? "invisible" : ""
              )}
            >
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg max-w-[2085px]">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="object-cover w-full h-[580px]"
                  loading={index === 1 ? "eager" : "lazy"}
                />
              </div>
              <div className="p-6 pb-12">
                <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-500 max-w-3xl">{item.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {carouselItems.slice(1, -1).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-md transition-all",
              current === index + 1 ? "bg-white w-6" : "bg-white/40"
            )}
            onClick={() => api?.scrollTo(index + 1)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}