"use client"

export function OLOPlan() {
  // Helper function to format person name with store code
  const formatPerson = (name, storeCode = "PX2475") => {
    if (!name) return null
    return `${name} (${storeCode})`
  }

  // OLO (Online Order) positions
  const positions = [
    { id: 1, title: "OLO Runner", am: formatPerson(""), pm: formatPerson("") },
    { id: 2, title: "OLO Lobby", am: formatPerson(""), pm: formatPerson("") },
    { id: 3, title: "OLO Table", am: formatPerson(""), pm: formatPerson("") },
  ]

  const PositionCard = ({ position, fullWidth = false }) => (
    <div
      className={`p-5 rounded-lg border-2 border-border bg-card hover:border-accent/50 transition-all shadow-sm hover:shadow-md ${
        fullWidth ? 'col-span-1 md:col-span-3' : ''
      }`}
    >
      <div className="font-semibold text-lg mb-4 pb-3 border-b border-border text-foreground">
        {position.title}
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between py-1.5">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            AM:
          </span>
          <span className="text-base font-semibold text-foreground">
            {position.am || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
          </span>
        </div>
        
        <div className="flex items-center justify-between py-1.5">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            PM:
          </span>
          <span className="text-base font-semibold text-foreground">
            {position.pm || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">OLO Plan</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Online Order shift assignments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {positions.map((position) => (
          <PositionCard key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}

