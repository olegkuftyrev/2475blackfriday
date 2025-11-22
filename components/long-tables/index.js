"use client"

export function LongTables() {
  // 3 столбца, 2 строки
  // #1 и #4 объединены в одну карточку в первом столбце
  const items = [
    // Столбец 1 - одна карточка #1 (объединяет #1 и #4) занимает весь столбец (2 строки)
    { id: 1, text: "Lx4 Mx2 Sx4", column: 1, cardNumber: 1, rowSpan: 2 },
    // Столбец 2 - обычные карточки
    { id: 2, text: "Bowl Lids x4", column: 2, row: 1, cardNumber: 2 },
    { id: 3, text: "Bowl x4", column: 2, row: 2, cardNumber: 3 },
    // Столбец 3 - одна карточка #5 (объединяет #5 и #6) занимает весь столбец (2 строки)
    { id: 5, text: "ToGo Box x12", column: 3, cardNumber: 5, rowSpan: 2 },
  ]


  const ItemCard = ({ item, cardNumber, rowSpan }) => {
    const hasSingleData = item.index && item.multiplier
    const hasMultipleData = item.indexes && item.indexes.length > 0
    const hasText = item.text
    const hasData = hasSingleData || hasMultipleData || hasText

    const gridColumn = item.column
    let gridRowStyle
    if (rowSpan === 2) {
      gridRowStyle = 'span 2'
    } else if (item.row) {
      gridRowStyle = item.row
    }

    return (
      <div 
        className={`p-4 rounded-lg border-2 border-border bg-card hover:border-accent/50 transition-all shadow-sm hover:shadow-md h-full flex flex-col items-center justify-center relative`}
        style={{ 
          gridColumn,
          ...(gridRowStyle && { gridRow: gridRowStyle })
        }}
      >
        <div className="absolute top-2 left-2 text-xs font-semibold text-muted-foreground">
          #{cardNumber}
        </div>
        {hasText ? (
          <div className="w-full px-2">
            <div className="text-xl font-semibold text-foreground flex items-center justify-between gap-2">
              {item.text.split(' ').map((part, i) => (
                <span key={i} className="flex-1 text-center">
                  {part}
                </span>
              ))}
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
        <h2 className="text-2xl font-bold mb-2">Long Tables</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'repeat(2, minmax(100px, 1fr))' }}>
        {items.map((item) => (
          <ItemCard 
            key={item.id} 
            item={item} 
            cardNumber={item.cardNumber} 
            rowSpan={item.rowSpan}
          />
        ))}
      </div>
    </div>
  )
}

