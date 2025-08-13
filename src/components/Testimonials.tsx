import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Cliente dal 2018",
      content: "Professionalità e competenza eccezionali. Il mio meccanico di fiducia da anni. Sempre puntuali e onesti nei preventivi.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Laura Bianchi",
      role: "Cliente dal 2020",
      content: "Servizio impeccabile! Hanno risolto un problema che altri non riuscivano a diagnosticare. Consigliatissimi!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      name: "Giuseppe Verdi",
      role: "Cliente dal 2015",
      content: "Qualità e affidabilità al top. Il rapporto qualità-prezzo è imbattibile. Personale sempre disponibile e cortese.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      name: "Anna Ferrari",
      role: "Cliente dal 2019",
      content: "Finalmente un'officina di cui fidarsi! Trasparenza totale e lavoro sempre perfetto. Li consiglio a tutti.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Roberto Conti",
      role: "Cliente dal 2017",
      content: "Esperienza fantastica! Hanno riparato la mia auto in tempi record e il prezzo è stato molto onesto.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      name: "Silvia Moretti",
      role: "Cliente dal 2021",
      content: "Servizio clienti eccellente. Mi hanno spiegato tutto nei dettagli e il lavoro è stato impeccabile.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
    }
  ]

  return (
    <section id="recensioni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra priorità. 
            Leggi le recensioni di chi ha già scelto AutoService Pro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="text-blue-600 mb-4">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Unisciti ai Nostri Clienti Soddisfatti
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Scopri perché migliaia di automobilisti hanno scelto AutoService Pro 
              per la cura del loro veicolo.
            </p>
            <a
              href="#contatti"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Prenota Ora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
