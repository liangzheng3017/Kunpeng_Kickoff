import { useState } from 'react'
import { motion } from 'framer-motion'
import { schoolOptions, habitOptions, type PlannerInput } from '@/data'
import { cn } from '@/lib/utils'
import SearchIcon from '@/icons/SearchIcon'
import ChevronDownIcon from '@/icons/ChevronDownIcon'
import CheckIcon from '@/icons/CheckIcon'
import GraduationCapIcon from '@/icons/GraduationCapIcon'
import DollarSignIcon from '@/icons/DollarSignIcon'
import CalendarIcon from '@/icons/CalendarIcon'

interface PlannerFormProps {
  input: PlannerInput
  onChange: (input: PlannerInput) => void
  onSubmit: () => void
  isGenerating: boolean
}

export default function PlannerForm({ input, onChange, isGenerating, onSubmit }: PlannerFormProps) {
  const [schoolSearch, setSchoolSearch] = useState('')
  const [showSchoolDropdown, setShowSchoolDropdown] = useState(false)

  const filteredSchools = schoolOptions.filter((s) =>
    s.label.toLowerCase().includes(schoolSearch.toLowerCase())
  )

  const selectedSchool = schoolOptions.find((s) => s.label === input.targetSchool)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* ---- Section Header ---- */}
      <div>
        <h2 className="font-heading text-2xl font-semibold">定制你的行程</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          填写基本信息，AI 将为你生成专属行前清单
        </p>
      </div>

      {/* ---- School Selector ---- */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <GraduationCapIcon className="h-4 w-4 text-accent" />
          目标学校
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <SearchIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            value={schoolSearch}
            onChange={(e) => {
              setSchoolSearch(e.target.value)
              setShowSchoolDropdown(true)
            }}
            onFocus={() => setShowSchoolDropdown(true)}
            onBlur={() => setTimeout(() => setShowSchoolDropdown(false), 200)}
            placeholder="搜索学校名称..."
            className="w-full rounded-xl border border-border bg-secondary/40 py-3 pl-10 pr-10 text-sm 
                       text-foreground placeholder:text-muted-foreground/50 outline-none
                       transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
          />
          <ChevronDownIcon
            className={cn(
              'pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-transform',
              showSchoolDropdown && 'rotate-180'
            )}
          />
          {showSchoolDropdown && filteredSchools.length > 0 && (
            <div className="absolute z-20 mt-1 max-h-52 w-full overflow-y-auto rounded-xl border border-border 
                           bg-popover/95 backdrop-blur-xl shadow-lg">
              {filteredSchools.map((school) => (
                <button
                  key={school.value}
                  onClick={() => {
                    onChange({ ...input, targetSchool: school.label, targetCountry: school.country, targetCity: school.city })
                    setSchoolSearch(school.label)
                    setShowSchoolDropdown(false)
                  }}
                  className={cn(
                    'flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-accent/10',
                    input.targetSchool === school.label && 'bg-accent/10 text-accent'
                  )}
                >
                  <span className="text-foreground">{school.label}</span>
                  <span className="text-xs text-muted-foreground">{school.city}, {school.country}</span>
                  {input.targetSchool === school.label && (
                    <CheckIcon className="ml-2 h-4 w-4 text-accent" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
        {selectedSchool && (
          <p className="text-xs text-muted-foreground">
            {selectedSchool.city}, {selectedSchool.country}
          </p>
        )}
      </div>

      {/* ---- Budget Slider ---- */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <DollarSignIcon className="h-4 w-4 text-accent" />
          月预算（RMB）
        </label>
        <div className="space-y-3">
          <input
            type="range"
            min={3000}
            max={20000}
            step={500}
            value={input.budget}
            onChange={(e) => onChange({ ...input, budget: Number(e.target.value) })}
            className="w-full accent-accent"
          />
          <div className="flex justify-between">
            {[3000, 8000, 12000, 16000, 20000].map((v) => (
              <button
                key={v}
                onClick={() => onChange({ ...input, budget: v })}
                className={cn(
                  'rounded-lg px-2.5 py-1 text-xs font-medium transition-colors',
                  input.budget === v
                    ? 'bg-accent/20 text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                ¥{v.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-accent/20 px-3 py-1.5 text-sm font-semibold text-accent">
              ¥{input.budget.toLocaleString()}/月
            </span>
            <span className="text-xs text-muted-foreground">
              {input.budget < 6000 ? '— 经济型' : input.budget < 12000 ? '— 舒适型' : '— 品质型'}
            </span>
          </div>
        </div>
      </div>

      {/* ---- Departure Date ---- */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <CalendarIcon className="h-4 w-4 text-accent" />
          预计出发日期
        </label>
        <input
          type="date"
          value={input.departureDate}
          onChange={(e) => onChange({ ...input, departureDate: e.target.value })}
          className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground
                     outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
        />
      </div>

      {/* ---- Habits Multi-select ---- */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">生活习惯（多选）</label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {habitOptions.map((habit) => (
            <button
              key={habit.value}
              onClick={() => {
                const newHabits = input.habits.includes(habit.value)
                  ? input.habits.filter((h) => h !== habit.value)
                  : [...input.habits, habit.value]
                onChange({ ...input, habits: newHabits })
              }}
              className={cn(
                'rounded-xl border px-3 py-2 text-left text-xs font-medium transition-all duration-200',
                input.habits.includes(habit.value)
                  ? 'border-accent/50 bg-accent/15 text-accent shadow-glow'
                  : 'border-border bg-secondary/30 text-muted-foreground hover:border-accent/25 hover:text-foreground'
              )}
            >
              {habit.label}
            </button>
          ))}
        </div>
      </div>

      {/* ---- CTA Button ---- */}
      <motion.button
        onClick={onSubmit}
        disabled={isGenerating}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'w-full rounded-xl py-3.5 text-sm font-semibold transition-all duration-300',
          isGenerating
            ? 'cursor-not-allowed bg-accent/20 text-accent/50'
            : 'bg-accent text-background shadow-glow hover:bg-accent/90 hover:shadow-glow-lg'
        )}
      >
        {isGenerating ? (
          <span className="inline-flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
            正在生成...
          </span>
        ) : (
          '开始生成行前Checklist'
        )}
      </motion.button>
    </motion.div>
  )
}
