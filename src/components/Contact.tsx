import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefono",
      details: ["+39 02 1234567", "+39 333 1234567"],
      action: "tel:+390212345678"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@autoservicepro.it", "preventivi@autoservicepro.it"],
      action: "mailto:info@autoservicepro.it"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Indirizzo",
      details: ["Via Roma 123", "20121 Milano (MI)"],
      action: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Orari",
      details: ["Lun-Ven: 8:00-18:00", "Sab: 8:00-13:00"],
      action: null
    }
  ]

  return (
    <section id="contatti" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contattaci
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siamo qui per aiutarti. Contattaci per un preventivo gratuito 
            o per prenotare un appuntamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Richiedi un Preventivo
            </h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800">Messaggio inviato con successo!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+39 333 1234567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tua@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servizio Richiesto
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seleziona un servizio</option>
                  <option value="manutenzione">Manutenzione Ordinaria</option>
                  <option value="riparazione">Riparazione Motore</option>
                  <option value="elettrico">Impianto Elettrico</option>
                  <option value="freni">Freni e Sicurezza</option>
                  <option value="carrozzeria">Carrozzeria</option>
                  <option value="revisione">Revisione</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descrivi il problema o il servizio di cui hai bisogno..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Invia Richiesta</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="grid gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 mt-1">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {info.action ? (
                            <a href={info.action} className="hover:text-blue-600 transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Come Raggiungerci</h4>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Mappa della zona"
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Siamo facilmente raggiungibili con i mezzi pubblici e disponiamo 
                di parcheggio gratuito per i nostri clienti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
