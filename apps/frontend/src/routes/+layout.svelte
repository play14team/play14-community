<script lang="ts">
  import { SvelteUIProvider } from '@svelteuidev/core'
  import '../app.css'
  let { children } = $props()
</script>

<SvelteUIProvider themeObserver="dark">
  <header>Header</header>
  <aside>Nav</aside>
  <main>
    {@render children()}
  </main>
  <footer>Footer</footer>
</SvelteUIProvider>
