<script lang="ts">
  import '../app.css'
  let { children } = $props()
</script>

<div class="flex h-screen flex-col">
  <!-- Header -->
  <header class="bg-gray-800 p-4 text-white">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-xl font-bold">My App</h1>
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
    <aside class="w-64 bg-gray-100 p-4">
      <ul class="space-y-2">
        <li><a href="/" class="block rounded p-2 hover:bg-gray-200">Dashboard</a></li>
        <li><a href="/settings" class="block rounded p-2 hover:bg-gray-200">Settings</a></li>
        <li><a href="/profile" class="block rounded p-2 hover:bg-gray-200">Profile</a></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-4">
      {@render children()}
    </main>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-800 p-4 text-white">
    <div class="container mx-auto text-center">
      <p>&copy; 2025 My App. All rights reserved.</p>
    </div>
  </footer>
</div>
