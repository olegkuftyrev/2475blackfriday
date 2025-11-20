"use client"

export function FoHPlan() {
  // Helper function to format person name with store code
  const formatPerson = (name, storeCode = "PX2475") => {
    if (!name) return null
    return `${name} (${storeCode})`
  }

  // Front of House positions - first one takes full row, rest in 3 columns
  const firstPosition = { id: 1, title: "PIC", am: formatPerson(""), pm: formatPerson("") }
  const positions = [
    { id: 2, title: "Register 1", am: formatPerson("Gita"), pm: formatPerson("Gita") },
    { id: 3, title: "Register 2", am: formatPerson("Ngan"), pm: formatPerson("") },
    { id: 4, title: "Register 3", am: formatPerson("Hermela"), pm: formatPerson("Hermela") },
    { id: 5, title: "Position 1", am: formatPerson("Joanna"), pm: formatPerson("Joanna") },
    { id: 6, title: "Position 2", am: formatPerson(""), pm: formatPerson("Alexa") },
    { id: 7, title: "Position 3", am: formatPerson("Aiperi"), pm: formatPerson("") },
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
            {position.title === "PIC"
              ? "AM: 9:00-5:00"
              : position.title === "Register 1"
                ? "AM: 10:30-5:00"
                : position.title === "Register 2"
                  ? "AM: 8:30-7:00"
                  : position.title === "Register 3"
                    ? "AM: 10:30-5:00"
                    : position.title === "Position 1"
                      ? "AM: 10:30-5:00"
                      : position.title === "Position 3"
                        ? "8:30am-8:00pm"
                        : "AM:"}
          </span>
          <span className="text-base font-semibold text-foreground">
            {position.am || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
          </span>
        </div>
        
        {position.title !== "Position 3" && (
          <div className="flex items-center justify-between py-1.5">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {position.title === "PIC"
                ? "PM: 5:00-9:00"
                : position.title === "Register 1"
                  ? "PM: 5:00-10:00"
                  : position.title === "Register 3"
                    ? "PM: 5:00-10:00"
                    : position.title === "Position 1"
                      ? "PM: 5:00-10:00"
                      : position.title === "Position 2"
                        ? "PM: 2:00-10:00"
                        : "PM:"}
            </span>
            <span className="text-base font-semibold text-foreground">
              {position.pm || <span className="text-red-500 font-normal">SUPPORT REQUEST</span>}
            </span>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">FoH Plan</h2>
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

