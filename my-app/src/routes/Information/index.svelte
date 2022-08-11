<script lang="ts">
    import { session } from "$app/stores";
    import Info from "$lib/components/info.svelte";
    import type { InfoType } from 'src/types'
    import Header from '$lib/components/header.svelte'

    export let infos: InfoType[];
</script>

<Header></Header>
<main>
    
    <div class="pageTitle">
        <h1>Information</h1>
    </div>
    <div class="infoStream">
        {#each infos as info (info.id)}
            <Info {info}></Info>
        {/each}
            
    </div>

    {#if $session.user}
    <form action="/Information" method="POST">
        <textarea type="textarea" rows=6 id="info" name="info" placeholder="Info (1 stycke)"></textarea>
        <input type="submit" value="Submit">
    </form> 
    {/if}
</main>
<style>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        height: calc(100vh - 70px);
    }
    .pageTitle{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        color: black;
        font-family: 'Quicksand',sans-serif;
        font-size: 17px;
        box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.146);
    }
    .pageTitle h1{
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0%;
    }
    form{
        margin-top: 50px;
    }
    .infoStream{
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>