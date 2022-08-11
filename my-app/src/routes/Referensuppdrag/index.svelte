<script lang="ts">
    import {session} from '$app/stores'
    import Referens from "$lib/components/referens.svelte";
    import type { RefType } from 'src/types'
    import Header from '$lib/components/header.svelte'

    export let refs: RefType[];
</script>

<Header></Header>
<main>
    
    <div class="pageTitle">
        <h1>Referensuppdrag</h1>
    </div>
    <div class="content">
        {#each refs as ref (ref.id)}
            <Referens {ref}></Referens>
        {/each}
    </div>

    {#if $session.user}
        <form action="/Referensuppdrag" method="POST">
            <input type="text" name="title" placeholder="Titel">
            <textarea name="descrip" placeholder="Beskrivning"></textarea>
            <input type="submit" name="submit">
        </form>
    {/if}
</main>
<style>
    main{
        margin: 0%;
        padding: 0%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .pageTitle{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        color: black;
        font-family: 'Quicksand',sans-serif;
        font-size: 17px;
        box-shadow: 0px 6px 8px 0px rgba(0,0,0,0.2);
    }
    .pageTitle h1{
        margin-top: 11px;
        margin-bottom: 10px;
        padding: 0%;
    }
    .content{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 30px;
        margin-top: 40px;
        margin-bottom: 50px;
    }
    form{
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
    }
    @media only screen and (max-width: 600px){
        .content{
            grid-template-columns: 1fr;
        }
    }
    @media only screen and (max-width: 1200px) and (min-width: 601px){
        .content{
            grid-template-columns: 1fr 1fr;
        }
    }
</style>