'use client'

import * as React from 'react'
import { CalendarIcon, MapPinIcon, Search } from 'lucide-react'
import Image from "next/image"

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import Navbar from '@/components/utils/navbar'
import Footer from '@/components/utils/footer'

const cities = [
  {
    name: 'Stuttgart',
    credit: 'Photo by BarneyElo',
    creditUrl: 'https://pixabay.com/users/barneyelo-2940289/',
  },
  {
    name: 'Mannheim',
    credit: 'Photo by Bru-nO',
    creditUrl: 'https://pixabay.com/users/bru-no-1161770/',
  },
  {
    name: 'Heidenheim',
    credit: 'Photo by Marcus Fache',
    creditUrl: 'https://www.instagram.com/marcushdh/',
  },
  {
    name: 'Heilbronn',
    credit: 'Photo by Unknown',
    creditUrl: 'https://www.heilbronnerland.de/area/heilbronn',
  },
];

export default function Home() {
  const [location, setLocation] = React.useState('')
  const [moveInDate, setMoveInDate] = React.useState<Date>()
  const [moveOutDate, setMoveOutDate] = React.useState<Date>()
  const [rentalType, setRentalType] = React.useState('miete')

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Search submitted', { location, moveInDate, moveOutDate, rentalType })
  }

  return (<><Navbar /><div className="relative">
    <div className="absolute inset-0">
      <Image
        src="/background.jpg"
        alt="German landscape with small hill"
        quality={100}
        priority
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
      <div className="absolute inset-0 bg-black/25" />
    </div>
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Finde dein zweites Zuhause
        </h1>
        <p className="text-xl text-white/90">
          Die perfekte Unterkunft für dein duales Studium
        </p>
      </div>

      <div className="w-full max-w-2xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="space-y-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-14 justify-start text-left font-normal hover:bg-accent"
                  >
                    <MapPinIcon className="mr-2 h-5 w-5 shrink-0" />
                    <span className="text-base">
                      {location || "Wo möchtest du wohnen?"}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-full" align="start">
                  <Command>
                    <CommandInput placeholder="Stadt oder PLZ suchen..." />
                    <CommandEmpty>Keine Ergebnisse gefunden.</CommandEmpty>
                    <CommandGroup>
                      <CommandItem onSelect={() => setLocation('Stuttgart')}>Stuttgart</CommandItem>
                      <CommandItem onSelect={() => setLocation('Mannheim')}>Mannheim</CommandItem>
                      <CommandItem onSelect={() => setLocation('Karlsruhe')}>Karlsruhe</CommandItem>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-14 justify-start text-left font-normal hover:bg-accent",
                        !moveInDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-5 w-5 shrink-0" />
                      <span className="text-base">
                        {moveInDate ? moveInDate.toLocaleDateString() : "Einzugsdatum"}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={moveInDate}
                      onSelect={setMoveInDate}
                      initialFocus />
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-14 justify-start text-left font-normal hover:bg-accent",
                        !moveOutDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-5 w-5 shrink-0" />
                      <span className="text-base">
                        {moveOutDate ? moveOutDate.toLocaleDateString() : "Auszugsdatum"}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={moveOutDate}
                      onSelect={setMoveOutDate}
                      initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <RadioGroup
                defaultValue="miete"
                onValueChange={setRentalType}
                className="flex gap-4 pt-2"
              >
                <div className="flex items-center">
                  <RadioGroupItem value="miete" id="miete" className="peer sr-only" />
                  <label
                    htmlFor="miete"
                    className="rounded-lg border-2 border-muted bg-popover px-4 py-2 peer-data-[state=checked]:border-primary hover:bg-accent cursor-pointer"
                  >
                    Miete
                  </label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="zwischenmiete" id="zwischenmiete" className="peer sr-only" />
                  <label
                    htmlFor="zwischenmiete"
                    className="rounded-lg border-2 border-muted bg-popover px-4 py-2 peer-data-[state=checked]:border-primary hover:bg-accent cursor-pointer"
                  >
                    Zwischenmiete
                  </label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full h-14 text-lg">
              <Search className="mr-2 h-5 w-5" />
              Wohnungen suchen
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div><div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold mb-8">Beliebte Städte für Duale Studenten</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cities.map((city) => (
        <div key={city.name} className="relative aspect-square rounded-lg overflow-hidden group">
          <Image
            src={`/${city.name.toLowerCase()}.jpg`}
            alt={city.name}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 transition-all group-hover:from-black/70">
            <span className="text-white font-semibold text-lg mb-1">{city.name}</span>
            <a
              href={city.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 text-sm hover:text-white transition-colors"
            >
              {city.credit}
            </a>
          </div>
        </div>
      ))}
    </div>
    </div><Footer /></>);
}
