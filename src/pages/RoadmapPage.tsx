import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import RoadmapTimeline from '@/components/business/RoadmapTimeline'
import RocketIcon from '@/icons/RocketIcon'

export default function RoadmapPage() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 gradient-aurora opacity-30" />

        {/* Page Header */}
        <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15">
                <RocketIcon className="h-6 w-6 text-purple-400" />
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                运营<span className="gradient-text-cyan">路线图</span>
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
                MVP验证 → 商业闭环 → 规模复制，清晰的三阶段发展路径
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative pb-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <RoadmapTimeline />
          </div>
        </section>
      </div>
    </Layout>
  )
}
