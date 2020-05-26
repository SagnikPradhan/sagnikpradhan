<script>
  import { onMount, SvelteComponent } from "svelte";
  import regexparam from "regexparam";

  // Check if props are right
  export let routes;

  // Component and its prop that should be rendered
  let CurrentRouteComponent;
  let CurrentRouteComponentParamProps;

  // Run the code onMount
  onMount(() => {
    const mainFn = async () => {
      // Current Path
      const currentPath = window.location.pathname;

      // Make sure routes is an array
      if (!Array.isArray(routes)) throw new Error("Routes should be an Array");

      // Iterate over routes
      for (const { path, component } of routes) {
        // Make sure route is vaild
        if (typeof path != "string") throw new Error("Path should be a String");
        if (typeof component != "function")
          throw new Error("Component should be a function");

        // Check if this is current route
        const componentPathRegex = regexparam(path);
        const componentPathPattern = componentPathRegex.pattern;
        const thisIsNotCurrentRoute = !componentPathPattern.test(currentPath);

        // Skip if not current route
        if (thisIsNotCurrentRoute) continue;

        // Route Parameters
        const routeParamKeys = componentPathRegex.keys;
        const routeParamMatch = (
          componentPathPattern.exec(currentPath) || []
        ).slice(1);
        const routeParameters = Object.fromEntries(
          routeParamKeys.map((key, idx) => [key, routeParamMatch[idx]])
        );

        // Import the component
        const currentRouteComponent = (await component()).default;

        // Finally Load it
        CurrentRouteComponent = currentRouteComponent;
        CurrentRouteComponentParamProps = routeParameters;

        // Skip rest of the routes
        break;
      }
    };

    mainFn().catch((err) => console.error("Router: ", err));
  });
</script>

<svelte:component
  this={CurrentRouteComponent}
  params={CurrentRouteComponentParamProps} />
