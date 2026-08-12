<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const openItem = ref<number | null>(0)

const faqs = [
  {
    question: 'Preciso instalar algum programa?',
    answer:
      'Não. O NúcleoFit funciona totalmente online através do navegador.'
  },
  {
    question: 'Posso acessar pelo celular?',
    answer:
      'Sim. O sistema é responsivo e pode ser utilizado em computadores, tablets e smartphones.'
  },
  {
    question: 'Consigo migrar meus alunos para o sistema?',
    answer:
      'Sim. Nossa equipe pode auxiliar na importação dos dados da sua academia.'
  },
  {
    question: 'Existe limite de usuários?',
    answer:
      'Não. Você poderá cadastrar colaboradores conforme o plano contratado.'
  },
  {
    question: 'Os dados ficam seguros?',
    answer:
      'Sim. Utilizamos boas práticas de segurança e infraestrutura em nuvem para proteger as informações.'
  },
  {
    question: 'O NúcleoFit oferece suporte?',
    answer:
      'Sim. Nossa equipe estará disponível para auxiliar na utilização da plataforma.'
  }
]
</script>

<template>
  <section
    id="faq"
    class="bg-slate-50 py-24"
  >
    <div class="mx-auto max-w-4xl px-6">
      <div class="text-center">
        <span
          class="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700"
        >
          FAQ
        </span>

        <h2 class="mt-6 text-4xl font-bold text-slate-900">
          Perguntas frequentes
        </h2>

        <p class="mt-4 text-lg text-slate-600">
          Tire suas dúvidas sobre o NúcleoFit.
        </p>
      </div>

      <div class="mt-16 space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <button
            class="cursor-pointer flex w-full items-center justify-between p-6 text-left"
            @click="openItem = openItem === index ? null : index"
          >
            <span class="font-semibold text-slate-900">
              {{ faq.question }}
            </span>

            <ChevronDown
              :size="20"
              class="transition"
              :class="{
                'rotate-180': openItem === index
              }"
            />
          </button>

          <div
            v-if="openItem === index"
            class="border-t border-slate-100 px-6 py-5 text-slate-600"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>