"use client"

export function StoreSupport() {
  // Function to get ordinal suffix (1st, 2nd, 3rd, etc.)
  const getOrdinalSuffix = (n) => {
    const j = n % 10
    const k = n % 100
    if (j === 1 && k !== 11) return n + 'st'
    if (j === 2 && k !== 12) return n + 'nd'
    if (j === 3 && k !== 13) return n + 'rd'
    return n + 'th'
  }

  // Собираем данные о магазинах и количестве людей
  // Из BoH Plan
  const bohPeople = [
    { name: "Sebastiana", store: "PX2475", shifts: ["AM", "PM"] },
    { name: "Luis", store: "PX2475", shifts: ["AM"] },
    { name: "Ming", store: "PX2475", shifts: ["AM"] },
    { name: "Day", store: "PX2475", shifts: ["AM", "PM"] },
    { name: "Boon", store: "PX2475", shifts: ["AM", "PM"] },
    { name: "Robinson", store: "PX2475", shifts: ["AM", "PM"] },
    { name: "Ken", store: "PX2475", shifts: ["PM"] },
    { name: "Chi", store: "PX1911", shifts: ["PM"] },
    { name: "Jorge", store: "PX1650", shifts: ["AM"] },
    { name: "Israel", store: "PX3317", shifts: ["PM"] },
    { name: "Oseas", store: "PX2605", shifts: ["AM"] },
  ]

  // Из FoH Plan
  const fohPeople = [
    { name: "Gita", store: "PX2475", shifts: ["AM", "PM"] },
    { name: "Ngan", store: "PX2475", shifts: ["AM"] },
    { name: "Hermela", store: "PX2475", shifts: ["AM", "PM"] },
    { name: "Joanna", store: "PX2475", shifts: ["AM", "PM"] },
    { name: "Alexa", store: "PX2475", shifts: ["AM", "PM"] },
    { name: "Aiperi", store: "PX2475", shifts: ["AM"] },
  ]

  // Из OLO Plan
  const oloPeople = [
    { name: "Vanessa", store: "PX2475", shifts: ["AM", "PM"] },
    { name: "Jamileth", store: "PX2475", shifts: ["AM", "PM"] },
  ]

  // Из Line Plan
  const linePeople = [
    { name: "Valeria", store: "PX3829", shifts: ["AM"] },
    { name: "Maksim", store: "PX1911", shifts: ["AM", "PM"] },
    { name: "Finn", store: "PX1911", shifts: ["PM"] },
  ]

  // Объединяем всех людей
  const allPeople = [...bohPeople, ...fohPeople, ...oloPeople, ...linePeople]

  // Подсчитываем количество уникальных людей по магазинам
  const storeCounts = allPeople.reduce((acc, person) => {
    if (!acc[person.store]) {
      acc[person.store] = new Set()
    }
    acc[person.store].add(person.name)
    return acc
  }, {})

  // Преобразуем в массив для отображения с именами людей
  const stores = Object.entries(storeCounts)
    .map(([store, peopleSet]) => {
      // Находим всех людей из этого магазина
      const people = allPeople
        .filter(person => person.store === store)
        .map(person => person.name)
      // Убираем дубликаты имен
      const uniquePeople = [...new Set(people)]
      return {
        store,
        count: peopleSet.size,
        people: uniquePeople
      }
    })
    .filter(store => store.store !== "PX2475") // Убираем PX2475
    .sort((a, b) => b.count - a.count) // Сортируем по количеству людей (от большего к меньшему)

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Supporting Team</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Stores providing support and number of associates
        </p>
      </div>

      <div className="space-y-4">
        {stores.map((storeInfo, index) => (
          <div
            key={storeInfo.store}
            className="p-5 rounded-lg border-2 border-border bg-card hover:border-accent/50 transition-all shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {index === 0 && (
                  <div className="text-2xl" aria-label="Top contributor">
                    👑
                  </div>
                )}
                {index === 1 && (
                  <div className="text-2xl" aria-label="Second contributor">
                    💎
                  </div>
                )}
                {index === 2 && (
                  <div className="text-2xl" aria-label="Third contributor">
                    💠
                  </div>
                )}
                <div>
                  <div className={`font-semibold text-lg ${index < 3 ? 'text-yellow-700 dark:text-yellow-400' : 'text-foreground'}`}>
                    <span className="text-muted-foreground font-normal mr-2">
                      {getOrdinalSuffix(index + 1)}
                    </span>
                    {storeInfo.store}
                  </div>
                </div>
              </div>
              <div className={`text-2xl font-bold ${index < 3 ? 'text-yellow-700 dark:text-yellow-400' : 'text-foreground'}`}>
                {storeInfo.count}
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <div className="text-sm text-foreground">
                {storeInfo.people.join(', ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

