<script>
    export let name;
    export let image;
    export let price;
</script>

<main>
    <div id="container">
        <img src={image} alt="">
        <h1>{name}</h1>
        <h2>{price} $</h2>
        <p>Click to view</p>
    </div>
</main>

<style>
    #container{
        display: flex;
        flex-direction: column;
        background-color: rgb(242, 242, 242);
        border-radius: 7px;
        transition: all 200ms ease-in-out;
        overflow: hidden;
    }
    #container img{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
    }
    #container h1{
        font-family: 'Karla', sans-serif;
        font-size: 27px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 0px;
        text-align: center;
    }
    #container h2{
        font-family: 'Quicksand', sans-serif;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        margin-bottom: 0px;
    }
    #container p{
        font-family: 'Karla', sans-serif;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        margin-bottom: 0px;
        transition: all 200ms ease-in-out;
        color: rgb(242, 242, 242);
        margin-bottom: 10px;
    }
    #container:hover{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-radius: 10px;
    }
    #container:hover p{
        color: rgb(91, 91, 91);
    }
</style>