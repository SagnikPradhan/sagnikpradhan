<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@600&family=Playfair+Display:ital@1&display=swap");

  nav {
    position: relative;

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;

    writing-mode: sideways-lr;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    cursor: default;

    span.watermark {
      z-index: 0;
      font-size: 96px;
      font-weight: 800;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.1);
      position: absolute;
      bottom: 0;
    }

    h2#brand {
      color: rgba(0, 0, 0, 0.7);
      font-family: "Playfair Display", serif;
      font-size: 42px;
      font-weight: 700;
      writing-mode: initial;
    }
  }

  ul#menu {
    z-index: 10;

    padding: 0px;
    margin: 2em 0;
    list-style-type: none;

    flex-grow: 100;

    display: flex;
    justify-content: baseline;

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

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<nav>
  <h2 id="brand" class="center"><i>S</i></h2>

  <ul id="menu">
    <li class="center">
      <a href="/">Home</a>
    </li>

    <li class="center">
      <a href="/blog">Blog</a>
    </li>
  </ul>

  <span class="watermark">Navbar</span>
</nav>
