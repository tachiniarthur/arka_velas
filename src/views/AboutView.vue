<template>
  <div class="flex flex-col px-10">
    <h2 class="text-3xl mb-6 text-gray-800 uppercase">Sobre nós</h2>
    <section class="flex flex-col md:flex-row w-full md:mb-6">
      <div class="w-full md:w-2/3">
        <img :src="'/img-sobre-1.png'" class="w-full h-[30rem] object-cover" alt="Imagem do produto" />
      </div>
      <div class="w-full md:w-1/3 flex flex-col gap-y-4 py-4 md:py-0 px-4 md:px-6">
        <h2 class="text-3xl mb-6 text-gray-800 uppercase">Sobre a Arka Velas</h2>
        <span class="font-semibold text-gray-800">Mais do que velas — criamos sensações.</span>
        <p class="text-lg text-gray-600 font-light mb-4">
          A Arka Velas nasceu com o propósito de transformar o ambiente e o estado de espírito das pessoas através da
          união entre fragrância, estética e significado. Acreditamos que acender uma vela é mais do que iluminar um
          espaço — é um ato de pausa, de presença, de autocuidado.
        </p>
        <p class="text-lg text-gray-600 font-light mb-4">
          Cada vela que criamos carrega consigo um pedaço da nossa história, feita com dedicação, arte e um profundo
          respeito pelos detalhes.
        </p>
      </div>
    </section>
    <section class="flex flex-col md:flex-row w-full md:mb-6">
      <div class="w-full md:w-2/3 flex flex-col gap-y-4 py-4 md:py-0 px-4 md:px-6">
        <h2 class="text-3xl mb-6 text-gray-800 uppercase">Feitas à mão com amor e propósito</h2>
        <p class="text-lg text-gray-600 font-light">
          Nossas velas são 100% artesanais — produzidas manualmente desde o molde dos potes de gesso até o momento final
          da vela pronta para perfumar. Cada detalhe é pensado com carinho:
        </p>
        <ul class="list-disc list-inside text-lg text-gray-600 font-light">
          <li>Potes elegantes e exclusivos, moldados à mão com textura suave e visual minimalista;</li>
          <li>Pavio de madeira, que crepita suavemente ao queimar, trazendo ainda mais charme e aconchego;</li>
          <li>Mistura especial de ceras, que garante uma queima limpa, duradoura e uniforme;</li>
          <li>Aromas marcantes, que criam experiências memoráveis.</li>
        </ul>
      </div>
      <div class="w-full md:w-1/3">
        <img :src="'/img-sobre-2.png'" class="w-full h-[30rem] object-cover" alt="Imagem do produto" />
      </div>
    </section>
    <section class="flex flex-col md:flex-row w-full md:mb-6">
      <div class="w-full md:w-1/2">
        <img :src="'/img-sobre-3.png'" class="w-full h-[30rem] object-cover" alt="Imagem do produto" />
      </div>
      <div class="w-full md:w-1/2 flex flex-col gap-y-4 py-4 md:py-0 px-4 md:px-6">
        <h2 class="text-3xl mb-6 text-gray-800 uppercase">Aromas que despertam emoções</h2>
        <p class="text-lg text-gray-600 font-light">
          Selecionamos com cuidado cada essência que usamos. Nossos aromas são pensados para atender diferentes momentos
          e estilos de vida — seja para relaxar, celebrar, meditar ou presentear. Nossos principais aromas hoje são:
        </p>
        <ul class="list-disc list-inside text-lg text-gray-600 font-light">
          <li>
            Frutas Vermelhas – doce e vibrante, também disponível com óleo essencial puro da doTERRA, oferecendo um
            toque terapêutico e exclusivo.
          </li>
          <li>Flor de Figo – floral sofisticado com notas levemente verdes e envolventes.</li>
          <li>Cherry Blossom – suave, delicado e acolhedor, ideal para criar uma atmosfera serena.</li>
        </ul>
        <p class="text-lg text-gray-600 font-light">
          Cada fragrância é testada e equilibrada para oferecer intensidade sem excesso, promovendo uma sensação
          agradável e refinada no ambiente.
        </p>
      </div>
    </section>
    <section class="flex flex-col md:flex-row w-full md:mb-6">
      <div class="w-full md:w-1/2 flex flex-col gap-y-4 py-4 md:py-0 px-4 md:px-6">
        <h2 class="text-3xl mb-6 text-gray-800 uppercase">Um presente com significado</h2>
        <p class="text-lg text-gray-600 font-light">
          Cada vela Arka é pensada também como um gesto — seja para quem ama decoração, para quem pratica aromaterapia,
          ou para quem busca um presente especial.
        </p>
        <p class="text-lg text-gray-600 font-light">
          Oferecemos uma experiência sensorial completa: um produto elegante, com aroma envolvente e que transmite
          cuidado desde a embalagem até o momento em que é acesa.
        </p>
      </div>
      <div class="w-full md:w-1/2">
        <img :src="'/vela-figo.png'" class="w-full h-[30rem] object-cover" alt="Imagem do produto" />
      </div>
    </section>
    <section class="w-full mb-20">
      <div class="w-full flex flex-col gap-y-4 py-4 md:py-0 px-4 md:px-6">
        <h2 class="text-3xl mb-6 text-gray-800 uppercase">Nossa missão</h2>
        <p class="text-lg text-gray-600 font-light">
          Nossa missão é iluminar com propósito. Queremos que cada vela Arka leve consigo uma mensagem de calma, beleza
          e bem-estar. Que ela transforme o dia de alguém, embale um momento especial ou simplesmente traga uma pausa
          merecida na rotina.
        </p>
      </div>
    </section>
  </div>
</template>
