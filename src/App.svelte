<script>
  import Navbar from "./components/Navbar.svelte";
  import Router from "./components/Router.svelte";

  import Home from "./routes/Home.svelte";
  import Blog from "./routes/Blog.svelte";

  const Routes = [
    { path: "/", component: Home },
    { path: "/blog", component: Blog },
    { path: "/blog/:id", component: Blog },
  ];
</script>

<style lang="scss" global>
  // Main colors white and rgba(0, 0, 0, 0.7)
  // Color palette https://colorhunt.co/palette/182030

  html,
  body {
    height: 100%;
    margin: 0px;
    font-family: sans-serif;
    font-size: 18px;
  }

  div#app {
    width: 100vw;
    height: 100%;
    overflow-x: hidden;

    display: grid;
    grid-template-columns: auto 100fr;
    grid-template-rows: 1fr;

    nav {
      grid-column: 1 / 1;
    }

    main {
      grid-column: 2 / 3;

      display: flex;
      flex-direction: column;
      padding: 0 5em;
    }
  }
</style>

<div id="app">
  <Navbar />
  <main>
    <h1>Work in progress!</h1>
    <Router routes={Routes} />
  </main>
</div>
