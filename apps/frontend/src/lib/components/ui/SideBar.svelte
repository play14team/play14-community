<script>
  import { Home } from 'lucide-svelte'
  let isCollapsed = $state(false)
</script>

<aside class={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} bg-base-200`}>
  <div class="flex items-center justify-between p-4">
    <span
      class={`text-lg font-bold transition-opacity duration-300 ${isCollapsed ? 'hidden opacity-0' : 'opacity-100'}`}
    >
      My Sidebar
    </span>
    <button
      class="btn btn-ghost btn-sm"
      onclick={() => (isCollapsed = !isCollapsed)}
      aria-label="Toggle Sidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </div>

  <!-- Menu -->
  <ul class="menu p-4">
    <!-- Menu Item 1 -->
    <li>
      <a href="/" class="flex items-center gap-4">
        <Home />
        <span
          class={`transition-opacity duration-300 ${isCollapsed ? 'hidden opacity-0' : 'opacity-100'}`}
        >
          Dashboard
        </span>
      </a>
    </li>

    <!-- Menu Item 2 -->
    <li>
      <a class="flex items-center gap-4">
        <img src="https://via.placeholder.com/40" alt="Settings" class="h-8 w-8 rounded-full" />
        <span
          class={`transition-opacity duration-300 ${isCollapsed ? 'hidden opacity-0' : 'opacity-100'}`}
        >
          Settings
        </span>
      </a>
    </li>

    <!-- Nested Menu -->
    <li>
      <details class={`${isCollapsed ? 'hidden' : ''}`} open={!isCollapsed}>
        <summary class="flex items-center gap-4">
          <img src="https://via.placeholder.com/40" alt="More" class="h-8 w-8 rounded-full" />
          <span
            class={`transition-opacity duration-300 ${isCollapsed ? 'hidden opacity-0' : 'opacity-100'}`}
          >
            More
          </span>
        </summary>
        <ul class="pl-8">
          <li>
            <a class="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Submenu 1"
                class="h-8 w-8 rounded-full"
              />
              <span
                class={`transition-opacity duration-300 ${isCollapsed ? 'hidden opacity-0' : 'opacity-100'}`}
              >
                Submenu 1
              </span>
            </a>
          </li>
          <li>
            <a class="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Submenu 2"
                class="h-8 w-8 rounded-full"
              />
              <span
                class={`transition-opacity duration-300 ${isCollapsed ? 'hidden opacity-0' : 'opacity-100'}`}
              >
                Submenu 2
              </span>
            </a>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</aside>
