<script>
	
</script>

<main>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Arimo&family=Lobster+Two:ital@1&family=Mulish:wght@300&family=Qwitcher+Grypen&display=swap" rel="stylesheet">
		
	<header>
		<img id="logga" src={"./bilder/Logotyp.png"} alt="Logo">

		<h1 id = "webareaText">
			WEB _ AREA
		</h1>

		<div id="dropdown">
			<img id="optionsBild" src="https://voltamagazine.files.wordpress.com/2018/02/2000px-simple_icon_ellipsis-svg.png" alt="Options">
			<div class="dropdown-content">
				<a href="https://www.fiolaffaren.se/pub_images/large/Gewa-Maestro-6-viola-39-5.jpg">Shit</a>
				<a href="https://sfanytime-images-prod-http2.secure2.footprint.net/COVERM/ca69d16d-747f-464f-8f57-a59500bdfd60_COVERM_SV.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=2f22cd6f27f686e0b813c9351d1c840e">Epic</a>
				<a href="https://media-cdn.tripadvisor.com/media/photo-s/1c/ac/0b/ff/bruh.jpg">Bruh 3</a>
			</div>
		</div>
		
	</header>
</main>

<style>
	main{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	header{
		margin-top: -4px;		
	}

	#webareaText{
		font-size: 40px;
		font-family: 'Mulish', sans-serif;

		margin-top: 8px;
		padding-bottom: none;
	}

	#logga{
		width: 50px;
		position: absolute;
		left: 12px;
		top: 2px;
	}

	#dropdown{
		position: absolute;
		right: 6px;
		top: 11px;
		padding-top: 10px;
		padding-bottom: 15px;
	}

	#optionsBild{
		width: 50px;
		transform: rotate(90deg);	
		transition: transform 0.3s ease-in-out;	
	}

	.dropdown-content {
		animation: drop 300ms ease-in-out forwards;
		transform-origin: top center;
		display: none;
		position: absolute;
		top: 35px;
		right: 0px;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
	}

	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {background-color: #f1f1f1}

	#dropdown:hover .dropdown-content {
		display: block;
	}

	#dropdown:hover #optionsBild{
		transform: rotate(0deg);
	}

	@keyframes drop{
		0%{
			transform: scale(0);
		}
		100%{
			transform: scale(1);
		}
	}

	@media (max-width: 450px) {
		#webareaText{
			color: rgb(243, 243, 243);
		}
		#dropdown{
			top: 13px;
		}
	}

</style>