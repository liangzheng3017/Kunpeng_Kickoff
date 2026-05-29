import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Lazy-loaded pages for code-splitting
const HomePage = lazy(() => import('@/pages/HomePage'))
const PlannerPage = lazy(() => import('@/pages/PlannerPage'))
const MetricsPage = lazy(() => import('@/pages/MetricsPage'))
const RadarPage = lazy(() => import('@/pages/RadarPage'))
const CommunityPage = lazy(() => import('@/pages/CommunityPage'))
const BusinessPage = lazy(() => import('@/pages/BusinessPage'))
const RoadmapPage = lazy(() => import('@/pages/RoadmapPage'))

function PageLoader() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
        <p className="text-sm text-muted-foreground">加载中...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/metrics" element={<MetricsPage />} />
          <Route path="/radar" element={<RadarPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
