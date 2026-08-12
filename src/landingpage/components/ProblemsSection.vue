<script setup lang="ts">
import {
  CircleDollarSign,
  FileSpreadsheet,
  ChartNoAxesColumn,
  Clock3,
} from 'lucide-vue-next'
</script>

<template>
  <section
    id="problemas"
    class="bg-white py-24"
  >
    <div class="mx-auto max-w-7xl px-6">
      <!-- Cabeçalho -->
      <div class="text-center">
        <span
          class="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700"
        >
          Desafios das Academias
        </span>

        <h2 class="mt-6 text-4xl font-bold text-slate-900">
          Sua academia enfrenta algum desses problemas?
        </h2>

        <p class="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Muitos gestores perdem tempo, dinheiro e oportunidades de crescimento
          por falta de processos organizados e informações centralizadas.
        </p>
      </div>

      <!-- Cards -->
      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <!-- Inadimplência -->
        <div
          class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <CircleDollarSign :size="28" />
          </div>

          <h3 class="text-xl font-bold text-slate-900">
            Inadimplência
          </h3>

          <p class="mt-3 text-slate-600">
            Mensalidades atrasadas e dificuldade para acompanhar pagamentos dos
            alunos.
          </p>
        </div>

        <!-- Planilhas -->
        <div
          class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <FileSpreadsheet :size="28" />
          </div>

          <h3 class="text-xl font-bold text-slate-900">
            Planilhas Espalhadas
          </h3>

          <p class="mt-3 text-slate-600">
            Informações distribuídas em várias planilhas e sistemas diferentes.
          </p>
        </div>

        <!-- Indicadores -->
        <div
          class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <ChartNoAxesColumn :size="28" />
          </div>

          <h3 class="text-xl font-bold text-slate-900">
            Falta de Indicadores
          </h3>

          <p class="mt-3 text-slate-600">
            Tomar decisões importantes sem dados confiáveis sobre a operação da
            academia.
          </p>
        </div>

        <!-- Processos -->
        <div
          class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <Clock3 :size="28" />
          </div>

          <h3 class="text-xl font-bold text-slate-900">
            Processos Manuais
          </h3>

          <p class="mt-3 text-slate-600">
            Tempo perdido com tarefas repetitivas que poderiam ser automatizadas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>