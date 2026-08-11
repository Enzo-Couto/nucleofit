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
              class="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Solicitar Demonstração
            </button>

            <button
              class="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
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
                  <div class="rounded-lg bg-red-600 px-3 py-2">
                    Dashboard
                  </div>

                  <div class="px-3 py-2 text-slate-300">
                    Alunos
                  </div>

                  <div class="px-3 py-2 text-slate-300">
                    Financeiro
                  </div>

                  <div class="px-3 py-2 text-slate-300">
                    Treinos
                  </div>

                  <div class="px-3 py-2 text-slate-300">
                    Relatórios
                  </div>
                </nav>
              </aside>

              <!-- Conteúdo -->
              <main class="flex-1 bg-slate-50 p-6">
                <h2 class="mb-6 text-xl font-bold text-slate-900">
                  Dashboard
                </h2>

                <!-- KPIs -->
                <div class="mb-6 grid grid-cols-2 gap-4">
                  <div class="rounded-xl bg-white p-4 shadow-sm">
                    <p class="text-sm text-slate-500">
                      Alunos Ativos
                    </p>

                    <h3 class="mt-2 text-2xl font-bold">
                      1.284
                    </h3>
                  </div>

                  <div class="rounded-xl bg-white p-4 shadow-sm">
                    <p class="text-sm text-slate-500">
                      Receita Mensal
                    </p>

                    <h3 class="mt-2 text-2xl font-bold text-green-600">
                      R$ 48.250
                    </h3>
                  </div>
                </div>

                <!-- Gráfico -->
                <div class="mb-6 rounded-xl bg-white p-5 shadow-sm">
                  <p class="mb-4 text-sm text-slate-500">
                    Receita dos últimos meses
                  </p>

                  <div class="flex h-40 items-end justify-between gap-2">
                    <div class="h-16 w-full rounded-t bg-red-300"></div>
                    <div class="h-24 w-full rounded-t bg-red-400"></div>
                    <div class="h-20 w-full rounded-t bg-red-500"></div>
                    <div class="h-32 w-full rounded-t bg-red-500"></div>
                    <div class="h-28 w-full rounded-t bg-red-600"></div>
                    <div class="h-36 w-full rounded-t bg-red-700"></div>
                  </div>
                </div>

                <!-- Últimas Matrículas -->
                <div class="rounded-xl bg-white p-5 shadow-sm">
                  <p class="mb-4 text-sm text-slate-500">
                    Últimas Matrículas
                  </p>

                  <div class="space-y-3">
                    <div class="flex justify-between">
                      <span>João Silva</span>
                      <span class="font-medium text-green-600">
                        Ativo
                      </span>
                    </div>

                    <div class="flex justify-between">
                      <span>Maria Oliveira</span>
                      <span class="font-medium text-green-600">
                        Ativo
                      </span>
                    </div>

                    <div class="flex justify-between">
                      <span>Pedro Santos</span>
                      <span class="font-medium text-green-600">
                        Ativo
                      </span>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>