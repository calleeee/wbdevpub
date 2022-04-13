import { writable } from 'svelte/store';

export const question = writable();
export const promise = writable();
export const searched = writable(false)