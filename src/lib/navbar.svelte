<script>
    import { link } from 'svelte-routing';

    import logo from '@assets/svelte.svg'


    let menuItems = [
            { label: 'UŻYTKOWNICY', url: '/users' },
            { label: 'KONTAKT', url: '/contact' },
        ];
</script>


<div class="navbar">
    <div class="logo">
        <a href="/" use:link>ZARA SHOPPER</a>
    </div>
    {#each menuItems as {label, url}}
            <a href={url} class="link" use:link>
            {label}
            </a> 
    {/each}
    <div style="clear: both"></div>
</div>


<style>
    .logo {
        text-decoration: none;
        padding: 15px;
        float: left;
    }
    a {
        text-decoration: none;
        color: black;
    }
    .navbar {
        background-color: white;
        padding: 0 5px;
        margin-bottom: 20px;
    }
    .link {
        float: right;
        padding: 15px;
        text-decoration: none;
        color: black;
    }
</style>
