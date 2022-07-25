<script>

    let pass = "elo"
    let result = null
    let myCookieValue = null
    async function doPost () {
    const res = await fetch('http://localhost:8080/auth', {
        method: 'POST',
        body: JSON.stringify({
                pass
        })
    })
    const json = await res.json()
    result = JSON.stringify(json)
    const myCookieValue = getCookie("myCookie");
    }


</script>
<h>
TODO
</h>

<input type="text" bind:value={pass} />
<button on:click={doPost}>
    Post it
</button>

<p>
	Result:
</p>
<pre>
{result}
</pre>


<p>
	Cookie:
</p>
<pre>
{myCookieValue}
</pre>

<style>
</style>
