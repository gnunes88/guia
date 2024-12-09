'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const footerLinks = {
  aLopes: ['Quem somos', 'Assessoria de comunicação', 'Linha de ética', 'Trabalhe conosco', 'Relação com investidores', 'Mapa do Site'],
  servicos: ['Venda seu imóvel', 'Alugue seu imóvel', 'Credipronto'],
  socialMedia: [
    { name: 'Facebook', icon: Facebook },
    { name: 'Twitter', icon: Twitter },
    { name: 'Instagram', icon: Instagram },
    { name: 'LinkedIn', icon: LinkedIn },
    { name: 'Youtube', icon: YouTube },
    { name: 'Blog', icon: null },
  ],
};

export function Footer() {
  return (
    <footer className="mt-20">
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <Image
              src="https://ynkkkxhqzvqzzvikxteu.supabase.co/storage/v1/object/public/neighborhood_guide/logo-footer.svg"
              alt="Logo Footer"
              width={32}
              height={32}
              priority
            />
          </div>
        </div>
        <div className="bg-[#EB194B] h-12" />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[#6F6F6F]">
          <div>
            <Image
              src="https://www.lopes.com.br/assets/svgs/default_logo.svg"
              alt="Lopes"
              width={150}
              height={48}
              priority
              className="mb-4"
            />
          </div>

          <div>
            <h3 className="font-bold mb-4">A Lopes</h3>
            <ul className="space-y-2">
              {footerLinks.aLopes.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <ul className="space-y-2">
              {footerLinks.socialMedia.map((social) => (
                <li key={social.name}>
                  <Link href="#" className="flex items-center gap-2 hover:underline">
                    {social.icon && <social.icon className="w-5 h-5 text-[#6F6F6F]" />}
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <p className="text-[#6F6F6F] text-sm text-center">
            2023 Copyright - LPS Brasil/ FOR YOU CNPJ: 08.094.722/0001-64 Consultoria de Imóveis S/A - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}