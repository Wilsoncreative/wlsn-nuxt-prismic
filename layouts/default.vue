<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-grow">
      <Nuxt />
    </main>
    <TheFooter />
    <GdprNotice />
  </div>
</template>

<style lang="postcss" scoped>
html,
body {
  @apply min-h-screen;
}
</style>
