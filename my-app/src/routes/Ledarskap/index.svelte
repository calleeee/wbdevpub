<script>
    import Header from '$lib/components/header.svelte'
</script>

<main>
    <Header></Header>
    <div class="title">
        <h1>Ledarskap</h1>
    </div>
    <div class="content">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid delectus sapiente consequatur repellat fugit ipsam! Placeat labore aspernatur error numquam reiciendis explicabo, ducimus quam incidunt provident ex repudiandae, laudantium enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, sapiente tenetur est quidem soluta praesentium libero atque veniam repudiandae facilis. Dolores sed quia repudiandae rem corrupti, sapiente nam a debitis!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea alias aut itaque delectus labore illum? Voluptates ad, voluptate dolores, atque quasi esse eius, sunt quisquam placeat cum in facere ipsa.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam, impedit dignissimos incidunt, ullam aliquam hic molestias esse provident iste minus nulla, officia sit quia. Quae modi perferendis optio qui!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quod neque iure nulla alias sunt voluptates? Minus repudiandae quo dolorem deserunt, rerum excepturi incidunt necessitatibus nesciunt quis, blanditiis, praesentium inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit, reprehenderit consequuntur et vero architecto sint ducimus debitis ipsa quod sunt dolorem natus quis, voluptate iusto quaerat molestiae eius ab.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus nobis iusto sapiente numquam ducimus harum quod error qui delectus velit placeat quia repellat asperiores, rem reiciendis! Illo libero neque aspernatur.</p>
    </div>
    
</main>
<style>
    main{
        margin: 0%;
        padding: 0%;
        display: flex;
        flex-direction: column;
    }
    .title{
        background-image: url("/Images/jason-goodman-Oalh2MojUuk-unsplash.jpg");
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
    @media only screen and (max-width: 600px) {
        .title h1{
            font-size: 50px;
            max-width: 100vw;
        }
        p{
            max-width: 90%;
            font-size: 17px;
        }
    } 
</style>