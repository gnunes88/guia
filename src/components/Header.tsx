import React from 'react'
import { Heart } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#EB194B] flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          Lopes
        </div>
        <nav className="flex-grow flex justify-center items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#EB194B]">Lançamentos</a>
            <a href="#" className="text-gray-600 hover:text-[#EB194B]">Prontos</a>
            <a href="#" className="text-gray-600 hover:text-[#EB194B]">Aluguel</a>
            <a href="#" className="text-gray-600 hover:text-[#EB194B]">Anuncie seu imóvel</a>
            <a href="#" className="text-gray-600 hover:text-[#EB194B]">Seja franqueado</a>
            <a href="#" className="text-gray-600 hover:text-[#EB194B]">Calculadora de compra</a>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Heart className="text-[#EB194B]" size={24} />
            <span className="absolute -top-2 -right-2 bg-[#EB194B] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
          </div>
          <button className="bg-[#EB194B] text-white px-4 py-2 rounded-lg hover:bg-[#d1174a] transition duration-300">
            Entrar
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header