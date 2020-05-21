<style lang="scss">
  nav {
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;

    writing-mode: vertical-rl;
    text-orientation: upright;

    cursor: default;

    h2#brand {
      margin: 1em;
      font-size: 36px;
      font-family: 'Parisienne', cursive;
      font-weight: 700;
    }

    ul#menu {
      padding: 0px;
      margin: 0px;
      list-style-type: none;

      flex-grow: 100;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    li {
      margin: 1em 0;
      text-transform: uppercase;

      a {
        font-size: 28px;
        color: rgba(0, 0, 0, 0.781);
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
      }
    }
  }
</style>

<nav>
  <h2 id="brand">S</h2>

  <ul id="menu">
    <li>
      <a href="/">Home</a>
    </li>

    <li>
      <a href="/blog">Blog</a>
    </li>
  </ul>
</nav>
