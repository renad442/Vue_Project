<template>
  <main
    class="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8"
  >
    <div class="text-center">
      <p class="text-base font-semibold text-purple-900 dark:text-purple-900">
        404
      </p>
      <h1
        class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white"
      >
        Page not found
      </h1>
      <p
        class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400"
      >
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <router-link
          to="/"
          class="rounded-md bg-purple-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-950 dark:bg-purple-900 dark:hover:bg-purple-950"
          >Go back home</router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "notFound",
};
</script>

<style scoped></style>
