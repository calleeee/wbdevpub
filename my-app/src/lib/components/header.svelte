<script lang="ts">
    import { session } from '$app/stores'
</script>

<main>
    <header>
        <a href="/">
            <h1>KREAKOM</h1>
        </a>
        <div id="dropdown">
            <div id="dropdownButton">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <div class="dropdownContent">
                <a href="/Kontakt">
                    <div class="dropdownOption"><h2>Kontakt</h2></div>
                </a>
                <a href="/HR">
                    <div class="dropdownOption"><h2>HR</h2></div>
                </a>
                <a href="/Rekrytering">
                    <div class="dropdownOption"><h2>Rekrytering</h2></div>
                </a>
                <a href="/Ledarskap">
                    <div class="dropdownOption"><h2>Ledarskap</h2></div>
                </a>
                <a href="/Bostadsutveckling">
                    <div class="dropdownOption"><h2>Bostadsutveckling</h2></div>
                </a>
                <a href="/Information">
                    <div class="dropdownOption"><h2>Information</h2></div>
                </a>
                <a href="/Referensuppdrag">
                    <div class="dropdownOption"><h2>Referensuppdrag</h2></div>
                </a>
                {#if !$session.user}
                    <a href="/Login/login">
                        <div class="admin">
                            <h2>Admin</h2>
                        </div>
                    </a>
                {/if}
                {#if $session.user}
                    <a href="/Login/logout">
                        <div class="admin">
                            <h2>Logga Ut</h2>
                        </div>
                    </a>
                {/if}
            </div>
        </div>
    </header>
</main>

<style>
    main{
        padding: 0px;
        margin: 0px;
        background-color: white;
    }
    h1{
        padding: 0px;
        margin: 0px;
        font-size: 40px;
        font-family: 'Quicksand', sans-serif;
    }
    header{
        display: flex;
        flex-direction: row;
        align-content: center;
        align-self: center;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        height: 70px;
        position: relative;
        z-index: 99;
    }
    #dropdown{
        position: absolute;
        right: 0px;
    }
    #dropdownButton{
        display: flex;
        flex-direction: column;
        gap: 6px;
        height: 70px;
        width: 60px;
        justify-content: center;
        align-items: center;
    }
    .dropdownContent{
        display: block;
        transform: scaleX(0);
        gap: 10px;
        background-color: white;
        height: calc(100vh - 70px);
        position: absolute;
        top: 70px;
        right: 0px;
        transition: transform 200ms ease-in-out;
        transform-origin: right;
    }
    .dropdownOption{
        margin-top: 0px;
        margin-bottom: 0px;
        padding: 0px;
        padding-left: 30px;
        padding-right: 90px;
        transition: all 200ms;
    }
    .dropdownOption:hover{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    .admin:hover{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    h2{
        margin: 0px;
        padding: 0px;
        font-size: 35px;
        font-family: 'Cairo',sans-serif;
    }
    .admin{
        margin-top: 0px;
        margin-bottom: 0px;
        padding: 0px;
        padding-left: 30px;
        padding-right: 90px;
        transition: all 200ms;
        
    }
    .dot{
        height: 7px;
        width: 7px;
        background-color: rgb(24, 24, 24);
        border-radius: 50%;
        display: block;
        transition: all 200ms;
    }
    #dropdown:hover .dropdownContent{
        /* display: block; */
        transform: scaleX(1);
        /* animation: turn 250ms ease-in-out forwards; */
        
    }
    #dropdown:hover .dot{
        position: absolute;
        top: 29.5px;
        height: 13px;
        width: 13px;
    }
    a{
        text-decoration: none;
        color: black;
    }

    

    @media only screen and (orientation: portrait) and (max-width: 600px) {
        .dropdownContent{
            width: 100vw;
            transform: scaleY(0);
            transform-origin: top;
            height: fit-content;
        }
        .dropdownContent:hover{
            transform: scaleY(1);
        }
        .admin{
            margin-bottom: 10px;
        }
        h2{
            font-size: 30px;
        }
    } 

    @media only screen and (orientation: landscape) and (max-width: 800px){
        h2{
            font-size: 20px;
        }
    }
</style>