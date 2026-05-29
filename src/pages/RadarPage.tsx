import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import RadarMap from '@/components/radar/RadarMap'
import WarningCard from '@/components/radar/WarningCard'
import { dangerWarnings } from '@/data'
import TargetIcon from '@/icons/TargetIcon'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const filterTypes = [
  { key: 'all', label: '全部' },
  { key: 'scam', label: '诈骗' },
  { key: 'unsafe_area', label: '不安全区域' },
  { key: 'closed_business', label: '已关闭' },
  { key: 'fraud', label: '欺诈' },
]

export default function RadarPage() {
  const [filter, setFilter] = useState('all')

  const filteredWarnings = filter === 'all'
    ? dangerWarnings
    : dangerWarnings.filter((w) => w.type === filter)

  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 gradient-aurora opacity-30" />

        {/* Page Header */}
        <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15">
                <TargetIcon className="h-6 w-6 text-red-400" />
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                避雷<span className="gradient-text-cyan">雷达</span>
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
                诈骗话术库 + 风险区域热力图 + 倒闭商户预警，安全留学不踩坑
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="relative pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Left: Warning Cards (3 cols) */}
              <div className="lg:col-span-3 space-y-6">
                {/* Filter */}
                <div className="flex flex-wrap gap-2">
                  {filterTypes.map((ft) => (
                    <button
                      key={ft.key}
                      onClick={() => setFilter(ft.key)}
                      className={cn(
                        'rounded-lg px-3 py-1.5 text-xs font-medium transition-all',
                        filter === ft.key
                          ? 'bg-accent/20 text-accent'
                          : 'bg-secondary/40 text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {ft.label}
                    </button>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
                  {filteredWarnings.map((warning, i) => (
                    <WarningCard key={warning.id} warning={warning} index={i} />
                  ))}
                </div>
              </div>

              {/* Right: Radar Map (2 cols) */}
              <div className="lg:col-span-2">
                <RadarMap />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
