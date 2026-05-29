import { motion } from 'framer-motion'
import type { MetricItem } from '@/types'
import { cn } from '@/lib/utils'
import MapPinIcon from '@/icons/MapPinIcon'
import ZapIcon from '@/icons/ZapIcon'
import ActivityIcon from '@/icons/ActivityIcon'
import DollarSignIcon from '@/icons/DollarSignIcon'
import StarIcon from '@/icons/StarIcon'
import ShieldIcon from '@/icons/ShieldIcon'
import MoonIcon from '@/icons/MoonIcon'
import HeartIcon from '@/icons/HeartIcon'
import GlobeIcon from '@/icons/GlobeIcon'
import type { ComponentType } from 'react'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  MapPin: MapPinIcon,
  Zap: ZapIcon,
  Activity: ActivityIcon,
  DollarSign: DollarSignIcon,
  Star: StarIcon,
  Shield: ShieldIcon,
  Moon: MoonIcon,
  Heart: HeartIcon,
  Globe: GlobeIcon,
  Thermometer: ActivityIcon, // fallback
}

interface MetricCardProps {
  metric: MetricItem
  index: number
  colorClass: string
}

export default function MetricCard({ metric, index, colorClass }: MetricCardProps) {
  const IconComp = metric.iconName ? iconMap[metric.iconName] : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <div className="mb-3 flex items-start justify-between">
        {IconComp && (
          <span className={cn('flex h-9 w-9 items-center justify-center rounded-xl', colorClass)}>
            <IconComp className="h-4.5 w-4.5" />
          </span>
        )}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.06 + 0.2 }}
          className="rounded-lg bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent"
        >
          {metric.value}
        </motion.div>
      </div>
      <h4 className="font-heading text-sm font-semibold text-foreground">{metric.name}</h4>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
        {metric.standard}
      </p>
      {metric.description && (
        <div className="mt-3 rounded-lg border border-border/50 bg-secondary/20 px-3 py-2">
          <p className="text-[11px] leading-relaxed text-muted-foreground/80">
            {metric.description}
          </p>
        </div>
      )}
    </motion.div>
  )
}
