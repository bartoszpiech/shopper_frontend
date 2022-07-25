<script>
    import { onMount } from 'svelte';
    import { link } from 'svelte-routing';
    let name;
    let email;
    let result = null;

    let data;
    onMount(async () => {
            fetchData();
        });
    async function fetchData() {
            const response = await fetch('http://localhost:8080/users')
            data = await response.json()
    }

    async function doPost() {
        const res = await fetch('http://localhost:8080/newuser', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email
            })
        })
        const json = await res.json()
        result = JSON.stringify(json)
        fetchData()
        }
</script>

<input placeholder="NAME" bind:value={name} />
<input placeholder="EMAIL" bind:value={email} />
<button on:click={doPost}>
    ADD NEW USER
</button>
<hr>

<div class="products">
{#if data}
    {#each data as d}
        <a class="user" href={`/users/${d.id}`} use:link>
            <p>{d.name}</p>
            <p>{d.email}</p>
        </a>
    {/each}
{/if}
</div>
<div style="clear: both"></div>

<style>
    .user {
        background-color: white;
        margin: 5px;
        color: black;
        text-decoration: none;
        float: left;
        padding: 30px;
        min-width: 300px;
    }
    img {
        max-width: 200px;
        max-height: 200px;
    }
    input {
        height: 30px;
    }
</style>
