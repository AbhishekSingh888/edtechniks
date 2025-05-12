"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
}

export default function AnimatedCounter({ from, to, duration = 2000, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const countRef = useRef(from)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const currentCount = Math.floor(progress * (to - from) + from)

        setCount(currentCount)
        countRef.current = currentCount

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setCount(to)
        }
      }
      window.requestAnimationFrame(step)
    }
  }, [from, to, duration, isInView, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
