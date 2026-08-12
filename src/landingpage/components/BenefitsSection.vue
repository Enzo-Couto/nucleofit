<script setup lang="ts">
import {
  TrendingUp,
  Clock3,
  CircleDollarSign,
  BarChart3,
  ShieldCheck,
  Cloud
} from 'lucide-vue-next'
</script>

<template>
  <section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="text-center">
        <span
          class="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700"
        >
          Benefícios
        </span>

        <h2 class="mt-6 text-4xl font-bold text-slate-900">
          Mais controle. Mais crescimento.
        </h2>

        <p class="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          O NúcleoFit foi criado para reduzir tarefas operacionais e permitir
          que você foque no crescimento da sua academia.
        </p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="flex gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <TrendingUp :size="28" />
          </div>

          <div>
            <h3 class="font-bold text-slate-900">
              Mais crescimento
            </h3>

            <p class="mt-2 text-slate-600">
              Tenha indicadores para tomar decisões estratégicas.
            </p>
          </div>
        </div>

        <div class="flex gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <Clock3 :size="28" />
          </div>

          <div>
            <h3 class="font-bold text-slate-900">
              Economia de tempo
            </h3>

            <p class="mt-2 text-slate-600">
              Automatize tarefas repetitivas e reduza processos manuais.
            </p>
          </div>
        </div>

        <div class="flex gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <CircleDollarSign :size="28" />
          </div>

          <div>
            <h3 class="font-bold text-slate-900">
              Menos inadimplência
            </h3>

            <p class="mt-2 text-slate-600">
              Controle cobranças e acompanhe pagamentos em tempo real.
            </p>
          </div>
        </div>

        <div class="flex gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <BarChart3 :size="28" />
          </div>

          <div>
            <h3 class="font-bold text-slate-900">
              Dados centralizados
            </h3>

            <p class="mt-2 text-slate-600">
              Todas as informações da academia em uma única plataforma.
            </p>
          </div>
        </div>

        <div class="flex gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <ShieldCheck :size="28" />
          </div>

          <div>
            <h3 class="font-bold text-slate-900">
              Segurança
            </h3>

            <p class="mt-2 text-slate-600">
              Dados protegidos e acessíveis apenas para usuários autorizados.
            </p>
          </div>
        </div>

        <div class="flex gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-600"
          >
            <Cloud :size="28" />
          </div>

          <div>
            <h3 class="font-bold text-slate-900">
              100% Online
            </h3>

            <p class="mt-2 text-slate-600">
              Acesse sua academia de qualquer lugar e em qualquer dispositivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>