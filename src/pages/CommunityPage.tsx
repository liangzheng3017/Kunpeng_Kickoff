import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import TagCloud from '@/components/community/TagCloud'
import BuddyMatch from '@/components/community/BuddyMatch'
import QASection from '@/components/community/QASection'
import UsersIcon from '@/icons/UsersIcon'
import { cn } from '@/lib/utils'

const tabItems = [
  { key: 'tags', label: '标签云', description: '软标数据可视化' },
  { key: 'buddies', label: '搭子匹配', description: '同频伙伴智能推荐' },
  { key: 'qa', label: '本地通问答', description: '学长学姐经验分享' },
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('tags')

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
                <UsersIcon className="h-6 w-6 text-purple-400" />
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                社区<span className="gradient-text-cyan">层</span>
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground">
                个性化标签 + 同頻搭子匹配 + 本地通问答，找到属于你的留学社群
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="relative pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Tab Switcher */}
            <div className="mb-8 flex flex-wrap gap-3">
              {tabItems.map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'rounded-xl px-5 py-3 text-left transition-all duration-200',
                    activeTab === tab.key
                      ? 'bg-accent/15 border border-accent/30 shadow-glow'
                      : 'bg-secondary/30 border border-border/50 hover:border-accent/20'
                  )}
                >
                  <div className={cn(
                    'text-sm font-semibold',
                    activeTab === tab.key ? 'text-accent' : 'text-foreground'
                  )}>
                    {tab.label}
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">{tab.description}</div>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'tags' && <TagCloud />}
                {activeTab === 'buddies' && <BuddyMatch />}
                {activeTab === 'qa' && <QASection />}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </Layout>
  )
}
