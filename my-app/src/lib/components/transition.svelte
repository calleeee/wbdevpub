<script lang="ts">
    import {fade} from 'svelte/transition'
    import { get_slot_changes } from "svelte/internal";

    export let url: URL;
</script>

{#key url}
    <div
        in:fade={{duration: 350}}        
    >
        <slot />
    </div>
{/key}