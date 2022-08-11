<script lang="ts">
    import { fade, fly } from 'svelte/transition'
    import type { InfoType } from 'src/types'
    import Icon from '$lib/components/icon.svelte'
    import { session } from "$app/stores";

    export let info: InfoType
</script>

<main>
    <div class="info">
        <p class="date">{info.posted}</p>
        <p class="text">{info.content}</p>
    </div>

    {#if $session.user}
        <form action="/Information?_method=delete" method="post">
            <input type="hidden" name="id" value={info.id} />
            <button
                aria-label="Remove tweet"
                class="btn remove"
                title="Remove"
                type="submit">
                <div class="circle">
                    <Icon width="24" height="24" name="remove" />
                </div>
            </button>
        </form>
    {/if}    
    
</main>
<style>
    main{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .info{
        background-color: rgb(254, 254, 254);
        width: 70vw;
        height: fit-content;
        border-radius: 15px;
        box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);
        font-family: 'Quicksand',sans-serif;
    }
    .text{
        margin-left: 2%;
        max-width: 98%;
    }
    .date{
        color: rgba(0, 0, 0, 0.475);
        margin: 0%;
        padding: 0%;
        margin-left: 10px;
        margin-top: 10px;
    }
    .circle {
		width: 24px;
		height: 24px;
		display: grid;
		place-content: center;
		padding: var(--spacing-16);
		border-radius: 50%;
		transition: all 0.3s;
	}
    .remove:hover {
		color: hsl(0 100% 50%);
	}

	.remove:hover .circle {
		background-color: hsla(0 100% 50% / 4%);
	}
    button{
        border: none;
        background-color: rgba(255, 255, 255, 0);
    }
    @media only screen and (max-width: 600px) {
        .info{
            width: 90vw;
        }
        .text{
            margin-left: 7.5%;
            max-width: 85%;
        }
        .date{
            margin-left: 10px;
        }
    } 
</style>