"use client"

export function SaucesCondiments() {
  // Карточки на всю ширину
  const cards = [
    { id: 1, text: "B11 | B11 | B3 | B3 | B5", cardNumber: 1 },
    { id: 2, text: "F4x5 (HW) | CB3x3 (HS) | B5x3 (BB)", cardNumber: 2 },
    { id: 3, text: "Rice x6 | Rice x4 | Sugar x4 | Starch x3", cardNumber: 3 },
  ]

  const ItemCard = ({ item, cardNumber, isSmall = false }) => {
    const hasText = item.text
    const hasSingleData = item.index && item.multiplier
    const hasMultipleData = item.indexes && item.indexes.length > 0
    const hasData = hasSingleData || hasMultipleData

    return (
      <div 
        className={`${isSmall ? 'p-2 min-h-[70px]' : 'p-3 min-h-[80px]'} rounded-lg border-2 border-border bg-card hover:border-accent/50 transition-all shadow-sm hover:shadow-md flex flex-col items-center justify-center relative`}
      >
        <div className="absolute top-2 left-2 text-xs font-semibold text-muted-foreground">
          #{cardNumber}
        </div>
        {hasText ? (
          <div className="w-full px-2">
            <div className={`${isSmall ? 'text-base' : 'text-xl'} font-semibold text-foreground flex items-center justify-between gap-2`}>
              {item.text.split(' | ').map((part, i) => (
                <span key={i} className="flex-1 text-center">
                  {part}
                </span>
              ))}
            </div>
          </div>
        ) : hasSingleData ? (
          <div className="text-center">
            <div className={`${isSmall ? 'text-lg' : 'text-2xl'} font-bold text-foreground`}>
              {item.index}
            </div>
            <div className={`${isSmall ? 'text-sm' : 'text-lg'} text-muted-foreground mt-1`}>
              ×{item.multiplier}
            </div>
          </div>
        ) : hasMultipleData ? (
          <div className="text-center w-full">
            <div className={`flex items-center justify-center ${isSmall ? 'gap-2' : 'gap-3'} flex-wrap`}>
              {item.indexes.map((idx, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className={`${isSmall ? 'text-base' : 'text-xl'} font-bold text-foreground`}>
                    {idx.index}
                  </div>
                  <div className={`${isSmall ? 'text-xs' : 'text-base'} text-muted-foreground`}>
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
        <h2 className="text-2xl font-bold mb-2">Sauces & Condiments</h2>
      </div>

      {/* Карточки на всю ширину */}
      <div className="space-y-4">
        {cards.map((card) => (
          <ItemCard 
            key={card.id}
            item={card} 
            cardNumber={card.cardNumber} 
            isSmall={false}
          />
        ))}
      </div>
    </div>
  )
}

