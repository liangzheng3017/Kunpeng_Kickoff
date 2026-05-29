import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import RevenueModel from '@/components/business/RevenueModel'
import RoadmapTimeline from '@/components/business/RoadmapTimeline'
import PieChartIcon from '@/icons/PieChartIcon'
import { cn } from '@/lib/utils'

const tabItems = [
  { key: 'revenue', label: '收入模型', description: 'B2B2C 三边生态' },
  { key: 'roadmap', label: '路线图', description: '三阶段发展路径' },
]

export default function BusinessPage() {
  const [activeTab, setActiveTab] = useState('revenue')

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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">
                <PieChartIcon className="h-6 w-6 text-emerald-400" />
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                商业<span className="gradient-text-cyan">模式</span>
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
                B2B2C多边生态 · 三阶段发展路径 · 竞品差异化分析
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="relative pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Tab Switcher */}
            <div className="mb-8 flex gap-3">
              {tabItems.map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'rounded-xl px-5 py-3 text-left transition-all duration-200',
                    activeTab === tab.key
                      ? 'bg-accent/15 border border-accent/30 shadow-glow'
                      : 'bg-secondary/30 border border-border/50 hover:border-accent/20'
                  )}
                >
                  <div className={cn(
                    'text-sm font-semibold',
                    activeTab === tab.key ? 'text-accent' : 'text-foreground'
                  )}>
                    {tab.label}
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">{tab.description}</div>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'revenue' && <RevenueModel />}
                {activeTab === 'roadmap' && <RoadmapTimeline />}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </Layout>
  )
}
