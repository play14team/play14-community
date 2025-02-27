<script lang="ts">
  import Footer from '$lib/components/layout/Footer.svelte'
  import Header from '$lib/components/layout/Header.svelte'
  import { Calendar, Home, Settings, User } from 'lucide-svelte'
  import '../app.css'
  let { children } = $props()
</script>

<div class="flex h-screen flex-col">
  <Header />

  <!-- <div class="flex h-screen">
    <SideBar />

    <main class="flex-1 p-4">
      {@render children()}
    </main>
  </div> -->

  <div class="flex flex-1">
    <aside class="w-64 p-4">
      <ul class="menu bg-base-200 rounded-box w-56">
        <li>
          <a href="/">
            <div class="join">
              <Home /> Dashboard
            </div>
          </a>
        </li>
        <li>
          <a href="/events">
            <div class="join">
              <Calendar /> Events
            </div>
          </a>

          <ul>
            <li>
              <a href="/events/country"> By country </a>
            </li>
            <li>
              <a href="/events/location"> By location </a>
            </li>
            <li>
              <a href="/events/year"> By year </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/players">
            <div class="join">
              <User /> Players
            </div>
          </a>

          <ul>
            <li>
              <a href="/players/name"> By name </a>
            </li>
            <li>
              <a href="/players/role"> By role </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="/settings">
            <div class="join">
              <Settings /> Settings
            </div>
          </a>
        </li>
      </ul>
    </aside>

    <main class="flex-1 p-4">
      {@render children()}
    </main>
  </div>
  <Footer />
</div>
