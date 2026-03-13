import { writable } from 'svelte/store';

// Store um zu verfolgen ob bereits innerhalb der App navigiert wurde
export const hasNavigated = writable(false);

// Store um zu verfolgen, ob gerade ein Modal (z.B. Episoden-Detail) offen ist
export const isModalOpen = writable(false);