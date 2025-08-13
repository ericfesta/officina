import React from 'react'
import { Wrench, Settings, Zap, Shield, Car, Gauge } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Riparazione Motore",
      description: "Diagnosi e riparazione completa di motori benzina e diesel con tecnologie avanzate.",
      features: ["Diagnosi computerizzata", "Riparazione cilindri", "Sostituzione componenti"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Manutenzione Ordinaria",
      description: "Tagliandi programmati e manutenzione preventiva per mantenere il tuo veicolo efficiente.",
      features: ["Cambio olio", "Controllo filtri", "Verifica livelli"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Impianto Elettrico",
      description: "Riparazione e manutenzione di impianti elettrici, batterie e sistemi di accensione.",
      features: ["Diagnosi elettronica", "Sostituzione batteria", "Riparazione alternatore"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Freni e Sicurezza",
      description: "Controllo e sostituzione di freni, pneumatici e sistemi di sicurezza attiva.",
      features: ["Pastiglie freni", "Dischi freno", "Sistema ABS"]
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Carrozzeria",
      description: "Riparazioni di carrozzeria, verniciatura e ripristino estetico del veicolo.",
      features: ["Riparazione ammaccature", "Verniciatura", "Lucidatura"]
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Revisioni",
      description: "Revisioni periodiche obbligatorie e controlli tecnici per la circolazione.",
      features: ["Revisione auto", "Controllo emissioni", "Certificazioni"]
    }
  ]

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offriamo una gamma completa di servizi per la manutenzione e riparazione 
            del tuo veicolo, utilizzando solo ricambi originali e tecnologie all'avanguardia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hai bisogno di un servizio specifico?
            </h3>
            <p className="text-gray-600 mb-6">
              Contattaci per un preventivo gratuito e personalizzato
            </p>
            <a
              href="#contatti"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Richiedi Preventivo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
