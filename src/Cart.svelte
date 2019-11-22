<script>
  import gerechten from './gerechten.json';
  import { onMount, beforeUpdate } from 'svelte';
  import { fade } from 'svelte/transition';
  import { writable } from 'svelte/store';

  import { concatArray } from './funcs.js';
  import { cartItems, cartOpen } from './cart.js';

  beforeUpdate(() => {
    // populateCart();
  });
  // $: cartItems.reduce((item, amount) => {
  //   item[amount] = (item[amount] || 0) + 1;
  //   return item;
  // });
  $: shoppingCart = concatArray(cartItems);
  // $: console.log(shoppingCart);

  // -> {id, quantity}
</script>

<section class="w-1/5 bg-white shadow-md py-6 px-4 rounded-lg">
  <h2 class="text-2xl mb-2">Uw bestelling:</h2>
  <ul>
    {#each shoppingCart as item, index}
      <li class="flex space-between">
        <div class="text-blue-800 font-bold mr-2">{item.count}x</div>
        {gerechten[item.value].name}
        <div class="text-blue-800 font-semibold ml-2">€{(gerechten[item.value].price * item.count).toFixed(2)}</div>
      </li>
    {/each}
  </ul>
</section>
