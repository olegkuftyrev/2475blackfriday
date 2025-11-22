"use client"

export function WalkInCooler() {
  // 3 столбца: Left Side, Center / Middle, Right Side
  const items = [
    // Столбец 1 - Left Side
    { id: 1, index: "Noodles", multiplier: 12, column: 1 },
    { id: 2, index: "Noodles", multiplier: 8, column: 1 },
    { id: 3, indexes: [
      { index: "B1", multiplier: 3 },
      { index: "B3", multiplier: 2 }
    ], column: 1 },
    { id: 4, indexes: [
      { index: "C4", multiplier: 3 },
      { index: "C3", multiplier: 2 }
    ], column: 1 },
    // Столбец 2 - Center / Middle
    { id: 5, index: "M1 Cabbage", multiplier: 20, column: 2, rowSpan: 4 },
    // Столбец 3 - Right Side
    { id: 9, text: "Prep Vegetables", column: 3, rowSpan: 4 },
  ]

  // Группируем по столбцам
  const columns = [1, 2, 3].map(colNum => ({
    number: colNum,
    items: items.filter(item => item.column === colNum).map((item, index) => {
      // Нумерация карточек
      let cardNumber
      if (colNum === 1) {
        cardNumber = index + 1
      } else if (colNum === 2) {
        cardNumber = index + 5
      } else {
        cardNumber = index + 9
      }
      return { ...item, cardNumber, rowSpan: item.rowSpan }
    })
  }))

  const ItemCard = ({ item, cardNumber, rowSpan }) => {
    const hasSingleData = item.index && item.multiplier
    const hasMultipleData = item.indexes && item.indexes.length > 0
    const hasText = item.text
    const hasData = hasSingleData || hasMultipleData || hasText

    return (
      <div 
        className={`p-4 rounded-lg border-2 border-border bg-card hover:border-accent/50 transition-all shadow-sm hover:shadow-md ${rowSpan && rowSpan > 1 ? 'h-full' : 'min-h-[100px]'} flex flex-col items-center justify-center relative`}
        style={rowSpan && rowSpan > 1 ? { gridRow: `span ${rowSpan}` } : {}}
      >
        <div className="absolute top-2 left-2 text-xs font-semibold text-muted-foreground">
          #{cardNumber}
        </div>
        {hasText ? (
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">
              {item.text}
            </div>
          </div>
        ) : hasSingleData ? (
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
        <h2 className="text-2xl font-bold mb-2">Walk-In Cooler</h2>
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

