import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PlaneIcon from '@/icons/PlaneIcon'
import TrendingUpIcon from '@/icons/TrendingUpIcon'
import FileTextIcon from '@/icons/FileTextIcon'
import RadioIcon from '@/icons/RadioIcon'
import UsersIcon from '@/icons/UsersIcon'
import HeartIcon from '@/icons/HeartIcon'
import ArrowRightIcon from '@/icons/ArrowRightIcon'

// =========================================================================
// Data
// =========================================================================

const FEATURES = [
  {
    icon: PlaneIcon,
    title: 'AI 行程规划',
    description: '输入学校和预算，AI 自动生成签证→机票→住宿→落地必办的完整 Checklist',
    link: '/planner',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    iconBg: 'bg-cyan-500/15',
  },
  {
    icon: TrendingUpIcon,
    title: '硬标数据库',
    description: '通勤时长、网速实测、噪音分贝——用客观数据替代主观评价',
    link: '/metrics',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    iconBg: 'bg-emerald-500/15',
  },
  {
    icon: FileTextIcon,
    title: '文件翻译',
    description: 'OCR 识别 + AI 翻译租房合同，自动提取隐形条款与风险提示',
    link: '/metrics',
    gradient: 'from-violet-500/20 to-purple-500/10',
    iconBg: 'bg-violet-500/15',
  },
  {
    icon: RadioIcon,
    title: '避雷雷达',
    description: 'LBS 地图 + 众包预警：诈骗套路、不安全区域、倒闭商户实时标记',
    link: '/radar',
    gradient: 'from-red-500/20 to-orange-500/10',
    iconBg: 'bg-red-500/15',
  },
  {
    icon: UsersIcon,
    title: '个性标注',
    description: '"支持支付宝""分量足""隔音差"——用软标标签找到最对味的住所',
    link: '/community',
    gradient: 'from-blue-500/20 to-indigo-500/10',
    iconBg: 'bg-blue-500/15',
  },
  {
    icon: HeartIcon,
    title: '同频搭子',
    description: '同校、同航班、同公寓——智能匹配让留学生涯不孤单',
    link: '/community',
    gradient: 'from-pink-500/20 to-rose-500/10',
    iconBg: 'bg-pink-500/15',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// =========================================================================
// Component
// =========================================================================

export default function FeatureOverview() {
  return (
    <section id="features" className="relative py-20 sm:py-28 scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(37,99,235,0.04),transparent)]" />

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
            六大功能模块，<span className="gradient-text-cyan">一站式覆盖行前全流程</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-balance text-muted-foreground">
            从规划到出发，每个环节都有 Kickoff 陪伴
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map(({ icon: Icon, title, description, link, gradient, iconBg }) => (
            <motion.div key={title} variants={cardVariants}>
              <Link
                to={link}
                className="group relative block overflow-hidden rounded-2xl transition-all duration-300"
              >
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative glass-card rounded-2xl p-6 transition-shadow duration-300 group-hover:shadow-card-hover">
                  {/* Icon */}
                  <div
                    className={`mb-4 inline-flex size-10 items-center justify-center rounded-xl ${iconBg} ring-1 ring-border/20`}
                  >
                    <Icon size={20} className="text-foreground" />
                  </div>

                  {/* Title + Arrow */}
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="font-heading text-lg font-medium text-foreground">
                      {title}
                    </h3>
                    <ArrowRightIcon
                      size={16}
                      className="mt-1 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/planner"
            className="inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-all hover:bg-accent/20 hover:border-accent/50"
          >
            <span>查看完整功能介绍</span>
            <ArrowRightIcon size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
