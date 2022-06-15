<script>
    import ConversionInfo from "$lib/components/ConversionInfo.svelte";
</script>
<main>
    <div id="firstSegment">
        <video src="/Bilder/ConversionVideo.mp4" muted autoplay>
            <track kind="captions">
        </video>
    </div>
    <div id="informationSegment">
        <div id="container">
            <ConversionInfo leftImage={"/Bilder/271592340_1232909207203377_1207834991357149012_n.jpg"} rightImage={"./Bilder/272810645_1245389322622032_8843044465435289952_n.jpg"} title={"Inaccurate minus In"} description={"We recieve your BMG or Burns Red Special and turn it into something truly special, pun very much intended. A complete overhall. Looks, playability, you name it."} orientation={"left"}></ConversionInfo>
        </div>
    </div>
</main>
<style>
    #firstSegment{
        height: calc(100vh - 75px);
        display: flex;
        flex-direction: column;
        background-color: white;
        justify-content: center;
        align-items: center;
        align-content: center;
        overflow: hidden;
    }
    video{
        width: 100%;
    }
    #informationSegment{
        background-color: white;
        display: flex;
    }
    #container{
        margin-top: 40px;
        margin-bottom: 40px;
    }
</style>