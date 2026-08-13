<template>
  <div class="min-h-screen bg-slate-100">
    <div class="grid min-h-screen lg:grid-cols-2">

      <!-- Branding -->
      <div
        class="hidden lg:flex flex-col justify-center bg-slate-900 p-16 text-white"
      >
        <h1 class="text-5xl font-bold">
          NúcleoFit
        </h1>

        <p class="mt-4 text-xl text-slate-300">
          Gestão inteligente para academias.
        </p>

        <div class="mt-10 space-y-4">
          <div>✓ Gestão de alunos</div>
          <div>✓ Controle financeiro</div>
          <div>✓ Prescrição de treinos</div>
          <div>✓ Relatórios completos</div>
        </div>
      </div>

      <!-- Form -->
      <div
        class="flex items-center justify-center p-6"
      >
        <div
          class="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
        >
          <h2
            class="text-3xl font-bold text-slate-900"
          >
            Entrar
          </h2>

          <p
            class="mt-2 text-slate-500"
          >
            Acesse sua conta NúcleoFit.
          </p>

          <form class="mt-8 space-y-4">
            <div>
              <label class="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                class="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium">
                Senha
              </label>

              <input
                type="password"
                class="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-red-500 focus:outline-none"
              />
            </div>

            <button
              class="w-full cursor-pointer rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Entrar
            </button>
          </form>

          <div class="mt-6 text-center">
            <a
              href="#"
              class="text-red-600 hover:underline"
            >
              Esqueci minha senha
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>