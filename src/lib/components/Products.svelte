<script>
    import Product from "./Product.svelte";

    let onlyPickguards = false;
    let onlyMetalParts = false;
    let onlyElectronics = false;
    let onlyOther = false;
</script>
<main>
    <div id="belowTitle">
        <div id="criteria">
            <div id="filters">
                <h1>Filters</h1>
                <h2>Product Category</h2>
                <div class="checkbox">
                    <input type="checkbox" name="pickguards" bind:checked={onlyPickguards}>
                    <label for="pickguards">- Pickguards</label>
                </div>

                <div class="checkbox">
                    <input type="checkbox" name="metalParts" bind:checked={onlyMetalParts}>
                    <label for="metalParts">- Metal Parts</label>
                </div>

                <div class="checkbox">
                    <input type="checkbox" name="electronics" bind:checked={onlyElectronics}>
                    <label for="electronics">- Electronics</label>
                </div>

                <div class="checkbox">
                    <input type="checkbox" name="other" bind:checked={onlyOther}>
                    <label for="other">- Other</label>
                </div>
            </div>
        </div>
        <div id="productsContainer">
            <div class="productCategory">
                {#if onlyMetalParts || !onlyMetalParts && !onlyPickguards && !onlyElectronics && !onlyOther}
                <h1>Metal Parts</h1>
                <div class="products">
                    <Product price={75} name={"Traditional Trem Arm"} image={"/Bilder/3B9302AB-AD79-420E-AC99-845650240EBE.png.opt300x300o0,0s300x300.jpeg"}></Product>
                    <Product price={9} name={"RS Strap Buttons"} image={"/Bilder/5ED371B0-DE93-4D58-B543-455709C5B653.jpeg"}></Product>
                    <Product price={140} name={"Original Roller Bridge"} image={"/Bilder/6B935A12-B6A6-48B8-85A0-7415679ACC31.png.opt225x225o0,0s225x225.jpeg"}></Product>
                    <Product price={165} name={"Original Trem Unit"} image={"/Bilder/304C2A88-4909-490A-9703-AEC538A999CF.png.opt343x343o0,0s343x343.jpeg"}></Product>
                    <Product price={75} name={"BMG Upgrade Trem Arm"} image={"/Bilder/B495B4B8-29B8-4F1D-8F31-B4B404514FA5.png.opt300x300o0,0s300x300.jpeg"}></Product>
                    <Product price={199} name={"RS Control Knobs"} image={"/Bilder/85987B6A-ECCF-4D5F-B087-E307DAB241C7.png.opt291x291o0,0s291x291.jpeg"}></Product>
                    <Product price={45} name={"Bolt Block Assembly"} image={"/Bilder/EB6C05AE-E8B2-4991-8AF6-CCB32BDBBBD9.png.opt300x300o0,0s300x300.jpeg"}></Product>
                    <Product price={165} name={"Conversion Trem Unit"} image={"/Bilder/F560FF44-D9B7-483D-AEDD-3E63F34AB6C0.png.opt300x300o0,0s300x300.jpeg"}></Product>
                    <Product price={165} name={"Conversion Bridge"} image={"/Bilder/FC20D335-AAAF-4B7E-A2D5-458518518739.png.opt223x223o0,0s223x223.jpeg"}></Product>
                    <Product price={27} name={"Aluminum Switchplate"} image={"/Bilder/263485792_441877390883207_5560476877015733402_n.jpg"}></Product>
                </div>    
                {/if}            
            </div>
            <div class="productCategory">
                {#if onlyPickguards || !onlyMetalParts && !onlyPickguards && !onlyElectronics && !onlyOther}
                <h1>Pick-Guards</h1>
                <div class="products">
                    <Product price={165} name={"BMG Conversion Guard"} image={"/Bilder/6CDE0449-68A2-4924-8E01-F82914685CDC.png.opt323x323o0,0s323x323.jpeg"}></Product>
                    <Product price={25} name={"BMG Pickup surrounds"} image={"/Bilder/93655DBC-720C-4CB5-8B76-D8F48C294E81.jpeg"}></Product>
                    <Product price={165} name={"BMG Upgrade Kit"} image={"/Bilder/FB868ACF-C920-429E-BC96-6BAEBF23B9BB.png.opt272x272o0,0s272x272.jpeg"}></Product>
                    <Product price={199} name={"Super Conversion Kit"} image={"/Bilder/2D1D9E33-8152-4642-81AF-E617EF3E0907.jpeg"}></Product>
                    <Product price={165} name={"Original Style Guard"} image={"/Bilder/501771F1-BBBC-47F5-829B-B72FA5D6D80E.png.opt297x276o0,0s297x276.jpeg"}></Product>
                </div>    
                {/if}               
            </div>
            <div class="productCategory">
                {#if onlyElectronics || !onlyMetalParts && !onlyPickguards && !onlyElectronics && !onlyOther}
                <h1>Electronics</h1>
                <div class="products">
                    <Product price={20} name={"Terminal Strip"} image={"/Bilder/32151C66-AC87-4F40-BCEE-5E5679D8DCBF.jpeg"}></Product>
                    <Product price={30} name={"220k Omeg Pots"} image={"/Bilder/B7E832A8-7BD0-46DC-BE12-A40E7B29ED25.jpeg"}></Product>
                    <Product price={40} name={"Switchcraft Slide Switches"} image={"/Bilder/BFBCB39B-FA0D-4D67-877D-D47096B98D27.jpeg"}></Product>
                    <Product price={199} name={"Tone Cap. Terminal Connector"} image={"/Bilder/CEDE2070-C83D-474B-BC89-854F34A96B9E.png.opt302x302o0,0s302x302.jpeg"}></Product>                    
                </div>    
                {/if}             
            </div>
            <div class="productCategory">
                {#if onlyOther || !onlyMetalParts && !onlyPickguards && !onlyElectronics && !onlyOther}
                <h1>Other</h1>
                <div class="products">
                    <Product price={20} name={"Tremolo Wrench"} image={"/Bilder/8C4F446E-4BB4-4866-918A-9B322E97A8D8.jpeg"}></Product>
                    <Product price={30} name={"Perloid Tuner Buttons"} image={"/Bilder/92BC2086-1B1B-4C61-BBC1-C491C77B51C4.png.opt299x299o0,0s299x299.jpeg"}></Product>
                    <Product price={10} name={"Tri-Sonic Screws"} image={"/Bilder/0435CE1E-32F0-4CEE-B01B-596240DC1B3D.png.opt300x300o0,0s300x300.jpeg"}></Product>
                    <Product price={10} name={"Pickguard Screws"} image={"/Bilder/724D9539-6902-4C10-83E4-623953E096D4.png.opt300x278o0,0s300x278.jpeg"}></Product>
                    <Product price={24} name={"Hank Rivet Nuts"} image={"/Bilder/5426A150-E044-4522-9F73-A99323510CBB.png.opt300x300o0,0s300x300.jpeg"}></Product>
                    <Product price={5} name={"Tremolo Tip"} image={"/Bilder/C87E4000-0802-4660-BC1D-86041B14FCF5.png.opt300x272o0,0s300x272.jpeg"}></Product>
                </div>   
                {/if}
            </div>
        </div>
    </div>
</main>
<style>
    #belowTitle{
        display: grid;
        grid-template-columns: 20% 80%;
        background-color: rgb(255, 255, 255);
    }
    #filters{
        font-family: 'Karla', sans-serif;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        border-bottom: 1px solid rgb(34, 34, 34);
        margin-top: 3px;
    }
    #filters h2{
        margin: 0px;
        margin-bottom: 20px;
        
    }
    .checkbox{
        margin-bottom: 30px;
    }
    .checkbox input{
        transform: scale(1.5);
        width: 20px;
    }
    #productsContainer{
        margin-bottom: 50px;
        margin-left: 40px;
        margin-right: 40px;
    }
    #criteria{
        display: flex;
        flex-direction: column;
        background-color: rgb(255, 255, 255);
        box-shadow:
            2.8px 0px 2.2px rgba(0, 0, 0, 0.004),
            5.3px 0px 5.4px rgba(0, 0, 0, 0.005),
            7.5px 0px 10.3px rgba(0, 0, 0, 0.006),
            9.7px 0px 18.5px rgba(0, 0, 0, 0.008),
            12.9px 0px 34.8px rgba(0, 0, 0, 0.011),
            25px 0px 80px rgba(0, 0, 0, 0.02)
            ;
    }
    .productCategory{
        display: flex;
        flex-direction: column;
    }
    .productCategory h1{
        margin-left: auto;
        margin-right: auto;
        font-family: 'Quicksand', sans-serif;
    }
    .products{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 25px;
    }
</style>