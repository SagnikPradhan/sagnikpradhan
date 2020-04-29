<script>
  export let blogPostId;

  console.log(blogPostId)
</script>

{#if blogPostId}
  <h1>Post</h1> {blogPostId}
{:else}
  <h1>Blog</h1>
{/if}