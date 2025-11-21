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
    pm: formatPerson("Sebastiana"),
    focus: "Prep & Manage Kitchen",
    responsibility: "Prep, Breaks for BoH, Support Boh Ops"
  }
  
  // Remaining positions in 2-column grid
  // Left column: Sides, Fryer & Grill, Fry Cook, Stir Fry Cook
  // Right column: Dishes, Restock & Runner, Signal Lead
  const positions = [
    { id: 1, title: "Sides", am: formatPerson("Luis"), pm: formatPerson("Chi", "PX1911"), focus: "Make M1, R1 & R2", responsibility: "Keep all side items ready and fresh throughout shift" },
    { id: 4, title: "Dishes", am: formatPerson("Ming"), pm: formatPerson("Ken"), focus: "Wash dishes and clean", responsibility: "Maintain clean floors, dishes & utensils" },
    { id: 3, title: "Fryer & Grill", am: null, pm: null, focus: "Cook on fryer and grill", responsibility: "Prepare all fried and grilled food items to order" },
    { id: 6, title: "Restock & Runner", am: formatPerson("Day"), pm: formatPerson("Day"), focus: "Restock supplies and run food", responsibility: "Keep all stations supplied, run food to front" },
    { id: 5, title: "Fry Cook", am: formatPerson("Boon"), pm: formatPerson("Boon"), focus: "Fry food items", responsibility: "Prepare all fried dishes according to recipes" },
    { id: 8, title: "Signal Lead", am: null, pm: null, focus: "Coordinate orders", responsibility: "Manage order flow, signal when items are ready" },
    { id: 7, title: "Stir Fry Cook", am: formatPerson("Robinson"), pm: formatPerson("Robinson"), focus: "Cook stir fry dishes", responsibility: "Prepare all wok items and stir fry dishes" },
  ]

  const PositionCard = ({ position, fullWidth = false }) => (
    <div
      className={`p-5 rounded-lg border-2 border-border bg-card hover:border-accent/50 transition-all shadow-sm hover:shadow-md ${
        fullWidth ? 'col-span-1 md:col-span-2' : ''
      }`}
    >
      <div className="font-semibold text-lg mb-2 text-foreground">
        {position.title}
      </div>
      
      {position.focus && (
        <div className="text-sm text-muted-foreground mb-4 pb-3 border-b border-border">
          {position.focus}
        </div>
      )}
      
      {!position.focus && (
        <div className="mb-4 pb-3 border-b border-border"></div>
      )}
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-muted-foreground tracking-wide">Morning</span>
            <span className="text-sm text-foreground">
              {position.title === "Prep & PIC"
                ? "09:00am-05:00pm"
                : position.title === "Restock & Runner"
                  ? "09:30am-04:00pm"
                  : position.title === "Dishes"
                    ? "09:30am-04:00pm"
                    : position.title === "Stir Fry Cook" || position.title === "Fry Cook"
                      ? "09:30am-05:00pm" 
                      : position.am && position.am.includes("Luis") 
                        ? "09:30am-06:00pm" 
                        : ""}
            </span>
          </div>
          <div className="text-base font-semibold text-foreground">
            {position.am || <span className="support-request">SUPPORT REQUEST</span>}
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-muted-foreground tracking-wide">Evening</span>
            <span className="text-sm text-foreground">
              {position.title === "Prep & PIC"
                ? "05:00pm-10:00pm"
                : position.title === "Sides"
                  ? "06:00pm-10:00pm"
                  : position.title === "Restock & Runner"
                    ? "04:00pm-10:00pm"
                    : position.title === "Dishes"
                      ? "04:00pm-10:00pm"
                      : position.title === "Stir Fry Cook" || position.title === "Fry Cook" 
                        ? "05:00pm-10:00pm" 
                        : ""}
            </span>
          </div>
          <div className="text-base font-semibold text-foreground">
            {position.pm || <span className="support-request">SUPPORT REQUEST</span>}
          </div>
        </div>
        
        {position.responsibility && (
          <div className="pt-2">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Responsibility:</div>
            <div className="text-sm text-foreground">{position.responsibility}</div>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">BoH Team</h2>
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

