"use client"

import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Navigation } from '@/components/navigation'
import { ItemsChecklist } from '@/components/items-checklist'
import { BoHPlan } from '@/components/boh-plan'
import { FoHPlan } from '@/components/foh-plan'
import { OLOPlan } from '@/components/olo-plan'
import { LinePlan } from '@/components/line-plan'

export default function Home() {
  const [activeTab, setActiveTab] = useState('plans')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayTab, setDisplayTab] = useState('plans')

  useEffect(() => {
    if (activeTab !== displayTab) {
      setIsTransitioning(true)
      const timer = setTimeout(() => {
        setDisplayTab(activeTab)
        setIsTransitioning(false)
      }, 300) // Match fadeOut duration
      return () => clearTimeout(timer)
    }
  }, [activeTab, displayTab])

  return (
    <main className="min-h-screen bg-background relative">
      <div 
        className="fixed inset-0 z-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: 'url(/background-pattern.jpg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      />
      <div className="relative z-10">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Panda Express #2475</h1>
          <div className="flex items-center gap-3">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className={isTransitioning ? 'page-exit' : 'page-enter'}>
          {displayTab === 'plans' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Black Friday 2025 Readiness</h2>
                <p className="text-muted-foreground">Restaurant #2475 Preparation Dashboard</p>
              </div>
              
              <div className="p-4 md:p-6 rounded-lg border border-border bg-card">
                <BoHPlan />
              </div>
              
              <div className="p-4 md:p-6 rounded-lg border border-border bg-card">
                <FoHPlan />
              </div>
              
              <div className="p-4 md:p-6 rounded-lg border border-border bg-card">
                <OLOPlan />
              </div>
              
              <div className="p-4 md:p-6 rounded-lg border border-border bg-card">
                <LinePlan />
              </div>
            </div>
          )}

          {displayTab === 'checklist' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Black Friday 2025 Readiness</h2>
                <p className="text-muted-foreground">Restaurant #2475 Preparation Dashboard</p>
              </div>
              
              <div className="p-4 md:p-6 rounded-lg border border-border bg-card">
                <ItemsChecklist />
              </div>
            </div>
          )}

          {displayTab === 'page3' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Store Organization Checklist</h2>
                <p className="text-muted-foreground">Restaurant #2475 Store Organization</p>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </main>
  )
}

