<script>
    import { onMount } from 'svelte';
    export let id;

    let data;
    let itemsData;

    async function reloadItems() {
            const itemsResponse = await fetch(`http://localhost:8080/users/${id}/items`);
            itemsData = await itemsResponse.json()
        }

    onMount(async () => {
            const response = await fetch(`http://localhost:8080/users/${id}`);
            data = await response.json()
            reloadItems()
        });

    async function deleteItem(itemId) {
            const deleteResponse = await fetch(`http://localhost:8080/deleteitem/${itemId}`)
            let deleteData = await deleteResponse.json()
            reloadItems()
        }

    let name, size, link;
    async function addItem() {
            let owner_id = parseInt(id)
        const res = await fetch('http://localhost:8080/newitem', {
            method: 'POST',
            body: JSON.stringify({
                    owner_id,
                    name,
                    size,
                    link,
            })
        })
            const json = await res.json()
            let result = JSON.stringify(json)
            reloadItems()
        }
    async function deleteUser(userId) {
            const deleteResponse = await fetch(`http://localhost:8080/deleteuser/${userId}`)
            let deleteData = await deleteResponse.json()
            window.location = "/users";
        }
</script>

{#if data}
    <div class="user-info">
    <h1>{data.name}</h1>
    <h1>{data.email}</h1>
    <button on:click={() => deleteUser(data.id)}>
        DELETE USER
    </button>
    <hr>
    </div>
    <input placeholder="NAME" bind:value={name}>
    <input placeholder="SIZE" bind:value={size}>
    <input placeholder="LINK" bind:value={link}>
    <button on:click={() => addItem()}>
        ADD NEW ITEM
    </button>
    <hr>
{/if}
{#if itemsData}
    {#each itemsData as item}
        <div class="item">
        <p>ITEM NAME: {item.name}</p>
        <p>ITEM SIZE: {item.size}</p>
        <a href={item.link}>{item.link}</a>
        <br>
        <button on:click={() => deleteItem(item.id)}>
            DELETE
        </button>
        </div>
    {/each}
{/if}

<style>
    .item {
        background-color: white;
        color: black;
        max-width: 300px;
        margin: auto;
    }
    input {
        height: 30px;
    }
    h1 {
        color: white;
    }
    .selected {
        background-color: #ff3e00;
        color: white;
    }
    
    hr {
        max-width: 50px;
        color: white;
    }
</style>

