"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, ArrowRight } from "lucide-react"

export function HeroForm() {
    return (
        <Card className="w-full max-w-4xl mx-auto shadow-2xl border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 relative z-20 -mt-8 md:mt-0">
            <CardHeader className="bg-primary/5 border-b border-border/50 pb-4">
                <CardTitle className="text-lg md:text-xl font-black flex items-center text-primary">
                    <Search className="w-5 h-5 mr-2" />
                    Znajdź swoje wymarzone auto
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <form className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-end">

                    <div className="space-y-2">
                        <Label htmlFor="make">Marka i Model</Label>
                        <Input id="make" placeholder="np. BMW Seria 3, Audi A4" className="h-12 md:h-11 touch-manipulation" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="year">Rocznik (od)</Label>
                        <Input id="year" type="number" placeholder="np. 2020" className="h-12 md:h-11 touch-manipulation" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="budget">Budżet (PLN)</Label>
                        <Input id="budget" type="number" placeholder="do 150 000" className="h-12 md:h-11 touch-manipulation" />
                    </div>

                    <Button size="lg" className="h-12 md:h-11 w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20 touch-manipulation min-h-[48px]">
                        Wyceń Import <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                </form>
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">Min. przebieg</span>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">Bezwypadkowy</span>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">Faktura VAT</span>
                </div>
            </CardContent>
        </Card>
    )
}
