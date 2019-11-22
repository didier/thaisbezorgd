<script>
  import { kebabCase } from './funcs.js';
  const categories = [
    { id: 0, title: 'Voorgerechten' },
    { id: 1, title: 'Soepen' },
    { id: 2, title: 'Salades' },
    { id: 3, title: 'Kipgerechten' },
    { id: 4, title: 'Biefstukgerechten' },
    { id: 5, title: 'Visgerechten' },
    { id: 6, title: 'Garnalen' },
    { id: 7, title: 'Specialiteiten' },
    { id: 8, title: 'Noodles' },
    { id: 9, title: 'Vegetarisch' },
    { id: 10, title: 'Bijgerechten' },
    { id: 11, title: 'Dranken' },
    { id: 12, title: 'Test' }
  ];
</script>

<aside class="lg:sticky lg:top-16 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg mx-4 lg:mx-0 mb-6">
  <h2 class="text-2xl mb-2">Menu</h2>
  <nav>
    <ul class="flex align-center flex-col m-auto max-w-6xl">
      {#each categories as category}
        <li class="mr-8 tracking-wide bg-gray-200 hover:bg-gray-300 my-1 py-2 px-4 rounded-lg">
          <a href="#{kebabCase(category.title)}">{category.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>
