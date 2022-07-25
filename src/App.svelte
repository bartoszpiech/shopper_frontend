<script>
    import { Route, Router } from 'svelte-routing';

    import Navbar from '@lib/navbar.svelte';

    import MainPage from '@routes/mainpage.svelte';
    import Contact from '@routes/contact.svelte';
    import Auth from '@routes/auth.svelte';
    import Users from '@routes/users.svelte';
    import User from '@routes/users/user.svelte';
</script>


<Router>
    <Navbar />
    <main>
        <Route path="/">
            <MainPage />
        </Route>
        <Route path="auth">
            <Auth />
        </Route>
        <Route path="contact">
            <Contact />
        </Route>
        <Route path="users">
            <Users />
        </Route>
        <Route path="users/:id" let:params>
            {#key params.id}
            <User id="{params.id}" />
            {/key}
        </Route>
    </main>
</Router>

<style>
    :root {
        background-color: black;
    }
</style>
