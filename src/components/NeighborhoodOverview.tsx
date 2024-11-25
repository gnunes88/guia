import React from 'react'
import { Star, Shield, Building, Landmark, DollarSign, Home, Clock } from 'lucide-react'

const NeighborhoodOverview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Visão Geral do Bairro</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Sobre Nosso Bairro</h3>
            <p className="mb-4">
              Bem-vindo ao nosso bairro vibrante e diversificado, onde a conveniência urbana encontra a tranquilidade suburbana. Localizado no coração da cidade, nossa comunidade oferece uma combinação perfeita de comodidades modernas e beleza natural. Com ruas arborizadas, parques bem cuidados e um forte senso de comunidade, é um lugar ideal para famílias, jovens profissionais e aposentados.
            </p>
            <p className="mb-4">
              Nosso bairro possui excelentes escolas, tornando-o uma escolha de primeira para famílias com crianças. A área é conhecida por sua segurança, com programas ativos de vigilância de bairro e policiamento local responsivo. Você encontrará uma variedade de opções de moradia, desde charmosas casas unifamiliares até apartamentos modernos, atendendo a diferentes estilos de vida e preferências.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Shield className="text-blue-500 mr-2" size={20} />
                <span>Comunidade Segura</span>
              </div>
              <div className="flex items-center">
                <Building className="text-gray-500 mr-2" size={20} />
                <span>Infraestrutura Moderna</span>
              </div>
              <div className="flex items-center">
                <Landmark className="text-green-500 mr-2" size={20} />
                <span>Áreas Verdes Abundantes</span>
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-500 mr-2" size={20} />
                <span>Comodidades de Alto Nível</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Estatísticas do Bairro</h3>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <DollarSign className="text-green-500 mr-2" size={20} />
                  Mercado Imobiliário
                </h4>
                <p>Aluguel Médio: R$ 2.200/mês</p>
                <p>Preço Médio de Imóvel: R$ 450.000</p>
                <p>Imóveis para Alugar: 120</p>
                <p>Imóveis à Venda: 85</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Star className="text-yellow-500 mr-2" size={20} />
                  Avaliação do Bairro
                </h4>
                <p>Geral: 4,5/5</p>
                <div className="flex items-center">
                  <Star className="text-yellow-500" size={16} />
                  <Star className="text-yellow-500" size={16} />
                  <Star className="text-yellow-500" size={16} />
                  <Star className="text-yellow-500" size={16} />
                  <Star className="text-yellow-500" size={16} />
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Clock className="text-blue-500 mr-2" size={20} />
                  Dados de Deslocamento
                </h4>
                <p>Tempo Médio de Deslocamento: 25 minutos</p>
                <p>Pontuação de Transporte Público: 8/10</p>
                <p>Pontuação de Caminhabilidade: 7/10</p>
                <p>Pontuação de Ciclismo: 8/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeighborhoodOverview