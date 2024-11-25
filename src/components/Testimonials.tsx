import React from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Ana Silva",
    occupation: "Arquiteta",
    content: "Morar em Moema é um sonho realizado. O bairro oferece tudo o que preciso, desde ótimos restaurantes até áreas verdes para relaxar nos fins de semana.",
    rating: 5
  },
  {
    name: "Carlos Oliveira",
    occupation: "Empresário",
    content: "A localização de Moema é imbatível. Estou perto de tudo e ainda tenho a tranquilidade que procurava para minha família.",
    rating: 5
  },
  {
    name: "Mariana Santos",
    occupation: "Médica",
    content: "Adoro a vida em Moema. O bairro é seguro, tem ótimas opções de lazer e a comunidade é muito acolhedora.",
    rating: 4
  }
]

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Depoimentos dos Moradores</h2>
        <p className="section-subtitle">
          Descubra o que os moradores de Moema têm a dizer sobre viver neste bairro encantador.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Quote className="text-primary mr-2" size={24} />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.occupation}</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">{testimonial.content}</p>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500" size={20} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Deixe sua Avaliação
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials