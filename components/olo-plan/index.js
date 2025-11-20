"use client"

export function OLOPlan() {
  // Helper function to format person name with store code
  const formatPerson = (name, storeCode = "PX2475") => {
    if (!name) return null
    return `${name} (${storeCode})`
  }

  // OLO (Online Order) positions
  const positions = [
    { id: 1, title: "OLO Runner", am: formatPerson("Vanessa"), pm: formatPerson("Vanessa"), focus: "Run online orders", responsibility: "Pick up orders from kitchen and deliver to customers" },
    { id: 2, title: "OLO Deliver", am: formatPerson("Jamileth"), pm: formatPerson("Jamileth"), focus: "Deliver online orders", responsibility: "Ensure timely delivery of online orders to customers" },
    { id: 3, title: "OLO Table", am: formatPerson(""), pm: formatPerson(""), focus: "Organize online orders", responsibility: "Manage order table, organize orders for pickup" },
  ]

  const PositionCard = ({ position, fullWidth = false }) => (
    <div
      className={`p-5 rounded-lg border-2 border-border bg-card hover:border-accent/50 transition-all shadow-sm hover:shadow-md ${
        fullWidth ? 'col-span-1 md:col-span-3' : ''
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
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Morning Shift</span>
            <span className="text-sm text-foreground">
              {position.title === "OLO Runner"
                ? "11:00am-05:00pm"
                : position.title === "OLO Deliver"
                  ? "10:30am-05:00pm"
                  : ""}
            </span>
          </div>
          <div className="text-base font-semibold text-foreground">
            {position.am || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Evening Shift</span>
            <span className="text-sm text-foreground">
              {position.title === "OLO Runner"
                ? "05:00pm-10:00pm"
                : position.title === "OLO Deliver"
                  ? "05:00pm-10:00pm"
                  : ""}
            </span>
          </div>
          <div className="text-base font-semibold text-foreground">
            {position.pm || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
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
        <h2 className="text-2xl font-bold mb-2">OLO Team</h2>
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

