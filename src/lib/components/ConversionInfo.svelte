<script>
    export let leftImage;
    export let title;
    export let description;
    export let rightImage;
    export let orientation;

    let oppositeOrientation;
        
    if (orientation == "left"){
            oppositeOrientation = "right"
        }else if (orientation == "right"){
            oppositeOrientation = "left"
        }
    
</script>
<main>
    <div id={orientation}>
        {#if orientation == "left"}
        <div id="text">
            <h1 data-aos="fade-in">{title}</h1>
            <p data-aos={"fade-" + oppositeOrientation} data-aos-delay="300">{description}</p>
        </div>
        {/if}
        <img src={leftImage} alt="conversion" id="leftImage" data-aos="fade-up" data-aos-delay="600">
        <img src={rightImage} alt="conversion" id="rightImage" data-aos="fade-down" data-aos-delay="1000">
        {#if orientation == "right"}
        <div id="text">
            <h1 data-aos="fade-in">{title}</h1>
            <p data-aos={"fade-" + oppositeOrientation} data-aos-delay="300">{description}</p>
        </div>
        {/if}
    </div>
</main>
<style>
    #left{
        display: grid;
        grid-template-columns: 50% 25% 25%;
        margin-left: auto;
        margin-right: auto;
    }
    #right{
        display: grid;
        grid-template-columns: 25% 25% 50%;
        margin-left: auto;
        margin-right: auto;
    }
    #text{
        display: flex;
        flex-direction: column;
        margin-left: 7%;
    }
    #text h1{
        font-family: 'Quicksand', sans-serif;
        font-size: 45px;
        margin-bottom: 0%;
    }
    #text p{
        font-family: 'Karla', sans-serif;
        font-size: 36px;
        margin: 0%;
        margin-top: 30px;
        margin-left: 7%;
        padding-right: 10px;
    }
    #leftImage{
        width: 90%;
        border-radius: 5px;
        margin-top: 98px;
        margin-bottom: 18px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    #rightImage{
        width: 90%;
        border-radius: 5px;
        margin-top: 18px;
        margin-bottom: 18px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
</style>