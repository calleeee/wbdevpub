<script>
    export let json;
    import { fly, fade, slide, draw } from "svelte/transition";
</script>

{#if json && "data" in json && "items" in json.data && json.data.items.length > 0}
    <div class="column">
        {#each json.data.items as item}
            <div id="results" transition:fade on:click={()=>{window.location = item.url}}>
                <h1 class="resultTitle">{item.name}</h1>
                {#if "description" in item}
                    <p class="description">{item.description}</p>
                {:else if !("description" in item)}
                    <p class="description">There is no description for this item</p>
                {/if}    
                <p id="fileType">Type: {item.type}</p>

            </div>
        {/each}
    </div>
{:else if json}
    <div class="column">
        <p transition:fade>Sorry, we couldn't find what you're looking for</p>
    </div>
{/if}

<style>
    .resultTitle{
        display: -webkit-box;
        margin-bottom: none;
        font-size: 25px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .description{
        display: -webkit-box;
        height: 60px;
        font-size: 15px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 0;
    }

    #results{
        background-color: rgb(235, 235, 235);
        font-size: large;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        word-wrap: break-word;
        margin-top: none;
        margin-bottom: none;
        border-radius: 3px;
    }
    .column {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        /* overflow-y: scroll; */
        box-sizing: border-box;
        padding-left: 10%;
        padding-right: 10%;
        width: 100%;
        color: rgb(15, 15, 15);
    }

    #results:hover{
        animation: colorchange 300ms ease-in-out forwards;
        /* background-color: rgb(196, 196, 196); */
    }

    @keyframes colorchange{
        0%{
            background-color: rgb(235, 235, 235);
        }
        100%{
            background-color: rgb(185, 185, 185);
        }
    }

    @media(max-width: 450px){
        #results{
            border-bottom: black 2px;
        }
    }
</style>