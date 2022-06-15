<script>
    export let video;
    import { chosen_video, video_player_is_active } from "./stores.js";
</script>

<div
class="grid-item"
style="background-image: url({video.poster});"
on:click={() => {
  $chosen_video = video;
  $video_player_is_active = true;
}}
/>

<style>

.grid-item {
    cursor: pointer;
    text-align: center;
    height: 350px;
    background-size: cover; /* Resize the background image to cover the entire container */
    background-position: center;
    border-radius: 8px;
    transition: all 200ms linear;
  }
  .grid-item:hover{
    box-shadow: 0px 5px 20px 5px rgba(0,0,0,0.2);
    border-radius: 1px;
  }
  @media (max-width: 800px) and (orientation: portrait){
    .grid-item{
      height: 75vh;
    }
  }

</style>