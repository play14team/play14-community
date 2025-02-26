<script lang="ts" module>
  // sample data
  const data = {
    versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
    navMain: [
      {
        title: 'Main',
        url: '#',
        items: [
          {
            title: 'Home',
            url: '/'
          },
          {
            title: 'Contact',
            url: '/contact'
          },
          {
            title: 'Avout',
            url: '/'
          }
        ]
      },
      {
        title: 'Your account',
        url: '#',
        items: [
          {
            title: 'Profile',
            url: '/profile'
          },
          {
            title: 'Settings',
            url: '/settings'
          }
        ]
      }
    ]
  }
</script>

<script lang="ts">
  import SearchForm from '$lib/components/search-form.svelte'
  import * as Sidebar from '$lib/components/ui/sidebar/index.js'
  import VersionSwitcher from '$lib/components/version-switcher.svelte'
  import type { ComponentProps } from 'svelte'

  let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props()
</script>

<Sidebar.Root {...restProps} bind:ref>
  <Sidebar.Header>
    <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
    <SearchForm />
  </Sidebar.Header>
  <Sidebar.Content>
    <!-- We create a Sidebar.Group for each parent. -->
    {#each data.navMain as group (group.title)}
      <Sidebar.Group>
        <Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            {#each group.items as item (item.title)}
              <Sidebar.MenuItem>
                <Sidebar.MenuButton isActive={item.isActive}>
                  {#snippet child({ props })}
                    <a href={item.url} {...props}>{item.title}</a>
                  {/snippet}
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            {/each}
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    {/each}
  </Sidebar.Content>
  <Sidebar.Rail />
</Sidebar.Root>
