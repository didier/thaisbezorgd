<script>
  import gerechten from './gerechten.json';
  // import { onMount, beforeUpdate } from 'svelte';
  // import { fade } from 'svelte/transition';
  // import { writable } from 'svelte/store';
  // import { cartItems, cartOpen } from './cart.js';

  import { concatArray } from './funcs.js';
  import { cartStore } from './store.js';
  let cart = $cartStore;

  console.log(cart);

  // cartStore.subscribe();
  // $: beforeUpdate(() => {});
  $: shoppingCart = concatArray(cart);
  // console.log(shoppingCart);

  // $: shoppingCart = cart;
  let current = 0;
  let total = 0;
</script>

<section class="w-1/4 bg-white shadow-md py-6 px-4 rounded-lg">
  <h2 class="text-2xl mb-2">Uw bestelling:</h2>
  <ul>
    {#each shoppingCart as { id, count }, index}
      <!-- {(total = current + gerechten[id].price * count)} -->
      <li class="flex space-between">
        <div class="text-blue-800 font-bold mr-2">{count}x</div>
        {gerechten[id].name}
        <div class="text-blue-800 font-semibold ml-2">€{(gerechten[id].price * count).toFixed(2)}</div>
      </li>
      <!-- {(total += gerechten[id].price * count)} -->
    {/each}

  </ul>
  Totaal: €{total}d
</section>
