<template>
  <div class="bg-white">
    <div
      class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
        <div class="px-5 py-2">
          <a
            v-scroll-to="{
              el: '#inicio',
              container: 'body',
              duration: 1000,
              easing: 'ease',
              offset: 0,
              force: true,
              cancelable: true,
              x: false,
              y: true
            }"
            href="#"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Inicio
          </a>
        </div>
        <div class="px-5 py-2">
          <a
            v-scroll-to="{
              el: '#ventajas',
              container: 'body',
              duration: 1000,
              easing: 'ease',
              offset: -100,
              force: true,
              cancelable: true,
              x: false,
              y: true
            }"
            href="#"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Ventajas
          </a>
        </div>
        <div class="px-5 py-2">
          <a
            v-scroll-to="{
              el: '#faqs',
              container: 'body',
              duration: 1000,
              easing: 'ease',
              offset: -100,
              force: true,
              cancelable: true,
              x: false,
              y: true
            }"
            href="#"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Preguntas Frecuentes
          </a>
        </div>
        <div class="px-5 py-2">
          <a
            href="/contacto"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Contacto
          </a>
        </div>
        <div class="px-5 py-2">
          <a
            href="https://wa.me/525520838489?text=Hola,%20estoy%20en%20bioclimex.mx%20y%20me%20interesa%20cotizar."
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            WhatsApp
          </a>
        </div>
        <div class="px-5 py-2">
          <a
            href="/privacidad"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Privacidad
          </a>
        </div>
        <div class="px-5 py-2">
          <a
            href="/terminos"
            class="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Términos de uso
          </a>
        </div>
      </nav>
      <div class="my-20 mx-auto flex justify-center">
        <img
          class="h-10 m
        lg:h-16"
          src="../assets/logo.svg"
          alt=""
        />
      </div>
      <div class="mt-8">
        <p class="text-center text-base leading-6 text-gray-400">
          &copy; 2020 Bioclimex SA de CV. Derechos Reservados
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BPFooterOne"
};
</script>

<style scoped></style>
