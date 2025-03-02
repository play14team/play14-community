<script>
  import Avatar from './Avatar.svelte'
  import HeaderMenu from './HeaderMenu.svelte'
  import SearchBar from './SearchBar.svelte'
  import ThemeToggle from './ThemeToggle.svelte'
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
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
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost text-xl">#play14</a>
  </div>
  <div class="navbar-end">
    <HeaderMenu />
    <SearchBar />
    <ThemeToggle />
    <Avatar />
  </div>
</div>
