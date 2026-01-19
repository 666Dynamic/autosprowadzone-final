"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-8xl md:text-9xl font-black text-primary/20">404</h1>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            Strona nie została znaleziona
          </h2>
          <p className="text-muted-foreground">
            Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/">
            <Button className="gap-2 min-h-[48px] touch-manipulation" size="lg">
              <Home className="h-5 w-5" />
              Strona główna
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="gap-2 min-h-[48px] touch-manipulation"
            size="lg"
          >
            <ArrowLeft className="h-5 w-5" />
            Wróć
          </Button>
        </div>
      </div>
    </div>
  )
}
