<script>
  import Cart from './Cart.svelte';
  import './cart.js';
  // import { notify } from './notifs.js';

  const links = [{ name: 'Home', route: '#home' }, { name: 'Menu', route: '#menu' }, { name: 'What', route: '#what' }];
  $: cartOpen = false;
  function toggleCart() {
    cartOpen = !cartOpen;
  }
</script>

<header class="bg-white py-6">
  <h2 class="m-auto max-w-6xl text-4xl font-semibold px-6 md:px-0">Thaisbezorgd</h2>
  <nav class="flex justify-between flex-wrap md:max-w-xs lg:max-w-6xl m-auto">
    <ul class="flex align-center">
      {#each links as link}
        <li class="mx-6 lg:mx-0 lg:mr-8">
          <a href={link.route}>{link.name}</a>
        </li>
      {/each}
    </ul>
    <ul class="flex align-center">
      <li class="mx-6 lg:mx-0 lg:mr-8">
        <!-- <button
          on:click={() => {
            toggleCart();
          }}>
          Mand.
        </button>
        {#if cartOpen}
          <Cart />
        {/if} -->
      </li>
    </ul>
  </nav>

</header>
