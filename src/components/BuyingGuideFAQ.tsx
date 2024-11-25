import React from 'react'
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "What are the steps to buying a house?",
    answer: "1. Get pre-approved for a mortgage. 2. Find a real estate agent. 3. Shop for homes. 4. Make an offer. 5. Get a home inspection. 6. Close on your new home."
  },
  {
    question: "How much down payment do I need?",
    answer: "Typically, you'll need 3-20% of the home's price as a down payment. Some loans offer lower down payment options."
  },
  {
    question: "What credit score do I need to buy a house?",
    answer: "Most lenders require a credit score of at least 620 for a conventional loan. FHA loans may accept lower scores."
  },
  {
    question: "How long does the home buying process take?",
    answer: "On average, it takes about 30-45 days from offer acceptance to closing, but it can vary based on your situation."
  },
]

const BuyingGuideFAQ: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Home Buying Guide FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <HelpCircle className="text-blue-500 mr-2" size={24} />
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

export default BuyingGuideFAQ