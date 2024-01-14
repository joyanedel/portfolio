<script lang="ts">
	import NavBar from './navbar.svelte';
	import CopyIcon from '$lib/icons/copy.svelte';
	import CheckIcon from '$lib/icons/check.svelte';
	import { scrollIntoView } from '$lib/functionalities';

	let emailWasCopied = false;

	function copyEmail() {
		// get the email input
		const email = document.getElementById('email') as HTMLInputElement;
		navigator.clipboard.writeText(email.value);
		emailWasCopied = true;
		setTimeout(() => {
			emailWasCopied = false;
		}, 2000);
	}
</script>

<section
	class="bg-gradient-to-b from-blue-950 to-purple-950 dark:bg-gray-900 dark:bg-none min-h-screen justify-center items-center flex flex-col"
	aria-label="cover"
	id="cover"
>
	<NavBar />

	<div class="py-8 px-4 mx-auto text-center lg:py-16">
		<h1
			class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"
		>
			Jesús Oyanedel
		</h1>
		<span class="text-gray-600">xe'sus</span>
		<h2 class="text-blue-800">Software Engineer</h2>
		<p
			class="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-slate-200 dark:text-gray-400"
		>
			Developer, cat lover, and a music enthusiast. If you are looking for a nice person to work
			with, you are in the right place. I love develop software that helps people to improve their
			lives but if i'm not coding, you can find me playing guitar, playing with my cats, riding or
			just skating.
		</p>
		<div class="flex flex-col justify-start items-center my-12">
			<h2 class="text-slate-200">Get in touch</h2>

			<div
				class="rounded-lg bg-transparent/20 dark:bg-slate-800 p-2 w-full sm:w-fit flex justify-between"
			>
				<input
					id="email"
					type="email"
					value="iamjoyanedel@gmail.com"
					disabled
					class="rounded-xl bg-transparent text-gray-300"
				/>
				<button on:click={copyEmail}>
					{#if emailWasCopied}
						<div class="stroke-green-700">
							<CheckIcon />
						</div>
					{:else}
						<div class="dark:stroke-gray-300 stroke-slate-200">
							<CopyIcon />
						</div>
					{/if}
				</button>
			</div>
		</div>

		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 gap-4">
			<a
				href="#content"
				on:click|preventDefault={scrollIntoView}
				class=" gap-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				I want more
				<i class="mi mi-arrow-down animate-bounce flex flex-row justify-center items-center"
					><span class="u-sr-only" />
				</i></a
			>
		</div>
	</div>
</section>
