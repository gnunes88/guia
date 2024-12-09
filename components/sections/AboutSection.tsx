'use client';

export function AboutSection() {
  return (
    <section id="sobre" className="pt-12">
      <h2 className="text-3xl font-bold mb-2">
        Moema: O encontro da zona sul de São Paulo
      </h2>
      <div className="h-px bg-[#AFAFAF] mb-8" />
      <p className="text-gray-600 mb-8">
        Moema é um daqueles bairros de São Paulo que parecem ter de tudo um pouco. Localizado na zona sul, é famoso por sua mistura única de ruas tranquilas, muitas árvores, uma vida cultural agitada e uma incrível variedade de restaurantes e lojas. Se você já caminhou por suas ruas, é fácil entender por que Moema é tão querido pelos paulistanos.
      </p>
      <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14625.904600408721!2d-46.667287!3d-23.601739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a0c6c43fed3%3A0x2b9c7c6e01c7c6e!2sMoema%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1680000000000!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}