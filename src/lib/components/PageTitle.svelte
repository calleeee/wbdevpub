<script>
    export let title;
</script>

<main>
    <div id="pageTitle">
        <h1>{title}</h1>
    </div>
</main>

<style>
    #pageTitle{
        width: 100%;
        background-size: 100% 100%;
        background-position: 0px 0px;
        background-image: url("https://dsgbnet.files.wordpress.com/2020/12/test-blocks-1-28-08-2018.jpg?w=1009&h=&zoom=2");
        background-position: 10% 65%;
		background-size: 110%;
        margin-top: 0px;
        margin-bottom: 0px;
        display: flex;
        flex-direction: column;
    }
    #pageTitle h1{
        margin-left: auto;
        margin-right: auto;
        font-family: 'Quicksand', sans-serif;
        color: white;
        font-size: 40px;
    }
</style>