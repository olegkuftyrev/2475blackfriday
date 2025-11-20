import { ThemeToggle } from '@/components/theme-toggle'
import { ItemsChecklist } from '@/components/items-checklist'
import { BoHPlan } from '@/components/boh-plan'
import { FoHPlan } from '@/components/foh-plan'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Panda Express #2475</h1>
          <ThemeToggle />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Black Friday 2025 Readiness</h2>
          <p className="text-muted-foreground">Restaurant #2475 Preparation Dashboard</p>
        </div>

        <div className="space-y-6">
          <div className="p-4 md:p-6 rounded-lg border border-border bg-card">
            <ItemsChecklist />
          </div>
          
          <div className="p-4 md:p-6 rounded-lg border border-border bg-card">
            <BoHPlan />
          </div>
          
          <div className="p-4 md:p-6 rounded-lg border border-border bg-card">
            <FoHPlan />
          </div>
        </div>
      </div>
    </main>
  )
}

