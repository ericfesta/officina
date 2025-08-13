import React from 'react'
import { Wrench, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    "Riparazione Motore",
    "Manutenzione Ordinaria", 
    "Impianto Elettrico",
    "Freni e Sicurezza",
    "Carrozzeria",
    "Revisioni"
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Servizi", href: "#servizi" },
    { name: "Chi Siamo", href: "#chi-siamo" },
    { name: "Recensioni", href: "#recensioni" },
    { name: "Contatti", href: "#contatti" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AutoService Pro</h3>
                <p className="text-sm text-gray-400">Dal 1995</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La tua officina di fiducia per riparazioni auto, manutenzione e 
              assistenza professionale. Esperienza e qualità dal 1995.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">I Nostri Servizi</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#servizi" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+39 02 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">info@autoservicepro.it</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <div className="text-gray-400">
                  <p>Via Roma 123</p>
                  <p>20121 Milano (MI)</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Orari di Apertura</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Lunedì - Venerdì: 8:00 - 18:00</p>
                <p>Sabato: 8:00 - 13:00</p>
                <p>Domenica: Chiuso</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} AutoService Pro. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termini di Servizio
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
