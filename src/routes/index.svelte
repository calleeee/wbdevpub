<script>
	import Service from "$lib/components/Service.svelte";
</script>

<main>
  <div id="firstSegment">
		<h1 id="firstSegmentInfo" data-aos="fade-in" data-aos-delay="200">Specializing in handmade custom pickguards, parts for red special guitars and more. Each pickguard is made one at a time to insure the highest quality.</h1>
		<h2 id="firstSegmentSecondInfo" data-aos="fade-in" data-aos-delay="500">We are based in the US. Shipping World Wide</h2>
		<p id="est" data-aos="fade-in" data-aos-delay="700">Est. 2006</p>
	</div>
	<div id="secondSegment">
		<h1 id="secondTitle">What do we do?</h1>
		<div id="whatWeDo">
			<Service title={"BMG and Burns Conversions"} image={"./Bilder/278170427_1287850411709256_8042217952366949342_n.jpeg"} description={"Conversion with new pickguard, hardware, complete knife edge tremolo system."} url={"/conversions"}></Service>

			<Service title={"Parts for Red Specials"} image={"./Bilder/273035034_1246522409175390_2928033665616184667_n.jpeg"} description={"All the metal parts you need to build or convert a Red Special guitar. High quality, sold and manufactured in conjunction with The Cyber Shop"} url={"/shop"}></Service>

			<Service title={"Red Special Pick-Guards, Hand Crafted"} image={"./Bilder/280039655_1309232532904377_6784412742002784129_n.jpeg"} description={"Hand crafted high quality perspex pickguards for all kinds of red special guitars"} url={"/shop"}></Service>
		</div>
	</div>
	<div id="thirdSegment">
		<h1 id="thirdTitle">User Respnse</h1>
		<div id="allMessagesContainer">
			<div id="message1Container" data-aos="fade-right" data-aos-delay="300">
				
				<div class="messageTemplate">
					<p>Hi Woody,</p>
					<p>I recieved yesterday the plastic kit. It's simply perfect. The conversion will start next Monday.</p>
					<p>Cheers</p>
					<p>Florent</p>
				</div>
			</div>
			<div id="message2Container" data-aos="fade-in" data-aos-delay="500">
				<div class="messageTemplate">
					<p> Hi, I'm from Germany and have been searching for a long time for a way to rebuild my Burns Red Special so that it looks like a real RS. And now I've discovered your site and I'm impressed.</p>
					<p>I am just blown away with the quality of the Pickguard set you provided. You are a true craftsman and I appreciate all of your hard work.</p>
					<p>Thank you.</p>
				</div>
			</div>
			<div id="message3Container" data-aos="fade-in" data-aos-delay="700">
				<div class="messageTemplate">
					<p> I received the arm today, it's beautiful! Thank you very much! Very authentic, there's no difference between the one on the Super and yours.</p>
					<p>Thanks once again!</p>
					<p>Best regards,</p>
					<p>Henk</p>
				</div>
			</div>
		</div>
	</div>
	<div id="fourthSegment">
		<h1 id="fourthInformation">This site is not endorsed by Brian May himself or any of his affiliates. This is an unofficial site and is not affiliated with Brian May ,Queen,Duck Productions or any other persons/Nor anyone else.</h1>
	</div>
</main>

