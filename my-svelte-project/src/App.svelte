<script>
  import { video_player_is_active } from "./stores.js";
  import { Button, Overlay } from "svelte-materialify";
  import { videos } from "./videos.js";
  import Player from "./Player.svelte";
  import Thumbnail from "./Thumbnail.svelte";

  let is_fullscreen = false;
</script>

<main>
  <div class="header">
    <h1 id="title">NoobTube</h1>
  </div>
  <div class="grid">
    {#each Array(10) as _, i}
        <!-- Probably here you want to show different videos than I have selected -->
        <Thumbnail video={videos[i%5]}> </Thumbnail>
    {/each}
  </div>
  <Overlay
    opacity={is_fullscreen ? 1 : 0.7}
    color="black"
    active={$video_player_is_active}
    on:click={() => {
      $video_player_is_active = false;
    }}
  >
    <div
      id="video"
      class:fullscreen={is_fullscreen == true}
      on:click={(e) => {
        e.stopPropagation();
      }}
    >
      <div id="close">
        <Button
          class="error-color"
          size="small"
          on:click={() => {
            $video_player_is_active = false;
          }}
        >
          Close
        </Button>
      </div>
      <div id="fullscreen">
        <Button
          size="small"
          class="primary-color"
          on:click={() => {
            is_fullscreen = !is_fullscreen;
            // do not focus the fullscreenbutton if clicked
            // this is because otherwise clicking space will cause
            // the video player to maximize/minimize instead of pause/play
            // when space is clicked
            if (document.activeElement != document.body)
              document.activeElement.blur();
          }}
        >
          {is_fullscreen ? "Minimize" : "Theatre Mode"}
        </Button>
      </div>

      {#if is_fullscreen}
        <div id="gigascreen">
          <Button
            size="small"
            class="secondary-color"
            on:click={() => {
              // do not focus the fullscreenbutton if clicked
              // this is because otherwise clicking space will cause
              // the video player to maximize/minimize instead of pause/play
              // when space is clicked
              if (document.activeElement != document.body)
                document.activeElement.blur();

              let div = document.getElementById("vid");
              if (div.requestFullscreen) div.requestFullscreen();
              else if (div.webkitRequestFullscreen)
                div.webkitRequestFullscreen();
              else if (div.msRequestFullScreen) div.msRequestFullScreen();
            }}
          >
            {"Gigascreen"}
          </Button>
        </div>
      {/if}

      <Player />
    </div>
  </Overlay>

  <src />
</main>

<style>
  :global(:root) {
    --netflix-red: #e50914;
    --netflix-red-opacity: rgba(229, 9, 20, 0.3);
  }

  :global(body) {
    padding: 0;
    margin: 0;
  }

  main {
    min-height: 100vh;
    width: 100vw;
    background: rgb(255, 255, 255);
    box-sizing: border-box;
  }

  #video {
    position: fixed;
    transition: all 0.3s ease-out;
    left: 15%;
    right: 15%;
    top: 15%;
    bottom: 15%;
  }

  #video.fullscreen {
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
  }

  #video.fullscreen #gigascreen {
    position: absolute;
    top: 10px; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */

    transform: translate(-50%, 0);
    z-index: 100;
  }
  #video #close {
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 100;
  }

  #video #fullscreen {
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: 100;
  }

  #video.fullscreen #close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
  }

  #video.fullscreen #fullscreen {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 100;
  }

  .grid {
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    padding-bottom: 40px;
  }

  @media (max-width: 800px) and (orientation: portrait){
    .grid{
      grid-template-columns: 1fr;
    }
  }
  @media (max-width:1100px) and (orientation: landscape){
    .grid{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width:600px) and (orientation: landscape){
    .grid{
      grid-template-columns: 1fr 1fr;
    }
  }

  #title {
    font-size: 60px;
    margin-left: 50px;
    font-family: 'Courier New', Courier, monospace;
  }

  .header{
    display: flex;
    width: 100vw;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }
</style>
