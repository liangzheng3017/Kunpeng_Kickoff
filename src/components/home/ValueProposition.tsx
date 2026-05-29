import { motion } from 'framer-motion'
import ShieldIcon from '@/icons/ShieldIcon'
import StarIcon from '@/icons/StarIcon'
import SparklesIcon from '@/icons/SparklesIcon'

// =========================================================================
// Data
// =========================================================================

const VALUE_PROPS = [
  {
    icon: ShieldIcon,
    title: '硬标定基',
    subtitle: 'Hard Metrics',
    description: '用客观数据说话。通勤时长、网速实测、噪音分贝——每项指标都有量化标准，拒绝"还不错"的模糊评价。',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: StarIcon,
    title: '软标选配',
    subtitle: 'Soft Tags',
    description: '"支持支付宝""分量足""隔音差"——用标签快速匹配你的个性偏好。每个人的留学需求都独一无二。',
    gradient: 'from-violet-500/20 to-pink-500/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: SparklesIcon,
    title: 'AI 结构化',
    subtitle: 'AI Powered',
    description: 'AI 将碎片信息整理成可执行的 Checklist，从签证到落地必办，像旅行向导一样陪伴每一步。',
    gradient: 'from-cyan-500/20 to-emerald-500/10',
    iconColor: 'text-accent',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// =========================================================================
// Component
// =========================================================================

export default function ValueProposition() {
  return (
    <section className="relative py-20 sm:py-28">
      {/* Section background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(6,182,212,0.04),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            为什么选择{' '}
            <span className="gradient-text-cyan">Kickoff</span>？
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-balance text-muted-foreground">
            不是又一个"点评平台"，而是一套完整的行前决策系统
          </p>
        </motion.div>

        {/* Three Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {VALUE_PROPS.map(({ icon: Icon, title, subtitle, description, gradient, iconColor }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300"
            >
              {/* Gradient border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative glass-card rounded-2xl p-6 sm:p-8">
                {/* Icon */}
                <div
                  className={`mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-background/80 ring-1 ring-border/30`}
                >
                  <Icon size={24} className={iconColor} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-medium">
                  {title}
                </h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {subtitle}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
