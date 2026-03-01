import { writable } from 'svelte/store';

// Store um zu verfolgen ob bereits innerhalb der App navigiert wurde
export const hasNavigated = writable(false);