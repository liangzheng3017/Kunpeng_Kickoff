import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import HeroBanner, { STATS, StatItem } from '@/components/home/HeroBanner'
import ValueProposition from '@/components/home/ValueProposition'
import FeatureOverview from '@/components/home/FeatureOverview'

// =========================================================================
// HomePage
// =========================================================================

export default function HomePage() {
  return (
    <Layout hideFooter>
      {/* 1. Hero Banner — full-screen */}
      <HeroBanner />

      {/* 2. Value Proposition — three cards */}
      <ValueProposition />

      {/* 3. Feature Overview — six-card grid */}
      <FeatureOverview />

      {/* 4. Data Highlights — animated counters */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 gradient-aurora opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              数据驱动的{' '}
              <span className="gradient-text-cyan">留学决策</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <StatItem
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  isActive={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
