<script>
  import Header from './Header.svelte';
  import Sidebar from './Sidebar.svelte';
  import Content from './Content.svelte';
  import Cart from './Cart.svelte';
</script>

<Header />
<section class="w-full lg:max-w-6xl m-auto my-16 lg:flex items-start flex-row">
  <Sidebar />
  <Content />
  <Cart />
</section>
