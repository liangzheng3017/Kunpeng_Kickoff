import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ChevronDownIcon from '@/icons/ChevronDownIcon'
import PlaneIcon from '@/icons/PlaneIcon'

/**
 * Animated counter hook — counts up from 0 to target when triggered.
 */
function useCountUp(target: number, isActive: boolean, duration = 2000) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!isActive) {
      setCount(0)
      return
    }

    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }
    frameRef.current = requestAnimationFrame(step)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, isActive, duration])

  return count
}

/**
 * Floating particle dots for decorative background effect.
 */
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: 2 + Math.random() * 4,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    opacity: 0.2 + Math.random() * 0.3,
  }))

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// =========================================================================
// Stats Data
// =========================================================================

const STATS = [
  { label: '决策效率提升', value: 80, suffix: '%', prefix: '' },
  { label: '种子用户', value: 3000, suffix: '+', prefix: '' },
  { label: '毛利率', value: 75, suffix: '%+', prefix: '' },
]

// =========================================================================
// Components
// =========================================================================

function StatItem({ label, value, suffix, prefix, isActive }: {
  label: string
  value: number
  suffix: string
  prefix: string
  isActive: boolean
}) {
  const count = useCountUp(value, isActive)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-heading text-4xl font-bold gradient-text sm:text-5xl">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}

// =========================================================================
// Hero Banner
// =========================================================================

export default function HeroBanner() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(6,182,212,0.06),transparent)]" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-sm text-accent"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          禹涵皓 · 中学生AI创新创业竞赛作品
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text-cyan">未出发，先抵达</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          面向留学生的「云端行前办事处」
          <br />
          AI 行程规划 + 众包硬标数据 + 社区软标匹配
          <br className="hidden sm:block" />
          填补出国前的信息断层与决策焦虑
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/planner"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-heading text-base font-semibold text-accent-foreground shadow-glow transition-all hover:shadow-glow-lg hover:scale-105"
          >
            <PlaneIcon size={18} />
            <span>立即规划我的行程</span>
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-border/40 px-6 py-3.5 text-sm text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground"
          >
            了解功能
            <ChevronDownIcon size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs">向下滚动探索</span>
          <ChevronDownIcon size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Re-export stats section for use in HomePage
export { STATS, StatItem }
