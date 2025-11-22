"use client"

export function StoreOrganization() {
  // Пример данных - можно будет заменить на реальные
  const items = [
    // Столбец 1
    { id: 1, index: "F4", multiplier: 12, column: 1 },
    { id: 2, index: "C1", multiplier: 30, column: 1 },
    // Столбец 2
    { id: 5, index: "PC", multiplier: 3, column: 2 },
    { id: 6, index: "F4", multiplier: 5, column: 2 },
    { id: 7, indexes: [
      { index: "CB3", multiplier: 2 },
      { index: "B5", multiplier: 4 }
    ], column: 2 },
    { id: 8, index: "CB3", multiplier: 4, column: 2 },
    // Столбец 3
    { id: 9, index: "E3", multiplier: 15, column: 3 },
    { id: 10, indexes: [
      { index: "E3", multiplier: 6 },
      { index: "E2", multiplier: 8 },
      { index: "E1", multiplier: 6 }
    ], column: 3 },
    { id: 11, index: "C3", multiplier: 8, column: 3 },
    { id: 12, index: "C4", multiplier: 20, column: 3 },
  ]

  // Группируем по столбцам
  const columns = [1, 2, 3].map(colNum => ({
    number: colNum,
    items: items.filter(item => item.column === colNum).map((item, index) => {
      // Нумерация карточек
      let cardNumber
      if (colNum === 1) {
        cardNumber = index === 0 ? 1 : 2
      } else if (colNum === 2) {
        cardNumber = index + 5
      } else {
        cardNumber = index + 9
      }
      return { ...item, cardNumber, rowSpan: (colNum === 1 && cardNumber === 2) ? 3 : 1 }
    })
  }))

  const ItemCard = ({ item, cardNumber, rowSpan }) => {
    const hasSingleData = item.index && item.multiplier
    const hasMultipleData = item.indexes && item.indexes.length > 0
    const hasData = hasSingleData || hasMultipleData

    return (
      <div 
        className={`p-4 rounded-lg border-2 border-border bg-card hover:border-accent/50 transition-all shadow-sm hover:shadow-md ${rowSpan === 3 ? 'h-full' : 'min-h-[100px]'} flex flex-col items-center justify-center relative`}
        style={rowSpan === 3 ? { gridRow: 'span 3' } : {}}
      >
        <div className="absolute top-2 left-2 text-xs font-semibold text-muted-foreground">
          #{cardNumber}
        </div>
        {hasSingleData ? (
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">
              {item.index}
            </div>
            <div className="text-lg text-muted-foreground mt-1">
              ×{item.multiplier}
            </div>
          </div>
        ) : hasMultipleData ? (
          <div className="text-center w-full">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {item.indexes.map((idx, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="text-xl font-bold text-foreground">
                    {idx.index}
                  </div>
                  <div className="text-base text-muted-foreground">
                    ×{idx.multiplier}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-muted-foreground/30 text-sm">
            —
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Walk-In Freezer</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        {columns.map((column) => (
          <div key={column.number} className="grid gap-4" style={{ gridTemplateRows: 'auto repeat(4, minmax(100px, auto))' }}>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              {column.number === 1 ? 'Left Side' : column.number === 2 ? 'Center / Middle' : 'Right Side'}
            </div>
            {column.items.map((item) => (
              <ItemCard 
                key={item.id} 
                item={item} 
                cardNumber={item.cardNumber} 
                rowSpan={item.rowSpan} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

