import React from 'react'
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "Quais são as principais vantagens de morar em Moema?",
    answer: "Moema oferece excelente localização, segurança, áreas verdes, ótimas opções de lazer e gastronomia, além de fácil acesso a outras regiões da cidade."
  },
  {
    question: "Como é o transporte público em Moema?",
    answer: "Moema é bem servida por transporte público, incluindo estações de metrô e diversas linhas de ônibus, facilitando o deslocamento para outras áreas de São Paulo."
  },
  {
    question: "Quais são as opções de lazer no bairro?",
    answer: "O bairro conta com o Parque do Ibirapuera nas proximidades, diversos restaurantes, cafés, shopping centers e áreas de lazer em condomínios."
  },
  {
    question: "Como é o mercado imobiliário em Moema?",
    answer: "Moema é considerado um bairro de alto padrão, com imóveis valorizados. O mercado oferece desde apartamentos compactos até residências de luxo."
  },
]

const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <p className="section-subtitle">
          Encontre respostas para as dúvidas mais comuns sobre morar em Moema.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <HelpCircle className="text-primary mr-2" size={24} />
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