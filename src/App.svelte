<style lang="scss" global>
  html,
  body {
    margin: 0px;
    font-family: sans-serif;
    font-size: 18px;
  }

  div#app {
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;

    display: grid;
    grid-template-columns: 5em 20fr 5em;
    grid-template-rows: 1fr;

    nav {
      grid-column: 1 / 1;
    }

    main {
      grid-column: 2 / 3;

      display: flex;
      flex-direction: column;
      padding: 0 5em;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }
  }
</style>

<div id="app">
  <Navbar></Navbar>
  <main>
    <h1>Work in progress!</h1>
  </main>
</div>

<script>
  import Navbar from './components/Navbar.svelte'
</script>
