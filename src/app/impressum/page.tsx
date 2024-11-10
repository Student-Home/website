import type { Metadata } from "next";
import { ExternalLink } from 'lucide-react';
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";

export const metadata: Metadata = {
	title: "Student Home - Impressum",
};

export default function Impressum() {
	return (
    <><Navbar />
        <main className="mt-16 md:mt-20 mb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold mb-4">Impressum</h1>
              
              <p className="text-muted-foreground mb-6">
                Informationen gemäß § 5 TMG.
              </p>
    
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
                  <div className="flex flex-col gap-1">
                    <p>Dominik Koch</p>
                    <p>Parkstraße 5</p>
                    <p>88499 Riedlingen</p>
                    <p>Deutschland</p>
                    <p>
                      Email:{' '}
                      <a href="mailto:dominik@rivo.gg" className="text-primary hover:underline">
                        dominik@rivo.gg
                      </a>
                    </p>
                    <p>
                      Phone:{' '}
                      <a href="tel:+4915123793107" className="hover:underline">
                        +49 151 23793107
                      </a>
                    </p>
                    <p className="flex items-center gap-2 text-yellow-700">
                      <span>🛈</span>
                      Keine Annahme von Paketen oder Päckchen.
                    </p>
                  </div>
                </section>
    
                <section>
                  <h2 className="text-xl font-semibold mb-2">Online dispute resolution</h2>
                  <p className="mb-2">
                    Die Europäische Kommission bietet eine Plattform für die Online-Streitbeilegung, die hier zu finden
                    ist: {' '}
                    <a 
                      href="https://ec.europa.eu/consumers/odr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      ec.europa.eu/consumers/odr
                      <ExternalLink size={16} />
                    </a>
                  </p>
                  <p>
                    Ich bin weder bereit noch verpflichtet, an einem Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>
    
                <section>
                  <h2 className="text-xl font-semibold mb-2">Gültigkeit dieses Impressums</h2>
                  <p className="mb-2">
                    Dieser rechtliche Hinweis gilt für die folgenden Websites, Social Media Konten und andere 
                    Dienste, sofern sie hier aufgeführt sind.
                  </p>
                  <div className="flex flex-col gap-1">
                    {[
                      'https://wouldyoubot.com/',
                      'https://wouldyoubot.gg/',
                      'https://rivo.gg/',
                      'https://student-home.de/',
                      'https://twitter.com/WouldYouBot/'
                    ].map((url) => (
                      <a 
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {url}
                        <ExternalLink size={16} />
                      </a>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
     
   <Footer /></>
	);
}
