<script>
	// @ts-ignore
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<section
	class="bg-white dark:bg-gray-900 h-screen justify-center items-center flex"
	aria-label="cover"
>
	<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
		<h1
			class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
		>
			Jesús Oyanedel
		</h1>
		<h2 class="text-blue-800">Software Engineer</h2>
		<p
			class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
		>
			I engineer digital solutions with surgical precision. My code is a symphony of efficiency,
			weaving through complex systems with ease. From distributed architectures to cutting-edge
			tech, I craft functionality that transcends conventions. Welcome to a space where each line of
			code is a brushstroke, creating a canvas of innovation. Let's redefine possibilities in the
			digital realm.
		</p>
		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
			<a
				href="#content"
				on:click|preventDefault={scrollIntoView}
				class=" gap-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
			>
				I'm interested
				<i class="mi mi-arrow-down animate-bounce flex flex-row justify-center items-center"
					><span class="u-sr-only" />
				</i></a
			>
		</div>
	</div>
</section>
