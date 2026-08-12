<script setup lang="ts">
import {
  Users,
  Wallet,
  Dumbbell,
  Calendar,
  ChartColumn,
  LayoutDashboard
} from 'lucide-vue-next'
</script>

<template>
  <section
    id="recursos"
    class="bg-slate-50 py-24"
  >
    <div class="mx-auto max-w-7xl px-6">
      <!-- Cabeçalho -->
      <div class="text-center">
        <span
          class="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700"
        >
          Recursos
        </span>

        <h2 class="mt-6 text-4xl font-bold text-slate-900">
          Tudo o que sua academia precisa em um único lugar
        </h2>

        <p class="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Centralize toda a operação da sua academia em uma plataforma moderna,
          simples e eficiente.
        </p>
      </div>

      <!-- Cards -->
      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Gestão de Alunos -->
        <div
          class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <Users :size="28" />
          </div>

          <h3 class="text-xl font-bold text-slate-900">
            Gestão de Alunos
          </h3>

          <p class="mt-3 text-slate-600">
            Cadastros, matrículas, histórico e acompanhamento completo dos
            alunos.
          </p>
        </div>

        <!-- Financeiro -->
        <div
          class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <Wallet :size="28" />
          </div>

          <h3 class="text-xl font-bold text-slate-900">
            Financeiro
          </h3>

          <p class="mt-3 text-slate-600">
            Controle pagamentos, mensalidades, recebimentos e inadimplência.
          </p>
        </div>

        <!-- Treinos -->
        <div
          class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <Dumbbell :size="28" />
          </div>

          <h3 class="text-xl font-bold text-slate-900">
            Treinos
          </h3>

          <p class="mt-3 text-slate-600">
            Organize fichas de treino e acompanhe a evolução dos alunos.
          </p>
        </div>

        <!-- Agenda -->
        <div
          class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <Calendar :size="28" />
          </div>

          <h3 class="text-xl font-bold text-slate-900">
            Agenda
          </h3>

          <p class="mt-3 text-slate-600">
            Gerencie avaliações, compromissos e atividades da academia.
          </p>
        </div>

        <!-- Relatórios -->
        <div
          class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <ChartColumn :size="28" />
          </div>

          <h3 class="text-xl font-bold text-slate-900">
            Relatórios
          </h3>

          <p class="mt-3 text-slate-600">
            Acompanhe indicadores importantes para tomar melhores decisões.
          </p>
        </div>

        <!-- Dashboard -->
        <div
          class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <LayoutDashboard :size="28" />
          </div>

          <h3 class="text-xl font-bold text-slate-900">
            Dashboard
          </h3>

          <p class="mt-3 text-slate-600">
            Visualize a situação da academia em tempo real em um único painel.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>