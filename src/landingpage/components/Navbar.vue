<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm"panel-105-4
  >
    <div
      class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
    >
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-lg font-bold text-white shadow-md"
        >
          N
        </div>

        <div>
          <h1 class="text-xl font-bold text-slate-900">
            NúcleoFit
          </h1>

          <p class="text-xs text-slate-500">
            Gestão Inteligente para Academias
          </p>
        </div>
      </div>

      <!-- Navegação -->
      <nav class="hidden items-center gap-8 md:flex">
        <a
          href="#recursos"
          class="font-medium text-slate-600 transition hover:text-red-600"
        >
          Recursos
        </a>

        <a
          href="#beneficios"
          class="font-medium text-slate-600 transition hover:text-red-600"
        >
          Benefícios
        </a>

        <a
          href="#faq"
          class="font-medium text-slate-600 transition hover:text-red-600"
        >
          FAQ
        </a>
      </nav>

      <!-- CTA -->
      <div class="flex items-center gap-3">
        <RouterLink
          to="/login"
          class="cursor-pointer rounded-xl px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Entrar
        </RouterLink>

        <button
          class="cursor-pointer rounded-xl bg-red-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-red-700 hover:shadow-red-500/30"
        >
          Solicitar Demonstração
        </button>
      </div>
    </div>
  </header>
</template>