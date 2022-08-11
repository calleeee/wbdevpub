<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit'
  
    export const load: Load = ({session, props}) => {
      if(session.user){
        return {
          status: 302,
          redirect: "/"
        }
      }
  
      return {props}
    }
  </script>
  
  <script lang="ts">
      import Header from '$lib/components/header.svelte';
      import { session } from "$app/stores";
      import { send } from '$lib/api'
  
      export let error: string
  
      async function login(event: SubmitEvent) {
          const formEl = event.target as HTMLFormElement
          const response = await send(formEl)
  
          if (response.error){
              error = response.error
          }
  
          $session.user = response.user
  
          formEl.reset()
      }
  </script>
  
  <Header></Header>

  <main>
    <form on:submit|preventDefault={login} method="post">
        <div>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            required
          />
        </div>
    
        <div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
    
        {#if error}
          <p class="error">{error}</p>
        {/if}
    
        <button type="submit">Sign In</button>
      </form>
  </main>
    
    <style>
      main{
        display: flex;
        flex-direction: column;
        height: calc(100vh - 70px);
        justify-content: center;
        align-items: center;
      }
      .error {
        font-family: 'Quicksand', sans-serif;
        color: tomato;
      }
      form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      input{
        border: none;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        padding-left: 20px;
        padding-top: 10px;
        padding-bottom: 12px;
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.255);
      }
      button{
        border: none;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        padding-top: 8px;
        padding-bottom: 9px;
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.255);
        transition: all 200ms ease-in-out;
      }
      button:hover{
        background-color: rgb(49, 124, 255);
        color: white;
      }
    </style>