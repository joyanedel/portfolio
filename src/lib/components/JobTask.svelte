<script lang="ts">
	export let task: string;
</script>

<li>
	<div class="flex flex-col flex-1 gap-4">
		<h4
			class="flex flex-col items-start text-lg font-medium leading-8 lg:items-center md:flex-row text-slate-700"
		>
			<i class="mi mi-caret-right" /><span class="flex-1 dark:text-slate-300">{task}</span>
		</h4>
	</div>
</li>
