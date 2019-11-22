import { writable } from 'svelte/store';

export const cartStore = writable([1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6]);

// cartStore.subscribe(value => {});

// cartStore.update(value => {
//   // value + [3, 3, 3, 3, 3, 3, 3, 3];
//   // console.log(value);
// });
