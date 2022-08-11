<script lang="ts">

    import Icon from '$lib/components/icon.svelte'
    import { session } from "$app/stores";
    import type { RefType } from 'src/types'

    export let ref: RefType

</script>

<main>
    <div class="card">
        <h1>{ref.title}</h1>
        <p>{ref.descrip}</p>
        
        {#if $session.user}
            <form action="/Referensuppdrag?_method=delete" method="post">
                <input type="hidden" name="id" value={ref.id} />
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
    </div>

     
</main>
<style>
    .card{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        width: 300px;
        height: 250px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-radius: 15px;
        font-family: 'Quicksand', sans-serif;
        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
        overflow: hidden;
    }
    h1{
        margin: 0%;
        margin-top: 20px;
        padding: 0%;
        font-size: 25px;
    }
    p{
        margin: 0%;
        padding: 0%;
        font-size: 15px;
        width: 90%;
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
    form{
        margin-top: 120px;
    }
</style>