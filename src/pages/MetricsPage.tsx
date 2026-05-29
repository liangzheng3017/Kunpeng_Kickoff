import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import MetricsDashboard from '@/components/metrics/MetricsDashboard'
import BarChart3Icon from '@/icons/BarChart3Icon'

export default function MetricsPage() {
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
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15">
                <BarChart3Icon className="h-6 w-6 text-accent" />
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                硬标<span className="gradient-text-cyan">数据库</span>
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
                告别模糊好评，用分贝仪、网速仪、实地测量的<b>硬数据</b>对比住宿与商圈
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="relative pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <MetricsDashboard />
          </div>
        </section>
      </div>
    </Layout>
  )
}
