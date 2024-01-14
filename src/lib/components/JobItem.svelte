<script lang="ts">
	import JobTask from './JobTask.svelte';

	export let title: string;
	export let company: string;
	export let type: string;
	export let description: string = '';
	export let tasks: string[] = [];
	export let href: string;
	export let favicon_url: string;
	export let start_period: string;
	export let end_period: string = 'Present';
</script>

<li role="article" class="relative pl-8">
	<div class="flex flex-col flex-1 gap-4">
		<a
			{href}
			target="_blank"
			class="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white"
		>
			<img
				src={favicon_url}
				alt={`${company} logo`}
				title={`${company} logo`}
				width="48"
				height="48"
				class="max-w-full rounded-full"
			/>
		</a>
		<h4
			class="flex flex-col items-start text-lg font-medium leading-8 lg:items-center md:flex-row text-slate-700"
		>
			<span class="flex-1">
				{title} at <a {href} target="_blank" class="text-blue-500">{company}</a>
			</span>
		</h4>
		<span class="text-sm font-normal text-slate-400">
			{start_period} - {end_period}
		</span>
		<h6 class="text-sm font-normal text-slate-400">{type}</h6>
		<p class="text-slate-500">{description}</p>
		<ul>
			{#each tasks as task}
				<JobTask {task} />
			{/each}
		</ul>
	</div>
</li>
