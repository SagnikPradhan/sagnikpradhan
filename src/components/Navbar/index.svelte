<script>
  import { link } from 'svelte-routing'

  export let routes;
  const routesMap = Object.entries(routes)
</script>

<nav>
  <h1 id="brand">Sagnik Pradhan</h1>

  <ul id="links">
    {#each routesMap as [routeName, routeLink]}
      <li class="link">
        <a href="{routeLink}" use:link>{routeName}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Open+Sans:wght@600&display=swap');

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0em 10vw;
    color:#363636;
  }

  h1#brand {
    display: flex;
    margin: 0px;
    padding: 1rem 0;
    width: 30vw;
    color: #363636;
    font-family: 'Open Sans', sans-serif;
    align-items: center;
    justify-content: flex-start;
  }

  ul#links {
    display: flex;
    flex-direction: row;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
  }

  li.link {
    display: flex;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1rem 1.5rem;

      text-decoration: none;
      text-transform: capitalize;
      color: #363636;
      font-family: 'Montserrat', sans-serif;

      &:hover {
        background: #363636;
        color: #ffbcbc;
      }
    }
  }
</style>