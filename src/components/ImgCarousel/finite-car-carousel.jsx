import { useRef, useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { cn } from "../../lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function FiniteCarCarousel() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(1)
  const carouselRef = useRef(null)

  const carouselItems = [
    {
      image: null,
      title: "",
      description: "",
    },
    {
      image: "/images/truck9.webp",
      title: "Significantly Quieter",
      description:
        "The electric truck operates 10x quieter, enhancing worker safety and communication in mining environments. Reduce noise pollution and improve site conditions.",
    },
    {
      image: "/images/truck7.webp",
      title: "Superior Power",
      description:
        "The EPCA truck delivers instant torque allowing for faster acceleration and improved performance. The drivetrain provides immediate power, optimising haul cycles and reducing delays.",
    },
    {
      image: "/images/truck10.webp",
      title: "Simplified Maintenance",
      description:
        "Retrofitting a diesel truck to battery-electric significantly reduces maintenance complexity and costs. The electric drivetrain has fewer moving parts, resulting in considerable reduction in wear and tear and service requirements.",
    },
    {
      image: "/images/screen.webp",
      title: "Technology Upgrades",
      description:
        "The E-777D features advanced technology upgrades that includes the electric motors, high-capacity batteries and data systems.",
    },
    {
      image: null,
      title: "",
      description: "",
    },
  ]

  // Track touch start position for swipe detection
  const touchStartXRef = useRef(0)
  const touchStartYRef = useRef(0)
  const isTouchingRef = useRef(false)
  const isHorizontalSwipeRef = useRef(false)
  
  // Update current index when carousel changes
  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      const selectedIndex = api.selectedScrollSnap()
      setCurrent(selectedIndex)
      
      // Prevent sliding to empty slides (0 or last)
      if (selectedIndex === 0) {
        api.scrollTo(1, false)
      } else if (selectedIndex === carouselItems.length - 1) {
        api.scrollTo(carouselItems.length - 2, false)
      }
    }

    api.on("select", handleSelect)
    
    // Initial setup to ensure we start at the right position
    api.scrollTo(1, false)
    
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])
  
  // Handle touch events for swipe detection
  useEffect(() => {
    const element = carouselRef.current
    if (!element || !api) return
    
    const handleTouchStart = (e) => {
      isTouchingRef.current = true
      touchStartXRef.current = e.touches[0].clientX
      touchStartYRef.current = e.touches[0].clientY
      isHorizontalSwipeRef.current = false
    }
    
    const handleTouchMove = (e) => {
      if (!isTouchingRef.current) return
      
      const touchCurrentX = e.touches[0].clientX
      const touchCurrentY = e.touches[0].clientY
      const deltaX = touchStartXRef.current - touchCurrentX
      const deltaY = touchStartYRef.current - touchCurrentY
      
      if (!isHorizontalSwipeRef.current) {
        if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
          isHorizontalSwipeRef.current = true
        }
      }
      
      if (isHorizontalSwipeRef.current) {
        e.preventDefault()
      }
    }
    
    const handleTouchEnd = (e) => {
      if (!isTouchingRef.current) return
      
      if (isHorizontalSwipeRef.current) {
        const touchEndX = e.changedTouches[0].clientX
        const deltaX = touchStartXRef.current - touchEndX
        
        const SWIPE_THRESHOLD = 50
        
        if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
          if (deltaX > 0 && current < carouselItems.length - 2) {
            api.scrollNext()
          } else if (deltaX < 0 && current > 1) {
            api.scrollPrev()
          }
        }
      }
      
      isTouchingRef.current = false
      isHorizontalSwipeRef.current = false
    }
    
    element.addEventListener('touchstart', handleTouchStart, { passive: true })
    element.addEventListener('touchmove', handleTouchMove, { passive: false }) 
    element.addEventListener('touchend', handleTouchEnd, { passive: true })
    
    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [api, current, carouselItems])

  return (
    <div 
      className="relative w-full overflow-hidden" 
      ref={carouselRef}
    >
      {/* Left arrow - only show when not at start */}
      {current > 1 && (
        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 top-1/4 md:top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Right arrow - only show when not at end */}
      {current < carouselItems.length - 2 && (
        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-4 top-1/4 md:top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      <Carousel
        setApi={setApi}
        className="w-full cursor-grab active:cursor-grabbing"
        opts={{
          align: "center",
          containScroll: "trimSnaps",
          slidesToScroll: 1,
          startIndex: 1,
          draggable: true, 
          dragFree: false,
          loop: false,
          speed: 10,
          duration: 35,
          threshold: 10,
          skipSnaps: false,
          rubberband: true,
          inViewThreshold: 0.1,
          breakpoints: {
            '(max-width: 768px)': {
              inViewThreshold: 0,
              containScroll: "keepSnaps",
            }
          },
          bounds: { min: 1, max: carouselItems.length - 2 }
        }}
      >
        <CarouselContent className="-ml-0">
          {carouselItems.map((item, index) => (
            <CarouselItem 
              key={index} 
              className={cn(
                "pl-0 pr-0 transition-opacity",
                "md:basis-full lg:basis-[85%] xl:basis-[80%] 2xl:basis-[75% mx-2",
                index === 0 || index === carouselItems.length - 1 ? "invisible" : ""
              )}
            >
              <div className="relative w-full overflow-hidden rounded-lg">
                <img
                  src={item.image || "/images/placeholder.webp"}
                  alt={item.title}
                  className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
                  loading={index === 1 ? "eager" : "lazy"}
                  draggable="false"
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

      {/* Dot indicators */}
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