<script>
    import Header from '$lib/components/header.svelte'
</script>

<main>
    <Header></Header>
    <div class="title">
        <h1>Bostads-</h1><h1>utveckling</h1>
    </div>
    <div class="content">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid delectus sapiente consequatur repellat fugit ipsam! Placeat labore aspernatur error numquam reiciendis explicabo, ducimus quam incidunt provident ex repudiandae, laudantium enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, sapiente tenetur est quidem soluta praesentium libero atque veniam repudiandae facilis. Dolores sed quia repudiandae rem corrupti, sapiente nam a debitis!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea alias aut itaque delectus labore illum? Voluptates ad, voluptate dolores, atque quasi esse eius, sunt quisquam placeat cum in facere ipsa.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam, impedit dignissimos incidunt, ullam aliquam hic molestias esse provident iste minus nulla, officia sit quia. Quae modi perferendis optio qui!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quod neque iure nulla alias sunt voluptates? Minus repudiandae quo dolorem deserunt, rerum excepturi incidunt necessitatibus nesciunt quis, blanditiis, praesentium inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit, reprehenderit consequuntur et vero architecto sint ducimus debitis ipsa quod sunt dolorem natus quis, voluptate iusto quaerat molestiae eius ab.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nobis iusto sapiente numquam ducimus harum quod error qui delectus velit placeat quia repellat asperiores, rem reiciendis! Illo libero neque aspernatur.</p>
    </div>
    <div class="vidden"><a href="https://www.viddenbostad.se"><h1>Vidden</h1><p>HEMSIDA</p></a></div>
</main>
<style>
    main{
        margin: 0%;
        padding: 0%;
        display: flex;
        flex-direction: column;
    }
    .title{
        background-image: url("https://www.viddenbostad.se/app/uploads/2021/04/9aeab54ada599be388e8baee50494b79-1-1920x1080.jpg");
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 70px);
    }
    .title h1{
        font-family: 'Quicksand', sans-serif;
        color: rgb(247, 247, 247);
        font-size: 100px;
        text-shadow: 0px 2px 9px rgba(0, 0, 0, 0.495);
        margin: 0%;
    }
    .vidden h1{
        font-family: 'Quicksand', sans-serif;
        font-size: 80px;
        text-shadow: 0px 2px 9px rgba(0, 0, 0, 0.495);
        margin: 0%;
        margin-top: 100px;
    }
    .vidden p{
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
    }
    a{
        text-decoration: none;
        color: white;
    }
    .content{
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
    }
    p{
        margin-left: 2.5%;
        max-width: 65%;
        font-size: 20px;
        font-family: 'Quicksand', sans-serif;
    }
    .vidden{
        background-image: url("https://www.viddenbostad.se/app/uploads/2021/04/64ec195f8aaf6171d297b31e7e76f62b-1920x1112.png");
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    a:hover {
        color: rgb(213, 213, 213);
    }
    @media only screen and (orientation: portrait) and (max-width: 600px) {
        .title h1{
            font-size: 55px;
            max-width: 100vw;
        }
        .vidden{
            background-size: cover;
            background-position: center;
            height: 300px;
        }
        p{
            max-width: 90%;
            font-size: 17px;
        }
    } 
    @media only screen and (orientation: landscape) and (max-width: 900px){
        .vidden{
            background-size: cover;
            background-position: center;
        }
    }
    @media only screen and (orientation: portrait) and (min-width: 600px){
        .vidden{
            height: 50vh;
        }
    }

</style>