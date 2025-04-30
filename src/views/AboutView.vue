<template>
  <div class="container mx-auto px-4 pb-24">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Sobre nós</h1>
    <section class="flex flex-col md:flex-row w-full md:mb-6">
      <div class="w-full md:w-2/3">
        <img :src="'/vela-figo.png'" class="w-full h-[30rem] object-cover" alt="Imagem do produto" />
      </div>
      <div class="w-full md:w-1/3 flex flex-col gap-y-4 py-4 md:py-0 px-4 md:px-6">
        <p class="text-lg text-gray-600 mb-4 font-light">
          Bem-vindo à <span class="font-semibold text-gray-800">Arka Velas</span>, sua fonte de velas aromáticas feitas
          com amor e dedicação.
        </p>
        <p class="text-lg text-gray-600 font-light mb-4">
          Nossa missão é trazer conforto, tranquilidade e um toque especial para sua casa através de aromas únicos e
          designs elegantes.
        </p>
        <p class="text-lg text-gray-600 font-light mb-4">
          Cada produto nosso é feito completamente à mão, com materiais de alta qualidade que garantem uma experiência
          sensorial inesquecível.
        </p>
      </div>
    </section>
    <section class="flex flex-col md:flex-row w-full">
      <div class="w-full md:w-2/3 flex flex-col gap-y-4 py-4 md:py-0 px-4 md:px-6">
        <p class="text-lg text-gray-600 font-light">
          Começamos nossa jornada quando decidimos comprar uma vela aromática, e não encontravamos nenhuma vela perto da
          nossa casa com a qualidade que estavamos buscando. Dai veio a ideia de criar nossa marca, para proporcionar as
          pessoas velas de qualidades e elegantes com um preço acessível.
        </p>
      </div>
      <div class="w-full md:w-1/3">
        <img :src="'/vela-figo.png'" class="w-full h-[30rem] object-cover" alt="Imagem do produto" />
      </div>
    </section>
  </div>
</template>
