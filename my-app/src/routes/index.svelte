<script>
    import Header from '$lib/components/header.svelte'
    import Card from "$lib/components/card.svelte";
</script>

<main>
    <Header></Header>

    <div id="firstSegment">
        <div class="content">
            <a href="/HR">
                <Card title={"HR"} color={"white"}></Card>
            </a>
            <a href="/Rekrytering">
                <Card title={"Rekrytering"} color={"white"}></Card>
            </a>
            <a href="/Ledarskap">
                <Card title={"Ledarskap"} color={"white"}></Card>
            </a>
            <a href="/Bostadsutveckling">
                <Card title={"Bostadsutveckling"} color={"white"}></Card>
            </a>
        </div>
        <a href="/Kontakt" class="kontaktClick">
            <div class="kontakt">
                <h1>Kontakt</h1>
            </div>
        </a>
    </div>
</main>

<style>
    #firstSegment{
        display: flex;
        flex-direction: column;
        height: calc(100vh - 70px);
        background-image: linear-gradient(0deg, rgba(255,255,255,0) 19%, rgba(255,255,255,1) 100%), url("/Images/jay-mantri-TFyi0QOx08c-unsplash.jpg");
        background-size: cover;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .content{
        display: flex;
        flex-direction: row;
        gap: 20px;
        
    }
    a{
        color: black;
        text-decoration: none;
    }
    .kontakt{
        background-color: white;
        font-family: 'Quicksand', sans-serif;
        border-radius: 7px;
        transition: all 200ms;
        margin-top: 80px;
        box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.2);
    }
    .kontakt h1{
        margin: 0px;
        padding-top: 10px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 12px;
        font-size: 25px;
        
    }
    .kontakt:hover{
        background-color: rgb(242, 242, 242);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    @media only screen and (orientation: portrait) and (max-width: 600px) {
        #firstSegment{
            height: 100vh;
            background-size: cover;
        }
        .content{
            flex-direction: column;
        }
        .kontakt{
            margin-top: 20px;
        }
    } 
    @media only screen and (min-width: 601px) and (max-width: 1100px){
        .kontakt{
            margin-top: 10px;
        }
        .content{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
</style>