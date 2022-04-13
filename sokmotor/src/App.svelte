<script>
    import Spinner from "./Spinner.svelte";
    import Results from "./Results.svelte";
    import Search from "./Search.svelte";
    import { promise } from "./stores.js";
    import Header from "./Header.svelte";
    import {searched} from "./stores.js"

    let sticky = false;

</script>

<svelte:window on:scroll={ () => {
        // Get the offset position of the navbar
        sticky = window.pageYOffset > 61.2;
        console.log(sticky);
    }
        
}></svelte:window>

<main class:searched={$searched}>
    <Header />
    <Search sticky={sticky}/>

    <div class:sticky id="searchAndResults">
        {#await $promise}
            <Spinner />
        {:then result}
            <Results json={result} />
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>

</main>

<style>
    :global(body) {
        background-color: rgb(243, 243, 243);
        padding: 0;
        margin: 0;
        
    }
    main{
        background-color: rgb(243, 243, 243);
        background-image: linear-gradient(0deg, rgba(0,0,0,0) 94.4%, rgba(243,243,243,1) 94.4%), url("https://images.pling.com/img/00/00/50/43/77/1271260/57cc779aea6d5de87cb491dbf5df352c96a1.jpg");
        background-repeat: no-repeat;
        transition: background-image 300ms;
    }
    #searchAndResults {
        height: 100vh;
        width: 100%;
        background-size: 400% 400%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 50px;
        padding-top: 3%;
        padding-left: 1% !important;
        padding-right: 1% !important;
        padding-bottom: 0%;
        box-sizing: border-box;
    }
    main.searched{
        background-image: none;        
    }


.sticky {
  margin-top: 44.4px;
}

</style>