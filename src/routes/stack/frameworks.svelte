<script lang="ts">
	import React from '$lib/icons/react.svelte';
	import Svelte from '$lib/icons/svelte.svelte';
	import StackItem from '$lib/components/StackItem.svelte';
</script>

<div>
	<ul class="grid gap-4 grid-cols-none md:grid-cols-6">
		<StackItem title="React">
			<React />
		</StackItem>
		<StackItem title="Svelte">
			<Svelte />
		</StackItem>
	</ul>
</div>
