<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";

  let appName = $state("Loading...");

  $effect(() => {
    (async () => {
      try {
        // Call our Tauri command to get the app name
        appName = await invoke("get_app_name");
      } catch (error) {
        console.error("Failed to invoke Tauri command:", error);
        appName = "SvelteKit + Tauri Multi-page Demo";
      }
    })();
  });
</script>

<div class="container mx-auto">
  <h1 class="text-3xl font-bold mb-6">Welcome to {appName}</h1>

  <div class="bg-white p-6 rounded-lg shadow-md">
    <p class="mb-4">
      This is a demonstration of a multi-page application built with SvelteKit and Tauri. Navigate
      through the pages using the navigation bar above.
    </p>

    <div class="bg-blue-100 p-4 rounded-md">
      <h2 class="text-xl font-semibold mb-2">Features</h2>
      <ul class="list-disc pl-5 space-y-1">
        <li>Multi-page routing with SvelteKit</li>
        <li>Desktop application with Tauri</li>
        <li>Responsive design with UnoCSS</li>
        <li>TypeScript support</li>
      </ul>
    </div>
  </div>
</div>
