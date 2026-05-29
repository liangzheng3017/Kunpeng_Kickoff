import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { qaItems } from '@/data'
import { cn } from '@/lib/utils'
import ChevronDownIcon from '@/icons/ChevronDownIcon'
import ThumbsUpIcon from '@/icons/ThumbsUpIcon'
import MessageCircleIcon from '@/icons/MessageCircleIcon'
import UserIcon from '@/icons/UserIcon'

function formatLikes(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return n.toString()
}

export default function QASection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="space-y-3">
      {qaItems.map((qa, i) => {
        const isExpanded = expandedId === qa.id

        return (
          <motion.div
            key={qa.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="glass-card overflow-hidden rounded-2xl transition-all duration-200 hover:shadow-card-hover"
          >
            <button
              onClick={() => setExpandedId(isExpanded ? null : qa.id)}
              className="flex w-full items-start gap-3 p-5 text-left"
            >
              <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MessageCircleIcon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-medium text-foreground leading-snug">{qa.question}</h4>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <UserIcon className="h-3 w-3" />
                    {qa.author}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <ThumbsUpIcon className="h-3 w-3" />
                    {formatLikes(qa.likes)}
                  </span>
                  <span>{qa.date}</span>
                </div>
              </div>
              <ChevronDownIcon
                className={cn(
                  'mt-1.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200',
                  isExpanded && 'rotate-180'
                )}
              />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-border px-5 pb-5 pt-4">
                    <div className="flex gap-3">
                      <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <UserIcon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm leading-relaxed text-muted-foreground">{qa.answer}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {qa.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-border bg-secondary/30 px-2 py-0.5 text-[10px] text-muted-foreground"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
