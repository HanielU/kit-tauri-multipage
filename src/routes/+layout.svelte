<script lang="ts">
  import "@unocss/reset/tailwind.css";
  import "uno.css";
  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";

  let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
  <Navigation />
  <main class="flex-1 p-4">
    {@render children()}
  </main>
  <footer class="bg-gray-800 text-white p-4 text-center">
    <p>SvelteKit + Tauri Multi-page Demo</p>
  </footer>
</div>
