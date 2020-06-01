<script>
  import regexparam from "regexparam";

  export let routes;

  // Component and its prop that should be rendered
  let CurrentRouteComponent;
  let CurrentRouteComponentParamProps;

  // Handles Promise rejections
  const handleRejection = (promise) => {
    if (promise instanceof Promise) promise.catch(console.error);
  };

  // Run the code onMount
  const changeRoute = async () => {
    // Dont serve on non-root path
    if (location.pathname !== "/")
      return console.log("Router: Not serving on non-root paths");
    // Add hash if not preset
    if (location.hash === "") location.hash = "/";

    // Current Path
    const currentPath = location.hash.slice(1);
    console.log(`Router: Current Path - ${currentPath}`);

    // Make sure routes is an array
    if (!Array.isArray(routes))
      throw new Error("Router: Routes should be an Array");

    // Iterate over routes
    for (const { path, component } of routes) {
      // Make sure route is vaild
      if (typeof path != "string")
        throw new Error("Router: Path should be a String");
      if (typeof component != "function")
        throw new Error("Router: Component should be a function");

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

  // Make sure no unhandled promises rejections happen
  const changeRouteUnpromisified = () => handleRejection(changeRoute());
</script>

<svelte:window
  on:hashchange={changeRouteUnpromisified}
  on:load={changeRouteUnpromisified} />

<svelte:component
  this={CurrentRouteComponent}
  params={CurrentRouteComponentParamProps} />
