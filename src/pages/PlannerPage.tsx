import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import PlannerForm from '@/components/planner/PlannerForm'
import ChecklistResult from '@/components/planner/ChecklistResult'
import { defaultPlannerInput, type PlannerInput } from '@/data'
import SparklesIcon from '@/icons/SparklesIcon'

export default function PlannerPage() {
  const [input, setInput] = useState<PlannerInput>({ ...defaultPlannerInput })
  const [isGenerating, setIsGenerating] = useState(false)
  const [hasGenerated, setHasGenerated] = useState(false)

  const handleGenerate = useCallback(() => {
    setIsGenerating(true)
    // Simulate AI processing delay
    setTimeout(() => {
      setIsGenerating(false)
      setHasGenerated(true)
    }, 2000)
  }, [])

  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Background decoration */}
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
                <SparklesIcon className="h-6 w-6 text-accent" />
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                AI{' '}
                <span className="gradient-text-cyan">行程规划</span>
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground text-sm sm:text-base">
                输入学校信息和生活习惯，AI 自动生成签证、机票、住宿、落地必备的全流程检查清单
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content — Two Column Layout */}
        <section className="relative pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: Form */}
              <div>
                <PlannerForm
                  input={input}
                  onChange={setInput}
                  onSubmit={handleGenerate}
                  isGenerating={isGenerating}
                />
              </div>

              {/* Right: Result */}
              <div className="lg:border-l lg:border-border lg:pl-12">
                {hasGenerated ? (
                  <ChecklistResult isGenerating={isGenerating} />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex h-full flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/50">
                      <ClipboardListIcon className="h-8 w-8 text-muted-foreground/50" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      填写左侧表单，点击「开始生成」按钮<br />
                      AI 将为你定制专属行前清单
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

function ClipboardListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 14h6M9 18h6" />
    </svg>
  )
}
