<script lang="ts">
  import LayoutFooter from '$lib/components/LayoutFooter.svelte'
  import '../app.css'
  let { children } = $props()
</script>

<div class="flex h-screen flex-col">
  <!-- Header -->
  <header class="p-4">
    <div class="mx-auto flex items-center justify-between">
      <h1 class="text-xl font-bold">#play14</h1>
      <div class="breadcrumbs text-sm">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Dashboard</li>
        </ul>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="/" class="hover:underline">Home</a></li>
          <li><a href="/about" class="hover:underline">About</a></li>
          <li><a href="/contact" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="flex flex-1">
    <!-- Sidebar -->
    <aside class="w-64 p-4">
      <ul class="space-y-2">
        <li><a href="/" class="block rounded p-2 hover:bg-gray-700">Dashboard</a></li>
        <li><a href="/profile" class="block rounded p-2 hover:bg-gray-700">Profile</a></li>
        <li><a href="/settings" class="block rounded p-2 hover:bg-gray-700">Settings</a></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-4">
      {@render children()}
    </main>
  </div>
  <LayoutFooter />
</div>
