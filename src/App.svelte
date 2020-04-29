<script>
    import { Router, Route } from 'svelte-routing'

    import Navbar from './components/Navbar/index.svelte'

    import Home from './routes/Home/index.svelte'
    import About from './routes/About/index.svelte'
    import Blog from './routes/Blog/index.svelte'

    export let url = ''
</script>

<main>
    <Router {url}>
        <Navbar routes="{{ Home: '/', Blog: '/blog', 'About Me': '/about' }}" />

        <div id="content">
            <!-- Blog -->
            <Route path="blog" component="{Blog}" />
            <Route path="blog/post/:id" let:params>
                <Blog blogPostId="{params.id}" />
            </Route>
            <!-- About Me -->
            <Route path="about">
                <About />
            </Route>
            <!-- Home -->
            <Route path="/">
                <Home />
            </Route>
        </div>
    </Router>
</main>
