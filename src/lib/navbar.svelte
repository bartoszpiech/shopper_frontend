<script>
    import { link } from 'svelte-routing';

    import logo from '@assets/svelte.svg'


    let menuItems = [
            { label: 'USERS', url: '/users' },
            { label: 'CONTACT', url: '/contact' },
        ];
</script>


<div class="navbar">
    <div class="logo">
        <a href="/" use:link><img src={logo} alt="LOGO"></a>
    </div>
    {#each menuItems as {label, url}}
            <a href={url} class="link" use:link>
            {label}
            </a> 
    {/each}
    <div style="clear: both"></div>
</div>


<style>
    img {
        float: left;
        max-width: 50px;
    }
    .navbar {
        max-width: 1050px;
        padding: 0 30px;
        margin: 0 auto;
    }
    .link {
        float: right;
        padding: 20px;
        text-decoration: none;
        color: white;
    }
</style>
