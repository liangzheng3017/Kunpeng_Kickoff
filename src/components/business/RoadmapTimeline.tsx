import { motion } from 'framer-motion'
import { roadmapPhases } from '@/data'
import { cn } from '@/lib/utils'
import CheckIcon from '@/icons/CheckIcon'
import RocketIcon from '@/icons/RocketIcon'
import PlayIcon from '@/icons/PlayIcon'

const statusConfig = {
  completed: { label: '已完成', className: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30', icon: CheckIcon },
  in_progress: { label: '进行中', className: 'bg-accent/15 text-accent border-accent/30', icon: PlayIcon },
  planned: { label: '规划中', className: 'bg-slate-500/15 text-slate-400 border-slate-500/30', icon: RocketIcon },
}

export default function RoadmapTimeline() {
  return (
    <div className="relative space-y-0">
      {/* Connecting line */}
      <div className="absolute left-[23px] top-10 bottom-10 w-px bg-gradient-to-b from-emerald-500/50 via-accent/50 to-slate-500/20 lg:left-1/2 lg:-translate-x-px" />

      {roadmapPhases.map((phase, i) => {
        const status = statusConfig[phase.status]
        const StatusIcon = status.icon
        const isLeft = i % 2 === 0

        return (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pb-12 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-[16px] top-8 z-10 lg:left-1/2 lg:-translate-x-1/2">
              <span
                className={cn(
                  'flex h-[15px] w-[15px] items-center justify-center rounded-full border-2',
                  phase.status === 'completed'
                    ? 'border-emerald-500 bg-emerald-500/20'
                    : phase.status === 'in_progress'
                      ? 'border-accent bg-accent/20 animate-pulse-glow'
                      : 'border-slate-500 bg-slate-500/20'
                )}
              >
                {phase.status === 'completed' && <CheckIcon className="h-2.5 w-2.5 text-emerald-500" />}
              </span>
            </div>

            {/* Content card */}
            <div className={cn(
              'ml-12 lg:ml-0',
              isLeft ? 'lg:mr-[calc(50%+2.5rem)] lg:pr-8' : 'lg:ml-[calc(50%+2.5rem)] lg:pl-8'
            )}>
              <div className={cn(
                'glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-card-hover',
                phase.status === 'in_progress' && 'ring-1 ring-accent/30'
              )}>
                {/* Phase header */}
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className={cn(
                    'rounded-md border px-2.5 py-1 text-[10px] font-bold',
                    status.className
                  )}>
                    <StatusIcon className="mr-1 inline h-3 w-3" />
                    Phase {phase.phase}
                  </span>
                  <span
                    className={cn(
                      'rounded-md border px-2.5 py-1 text-[10px] font-medium',
                      status.className
                    )}
                  >
                    {status.label}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {phase.period}
                  </span>
                </div>

                <h3 className={cn(
                  'font-heading text-lg font-semibold',
                  phase.status === 'completed' ? 'text-emerald-400' :
                  phase.status === 'in_progress' ? 'text-accent' : 'text-foreground'
                )}>
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>

                {/* Milestones */}
                <div className="mt-4 space-y-2">
                  {phase.milestones.map((milestone, mi) => (
                    <motion.div
                      key={mi}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.15 + mi * 0.08 }}
                      className="flex items-start gap-2.5 rounded-lg border border-border/40 bg-secondary/20 px-3.5 py-2.5"
                    >
                      <CheckIcon
                        className={cn(
                          'mt-0.5 h-3.5 w-3.5 flex-shrink-0',
                          phase.status === 'completed' ? 'text-emerald-500' :
                          phase.status === 'in_progress' ? 'text-accent' : 'text-muted-foreground'
                        )}
                      />
                      <span className="text-xs leading-snug text-muted-foreground">{milestone}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
