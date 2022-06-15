<script>

</script>

<main>
    <header>
        <img src="./Bilder/Rs-conversions-logo.jpeg" alt="Logotype" id="Logo">
        
        <div id="dropdown">
            <img id="dropArrow" src="./Bilder/images.png" alt="DropdownLogo">

            <!-- Dropdownkod tagen från W3Schools och ordentligt modifierad -->
            <div class="dropdown-content">
                <nav id="optionContainer">
                    <a href="/">Home</a>
                    <a href="/conversions">Conversion</a>
                    <a href="/shop">Shop Red Special Parts and Tools</a>
                    <a href="/about">About Us</a>
                    <a href="#0">Contact</a>
                </nav>
            </div>
        </div>
    </header>
</main>

<style>
    :global(body){
        padding: 0px;
    }

    main{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-width: 100%;
        font-family: 'Karla', sans-serif;
    }

    header{
        align-self: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: white;
    }

    #Logo{
        width: 35px;
        align-self: center;
        margin-bottom: none;
        padding-top: 5px;
    }
    #dropdown{
        align-self: center;
        margin-top: none;
        max-width: 100%;
    }
    #dropArrow{
        width: 15px;
        transition: transform 300ms;
        margin-bottom: 7px;
    }
    .dropdown-content {
        display: flex;
        position: absolute;
        transform: scaleY(0);
        transition: transform 150ms linear;
        transform-origin: top center;
        width: 100%;
        left: 0px;
        height: 50px;
        background-color: #ffffff;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    #optionContainer{
        margin: auto;
        width: auto;
    }
    .dropdown-content a {
        font-size: 20px;
        color: black;
        margin-left: 25px;
        margin-right: 25px;
        text-decoration: none;
    }
    #dropdown:hover .dropdown-content {
        transform: scaleY(1);
    }
    #dropdown:hover #dropArrow {
        transform: rotate(179deg);
    }
    @media(max-width: 1000px){
        .dropdown-content{
            height: auto;
        }
        #optionContainer{
            display: flex;
            flex-direction: column;
            font-size: 3.5vw;
            gap: 30px;
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
</style>
