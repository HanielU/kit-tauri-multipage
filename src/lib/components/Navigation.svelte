<script lang="ts">
  import { page } from "$app/state";
</script>

<nav class="bg-gray-800 p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-white font-bold text-xl">SvelteKit + Tauri</div>
    <ul class="flex space-x-4">
      <li>
        <a
          href="/"
          class="text-white hover:text-gray-300 transition-colors {page.url.pathname === '/'
            ? 'underline'
            : ''}"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/about"
          class="text-white hover:text-gray-300 transition-colors {page.url.pathname === '/about'
            ? 'underline'
            : ''}"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/contact"
          class="text-white hover:text-gray-300 transition-colors {page.url.pathname === '/contact'
            ? 'underline'
            : ''}"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
</nav>
