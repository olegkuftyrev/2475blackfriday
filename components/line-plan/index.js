"use client"

export function LinePlan() {
  // Helper function to format person name with store code
  const formatPerson = (name, storeCode = "PX2475") => {
    if (!name) return null
    return `${name} (${storeCode})`
  }

  // Line positions
  const positions = [
    { id: 1, title: "Director", am: formatPerson("Valeria", "PX3829"), pm: formatPerson(""), focus: "Navigate Guest and Manage the line", responsibility: "Manage line flow, Supply Line Buster" },
    { id: 2, title: "Line Buster", am: formatPerson("Maksim", "PX1911"), pm: formatPerson("Maksim", "PX1911"), focus: "Break line bottlenecks", responsibility: "OFS Tablet, Sticker Notes, Menu" },
    { id: 3, title: "Drink & Utensils", am: formatPerson(""), pm: formatPerson("Finn", "PX1911"), pm2: formatPerson(""), focus: "Prepare drinks and utensils", responsibility: "Keep drink station and utensils stocked, prepare beverages" },
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
            <span className="text-sm font-medium text-muted-foreground tracking-wide">Morning</span>
            <span className="text-sm text-foreground">
              {position.title === "Director"
                ? "09:00am-05:00pm"
                : position.title === "Line Buster"
                  ? "09:00am-05:00pm"
                  : position.title === "Drink & Utensils"
                    ? "10:00am-02:00pm"
                    : ""}
            </span>
          </div>
          <div className="text-base font-semibold text-foreground">
            {position.am || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-muted-foreground tracking-wide">Evening</span>
            <span className="text-sm text-foreground">
              {position.title === "Line Buster"
                ? "05:00pm-10:00pm"
                : position.title === "Drink & Utensils"
                  ? "02:00pm-07:00pm"
                  : ""}
            </span>
          </div>
          <div className="text-base font-semibold text-foreground">
            {position.pm || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
          </div>
        </div>
        
        {position.title === "Drink & Utensils" && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-muted-foreground tracking-wide">Evening 2</span>
              <span className="text-sm text-foreground">07:00pm-10:00pm</span>
            </div>
            <div className="text-base font-semibold text-foreground">
              {position.pm2 || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
            </div>
          </div>
        )}
        
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
        <h2 className="text-2xl font-bold mb-2">Line & Lobby</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Line & Lobby shift assignments
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

