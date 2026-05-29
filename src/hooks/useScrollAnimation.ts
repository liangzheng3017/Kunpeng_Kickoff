import { useEffect, useRef, useState, useCallback } from 'react'

interface UseScrollAnimationOptions {
  /** Threshold for triggering visibility (0-1) */
  threshold?: number
  /** Only trigger once (default: true) */
  once?: boolean
  /** Root margin for IntersectionObserver */
  rootMargin?: string
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement | null>
  isInView: boolean
  /** Manually reset visibility (if once=false) */
  reset: () => void
}

/**
 * Scroll animation hook — detects when element enters viewport.
 * Works with Framer Motion for scroll-triggered animations.
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn {
  const { threshold = 0.15, once = true, rootMargin = '0px 0px -50px 0px' } = options

  const ref = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  const triggeredRef = useRef(false)

  const reset = useCallback(() => {
    triggeredRef.current = false
    setIsInView(false)
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Skip if already triggered in "once" mode
    if (once && triggeredRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          triggeredRef.current = true
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, once, rootMargin])

  return { ref, isInView, reset }
}
