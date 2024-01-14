<script lang="ts">
	import React from '$lib/icons/react.svelte';
	import Svelte from '$lib/icons/svelte.svelte';
	import Tailwind from '$lib/icons/tailwind.svelte';
	import FastAPI from '$lib/icons/fastapi.svelte';
	import StackItem from '$lib/components/StackItem.svelte';
</script>

<ul class="grid gap-4 grid-cols-none sm:grid-cols-6 w-full">
	<StackItem title="FastAPI">
		<FastAPI />
	</StackItem>
	<StackItem title="React">
		<React />
	</StackItem>
	<StackItem title="Svelte">
		<Svelte />
	</StackItem>
	<StackItem title="Tailwind CSS">
		<Tailwind />
	</StackItem>
</ul>
