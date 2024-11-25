import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">NeighborGuide</h3>
            <p className="text-gray-400">Discover your perfect neighborhood with ease.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Explore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Compare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Properties</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 NeighborGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer