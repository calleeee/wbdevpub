<script>
    import { promise } from "./stores.js";
    import {searched} from "./stores.js";
    let question;
    
    export let sticky;

    async function search() {
        const res = await fetch(
            `https://demo.dataverse.org/api/search?q=` + question
        );
        const json = await res.json();
        if (res.ok) {
            console.log(json)
            return json;
        } else {
            throw new Error(json);
        }
    }

    $: {
        console.log(sticky)
    }

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Arimo&family=Lobster+Two:ital@1&family=Mulish:wght@300&family=Qwitcher+Grypen&display=swap" rel="stylesheet">
		



<div class="searchBarContainer" class:sticky class:searched={$searched}>
    <h1 id="question" class:searched={$searched}>
        What are you looking for?
    </h1>

    <form class="searchBar"
        on:submit|preventDefault={() => {
            $promise = search();
            $searched = true
            console.log($searched)
        }}
    >
        <input bind:value={question} />
    </form>
</div>

<style>
    .searchBarContainer {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        justify-self: center;
        align-items: center;
        margin-top: 200px;  
    }
    
    .searchBar{
        width: 500px;
    }

    form,
    form input {
        width: 100%;
    }
    .searchBarContainer.searched{
        margin-top: 2px;
        animation: slideUp 300ms ease-in-out forwards;
    }
    #question{
        font-family: "Mulish", sans-serif;
        color: rgb(243, 243, 243);
        font-size: 30px;
        font-weight: 100;
        margin-bottom: 0px;
        margin-top: 0px;
    }
    #question.searched{
        display: none;
    }
    @keyframes slideUp{
        0%{
            margin-top: 200px;
        }
        100%{
            margin-top: 2px;
        }
    }

    @media (max-width: 600px){
        .searchBar{
            width: 80%;
        }
        #question{
            font-size: 25px;
        }
    }

    /* The sticky class is added to the header with JS when it reaches its scroll position */
    .sticky {
        position: fixed;
        top: 20px;
        width: 100%
    }

</style>