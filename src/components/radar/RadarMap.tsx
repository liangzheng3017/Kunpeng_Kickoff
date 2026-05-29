import { motion } from 'framer-motion'
import { riskZones, scamPhrases } from '@/data'
import { cn } from '@/lib/utils'
import TargetIcon from '@/icons/TargetIcon'
import MapPinIcon from '@/icons/MapPinIcon'

const continentColors: Record<string, string> = {
  '美国': 'from-red-500/60 to-red-500/10',
  '英国': 'from-amber-500/60 to-amber-500/10',
  '澳大利亚': 'from-emerald-500/60 to-emerald-500/10',
  '加拿大': 'from-blue-500/60 to-blue-500/10',
}

export default function RadarMap() {
  const maxRisk = Math.max(...riskZones.map((z) => z.riskLevel))

  return (
    <div className="space-y-8">
      {/* ---- Risk Zone Heatmap ---- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/15">
            <TargetIcon className="h-5 w-5 text-red-400" />
          </span>
          <div>
            <h3 className="font-heading text-base font-semibold">全球风险热力区域</h3>
            <p className="text-xs text-muted-foreground">基于众包数据的高风险区域预警</p>
          </div>
        </div>

        <div className="space-y-3">
          {riskZones.map((zone, i) => {
            const widthPercent = (zone.riskLevel / maxRisk) * 100
            const gradient = continentColors[zone.country] || 'from-slate-500/60 to-slate-500/10'

            return (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="font-medium text-foreground">{zone.name}</span>
                    <span className="text-muted-foreground/60">{zone.city}</span>
                  </div>
                  <span className={cn(
                    'rounded-md px-2 py-0.5 text-[10px] font-semibold',
                    zone.riskLevel >= 80 ? 'bg-red-500/20 text-red-400' :
                    zone.riskLevel >= 60 ? 'bg-amber-500/20 text-amber-400' :
                    'bg-emerald-500/20 text-emerald-400'
                  )}>
                    风险指数 {zone.riskLevel}
                  </span>
                </div>

                {/* Risk bar */}
                <div className="h-2.5 overflow-hidden rounded-full bg-secondary/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${widthPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.06 + 0.2, ease: 'easeOut' }}
                    className={cn('h-full rounded-full bg-gradient-to-r', gradient)}
                  />
                </div>

                <div className="flex justify-between text-[10px] text-muted-foreground/50">
                  <span>{zone.riskType} · {zone.description}</span>
                  <span>{zone.incidents} 起预警</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* ---- Scam Phrases Library ---- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/15">
            <TargetIcon className="h-5 w-5 text-red-400" />
          </span>
          <div>
            <h3 className="font-heading text-base font-semibold">诈骗话术库</h3>
            <p className="text-xs text-muted-foreground">常见诈骗开场白，遇到立即挂断！</p>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {scamPhrases.map((phrase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-xl border border-red-500/15 bg-red-500/5 px-4 py-3 text-xs leading-relaxed text-muted-foreground 
                         transition-colors hover:border-red-500/25"
            >
              " {phrase} "
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
