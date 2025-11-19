"use client"

import { itemsChecklistData } from '@/data/items-checklist-data'

export function ItemsChecklist() {
  const checkedCount = itemsChecklistData.filter(item => item.checked).length
  const totalCount = itemsChecklistData.length
  const progressPercentage = Math.round((checkedCount / totalCount) * 100)

  // Extract category from item name (text in parentheses)
  const getCategory = (itemName) => {
    const match = itemName.match(/\(([^)]+)\)$/)
    return match ? match[1] : 'Other'
  }

  // Remove category label from item name for display
  const getDisplayName = (itemName) => {
    return itemName.replace(/\s*\([^)]+\)$/, '').trim()
  }

  // Group items by category
  const groupedItems = itemsChecklistData.reduce((acc, item) => {
    const category = getCategory(item.item)
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {})

  // Category display names
  const categoryNames = {
    'FOH': 'Front of House (FOH)',
    'BOH': 'Back of House (BOH)',
    'FoH/Boh': 'Both Front & Back of House',
    'Other': 'Other'
  }

  // Category order
  const categoryOrder = ['FOH', 'BOH', 'FoH/Boh', 'Other']

  // Calculate contributor counts
  const contributorCounts = itemsChecklistData
    .filter(item => item.contributor)
    .reduce((acc, item) => {
      const name = item.contributor
      acc[name] = (acc[name] || 0) + 1
      return acc
    }, {})

  // Sort contributors by count (descending)
  const topContributors = Object.entries(contributorCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)

  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Pre-Black Friday Items Checklist</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Required items and supplies to obtain prior to Black Friday 2025
        </p>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">
            Progress: {checkedCount} / {totalCount} items
          </span>
          <span className="text-muted-foreground">({progressPercentage}%)</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mt-2">
          <div 
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {categoryOrder.map((categoryKey) => {
          if (!groupedItems[categoryKey]) return null
          
          const categoryItems = groupedItems[categoryKey]
          // Sort items: unchecked first, checked at bottom
          const sortedItems = [...categoryItems].sort((a, b) => {
            if (a.checked && !b.checked) return 1
            if (!a.checked && b.checked) return -1
            return 0
          })
          const categoryChecked = categoryItems.filter(item => item.checked).length
          const categoryTotal = categoryItems.length

          return (
            <div key={categoryKey} className="space-y-2">
              <div className="sticky top-0 z-10 py-2 border-b border-border">
                <div className="flex items-center justify-between px-4">
                  <h3 className="text-lg font-semibold">{categoryNames[categoryKey] || categoryKey}</h3>
                  <span className="text-xs text-muted-foreground">
                    {categoryChecked}/{categoryTotal}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                {sortedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 p-3 md:p-4 rounded-lg border border-border bg-card transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        readOnly
                        disabled
                        className="w-5 h-5 md:w-6 md:h-6 rounded border-2 border-border bg-background cursor-default disabled:opacity-100 disabled:cursor-default appearance-none checked:bg-accent checked:border-accent"
                        aria-label={`${getDisplayName(item.item)} - ${item.checked ? 'completed' : 'pending'}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <label
                        className={`block text-sm md:text-base leading-relaxed ${
                          item.checked
                            ? 'line-through text-muted-foreground'
                            : 'text-foreground'
                        }`}
                      >
                        {getDisplayName(item.item)}
                      </label>
                      {item.contributor && (
                        <span className="inline-block mt-1.5 text-xs text-muted-foreground">
                          Contributor: {item.contributor}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {topContributors.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-xl font-bold mb-4">Top Contributors</h3>
          <div className="space-y-3">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.name}
                className={`flex items-center justify-between p-4 rounded-lg border border-border bg-card ${
                  index === 0 ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-300 dark:border-yellow-700' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  {index === 0 && (
                    <div className="text-2xl" aria-label="Top contributor">
                      👑
                    </div>
                  )}
                  <div>
                    <div className={`font-semibold ${index === 0 ? 'text-yellow-700 dark:text-yellow-400' : ''}`}>
                      {contributor.name}
                    </div>
                    {index === 0 && (
                      <div className="text-xs text-yellow-600 dark:text-yellow-500 mt-0.5">
                        Top Contributor
                      </div>
                    )}
                  </div>
                </div>
                <div className={`text-lg font-bold ${index === 0 ? 'text-yellow-700 dark:text-yellow-400' : 'text-foreground'}`}>
                  {contributor.count} {contributor.count === 1 ? 'item' : 'items'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

