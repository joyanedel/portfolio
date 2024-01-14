<script lang="ts">
	import Terraform from '$lib/icons/terraform.svelte';
	import Postgres from '$lib/icons/postgresql.svelte';
	import Git from '$lib/icons/git.svelte';
	import Linux from '$lib/icons/linux.svelte';
	import Docker from '$lib/icons/docker.svelte';
	import Bash from '$lib/icons/bash.svelte';

	import StackItem from '$lib/components/StackItem.svelte';
</script>

<div>
	<ul class="grid gap-4 grid-cols-none md:grid-cols-6">
		<StackItem title="Terraform">
			<Terraform />
		</StackItem>
		<StackItem title="Postgres">
			<Postgres />
		</StackItem>
		<StackItem title="Git">
			<Git />
		</StackItem>
		<StackItem title="Linux">
			<Linux />
		</StackItem>
		<StackItem title="Docker">
			<Docker />
		</StackItem>
		<StackItem title="Bash">
			<Bash />
		</StackItem>
	</ul>
</div>
