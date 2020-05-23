<script>
  import { onMount } from "svelte";
  import regexparam from "regexparam";

  // Check if props are right
  export let routes;
  if (!Array.isArray(routes)) throw new Error("Invalid Routes Array");

  // Covert path strings to RegExp
  const Routes = routes.map(({ path, component }) => ({
    path: regexparam(path),
    component,
  }));

  // Component to be rendered
  let CurrentRouteComponent = undefined;
  let ComponentParams = {};

  onMount(() => {
    const currentPath = window.location.pathname;
    console.log(`Current Path: ${currentPath}`);

    // Get current paths component
    const { component, path } =
      Routes.find(({ path }) => path.pattern.test(currentPath)) || {};

    if (component) {
      // Converts the array of params into an object
      const paramsArr = path.pattern.exec(currentPath);
      // First element of paramsArr is the path itself
      paramsArr.shift();
      const keysArr = path.keys;
      const params = Object.fromEntries(
        keysArr.map((key, index) => [key, paramsArr[index]])
      );

      ComponentParams = params;
      CurrentRouteComponent = component;
    }
  });
</script>

<svelte:component this={CurrentRouteComponent} params={ComponentParams} />
