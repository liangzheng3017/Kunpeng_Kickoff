import { motion } from 'framer-motion'
import { buddyMatches } from '@/data'
import { cn } from '@/lib/utils'
import UsersIcon from '@/icons/UsersIcon'
import MapPinIcon from '@/icons/MapPinIcon'
import CalendarIcon2 from '@/icons/CalendarIcon'
import GraduationCapIcon from '@/icons/GraduationCapIcon'

export default function BuddyMatch() {
  return (
    <div className="space-y-4">
      {buddyMatches.map((buddy, i) => (
        <motion.div
          key={buddy.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.08 }}
          className="glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-card-hover"
        >
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-blue-500/30 text-lg font-bold text-accent">
              {buddy.name.charAt(0)}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-heading text-sm font-semibold">{buddy.name}</h4>
                <span
                  className={cn(
                    'rounded-md px-2 py-0.5 text-[10px] font-semibold',
                    buddy.matchScore >= 90
                      ? 'bg-emerald-500/15 text-emerald-400'
                      : buddy.matchScore >= 80
                        ? 'bg-blue-500/15 text-blue-400'
                        : 'bg-amber-500/15 text-amber-400'
                  )}
                >
                  {buddy.matchScore}% 匹配
                </span>
              </div>

              <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <GraduationCapIcon className="h-3 w-3" />
                  {buddy.school} → {buddy.destination}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarIcon2 className="h-3.5 w-3.5" />
                  {buddy.departureDate}
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {buddy.bio}
              </p>

              {/* Common tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {buddy.commonTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-accent/20 bg-accent/5 px-2 py-0.5 text-[10px] text-accent/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
