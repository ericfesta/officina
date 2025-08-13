import React from 'react'
import { Phone, Clock, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              La Tua <span className="text-blue-600">Officina</span> di Fiducia
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Da oltre 25 anni offriamo servizi di riparazione e manutenzione auto di alta qualità. 
              Esperienza, professionalità e tecnologie all'avanguardia per la cura del tuo veicolo.
            </p>
            
            {/* Quick Info */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">+39 02 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Lun-Ven 8-18</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Milano Centro</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contatti"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
              >
                Prenota un Appuntamento
              </a>
              <a
                href="#servizi"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
              >
                I Nostri Servizi
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
                alt="Officina meccanica moderna"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Anni di Esperienza</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
