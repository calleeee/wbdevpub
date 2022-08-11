<script>
    import Header from '$lib/components/header.svelte'
</script>
<Header></Header>
<main>
    
    <div class="image">
        <img src="/Images/bba1c527b67202a3_org.jpeg" alt="Johan Engström" class="img">
        <p class="name">Johan Engström</p>
        <p class="role">Ägare och VD</p>
    </div>
    <div class="contact">
        <div class="mail">
            <h1 class="symbolAt">@</h1>
            <a href="mailto:johan@viddenbostad.se" class="click">
                <div class="Button">
                    <h1 class="mailText">Mejla</h1>
                </div>
            </a>
        </div>
        <div class="phone">
            <h1 class="symbolTel">☎</h1>
            <a href="tel:+46761479397" class="click">
                <div class="Button">
                    <h1 class="telText">Ring</h1>
                </div>
            </a>
        </div>
        <div class="facebook">
            <h1 class="fbLogo">f</h1>
            <a href="https://www.facebook.com/Kreakom-AB-334055227011855" class="click">
                <div class="Button">
                    <h1 class="fbText">Vår Facebooksida</h1>
                </div>
            </a>
        </div>
        <div class="facebook">
            <h1 class="fbLogo">in</h1>
            <a href="https://se.linkedin.com/in/johan-engstrom-1195342/sv?trk=people-guest_people_search-card" class="click">
                <div class="Button">
                    <h1 class="fbText">Vår LinkedIn</h1>
                </div>
            </a>
        </div>
    </div>
</main>
<style>
    main{
        display: grid;
        grid-template-columns: 35% 65%;
    }
    .image{
        display: flex;
        flex-direction: column;
        height: calc(100vh - 70px);
        justify-content: center;
        color: rgba(0, 0, 0, 0.481);
        box-shadow: 5px 8px 16px 0px rgba(0,0,0,0.2);
    }
    .img{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0px 8px 10px 0px rgba(0,0,0,0.2);
        border-radius: 4px;
    }
    .name{
        margin: 0px;
        padding: 0px;
        font-family: 'Cairo', sans-serif;
        margin-left: 10%;
    }
    .role{
        margin: 0px;
        padding: 0px;
        font-family: 'Cairo', sans-serif;
        margin-left: 10%;
    }
    .fbLogo{
        font-size: 100px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 8px;
        font-family: 'Quicksand',sans-serif;
    }
    .contact{
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 80%;
    }
    .mail{
        margin: auto;
        font-family: 'Quicksand',sans-serif;
        text-align: center;
    }
    .symbolAt{
        font-size: 90px;
        margin: 0px;
        padding: 0%;
        margin-bottom: 34px;
    }
    .Button{
        display: flex;
        flex-direction: column;
        background-color: rgb(255, 255, 255);
        width: 310px;
        height: 50px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.2);
        transition: all 200ms;
    }
    .phone{
        margin: auto;
        text-align: center;
    }
    .symbolTel{
        font-size: 98px;
        margin: 0%;
        padding: 0%;
        height: fit-content;
    }
    .telText{
        font-family: 'Quicksand', sans-serif;
    }
    .facebook{
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    .fbText{
        font-family: 'Quicksand',sans-serif;
    }
    .click{
        text-decoration: none;
        color: black;
    }
    .Button:hover{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        background-color: rgb(239, 239, 239);
    }
    @media only screen and (max-width: 800px) {
        img{
            display: none;
        }
        .image{
            height: 60px;
            align-items: center;
        }
        .name{
            padding: 0%;
            margin: 0%;
        }
        .role{
            padding: 0%;
            margin: 0%;
        }
        .contact{
            grid-template-columns: 1fr;
            margin-bottom: 50px;
        }
        .fbLogo{
            font-size: 70px;
        }
        .symbolAt{
            font-size: 70px;
        }
        .symbolTel{
            font-size: 80px;
        }
        .Button{
            width: 270px;
        }
        .fbText{
            font-size: 25px;
        }
        .telText{
            font-size: 25px;
        }
        .mailText{
            font-size: 25px;
        }
        main{
            display: flex;
            flex-direction: column;
        }
    } 
    @media only screen and (orientation: portrait){
        .contact{
            grid-template-columns: 1fr;
        }
    }
</style>