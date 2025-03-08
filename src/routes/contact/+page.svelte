<script lang="ts">
  let name = $state("");
  let email = $state("");
  let message = $state("");
  let submitted = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    // In a real app, you would send this data to a server or use Tauri commands
    console.log("Form submitted:", { name, email, message });
    submitted = true;

    // Reset form after submission
    setTimeout(() => {
      name = "";
      email = "";
      message = "";
      submitted = false;
    }, 3000);
  }
</script>

<div class="container mx-auto">
  <h1 class="text-3xl font-bold mb-6">Contact Us</h1>

  <div class="bg-white p-6 rounded-lg shadow-md">
    {#if submitted}
      <div class="bg-green-100 text-green-700 p-4 rounded-md mb-4">
        Thank you for your message! We'll get back to you soon.
      </div>
    {/if}

    <form onsubmit={handleSubmit} class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          bind:value={name}
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          bind:value={message}
          required
          rows="4"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>

    <div class="mt-6 pt-6 border-t border-gray-200">
      <h2 class="text-xl font-semibold mb-2">Other Ways to Reach Us</h2>
      <div class="space-y-2">
        <p><strong>Email:</strong> contact@example.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 SvelteKit Lane, Tauri City, TS 12345</p>
      </div>
    </div>
  </div>
</div>
