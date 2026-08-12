<script setup lang="ts">
import { ref } from 'vue'

const chartData = [
  { month: 'Jan', revenue: 16000 },
  { month: 'Fev', revenue: 24000 },
  { month: 'Mar', revenue: 20000 },
  { month: 'Abr', revenue: 32000 },
  { month: 'Mai', revenue: 28000 },
  { month: 'Jun', revenue: 36000 }
]

const currentTab = ref('dashboard')
const hoveredBar = ref<number | null>(null)
</script>

<template>
  <section class="px-6 pt-36 pb-24">
    <div class="mx-auto max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Conteúdo -->
        <div>
          <span
            class="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700"
          >
            Plataforma de Gestão para Academias
          </span>

          <h1
            class="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl"
          >
            A plataforma que centraliza toda a gestão da sua academia.
          </h1>

          <p class="mt-6 text-lg text-slate-600">
            Controle alunos, mensalidades, treinos, relatórios e indicadores
            em um único sistema.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <button
              class="cursor-pointer rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Solicitar Demonstração
            </button>

            <button
              class="cursor-pointer rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Conhecer Recursos
            </button>
          </div>
        </div>

        <!-- Mockup Sistema -->
        <div>
          <div
            class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          >
            <!-- Header -->
            <div class="border-b border-slate-200 p-4">
              <div class="flex gap-2">
                <div class="h-3 w-3 rounded-full bg-red-500"></div>
                <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div class="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div class="flex">
              <!-- Sidebar -->
              <aside class="hidden w-48 bg-slate-900 text-white md:block">
                <div class="border-b border-slate-700 p-5">
                  <h3 class="font-bold">NúcleoFit</h3>
                </div>

                <nav class="space-y-2 p-4">
                  <button
                    @click="currentTab = 'dashboard'"
                    :class="[
                      'w-full cursor-pointer rounded-lg px-3 py-2 text-left transition-all duration-200 hover:translate-x-1',
                      currentTab === 'dashboard'
                        ? 'bg-red-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    ]"
                  >
                    Dashboard
                  </button>

                  <button
                    @click="currentTab = 'alunos'"
                    :class="[
                      'w-full cursor-pointer rounded-lg px-3 py-2 text-left transition-all duration-200 hover:translate-x-1',
                      currentTab === 'alunos'
                        ? 'bg-red-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    ]"
                  >
                    Alunos
                  </button>

                  <button
                    @click="currentTab = 'financeiro'"
                    :class="[
                      'w-full cursor-pointer rounded-lg px-3 py-2 text-left transition-all duration-200 hover:translate-x-1',
                      currentTab === 'financeiro'
                        ? 'bg-red-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    ]"
                  >
                    Financeiro
                  </button>

                  <button
                    @click="currentTab = 'treinos'"
                    :class="[
                      'w-full cursor-pointer rounded-lg px-3 py-2 text-left transition-all duration-200 hover:translate-x-1',
                      currentTab === 'treinos'
                        ? 'bg-red-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    ]"
                  >
                    Treinos
                  </button>

                  <button
                    @click="currentTab = 'relatorios'"
                    :class="[
                      'w-full cursor-pointer rounded-lg px-3 py-2 text-left transition-all duration-200 hover:translate-x-1',
                      currentTab === 'relatorios'
                        ? 'bg-red-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    ]"
                  >
                    Relatórios
                  </button>
                </nav>
              </aside>

              <!-- Conteúdo -->
              <main class="flex-1 bg-slate-50 p-6">
                <Transition
                  mode="out-in"
                  enter-active-class="transition-all duration-300"
                  enter-from-class="opacity-0 translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition-all duration-200"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-2"
                >
                  <div :key="currentTab">

                    <!-- DASHBOARD -->
                    <template v-if="currentTab === 'dashboard'">
                      <h2 class="mb-6 text-xl font-bold text-slate-900">
                        Dashboard
                      </h2>

                      <!-- Seu conteúdo atual do dashboard -->
                      <div v-if="currentTab === 'dashboard'">
                        <h2 class="mb-6 text-xl font-bold text-slate-900">
                          Dashboard
                        </h2>

                        <div class="mb-6 grid grid-cols-2 gap-4">
                          <div
                            class="rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          >
                            <p class="text-sm text-slate-500">Alunos Ativos</p>
                            <h3 class="mt-2 text-2xl font-bold">1.284</h3>
                          </div>

                          <div
                            class="rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          >
                            <p class="text-sm text-slate-500">Receita Mensal</p>
                            <h3 class="mt-2 text-2xl font-bold text-green-600">
                              R$ 48.250
                            </h3>
                          </div>
                        </div>

                        <div class="mb-6 rounded-xl bg-white p-5 shadow-sm">
                          <p class="mb-4 text-sm text-slate-500">
                            Receita dos últimos meses
                          </p>

                          <div class="flex h-40 items-end justify-between gap-2">

                            <div
                              v-for="(item, index) in chartData"
                              :key="index"
                              class="relative flex-1"
                              @mouseenter="hoveredBar = index"
                              @mouseleave="hoveredBar = null"
                            >

                              <Transition
                                enter-active-class="transition duration-200"
                                enter-from-class="opacity-0 translate-y-2"
                                enter-to-class="opacity-100 translate-y-0"
                                leave-active-class="transition duration-150"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                              >
                                <div
                                  v-if="hoveredBar === index"
                                  class="absolute -top-20 left-1/2 z-20 w-32 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-3 shadow-xl"
                                >
                                  <p class="text-xs font-medium text-slate-500">
                                    {{ item.month }}
                                  </p>

                                  <p class="mt-1 text-lg font-bold text-slate-900">
                                    R$ {{ item.revenue.toLocaleString('pt-BR') }}
                                  </p>

                                  <p class="mt-1 text-xs text-green-600">
                                    +12% vs mês anterior
                                  </p>
                                </div>
                              </Transition>

                              <div
                                class="rounded-t bg-red-500 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
                                :style="{ height: `${item.revenue / 250}px` }"
                              ></div>
                              <div class="mt-2 text-center text-xs text-slate-500">
                                {{ item.month }}
                              </div>

                            </div>

                          </div>
                        </div>

                        <div class="rounded-xl bg-white p-5 shadow-sm">
                          <p class="mb-4 text-sm text-slate-500">
                            Últimas Matrículas
                          </p>

                          <div class="space-y-3">
                            <div class="flex justify-between">
                              <span>João Silva</span>
                              <span class="font-medium text-green-600">Ativo</span>
                            </div>

                            <div class="flex justify-between">
                              <span>Maria Oliveira</span>
                              <span class="font-medium text-green-600">Ativo</span>
                            </div>

                            <div class="flex justify-between">
                              <span>Pedro Santos</span>
                              <span class="font-medium text-green-600">Ativo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>

                    <!-- ALUNOS -->
                    <template v-else-if="currentTab === 'alunos'">
                      <h2 class="mb-6 text-xl font-bold text-slate-900">
                        Alunos
                      </h2>

                      <!-- Conteúdo alunos -->
                      <div v-if="currentTab === 'alunos'">
                        <h2 class="mb-6 text-xl font-bold">
                          Gestão de Alunos
                        </h2>

                        <div class="rounded-xl bg-white shadow-sm">
                          <table class="w-full">
                            <thead>
                              <tr class="border-b">
                                <th class="p-4 text-left">Aluno</th>
                                <th class="p-4 text-left">Plano</th>
                                <th class="p-4 text-left">Status</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr class="border-b">
                                <td class="p-4">João Silva</td>
                                <td class="p-4">Premium</td>
                                <td class="p-4">
                                  <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                    Ativo
                                  </span>
                                </td>
                              </tr>

                              <tr class="border-b">
                                <td class="p-4">Maria Oliveira</td>
                                <td class="p-4">Mensal</td>
                                <td class="p-4">
                                  <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                    Ativo
                                  </span>
                                </td>
                              </tr>

                              <tr>
                                <td class="p-4">Pedro Santos</td>
                                <td class="p-4">Trimestral</td>
                                <td class="p-4">
                                  <span class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                                    Vencendo
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </template>

                    <!-- FINANCEIRO -->
                    <template v-else-if="currentTab === 'financeiro'">
                      <h2 class="mb-6 text-xl font-bold text-slate-900">
                        Financeiro
                      </h2>

                      <!-- Conteúdo financeiro -->
                      <div v-if="currentTab === 'financeiro'">
                        <h2 class="mb-6 text-xl font-bold">
                          Financeiro
                        </h2>

                        <div class="grid grid-cols-2 gap-4">
                          <div class="rounded-xl bg-white p-5 shadow-sm">
                            <p class="text-sm text-slate-500">
                              Receita do Mês
                            </p>

                            <h3 class="mt-2 text-3xl font-bold text-green-600">
                              R$ 48.250
                            </h3>
                          </div>

                          <div class="rounded-xl bg-white p-5 shadow-sm">
                            <p class="text-sm text-slate-500">
                              Inadimplência
                            </p>

                            <h3 class="mt-2 text-3xl font-bold text-red-600">
                              4.8%
                            </h3>
                          </div>
                        </div>
                      </div>
                    </template>

                    <!-- TREINOS -->
                    <template v-else-if="currentTab === 'treinos'">
                      <h2 class="mb-6 text-xl font-bold text-slate-900">
                        Treinos
                      </h2>

                      <!-- Conteúdo treinos -->
                      <div v-if="currentTab === 'treinos'">
                        <h2 class="mb-6 text-xl font-bold">
                          Treinos
                        </h2>

                        <div class="space-y-4">
                          <div class="rounded-xl bg-white p-5 shadow-sm">
                            Treino A • Peito e Tríceps
                          </div>

                          <div class="rounded-xl bg-white p-5 shadow-sm">
                            Treino B • Costas e Bíceps
                          </div>

                          <div class="rounded-xl bg-white p-5 shadow-sm">
                            Treino C • Pernas
                          </div>
                        </div>
                      </div>
                    </template>

                    <!-- RELATÓRIOS -->
                    <template v-else>
                      <h2 class="mb-6 text-xl font-bold text-slate-900">
                        Relatórios
                      </h2>

                      <!-- Conteúdo relatórios -->
                      <div v-if="currentTab === 'relatorios'">
                        <h2 class="mb-6 text-xl font-bold">
                          Relatórios e Indicadores
                        </h2>

                        <div class="grid gap-4">

                          <div
                            class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                          >
                            <div class="flex items-center justify-between">
                              <div>
                                <p class="text-sm text-slate-500">
                                  Crescimento de Matrículas
                                </p>

                                <h3 class="mt-2 text-2xl font-bold text-green-600">
                                  +18%
                                </h3>
                              </div>

                              <span
                                class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
                              >
                                Últimos 30 dias
                              </span>
                            </div>
                          </div>

                          <div
                            class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                          >
                            <div class="flex items-center justify-between">
                              <div>
                                <p class="text-sm text-slate-500">
                                  Taxa de Retenção
                                </p>

                                <h3 class="mt-2 text-2xl font-bold">
                                  91%
                                </h3>
                              </div>

                              <span
                                class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                              >
                                Acima da média
                              </span>
                            </div>
                          </div>

                          <div
                            class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                          >
                            <div class="flex items-center justify-between">
                              <div>
                                <p class="text-sm text-slate-500">
                                  Ticket Médio
                                </p>

                                <h3 class="mt-2 text-2xl font-bold">
                                  R$ 137,50
                                </h3>
                              </div>

                              <span
                                class="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700"
                              >
                                Plano Premium
                              </span>
                            </div>
                          </div>

                          <div
                            class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                          >
                            <p class="mb-4 text-sm text-slate-500">
                              Alunos por Plano
                            </p>

                            <div class="space-y-3">

                              <div>
                                <div class="mb-1 flex justify-between text-sm">
                                  <span>Premium</span>
                                  <span>55%</span>
                                </div>

                                <div class="h-2 rounded-full bg-slate-200">
                                  <div
                                    class="h-2 w-[55%] rounded-full bg-red-600"
                                  ></div>
                                </div>
                              </div>

                              <div>
                                <div class="mb-1 flex justify-between text-sm">
                                  <span>Mensal</span>
                                  <span>30%</span>
                                </div>

                                <div class="h-2 rounded-full bg-slate-200">
                                  <div
                                    class="h-2 w-[30%] rounded-full bg-slate-600"
                                  ></div>
                                </div>
                              </div>

                              <div>
                                <div class="mb-1 flex justify-between text-sm">
                                  <span>Trimestral</span>
                                  <span>15%</span>
                                </div>

                                <div class="h-2 rounded-full bg-slate-200">
                                  <div
                                    class="h-2 w-[15%] rounded-full bg-slate-400"
                                  ></div>
                                </div>
                              </div>

                            </div>
                          </div>

                        </div>
                      </div>
                    </template>

                  </div>
                </Transition>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>