<div class="container mx-auto">
  <h1 class="text-3xl font-bold mb-6">About This App</h1>

  <div class="bg-white p-6 rounded-lg shadow-md">
    <p class="mb-4">
      This application demonstrates how SvelteKit can be used to create multi-page Tauri
      applications. SvelteKit provides the routing capabilities, while Tauri wraps everything into a
      native desktop application.
    </p>

    <h2 class="text-xl font-semibold mb-2">How It Works</h2>
    <p class="mb-4">
      SvelteKit uses file-based routing, where each page is represented by a +page.svelte file in
      the routes directory. The navigation between pages is handled by SvelteKit's client-side
      router, which makes transitions smooth and fast.
    </p>

    <div class="bg-yellow-100 p-4 rounded-md mb-4">
      <h3 class="font-semibold mb-1">SvelteKit Benefits</h3>
      <ul class="list-disc pl-5 space-y-1">
        <li>File-based routing</li>
        <li>Fast page transitions</li>
        <li>Code splitting</li>
        <li>TypeScript integration</li>
      </ul>
    </div>

    <div class="bg-green-100 p-4 rounded-md">
      <h3 class="font-semibold mb-1">Tauri Benefits</h3>
      <ul class="list-disc pl-5 space-y-1">
        <li>Small binary size</li>
        <li>Native performance</li>
        <li>Security-focused architecture</li>
        <li>Cross-platform support</li>
      </ul>
    </div>
  </div>
</div>
