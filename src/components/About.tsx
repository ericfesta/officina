import React from 'react'
import { Award, Users, Clock, CheckCircle } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Award className="h-8 w-8" />, number: "25+", label: "Anni di Esperienza" },
    { icon: <Users className="h-8 w-8" />, number: "5000+", label: "Clienti Soddisfatti" },
    { icon: <Clock className="h-8 w-8" />, number: "24h", label: "Tempo di Risposta" },
    { icon: <CheckCircle className="h-8 w-8" />, number: "98%", label: "Tasso di Soddisfazione" }
  ]

  const features = [
    "Meccanici certificati e specializzati",
    "Attrezzature diagnostiche all'avanguardia",
    "Ricambi originali e di qualità garantita",
    "Garanzia su tutti i lavori eseguiti",
    "Servizio di ritiro e consegna",
    "Preventivi trasparenti e dettagliati"
  ]

  return (
    <section id="chi-siamo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Chi Siamo
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              AutoService Pro è un'officina meccanica di famiglia che opera nel settore 
              automobilistico da oltre 25 anni. Fondata nel 1995, abbiamo costruito la 
              nostra reputazione sulla qualità del servizio, l'onestà e la competenza tecnica.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Il nostro team di meccanici esperti utilizza le più moderne tecnologie 
              diagnostiche per garantire riparazioni precise e durature. Crediamo nella 
              trasparenza e nell'eccellenza del servizio clienti.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contatti"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Scopri di Più
            </a>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Team di meccanici professionali"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 right-8">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg text-center">
                    <div className="text-blue-600 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
