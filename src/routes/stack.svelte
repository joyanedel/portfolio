<script lang="ts">
	import ProgrammingLanguage from './stack/languages.svelte';
	import Framework from './stack/frameworks.svelte';
	import Tools from './stack/tools.svelte';
	type Tab = 'languages' | 'frameworks' | 'tools';
	let currentTab: Tab = 'languages';

	$: console.log(currentTab);
</script>

<div aria-label="stack" class="w-full">
	<h2 class="mt-4 text-2xl font-bold text-left text-slate-700 dark:text-slate-300">My Stack</h2>
	<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
		<ul class="-mb-px text-sm font-medium text-center grid grid-flow-col">
			<li class="me-2">
				<button
					class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
					type="button"
					on:click={() => (currentTab = 'languages')}>Programming Languages</button
				>
			</li>
			<li class="me-2">
				<button
					class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
					type="button"
					on:click={() => (currentTab = 'frameworks')}>Frameworks</button
				>
			</li>
			<li class="me-2">
				<button
					class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
					type="button"
					on:click={() => (currentTab = 'tools')}>Tools</button
				>
			</li>
		</ul>
	</div>

	<div class="flex flex-col items-center justify-center">
		<div
			class="flex flex-col items-center justify-center w-full p-4 space-y-4"
			id="default-tab-content"
			data-tabs-content="#default-tab"
			role="tabpanel"
			aria-labelledby="default-tab"
		>
			{#if currentTab === 'languages'}
				<ProgrammingLanguage />
			{:else if currentTab === 'frameworks'}
				<Framework />
			{:else if currentTab === 'tools'}
				<Tools />
			{/if}
		</div>
	</div>
</div>
