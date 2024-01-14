<script lang="ts">
	export let title: string;
</script>

<li class="flex flex-col items-center justify-center">
	<slot />
	<strong>{title}</strong>
</li>
