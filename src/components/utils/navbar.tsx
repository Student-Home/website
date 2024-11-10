import Link from 'next/link'
import { Globe, Menu, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navbar() {
  return (
    <header className="top-0 z-50 transition-all duration-300 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-primary"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xl font-bold text-black">Student Home</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium text-black hover:text-gray-800">
              Unterkünfte
            </Button>
            <Button variant="ghost" className="text-sm font-medium text-black hover:text-gray-800">
              Für Vermieter
            </Button>
            <Button variant="ghost" className="text-sm font-medium text-black hover:text-gray-800">
              Über uns
            </Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-black">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Sprache ändern</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-black">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Benutzermenu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profil</DropdownMenuItem>
                <DropdownMenuItem>Einstellungen</DropdownMenuItem>
                <DropdownMenuItem>Ausloggen</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-black">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu öffnen</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-medium hover:text-primary">
                    Unterkünfte
                  </Link>
                  <Link href="/" className="text-lg font-medium hover:text-primary">
                    Für Vermieter
                  </Link>
                  <Link href="/" className="text-lg font-medium hover:text-primary">
                    Über uns
                  </Link>
                  <Link href="/" className="text-lg font-medium hover:text-primary">
                    Hilfe
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
