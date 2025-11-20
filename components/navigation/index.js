"use client"

import { useState } from 'react'

export function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'plans', label: 'Plans' },
    { id: 'checklist', label: 'Friday Item Checklist' },
    { id: 'page3', label: 'Store Organization Checklist' },
  ]

  return (
    <div className="border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

