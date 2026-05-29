import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { mockChecklist, checklistCategories } from '@/data'
import type { ChecklistItem } from '@/types'
import { cn } from '@/lib/utils'
import ChevronDownIcon from '@/icons/ChevronDownIcon'
import CheckIcon from '@/icons/CheckIcon'
import FileTextIcon from '@/icons/FileTextIcon'
import PlaneIcon from '@/icons/PlaneIcon'
import Building2Icon from '@/icons/Building2Icon'
import MapPinIcon from '@/icons/MapPinIcon'
import ClipboardListIcon from '@/icons/ClipboardListIcon'
import CreditCardIcon from '@/icons/CreditCardIcon'
import ShieldIcon from '@/icons/ShieldIcon'
import type { ComponentType } from 'react'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  FileText: FileTextIcon,
  Plane: PlaneIcon,
  Building2: Building2Icon,
  MapPin: MapPinIcon,
  ClipboardList: ClipboardListIcon,
  CreditCard: CreditCardIcon,
  Shield: ShieldIcon,
}

interface ChecklistResultProps {
  isGenerating: boolean
}

function getCategoryIcon(key: string): ComponentType<{ className?: string }> {
  const cat = checklistCategories.find((c) => c.key === key)
  if (cat && iconMap[cat.icon]) return iconMap[cat.icon]
  return FileTextIcon
}

const categoryMeta = [
  { key: 'visa', label: '签证准备', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { key: 'flight', label: '机票行程', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  { key: 'housing', label: '住宿安排', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { key: 'arrival', label: '落地必办', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
]

const priorityConfig = {
  high: { label: '紧急', className: 'bg-red-500/15 text-red-400 border-red-500/30' },
  medium: { label: '重要', className: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  low: { label: '可选', className: 'bg-slate-500/15 text-slate-400 border-slate-500/30' },
}

function ChecklistCard({ item, index }: { item: ChecklistItem; index: number }) {
  const [expanded, setExpanded] = useState(false)

  const priority = priorityConfig[item.priority]
  const IconComp = item.iconName ? iconMap[item.iconName] : getCategoryIcon(item.category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card rounded-xl p-4 transition-all duration-200 hover:shadow-card-hover"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start gap-3 text-left"
      >
        {IconComp && (
          <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <IconComp className="h-4 w-4" />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-medium text-foreground truncate">{item.title}</h4>
            <span
              className={cn(
                'flex-shrink-0 rounded-md border px-1.5 py-0.5 text-[10px] font-medium',
                priority.className
              )}
            >
              {priority.label}
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.description}</p>
          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground/70">
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-3 w-3" />
              {item.deadline}
            </span>
          </div>
        </div>
        <ChevronDownIcon
          className={cn(
            'mt-1.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform',
            expanded && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {expanded && item.tips && item.tips.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="ml-11 mt-3 space-y-1.5 border-t border-border pt-3">
              {item.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckIcon className="mt-0.5 h-3 w-3 flex-shrink-0 text-accent" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

export default function ChecklistResult({ isGenerating }: ChecklistResultProps) {
  if (isGenerating) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20"
      >
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-2 border-accent/20 border-t-accent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-accent animate-ping" />
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">AI 正在分析你的需求，生成个性化清单...</p>
      </motion.div>
    )
  }

  const grouped = checklistCategories.map(({ key }) => ({
    key,
    items: mockChecklist.filter((item) => item.category === key),
  }))

  const totalItems = mockChecklist.length
  const highPriorityItems = mockChecklist.filter((i) => i.priority === 'high').length

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* ---- Result Header ---- */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-heading text-2xl font-semibold">你的行前 Checklist</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            共 {totalItems} 项任务 · {highPriorityItems} 项紧急
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">总体进度</span>
          <div className="h-2 w-32 overflow-hidden rounded-full bg-secondary">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-accent to-blue-500"
            />
          </div>
          <span className="text-xs font-semibold text-accent">65%</span>
        </div>
      </div>

      {/* ---- Checklist by Category ---- */}
      {grouped.map(({ key, items }) => {
        const meta = categoryMeta.find((m) => m.key === key)!
        return (
          <div key={key} className="space-y-3">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'rounded-lg border px-3 py-1 text-xs font-semibold',
                  meta.color
                )}
              >
                {meta.label}
              </span>
              <span className="text-xs text-muted-foreground">{items.length} 项</span>
            </div>
            <div className="space-y-2">
              {items.map((item, index) => (
                <ChecklistCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        )
      })}
    </motion.div>
  )
}
