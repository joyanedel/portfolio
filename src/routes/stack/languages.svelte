<script lang="ts">
	import Python from '$lib/icons/python.svelte';
	import Typescript from '$lib/icons/typescript.svelte';
	import StackItem from '$lib/components/StackItem.svelte';
</script>

<div>
	<ul class="grid gap-4 grid-cols-none md:grid-cols-6">
		<StackItem title="Python">
			<Python />
		</StackItem>
		<StackItem title="Typescript">
			<Typescript />
		</StackItem>
	</ul>
</div>
