<script>
  let dontShowOnMobile = true;
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@600&family=Playfair+Display:ital@1&display=swap");

  nav {
    position: relative;
    z-index: 20;
    width: 5em;
    transition: width 500ms 0s ease;

    display: flex;
    flex-direction: row;
    justify-content: center;

    writing-mode: vertical-lr;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: white;
    overflow: hidden;

    cursor: default;

    span.watermark {
      line-height: 1;
      font-size: 5rem;
      font-weight: 800;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.1);
      position: absolute;
      bottom: 0;
      left: 0;
    }

    h2#brand {
      color: rgba(0, 0, 0, 0.7);
      font-family: "Playfair Display", serif;
      font-size: 42px;
      font-weight: 700;
      writing-mode: horizontal-tb;
    }
  }

  ul#menu {
    z-index: 30;

    padding: 0;
    margin: 0;
    list-style-type: none;

    flex-grow: 100;

    display: flex;
    justify-content: flex-end;

    li {
      margin: 1em 0;
      padding: 1em 0;
      text-transform: uppercase;

      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }

      a {
        font-size: 22px;
        font-family: "Jost", sans-serif;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.7);
        text-decoration: none;
      }
    }
  }

  button {
    border: 0;
    background: transparent;
    padding: 1em;
    font-size: 24px;

    &#nav-toggle {
      position: absolute;
      z-index: 10;
      bottom: 0;
      left: 0;
    }

    &#nav-untoggle {
      writing-mode: horizontal-tb;
      z-index: 20;
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 500px) {
    nav.dontShowOnMobile {
      width: 0;
    }
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet" />
</svelte:head>

<nav class:dontShowOnMobile>
  <h2 id="brand" class="center">
    <i>S</i>
  </h2>

  <ul id="menu">
    <li class="center">
      <a href="/">Home</a>
    </li>

    <li class="center">
      <a href="/blog">Blog</a>
    </li>
  </ul>

  <button id="nav-untoggle" on:click={() => (dontShowOnMobile = true)}>
    <span class="material-icons">arrow_back</span>
  </button>

  <span class="watermark">Navbar</span>
</nav>

<button id="nav-toggle" on:click={() => (dontShowOnMobile = false)}>
  <span class="material-icons">menu</span>
</button>
