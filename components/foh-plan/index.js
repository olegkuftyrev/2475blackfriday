"use client"

export function FoHPlan() {
  // Helper function to format person name with store code
  const formatPerson = (name, storeCode = "PX2475") => {
    if (!name) return null
    return `${name} (${storeCode})`
  }

  // Front of House positions - first one takes full row, rest in 3 columns
  const firstPosition = { id: 1, title: "PIC", am: formatPerson(""), pm: formatPerson(""), focus: "Manage front of house", responsibility: "Oversee customer service, handle issues, ensure smooth operations" }
  const positions = [
    { id: 2, title: "Register 1", am: formatPerson("Gita"), pm: formatPerson("Gita"), focus: "Take orders and process payments", responsibility: "Greet customers, take orders, handle cash and card payments" },
    { id: 3, title: "Register 2", am: formatPerson("Ngan"), pm: formatPerson(""), focus: "Take orders and process payments", responsibility: "Greet customers, take orders, handle cash and card payments" },
    { id: 4, title: "Register 3", am: formatPerson("Hermela"), pm: formatPerson("Hermela"), focus: "Take orders and process payments", responsibility: "Greet customers, take orders, handle cash and card payments" },
    { id: 5, title: "Position 1", am: formatPerson("Joanna"), pm: formatPerson("Joanna"), focus: "Support front operations", responsibility: "Assist customers, maintain dining area, help with orders" },
    { id: 6, title: "Position 2", am: formatPerson("Alexa"), pm: formatPerson("Alexa"), focus: "Support front operations", responsibility: "Assist customers, maintain dining area, help with orders" },
    { id: 7, title: "Position 3", am: formatPerson("Aiperi"), pm: formatPerson(""), focus: "Support front operations", responsibility: "Assist customers, maintain dining area, help with orders" },
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
        {position.title === "Position 3" ? (
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-muted-foreground tracking-wide">Morning</span>
              <span className="text-sm text-foreground">08:30am-08:00pm</span>
            </div>
            <div className="text-base font-semibold text-foreground">
              {position.am || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-muted-foreground tracking-wide">Morning</span>
                <span className="text-sm text-foreground">
                  {position.title === "PIC"
                    ? "09:00am-05:00pm"
                    : position.title === "Register 1"
                      ? "10:30am-05:00pm"
                      : position.title === "Register 2"
                        ? "08:30am-07:00pm"
                        : position.title === "Register 3"
                          ? "10:30am-05:00pm"
                          : position.title === "Position 1"
                            ? "10:30am-05:00pm"
                            : position.title === "Position 2"
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
                <span className="text-sm font-medium text-muted-foreground tracking-wide">Evening</span>
                <span className="text-sm text-foreground">
                  {position.title === "PIC"
                    ? "05:00pm-09:00pm"
                    : position.title === "Register 1"
                      ? "05:00pm-10:00pm"
                      : position.title === "Register 2"
                        ? "07:00pm-10:00pm"
                        : position.title === "Register 3"
                          ? "05:00pm-10:00pm"
                          : position.title === "Position 1"
                            ? "05:00pm-10:00pm"
                            : position.title === "Position 2"
                              ? "05:00pm-10:00pm"
                              : ""}
                </span>
              </div>
              <div className="text-base font-semibold text-foreground">
                {position.pm || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
              </div>
            </div>
          </>
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
        <h2 className="text-2xl font-bold mb-2">FoH Team</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Front of House shift assignments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PositionCard position={firstPosition} fullWidth />
        {positions.map((position) => (
          <PositionCard key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}

