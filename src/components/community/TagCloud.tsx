import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { softTags } from '@/data'
import { cn } from '@/lib/utils'
import SearchIcon from '@/icons/SearchIcon'

const categoryLabels: Record<string, string> = {
  food: '餐饮', transport: '交通', service: '服务', environment: '环境', safety: '安全', social: '社交',
}

const sentimentConfig = {
  positive: 'hover:text-emerald-400 hover:border-emerald-500/40',
  negative: 'hover:text-red-400 hover:border-red-500/40',
  neutral: 'hover:text-slate-400 hover:border-slate-500/40',
}

export default function TagCloud() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [search, setSearch] = useState('')

  const categories = useMemo(() => {
    const cats = new Set(softTags.map((t) => t.category))
    return ['all', ...Array.from(cats)]
  }, [])

  const filteredTags = useMemo(() => {
    return softTags.filter((tag) => {
      const catMatch = selectedCategory === 'all' || tag.category === selectedCategory
      const searchMatch = !search || tag.name.includes(search)
      return catMatch && searchMatch
    })
  }, [selectedCategory, search])

  const maxCount = Math.max(...softTags.map((t) => t.count))

  return (
    <div className="space-y-4">
      {/* Search & filter */}
      <div className="flex flex-wrap gap-2">
        <div className="relative flex-1 min-w-[160px]">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索标签..."
            className="w-full rounded-lg border border-border bg-secondary/40 py-2 pl-9 pr-3 text-sm
                       text-foreground outline-none transition-colors focus:border-accent/50"
          />
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              'rounded-lg px-3 py-2 text-xs font-medium transition-all',
              selectedCategory === cat
                ? 'bg-accent/20 text-accent'
                : 'bg-secondary/40 text-muted-foreground hover:text-foreground'
            )}
          >
            {cat === 'all' ? '全部' : categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Tag cloud */}
      <motion.div
        layout
        className="flex flex-wrap gap-3"
      >
        {filteredTags.map((tag, i) => {
          const size = tag.count / maxCount
          const fontSize = 0.7 + size * 0.5 // 0.7rem ~ 1.2rem
          const padding = 0.25 + size * 0.5 // 0.25rem ~ 0.75rem
          const opacity = 0.5 + size * 0.5

          return (
            <motion.div
              key={tag.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              style={{ fontSize: `${fontSize}rem`, padding: `${padding}rem ${padding * 2}rem` }}
              className={cn(
                'cursor-default rounded-xl border bg-secondary/30 transition-all duration-200',
                'hover:-translate-y-0.5 hover:shadow-card-hover',
                tag.sentiment === 'positive'
                  ? 'border-emerald-500/20 text-emerald-300/80 hover:border-emerald-500/40'
                  : tag.sentiment === 'negative'
                    ? 'border-red-500/20 text-red-300/80 hover:border-red-500/40'
                    : 'border-slate-500/20 text-slate-300/80 hover:border-slate-500/40',
                sentimentConfig[tag.sentiment]
              )}
            >
              {tag.name}
              <span className="ml-1.5 text-[0.65em] opacity-50">{tag.count}</span>
            </motion.div>
          )
        })}
      </motion.div>

      {filteredTags.length === 0 && (
        <div className="py-8 text-center text-sm text-muted-foreground">
          没有找到匹配的标签
        </div>
      )}
    </div>
  )
}
