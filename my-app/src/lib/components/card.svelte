<script lang="ts">
    export let title;
    export let color;
</script>

<main>
    <div class="cardBody" style="background-color: {color};">
        <h1 class="cardTitle">{title}</h1>
        <p class="description">Klicka här</p>
    </div>
</main>

<style>
    .cardBody{
        height: 250px;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 15px;
        box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.2);
        transition: all 200ms;
    }
    h1{
        margin-top: 33%;
        padding: 0px;
        font-family: 'Cairo', sans-serif;       
    }
    p{
        color: rgba(255, 255, 255, 0);
        transition: all 200ms;
        padding-top: 23px;
        font-family: 'Quicksand', sans-serif;
    }
    .cardBody:hover p{
        color: black;
    }
    .cardBody:hover{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    @media only screen and (orientation: portrait) and (max-width: 600px) {
        .cardBody{
            height: fit-content;
        }
        p{
            display: none;
        }
        h1{
            margin-top:20px;
            margin-bottom: 20px;
        }
    } 
    @media only screen and (orientation: landscape) and (max-width: 800px){
        .cardBody{
            height: fit-content;
            width: 190px;
        }
        p{
            display: none;
        }
        h1{
            margin-top:20px;
            margin-bottom: 20px;
            font-size: 20px;
        }
    }
</style>