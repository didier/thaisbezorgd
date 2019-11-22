<script>
  import gerechten from './gerechten.json';
  import { fade, fly } from 'svelte/transition';
  import AddButton from './AddButton.svelte';
</script>

<main class="lg:w-2/4 lg:mx-8 mx-4">
  <!-- <div>test</div> -->
  <ul>
    {#each gerechten as gerecht, index}
      <li transition:fly={{ y: 200, duration: 2000 + index * 100 }} class="flex flex-row mb-4 bg-white p-6 rounded-lg shadow-lg">
        <div class="w-6">{index + 1}.</div>
        <div class="flex-1">
          <h3 class="">{gerecht.name}</h3>
          <p>{gerecht.desc}</p>
        </div>
        <div class="flex-end">
          <AddButton {gerecht} />
        </div>
      </li>
    {/each}
  </ul>
</main>
