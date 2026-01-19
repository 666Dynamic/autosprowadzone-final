"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Calculator as CalculatorIcon, ArrowRight, RefreshCcw } from "lucide-react"
import { CALCULATOR_CONFIG, validatePrice, validateExchangeRate, formatCurrency } from "@/lib/calculator-constants"

export function Calculator() {
    // State with validation
    const [eurPrice, setEurPrice] = useState<number>(10000)
    const [exchangeRate, setExchangeRate] = useState<number>(CALCULATOR_CONFIG.DEFAULT_EXCHANGE_RATE)
    const [isLargeEngine, setIsLargeEngine] = useState<boolean>(false)
    const [isLpg, setIsLpg] = useState<boolean>(false)
    const [isAccident, setIsAccident] = useState<boolean>(false)
    const [isIndividualPlates, setIsIndividualPlates] = useState<boolean>(false)

    // Handlers with validation
    const handlePriceChange = (value: string) => {
        const numValue = Number(value)
        if (value === '' || validatePrice(numValue)) {
            setEurPrice(numValue || CALCULATOR_CONFIG.MIN_PRICE_EUR)
        }
    }

    const handleExchangeRateChange = (value: string) => {
        const numValue = Number(value)
        if (value === '' || validateExchangeRate(numValue)) {
            setExchangeRate(numValue || CALCULATOR_CONFIG.DEFAULT_EXCHANGE_RATE)
        }
    }

    // Calculations using constants
    const pricePln = eurPrice * exchangeRate
    const exciseRate = isLargeEngine ? CALCULATOR_CONFIG.AKC_RATE_HIGH : CALCULATOR_CONFIG.AKC_RATE_LOW
    const excise = pricePln * exciseRate
    const inspection = CALCULATOR_CONFIG.INSPECTION_BASE + 
        (isLpg ? CALCULATOR_CONFIG.INSPECTION_LPG : 0) + 
        (isAccident ? CALCULATOR_CONFIG.INSPECTION_ACCIDENT : 0)
    const registration = isIndividualPlates ? CALCULATOR_CONFIG.REGISTRATION_INDIVIDUAL : CALCULATOR_CONFIG.REGISTRATION_STANDARD
    const totalCost = pricePln + excise + inspection + CALCULATOR_CONFIG.TRANSLATION + registration + CALCULATOR_CONFIG.COMMISSION

    return (
        <div className="w-full overflow-x-hidden">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start relative z-10 max-w-full">
            {/* Inputs */}
            <Card className="flex flex-col border-2 border-primary/20 shadow-lg rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm text-card-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
                <CardHeader className="bg-muted/30 border-b border-border p-6 md:p-8">
                    <CardTitle className="flex items-center gap-3 text-xl md:text-2xl font-black uppercase tracking-tight">
                        <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                            <CalculatorIcon className="h-5 w-5 text-primary" />
                        </div>
                        Parametry Importu
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em] mt-1">
                        Skonfiguruj dane swojego pojazdu.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-6 md:p-8 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="price" className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 ml-1">Cena (EUR)</Label>
                            <div className="relative group">
                                <Input
                                    id="price"
                                    type="number"
                                    min={CALCULATOR_CONFIG.MIN_PRICE_EUR}
                                    max={CALCULATOR_CONFIG.MAX_PRICE_EUR}
                                    value={eurPrice}
                                    onChange={(e) => handlePriceChange(e.target.value)}
                                    aria-label="Cena pojazdu w euro"
                                    className="relative h-11 text-base font-bold rounded-xl border border-border bg-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all pr-12 hover:border-border/80"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-black text-base" aria-hidden="true">€</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="rate" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Kurs EUR (PLN)</Label>
                            <div className="relative group">
                                <Input
                                    id="rate"
                                    type="number"
                                    step="0.01"
                                    min="1"
                                    max="10"
                                    value={exchangeRate}
                                    onChange={(e) => handleExchangeRateChange(e.target.value)}
                                    aria-label="Kurs wymiany euro na złoty"
                                    className="relative h-11 text-base font-bold rounded-xl border border-border bg-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all pr-12 hover:border-border/80"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 font-bold text-sm" aria-hidden="true">zł</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Szczegóły pojazdu</Label>
                        <div className="grid gap-2">
                            {[
                                { id: "engine", checked: isLargeEngine, set: setIsLargeEngine, label: "Silnik powyżej 2.0L", sub: "Akcyza 18.6%" },
                                { id: "lpg", checked: isLpg, set: setIsLpg, label: "Instalacja LPG", sub: "+63 PLN badanie" },
                                { id: "accident", checked: isAccident, set: setIsAccident, label: "Po kolizji", sub: "+94 PLN badanie" },
                                { id: "plates", checked: isIndividualPlates, set: setIsIndividualPlates, label: "Tablice Indywidualne", sub: "+918 PLN" },
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => item.set(!item.checked)}
                                    role="checkbox"
                                    aria-checked={item.checked}
                                    aria-label={item.label}
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault()
                                            item.set(!item.checked)
                                        }
                                    }}
                                    className={`group flex items-center space-x-3 p-3.5 rounded-xl border transition-all cursor-pointer select-none touch-manipulation min-h-[52px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-none ${item.checked
                                        ? "border-primary/50 bg-primary/5 shadow-md shadow-primary/5"
                                        : "border-border bg-card hover:bg-muted/50 hover:border-primary/20"
                                        }`}
                                >
                                    <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-all ${item.checked ? "bg-primary border-primary" : "border-muted-foreground/30"
                                        }`}>
                                        {item.checked && <div className="h-2 w-2 bg-white rounded-full animate-pulse" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`font-bold tracking-tight transition-colors ${item.checked ? "text-primary dark:text-primary" : "text-foreground group-hover:text-primary"}`}>
                                            {item.label}
                                        </p>
                                        <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground group-hover:text-primary/70 transition-colors uppercase">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Results */}
            <Card className="flex flex-col border-2 border-primary/20 shadow-lg rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm text-card-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
                <CardHeader className="p-6 md:p-8 border-b border-border bg-muted/30">
                    <CardTitle className="text-xl md:text-2xl font-black uppercase tracking-tighter">Wstępna Wycena</CardTitle>
                    <CardDescription className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-xs">Bez kosztów transportu (wycena indywidualna).</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-6 md:p-8 space-y-5">
                    {/* Total Price Card - Restored "Pop" */}
                    <div className="bg-gradient-to-br from-background to-muted border-2 border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden group shadow-lg shadow-primary/5">
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                        <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <span className="text-[10px] md:text-xs text-muted-foreground uppercase font-black tracking-wider md:tracking-[0.3em] relative z-10">Cena Całkowita w Kraju</span>
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tabular-nums tracking-tighter relative z-10 drop-shadow-sm">
                            {formatCurrency(totalCost)}
                        </span>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-muted-foreground border border-border/50 relative z-10">
                            <RefreshCcw className="w-3 h-3 text-primary animate-spin-slow" /> Kurs: {exchangeRate} PLN
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Table>
                            <TableBody>
                                <TableRow className="hover:bg-muted/50 transition-colors border-none group">
                                    <TableCell className="text-[10px] md:text-sm font-bold py-3 text-muted-foreground group-hover:text-foreground uppercase tracking-wider transition-colors">Cena Auta ({eurPrice} EUR)</TableCell>
                                    <TableCell className="text-right text-sm md:text-base font-black text-foreground py-3">{formatCurrency(pricePln)}</TableCell>
                                </TableRow>
                                <TableRow className="hover:bg-muted/50 transition-colors border-none group">
                                    <TableCell className="text-[10px] md:text-sm font-bold py-3 text-muted-foreground group-hover:text-foreground uppercase tracking-wider transition-colors">Podatek Akcyzowy ({isLargeEngine ? "18.6%" : "3.1%"})</TableCell>
                                    <TableCell className="text-right text-sm md:text-base font-black text-foreground py-3">{formatCurrency(excise)}</TableCell>
                                </TableRow>
                                <TableRow className="hover:bg-muted/50 transition-colors border-none group">
                                    <TableCell className="text-[10px] md:text-sm font-bold py-3 text-muted-foreground group-hover:text-foreground uppercase tracking-wider transition-colors">Badanie techniczne</TableCell>
                                    <TableCell className="text-right text-sm md:text-base font-black text-foreground py-3">{formatCurrency(inspection)}</TableCell>
                                </TableRow>
                                <TableRow className="hover:bg-muted/50 transition-colors border-none group">
                                    <TableCell className="text-[10px] md:text-sm font-bold py-3 text-muted-foreground group-hover:text-foreground uppercase tracking-wider transition-colors">Tłumaczenia i rejestracja</TableCell>
                                    <TableCell className="text-right text-sm md:text-base font-black text-foreground py-3">{formatCurrency(CALCULATOR_CONFIG.TRANSLATION + registration)}</TableCell>
                                </TableRow>
                                {/* Commission - Toned Down */}
                                <TableRow className="border-t border-border/50">
                                    <TableCell className="text-[10px] md:text-sm font-bold py-4 text-primary uppercase tracking-wider">Prowizja serwisu</TableCell>
                                    <TableCell className="text-right py-4 font-black text-lg text-primary">{formatCurrency(CALCULATOR_CONFIG.COMMISSION)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Buttons and info section outside grid */}
            <div className="col-span-full mt-8 space-y-6">
                <div className="bg-muted/50 border border-border rounded-xl p-6 text-center space-y-2 relative overflow-hidden group hover:border-primary/20 transition-all max-w-2xl mx-auto">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider md:tracking-[0.3em] mb-1">Logistyka i Transport</p>
                    <p className="text-sm text-muted-foreground leading-relaxed italic max-w-sm mx-auto">
                        Transport wyceniamy indywidualnie w zależności od odległości we Francji lub Niemczech. Koszt zazwyczaj mieści się w granicach <span className="text-foreground font-bold">1500 - 3500 zł</span>.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto space-y-4">
                    <Button
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-11 font-bold rounded-lg shadow-lg"
                    >
                        <span>Zamów Weryfikację</span>
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-muted-foreground font-bold uppercase tracking-wider md:tracking-[0.3em]">
                        * Powyższa kalkulacja ma charakter szacunkowy.
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}
