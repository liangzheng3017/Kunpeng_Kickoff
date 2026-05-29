import { motion } from 'framer-motion'
import type { DangerWarning } from '@/types'
import { cn } from '@/lib/utils'
import ShieldIcon from '@/icons/ShieldIcon'
import BellIcon from '@/icons/BellIcon'
import MapPinIcon from '@/icons/MapPinIcon'
import ChevronDownIcon from '@/icons/ChevronDownIcon'
import { useState } from 'react'

const typeConfig: Record<string, { label: string; className: string }> = {
  scam: { label: '诈骗', className: 'bg-red-500/15 text-red-400 border-red-500/30' },
  unsafe_area: { label: '不安全区域', className: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  closed_business: { label: '已关闭', className: 'bg-slate-500/15 text-slate-400 border-slate-500/30' },
  fraud: { label: '欺诈', className: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
}

const riskLevelColors = {
  high: 'bg-red-500',
  medium: 'bg-amber-500',
  low: 'bg-emerald-500',
}

interface WarningCardProps {
  warning: DangerWarning
  index: number
}

export default function WarningCard({ warning, index }: WarningCardProps) {
  const [expanded, setExpanded] = useState(false)
  const type = typeConfig[warning.type] || typeConfig.scam

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-card-hover"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start gap-3 text-left"
      >
        {/* Risk indicator */}
        <div className="relative mt-0.5 flex-shrink-0">
          <span className={cn('flex h-10 w-10 items-center justify-center rounded-xl', type.className)}>
            {warning.type === 'unsafe_area' ? (
              <MapPinIcon className="h-5 w-5" />
            ) : (
              <ShieldIcon className="h-5 w-5" />
            )}
          </span>
          <span className={cn(
            'absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-background',
            riskLevelColors[warning.riskLevel]
          )} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-sm font-semibold text-foreground">{warning.title}</h4>
            <span className={cn('rounded-md border px-1.5 py-0.5 text-[10px] font-medium', type.className)}>
              {type.label}
            </span>
            <span className={cn(
              'rounded-md px-1.5 py-0.5 text-[10px] font-medium',
              warning.riskLevel === 'high'
                ? 'bg-red-500/15 text-red-400'
                : 'bg-amber-500/15 text-amber-400'
            )}>
              {warning.riskLevel === 'high' ? '高风险' : '中风险'}
            </span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {warning.description}
          </p>
          {warning.location && (
            <div className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground/70">
              <MapPinIcon className="h-3 w-3" />
              {warning.location}
            </div>
          )}
        </div>

        <ChevronDownIcon
          className={cn(
            'mt-1.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200',
            expanded && 'rotate-180'
          )}
        />
      </button>

      {/* Expanded tips */}
      {expanded && warning.tips.length > 0 && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="ml-13 mt-3 space-y-2 border-t border-border pt-3">
            {warning.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <BellIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
