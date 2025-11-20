"use client"

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export function Navigation({ activeTab, onTabChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const tabs = [
    { id: 'plans', label: 'Plans' },
    { id: 'checklist', label: 'Friday Item Checklist' },
    { id: 'page3', label: 'Store Organization Checklist' },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleTabChange = (tabId) => {
    onTabChange(tabId)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Hamburger button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden px-3 py-2 rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col space-y-1.5 w-5 h-5 justify-center">
          <span className={`block h-0.5 w-full bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Desktop navigation */}
      <div className="hidden md:flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile fullscreen menu */}
      {typeof window !== 'undefined' && isOpen && createPortal(
        <>
          <div 
            className="fixed inset-0 bg-black z-[9999] md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 z-[9999] md:hidden flex flex-col bg-background">
            <div className="flex justify-end p-4 border-b border-border">
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Close menu"
              >
                <div className="flex flex-col space-y-1.5 w-5 h-5 justify-center">
                  <span className="block h-0.5 w-full bg-current rotate-45 translate-y-2"></span>
                  <span className="block h-0.5 w-full bg-current -rotate-45 -translate-y-2"></span>
                </div>
              </button>
            </div>
            <div className="flex flex-col flex-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-6 py-4 text-lg font-medium text-left transition-colors border-b border-border last:border-b-0 ${
                    activeTab === tab.id
                      ? 'bg-accent/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </>,
        document.body
      )}
    </div>
  )
}

