<script lang="ts">
	import Cover from './cover.svelte';
	import Experience from './experience.svelte';
	import Stack from './stack.svelte';
</script>

<Cover />

<section aria-label="content about me" class="flex flex-col items-start" id="content">
	<Experience />
	<Stack />
</section>
