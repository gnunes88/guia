import React from 'react'
import { Users, ThumbsUp } from 'lucide-react'

const localInsights = [
  { category: "Sidewalks", percentage: 80 },
  { category: "Safe at night", percentage: 65 },
  { category: "Dog-friendly", percentage: 85 },
  { category: "Well-lit streets", percentage: 75 },
  { category: "Walkable to restaurants", percentage: 90 },
  { category: "Community events", percentage: 70 },
  { category: "Plan to stay 5+ years", percentage: 60 },
  { category: "Walkable to groceries", percentage: 85 },
  { category: "Car-dependent", percentage: 40 },
  { category: "Quiet", percentage: 70 },
  { category: "Well-maintained yards", percentage: 75 },
  { category: "Easy parking", percentage: 65 },
]

const LocalInsights: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Local Insights</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Users className="text-primary mr-2" size={24} />
            <h3 className="text-xl font-semibold">What Residents Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localInsights.map((insight, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{insight.category}</span>
                  <span className="text-primary font-bold">{insight.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${insight.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocalInsights