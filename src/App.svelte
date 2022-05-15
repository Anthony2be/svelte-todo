<script>
	import { onMount } from 'svelte';

	let text = "Hello World";

	let todos = []

	onMount(() => {
		const existingTodos = localStorage.getItem('todos');
		todos = JSON.parse(existingTodos) || [];
	});

	function add() {
		if (text.length > 0){
			todos = todos.concat({ done: false, text: text });
			localStorage.setItem('todos', JSON.stringify(todos));
		}
	}

	function clear() {
		todos = todos.filter(t => !t.done);
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	function save() {
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	function handleKeydown(event) {
		if (event.key === "Enter") {
			add();
			text = "";
		}/* else if (event.key === "Backspace") {
			clear();
		} else if (event.key === "Escape") {
			text = "";
		}*/
	}
</script>

<main>
	<input type="text" bind:value={text}> <button on:click={add}>Add</button> <button on:click={clear}>Clear Done</button> <button on:click={save}>Save</button>

	{#each todos as todo}
	<div>
		<input type=checkbox bind:checked={todo.done}>
		<input placeholder="What needs to be done?" bind:value={todo.text}>
	</div>
	{/each}
</main>

<svelte:window on:keydown={handleKeydown}/>