<style>
	:global(body){
		background-color: rgb(0, 0, 0);
		background-size: cover;
    margin: 0;
    padding: 0;
	}
	main{
		display: flex;
		flex-direction: column;
	}
	#firstSegment{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: center;
		align-items: center;
		height: calc(100vh - 75px);
		line-height: 60px;
		background-image: url("https://dsgbnet.files.wordpress.com/2020/12/test-blocks-1-28-08-2018.jpg?w=1009&h=&zoom=2");
		background-position: bottom center;
		background-size: cover;
		align-content: center;
	}
	#firstSegmentInfo{
		font-family: 'Quicksand', sans-serif;
		font-size: 35px;
		text-align: center;
		color: white;
		max-width: 70%;
		margin: 0;
		text-shadow: 2px 3px 5px rgba(0,0,0,0.5);	
	}
	#firstSegmentSecondInfo{
		font-family: 'Quicksand', sans-serif;
		color: white;
		font-size: 20px;
		margin: 0;
	}
	#est{
		font-family: 'Quicksand', sans-serif;
		color: white;
		margin: 0;
	}
	#secondSegment{
		background: white;
		width: 100%;
		display: flex;
		flex-direction: column;
    	font-family: 'Karla', sans-serif;
	}
	#secondTitle{
		margin-left: auto;
		margin-right: auto;
	}
	#whatWeDo{
		display: flex;
		flex-direction: row;
		flex-shrink: 1;
		min-width: 0;
		gap: 30px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 40px;
	}
	#thirdSegment{
		display: flex;
		flex-direction: column;
    	font-family: 'Karla', sans-serif;
		background-color: rgb(250, 250, 250);
	}
	#thirdTitle{
		color: rgb(18, 18, 18);
		margin-left: auto;
		margin-right: auto;
	}
	#allMessagesContainer{
		color: rgb(233, 233, 233);
		display: flex;
		margin-bottom: 40px;
		margin-top: 20px;
	}
	.messageTemplate{
		background-color: rgb(0, 119, 237);
		border-radius: 30px;
		padding-left: 17px;
		padding-right: 17px;
		padding-top: 2px;
		padding-bottom: 2px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	}
	#message1Container{
		padding: none;
		width: 20%;
		margin-left: auto;
		margin-right: auto;
	}
	#message2Container{
		padding: none;
		width: 20%;
		margin-top: 50px;
		margin-left: auto;
		margin-right: auto;
	}
	#message3Container{
		padding: none;
		width: 20%;
		margin-top: 60px;
		margin-left: auto;
		margin-right: auto;
	}
	#fourthSegment{
		background-color: white;
	}
	#fourthInformation{
		color: black;
		font-family: 'Quicksand', sans-serif;
		font-size: 30px;
		width: 60%;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		margin-top: 100px;
		margin-bottom: 100px;
	}
	@media(max-width: 600px) and (orientation: portrait){
		#firstSegment{
			max-width: 100%;
			background-size: 390%;
		}
		#firstSegmentInfo{
			font-size: 6vw;
			max-width: 95%;
			justify-content: none;
		}
		#firstSegmentSecondInfo{
			font-size: 4vw;
			margin-top: 2vw;
		}
		#est{
			margin-top: 1vw;
			font-size: 3vw;
		}
		#whatWeDo{
			flex-direction: column;
		}
		#allMessagesContainer{
			flex-direction: column;
			gap: 60px;
		}
		#message1Container{
			width: 90%;
			margin-left: auto;
			margin-right: auto;
		}
		#message2Container{
			width: 90%;
			margin-left: auto;
			margin-right: auto;
			margin-top: 0px;
		}
		#message3Container{
			width: 90%;
			margin-left: auto;
			margin-right: auto;
			margin-top: 0px;
		}
		#fourthInformation{
			font-size: 20px;
			width: 90%;
			margin-top: 40px;
			margin-bottom: 40px;
		}
	}
	@media(max-width: 1000px) and (orientation: landscape){
		#firstSegment{
			background-size: 150%;
		}
		#firstSegmentInfo{
			font-size: 25px;
			max-width: 95%;
			justify-content: none;
		}
		#firstSegmentSecondInfo{
			font-size: 16px;
			margin-top: 10px;
			margin-top: 0px;
		}
		#est{
			margin-top: 0px;
			font-size: 10px;
		}
		#whatWeDo{
			flex-direction: column;
			width: 65%;
		}
		#allMessagesContainer{
			flex-direction: column;
			gap: 60px;
		}
		#message1Container{
			width: 90%;
			margin-left: auto;
			margin-right: auto;
		}
		#message2Container{
			width: 90%;
			margin-left: auto;
			margin-right: auto;
			margin-top: 0px;
		}
		#message3Container{
			width: 90%;
			margin-left: auto;
			margin-right: auto;
			margin-top: 0px;
		}
		#fourthInformation{
			font-size: 20px;
		}
	}
</style>