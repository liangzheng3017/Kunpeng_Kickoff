import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { hardMetricsData, hardVsTraditional } from '@/data'
import MetricCard from './MetricCard'
import { cn } from '@/lib/utils'
import BarChart3Icon from '@/icons/BarChart3Icon'

const tabs = [
  { key: 'housing', label: '住宿', color: 'bg-blue-500/10 text-blue-400' },
  { key: 'dining', label: '餐饮', color: 'bg-amber-500/10 text-amber-400' },
  { key: 'transport', label: '交通', color: 'bg-emerald-500/10 text-emerald-400' },
  { key: 'medical', label: '医疗', color: 'bg-purple-500/10 text-purple-400' },
]

const categoryColorMap: Record<string, string> = {
  housing: 'bg-blue-500/10 text-blue-400',
  dining: 'bg-amber-500/10 text-amber-400',
  transport: 'bg-emerald-500/10 text-emerald-400',
  medical: 'bg-purple-500/10 text-purple-400',
}

export default function MetricsDashboard() {
  const [activeTab, setActiveTab] = useState('housing')

  const activeData = useMemo(
    () => hardMetricsData.find((d) => d.categoryEn === activeTab),
    [activeTab]
  )

  return (
    <div className="space-y-8">
      {/* ---- Tab Switcher ---- */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              'rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200',
              activeTab === tab.key
                ? 'bg-accent/20 text-accent shadow-glow'
                : 'bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary/60'
            )}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* ---- Category Description ---- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {activeData && (
            <p className="text-sm text-muted-foreground">
              <BarChart3Icon className="mr-2 inline-block h-4 w-4 text-accent" />
              {activeData.description}
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ---- Metric Cards Grid ---- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activeData?.metrics.map((metric, index) => (
            <MetricCard
              key={metric.name}
              metric={metric}
              index={index}
              colorClass={categoryColorMap[activeTab] || 'bg-accent/10 text-accent'}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ---- Hard Standard vs Traditional ---- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6"
      >
        <h3 className="font-heading text-lg font-semibold">
          为什么硬标比<span className="gradient-text-cyan">传统好评</span>更可靠？
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">告别「好吃」「不错」「环境好」的主观评价</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 font-medium text-muted-foreground">对比维度</th>
                <th className="pb-3 pr-4 font-medium text-amber-400/70">传统好评</th>
                <th className="pb-3 font-medium text-accent">Kickoff 硬标</th>
              </tr>
            </thead>
            <tbody>
              {hardVsTraditional.map((row, i) => (
                <tr key={row.aspect} className={cn(i !== 0 && 'border-t border-border/50')}>
                  <td className="py-3 pr-4 font-medium text-foreground text-xs">{row.aspect}</td>
                  <td className="py-3 pr-4 text-xs text-muted-foreground">{row.traditional}</td>
                  <td className="py-3 text-xs text-accent/90">{row.hardStandard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
