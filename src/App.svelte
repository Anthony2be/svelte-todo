<script>
	let text = "Hello World";

	let todos = [
		{
			text: "Learn Svelte",
			done: true
		},
		{
			text: "Build an app",
			done: false
		}
	]

	function add() {
		if (text.length > 0){
			todos = todos.concat({ done: false, text: text });
		}
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}

	function handleKeydown(event) {
		if (event.key === "Enter") {
			add();
		} else if (event.key === "Backspace") {
			clear();
		} else if (event.key === "Escape") {
			text = "";
		}
	}
</script>

<main>
	<input type="text" bind:value={text}> <button on:click={add}>Add</button> <button on:click={clear}>Clear</button>

	{#each todos as todo}
	<div>
		<input type=checkbox bind:checked={todo.done}>
		<input placeholder="What needs to be done?" bind:value={todo.text}>
	</div>
	{/each}
</main>
<svelte:window on:keydown={handleKeydown}/>