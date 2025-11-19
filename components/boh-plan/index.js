"use client"

export function BoHPlan() {
  // Helper function to format person name with store code
  const formatPerson = (name, storeCode = "PX2475") => {
    if (!name) return null
    return `${name} (${storeCode})`
  }

  // Prep & PIC - full width at top
  const prepPIC = { 
    id: 2, 
    title: "Prep & PIC", 
    am: formatPerson("Sebastiana"), 
    pm: formatPerson("Sebastiana") 
  }
  
  // Remaining positions in 2-column grid
  // Left column: Sides, Fryer & Grill, Fry Cook, Stir Fry Cook
  // Right column: Dishes, Restock & Runner, Signal Lead
  const positions = [
    { id: 1, title: "Sides", am: formatPerson("Luis"), pm: null },
    { id: 4, title: "Dishes", am: formatPerson("Ming"), pm: formatPerson("Ken") },
    { id: 3, title: "Fryer & Grill", am: null, pm: null },
    { id: 6, title: "Restock & Runner", am: formatPerson("Day"), pm: formatPerson("Day") },
    { id: 5, title: "Fry Cook", am: formatPerson("Boon"), pm: formatPerson("Boon") },
    { id: 8, title: "Signal Lead", am: null, pm: null },
    { id: 7, title: "Stir Fry Cook", am: formatPerson("Robinson"), pm: formatPerson("Robinson") },
  ]

  const PositionCard = ({ position, fullWidth = false }) => (
    <div
      className={`p-5 rounded-lg border-2 border-border bg-card hover:border-accent/50 transition-all shadow-sm hover:shadow-md ${
        fullWidth ? 'col-span-1 md:col-span-2' : ''
      }`}
    >
      <div className="font-semibold text-lg mb-4 pb-3 border-b border-border text-foreground">
        {position.title}
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between py-1.5">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">AM:</span>
          <span className="text-base font-semibold text-foreground">
            {position.am || <span className="text-muted-foreground font-normal">—</span>}
          </span>
        </div>
        
        <div className="flex items-center justify-between py-1.5">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">PM:</span>
          <span className="text-base font-semibold text-foreground">
            {position.pm || <span className="text-muted-foreground font-normal">—</span>}
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">BoH Plan</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Back of House shift assignments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PositionCard position={prepPIC} fullWidth />
        {positions.map((position) => (
          <PositionCard key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}

