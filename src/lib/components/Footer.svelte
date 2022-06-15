<script>

</script>

<main>
    <footer>
        <div id="footerContent">
            <div class="column">
                <h1 class="footerTitle">Move around</h1>
                <a href="/shop">
                    <div class="footerButton">Shop</div>
                </a>
                <a href="/conversions">
                    <div class="footerButton">Conversions</div>
                </a>
                <div class="footerButton">News and Events</div>
                <div class="footerButton">What we do</div>
                <div class="footerButton">Contact</div>
                <div class="footerButton">User Response</div>
            </div>
            <div class="column">
                <h1 class="footerTitle">Warranties</h1>
                <div class="footerButton">Guyton Guitar Co. Warranty</div>
                <div class="footerButton">Carpinteri Guitars Warranty</div>
            </div>
            <div class="column">
                <h1 class="footerTitle">Info</h1>
                <div class="footerButton">Information About Installation</div>
                <div class="footerButton">BMG Setup</div>
            </div>
        </div>
    </footer>
</main>

<style>
    :global(body){
        padding: 0px;
    }
    main{
        background-color: rgb(242, 242, 242);
    }
    #footerContent{
        display: flex;
        flex: row;
        gap: 30px;
        padding-left: 30px;
        padding-bottom: 20px;
        padding-top: 20px;
    }
    .column{
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .footerTitle{
        font-family: 'Quicksand', sans-serif;
        font-size: 25px;
        padding: 0px;
        margin: 0px;
    }
    .footerButton{
        font-size: 14px;
        background-color: rgb(247, 247, 247);
        border-radius: 4px;
        padding: 4px;
        transition: all 200ms ease-in-out;
        font-family: 'Karla', sans-serif;
    }
    .footerButton:hover{
        box-shadow: 0px 4px 18px 0px rgba(0,0,0,0.2);
    }
    a{
        text-decoration: none;
        color: black;
    }
    @media(max-width: 1000px) and (orientation: portrait){
        #footerContent{
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            padding-left: 0px;
            width: 90%;
        }
    }
</style>