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
            name = ""
            email = ""
        }
</script>

<input placeholder="NAZWA" bind:value={name} />
<input placeholder="EMAIL" bind:value={email} />
<button on:click={doPost}>
    DODAJ
</button>
<hr>

<div class="products">
{#if data}
    {#each data as d}
        <a class="user" href={`/users/${d.id}`} use:link>
            <h2>{d.name}</h2>
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
        padding: 30px;
        min-width: 100px;
    }
    img {
        max-width: 200px;
        max-height: 200px;
    }
    input {
        margin: 20px;
        height: 30px;
        border-radius: 10px;
    }
    ::placeholder {
        text-align: center;
    }
    button {
        color: black;
        background-color: white;
        height: 30px;
    }
    .products {
        display: flex;
        justify-content: center;
        margin: auto;
    }
</style>
