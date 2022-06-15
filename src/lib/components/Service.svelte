<script>
    export let title;
    export let image;
    export let description;
    export let url;
</script>
<main>
    <a href={url} class="service">
		<div class="container">
			<h1 class="serviceTitle">{title}</h1>
			<img class="serviceImage" src={image} alt="" loading="lazy">
			<p class="serviceDescription">{description}</p>
		</div>
	</a>
</main>
<style>
	.service{
		text-decoration: none;
		color: black;
	}
    .container{
		background-color: rgb(242, 242, 242);
		border-radius: 5px;
		width: 400px;
		display: flex;
		min-width: 0;
		flex-direction: column;
		transition: box-shadow 200ms ease-in-out;
		
	}
	.serviceTitle{
		font-size: 20px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px;
		margin-bottom: 20px;
		text-align: center;
	}
	.serviceImage{
		width: 350px;
		margin-left: auto;
		margin-right: auto;
		border-radius: 5px;
	}
	.serviceDescription{
		margin-left: auto;
		margin-right: auto;
		width: 90%;
		text-align: center;
	}
	.container:hover{
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	}
	@media(max-width: 800px){
		.container{
			width: 90%;
			margin-left: auto;
			margin-right: auto;
		}
		.serviceImage{
			width: 90%;
		}
	}
</style>