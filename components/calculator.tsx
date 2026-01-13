"use client"

import React, { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calculator as CalculatorIcon, ArrowRight, RefreshCcw } from "lucide-react"

export function Calculator() {
    // State
    const [eurPrice, setEurPrice] = useState<number>(10000)
    const [exchangeRate, setExchangeRate] = useState<number>(4.21)
    const [isLargeEngine, setIsLargeEngine] = useState<boolean>(false)
    const [isLpg, setIsLpg] = useState<boolean>(false)
    const [isAccident, setIsAccident] = useState<boolean>(false)
    const [isIndividualPlates, setIsIndividualPlates] = useState<boolean>(false)

    // Constants
    const COMMISSION = 2500
    const TRANSLATION = 250
    const REGISTRATION_STD = 161.50
    const REGISTRATION_IND = 1080
    const INSPECTION_BASE = 98
    const INSPECTION_LPG = 63
    const INSPECTION_ACCIDENT = 94

    // Calculations
    const pricePln = eurPrice * exchangeRate

    const exciseRate = isLargeEngine ? 0.186 : 0.031
    const excise = pricePln * exciseRate

    const inspection = INSPECTION_BASE + (isLpg ? INSPECTION_LPG : 0) + (isAccident ? INSPECTION_ACCIDENT : 0)

    const registration = isIndividualPlates ? REGISTRATION_IND : REGISTRATION_STD

    // Transport is now separate
    const totalCost = pricePln + excise + inspection + TRANSLATION + registration + COMMISSION

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(val)
    }

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-start relative z-10">
            {/* Inputs */}
            <Card className="border-2 border-primary/10 shadow-xl rounded-[2.5rem] overflow-hidden bg-card text-card-foreground transition-all duration-500 hover:border-primary/30">
                <CardHeader className="bg-muted/50 border-b border-border p-6 md:p-8">
                    <CardTitle className="flex items-center gap-4 text-2xl font-black uppercase tracking-tight">
                        <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                            <CalculatorIcon className="h-6 w-6 text-primary" />
                        </div>
                        Parametry Importu
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em] mt-1">
                        Skonfiguruj dane swojego pojazdu.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8 space-y-8">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-3">
                            <Label htmlFor="price" className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 ml-1">Cena (EUR)</Label>
                            <div className="relative group">
                                <Input
                                    id="price"
                                    type="number"
                                    value={eurPrice}
                                    onChange={(e) => setEurPrice(Number(e.target.value))}
                                    className="relative h-14 text-xl font-bold rounded-2xl border-border bg-muted/30 focus-visible:ring-primary focus-visible:border-primary transition-all pr-12"
                                />
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-primary font-black text-lg">€</div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Label htmlFor="rate" className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Kurs EUR (PLN)</Label>
                            <div className="relative group">
                                <Input
                                    id="rate"
                                    type="number"
                                    step="0.01"
                                    value={exchangeRate}
                                    onChange={(e) => setExchangeRate(Number(e.target.value))}
                                    className="relative h-14 text-xl font-bold rounded-2xl border-border bg-muted/30 focus-visible:ring-primary focus-visible:border-primary transition-all pr-12"
                                />
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground/50 font-bold">zł</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Szczegóły pojazdu</Label>
                        <div className="grid gap-3">
                            {[
                                { id: "engine", checked: isLargeEngine, set: setIsLargeEngine, label: "Silnik powyżej 2.0L", sub: "Akcyza 18.6%" },
                                { id: "lpg", checked: isLpg, set: setIsLpg, label: "Instalacja LPG", sub: "+63 PLN badanie" },
                                { id: "accident", checked: isAccident, set: setIsAccident, label: "Po kolizji", sub: "+94 PLN badanie" },
                                { id: "plates", checked: isIndividualPlates, set: setIsIndividualPlates, label: "Tablice Indywidualne", sub: "+918 PLN" },
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => item.set(!item.checked)}
                                    className={`group flex items-center space-x-4 p-4 rounded-2xl border transition-all cursor-pointer select-none ${item.checked
                                        ? "border-primary/50 bg-primary/5 shadow-md shadow-primary/5"
                                        : "border-border bg-card hover:bg-muted/50 hover:border-primary/20"
                                        }`}
                                >
                                    <div className={`h-6 w-6 rounded-lg border flex items-center justify-center transition-all ${item.checked ? "bg-primary border-primary" : "border-muted-foreground/30"
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
            <div className="space-y-8">
                <Card className="bg-slate-900 dark:bg-slate-900 border-2 border-primary/20 shadow-2xl rounded-[3rem] overflow-hidden text-white backdrop-blur-2xl">
                    <CardHeader className="p-8 border-b border-white/5 bg-slate-800/20">
                        <CardTitle className="text-2xl font-black uppercase tracking-tighter">Wstępna Wycena</CardTitle>
                        <CardDescription className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs">Bez kosztów transportu (wycena indywidualna).</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-8">
                        <div className="bg-white/5 rounded-[2.5rem] border border-white/10 p-8 flex flex-col items-center justify-center text-center space-y-3 relative overflow-hidden group">
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                            <span className="text-xs text-primary uppercase font-bold tracking-[0.3em]">Cena Całkowita w Kraju</span>
                            <span className="text-4xl md:text-5xl font-black text-white tabular-nums tracking-tighter">
                                {formatCurrency(totalCost)}
                            </span>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-white/60 border border-white/10">
                                <RefreshCcw className="w-3 h-3 text-primary animate-spin-slow" /> Kurs: {exchangeRate} PLN
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Table>
                                <TableBody>
                                    <TableRow className="border-white/5 hover:bg-white/5 transition-colors border-none group">
                                        <TableCell className="text-sm font-bold py-3 text-white/40 group-hover:text-white uppercase tracking-wider transition-colors">Cena Auta ({eurPrice} EUR)</TableCell>
                                        <TableCell className="text-right font-black text-white py-3">{formatCurrency(pricePln)}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/5 hover:bg-white/5 transition-colors border-none group">
                                        <TableCell className="text-sm font-bold py-3 text-white/40 group-hover:text-white uppercase tracking-wider transition-colors">Podatek Akcyzowy ({isLargeEngine ? "18.6%" : "3.1%"})</TableCell>
                                        <TableCell className="text-right font-black text-white py-3">{formatCurrency(excise)}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/5 hover:bg-white/5 transition-colors border-none group">
                                        <TableCell className="text-sm font-bold py-3 text-white/40 group-hover:text-white uppercase tracking-wider transition-colors">Badanie techniczne</TableCell>
                                        <TableCell className="text-right font-black text-white py-3">{formatCurrency(inspection)}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-white/5 hover:bg-white/5 transition-colors border-none group">
                                        <TableCell className="text-sm font-bold py-3 text-white/40 group-hover:text-white uppercase tracking-wider transition-colors">Tłumaczenia i rejestracja</TableCell>
                                        <TableCell className="text-right font-black text-white py-3">{formatCurrency(TRANSLATION + registration)}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-none bg-primary/20 rounded-2xl">
                                        <TableCell className="text-xs font-black py-4 text-primary uppercase tracking-[0.2em] pl-6 italic">Prowizja serwisu</TableCell>
                                        <TableCell className="text-right py-4 font-black text-xl text-primary pr-6">{formatCurrency(COMMISSION)}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                <div className="bg-muted border border-border rounded-[2rem] p-6 text-center space-y-2 relative overflow-hidden group hover:border-primary/20 transition-all">
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-1">Logistyka i Transport</p>
                    <p className="text-sm text-muted-foreground leading-relaxed italic max-w-sm mx-auto">
                        Transport wyceniamy indywidualnie w zależności od odległości we Francji lub Niemczech. Koszt zazwyczaj mieści się w granicach <span className="text-foreground font-bold">1500 - 3500 zł</span>.
                    </p>
                </div>

                <div className="space-y-4">
                    <Button
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all h-12 font-bold rounded-lg shadow-lg"
                    >
                        <span>Zamów Weryfikację</span>
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-center text-muted-foreground font-bold uppercase tracking-[0.3em]">
                        * Powyższa kalkulacja ma charakter szacunkowy.
                    </p>
                </div>
            </div>
        </div>
    )
}
