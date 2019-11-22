<script>
  // import { cartOpen } from './cart.js';

  import { cartStore } from './store.js';
  export let gerecht = {};

  function addToCart(id) {
    cartStore.update(value => {
      return value + id;
      console.log(value);
    });
  }
</script>

<!-- <button
  on:click={() => {
    addToCart(gerecht.id);
  }}>
  €{gerecht.price.toFixed(2)}
</button> -->

<button on:click={() => addToCart(gerecht.id)}>€{gerecht.price.toFixed(2)}</button>
