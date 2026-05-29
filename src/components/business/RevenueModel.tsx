import { motion } from 'framer-motion'
import { revenueStreams, unitEconomics, competitorComparisons } from '@/data'
import { cn } from '@/lib/utils'
import PieChartIcon from '@/icons/PieChartIcon'
import DollarSignIcon from '@/icons/DollarSignIcon'
import TrendingUpIcon from '@/icons/TrendingUpIcon'
import BarChart3Icon from '@/icons/BarChart3Icon'
import UserIcon from '@/icons/UserIcon'
import Building2Icon from '@/icons/Building2Icon'
import FileTextIcon from '@/icons/FileTextIcon'
import type { ComponentType } from 'react'

const streamIcons: Record<string, ComponentType<{ className?: string }>> = {
  User: UserIcon,
  Building2: Building2Icon,
  BarChart3: BarChart3Icon,
  FileText: FileTextIcon,
  Megaphone: PieChartIcon,
}

function formatCurrency(n: number): string {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`
  return `$${n}`
}

export default function RevenueModel() {
  return (
    <div className="space-y-10">
      {/* ---- Revenue Streams ---- */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15">
            <DollarSignIcon className="h-5 w-5 text-emerald-400" />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold">三边收入模型</h3>
            <p className="text-xs text-muted-foreground">B2B2C 多边生态，多引擎驱动增长</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {revenueStreams.map((stream, i) => {
            const Icon = stream.iconName ? streamIcons[stream.iconName] : DollarSignIcon
            return (
              <motion.div
                key={stream.source}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="group glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-card-hover"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    {Icon && <Icon className="h-4.5 w-4.5" />}
                  </span>
                  <span className="rounded-lg bg-accent/15 px-2.5 py-1 text-xs font-bold text-accent">
                    {stream.estimatedShare}%
                  </span>
                </div>
                <h4 className="font-heading text-sm font-semibold">{stream.source}</h4>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  付费方：{stream.payer}
                </p>
                <div className="mt-3 space-y-2 border-t border-border/50 pt-3">
                  <div className="flex items-start gap-2">
                    <TrendingUpIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                    <p className="text-xs leading-relaxed text-muted-foreground">{stream.valueProposition}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSignIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent" />
                    <p className="text-xs leading-relaxed text-muted-foreground">{stream.profitPoint}</p>
                  </div>
                </div>

                {/* Visual share bar */}
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stream.estimatedShare}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.07 + 0.3 }}
                    className={cn(
                      'h-full rounded-full',
                      i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-blue-500' : i === 2 ? 'bg-purple-500' : 'bg-accent'
                    )}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* ---- Unit Economics ---- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/15">
            <BarChart3Icon className="h-5 w-5 text-purple-400" />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold">单位经济模型</h3>
            <p className="text-xs text-muted-foreground">核心运营指标（模拟数据）</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { label: 'LTV', value: formatCurrency(unitEconomics.ltv), sub: '用户生命周期价值' },
            { label: 'CAC', value: formatCurrency(unitEconomics.cac), sub: '用户获取成本' },
            { label: 'LTV/CAC', value: `${unitEconomics.ltvCacRatio}x`, sub: '效率比率' },
            { label: '毛利率', value: `${Math.round(unitEconomics.grossMargin * 100)}%`, sub: '综合毛利率' },
            { label: '月活', value: `${(unitEconomics.monthlyActiveUsers / 1000).toFixed(0)}K`, sub: '月活跃用户' },
            { label: 'ARPU', value: formatCurrency(unitEconomics.arpu), sub: '每用户月均收入' },
            { label: '付费率', value: `${Math.round(unitEconomics.payConversion * 100)}%`, sub: '付费转化率' },
            { label: '留存率', value: `${Math.round(unitEconomics.retentionRate * 100)}%`, sub: '年度留存率' },
            { label: '使用时长', value: `${unitEconomics.avgSessionMinutes}min`, sub: '平均使用时长' },
            { label: '种子用户', value: '3,200+', sub: 'Beta版注册用户' },
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-xl border border-border/50 bg-secondary/20 p-4 text-center transition-colors hover:border-accent/30"
            >
              <div className="text-lg font-bold text-accent">{metric.value}</div>
              <div className="mt-0.5 text-xs font-medium text-foreground">{metric.label}</div>
              <div className="mt-0.5 text-[10px] text-muted-foreground">{metric.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ---- Competitor Comparison ---- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15">
            <BarChart3Icon className="h-5 w-5 text-amber-400" />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold">竞品对比</h3>
            <p className="text-xs text-muted-foreground">vs 小红书 / 大众点评 / 学旅家</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 font-medium text-muted-foreground">对比维度</th>
                <th className="pb-3 pr-4 font-medium text-accent">
                  <span className="rounded-md bg-accent/10 px-2 py-1">Kickoff</span>
                </th>
                <th className="pb-3 pr-4 font-medium text-muted-foreground">小红书</th>
                <th className="pb-3 pr-4 font-medium text-muted-foreground">大众点评</th>
                <th className="pb-3 font-medium text-muted-foreground">学旅家</th>
              </tr>
            </thead>
            <tbody>
              {competitorComparisons.map((row, i) => (
                <tr key={row.feature} className={cn(i !== 0 && 'border-t border-border/50')}>
                  <td className="py-3 pr-4 font-medium text-foreground text-xs">{row.feature}</td>
                  <td className="py-3 pr-4 text-accent/90 text-xs">{row.kickoff}</td>
                  <td className="py-3 pr-4 text-muted-foreground/70 text-xs">{row.xiaohongshu}</td>
                  <td className="py-3 pr-4 text-muted-foreground/70 text-xs">{row.dianping}</td>
                  <td className="py-3 text-muted-foreground/70 text-xs">{row.xuelvjia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
