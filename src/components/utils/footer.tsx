import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Über uns</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Wie Student-Home funktioniert</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Newsroom</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Investoren</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Karriere</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Vielfalt & Zugehörigkeit</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Barrierefreiheit</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Student-Home Associates</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Studentenrabatte</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Vermieten</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Ihre Unterkunft vermieten</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Verantwortungsvolles Vermieten</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Ressourcen für Vermieter</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:underline">Community-Forum</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">&copy; 2024 Rivo. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="#" className="text-sm text-gray-600 hover:underline">Datenschutz</Link>
            <Link href="#" className="text-sm text-gray-600 hover:underline">Nutzungsbedingungen</Link>
            <Link href="#" className="text-sm text-gray-600 hover:underline">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
