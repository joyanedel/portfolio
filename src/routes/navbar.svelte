<script lang="ts">
	import { scrollIntoView } from '$lib/functionalities';

	function toggleNavbar() {
		const navbar = document.getElementById('navbar-default') as HTMLDivElement;
		const toggle = document.getElementById('navbar-default-toggle') as HTMLButtonElement;

		if (navbar.classList.contains('hidden')) {
			navbar.classList.remove('hidden');
			toggle.setAttribute('aria-expanded', 'true');
		} else {
			navbar.classList.add('hidden');
			toggle.setAttribute('aria-expanded', 'false');
		}
	}

	function clickAndScrollIntoView(event: MouseEvent) {
		scrollIntoView(event);
		toggleNavbar();
	}
</script>

<nav class="border-gray-200 dark:bg-gray-900 w-full justify-center">
	<div
		class="max-w-screen-xl flex flex-wrap items-center justify-center gap-4 mx-auto p-4 w-full pt-[4rem] sm:pt-0"
	>
		<button
			id="navbar-default-toggle"
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-default"
			aria-expanded="false"
			on:click={toggleNavbar}
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="font-medium flex flex-col p-0 mt-4 rounded-lg bg-gray-50/20 sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
			>
				<li>
					<a
						href="#cover"
						on:click|preventDefault={clickAndScrollIntoView}
						class="block py-2 px-3 text-slate-200 bg-blue-700 rounded sm:bg-transparent sm:text-blue-700 md:p-0 sm:dark:text-blue-500"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="#experience"
						on:click|preventDefault={clickAndScrollIntoView}
						class="block py-2 px-3 text-slate-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Experience</a
					>
				</li>
				<li>
					<a
						href="#stack"
						on:click|preventDefault={clickAndScrollIntoView}
						class="block py-2 px-3 text-slate-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Stack</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
