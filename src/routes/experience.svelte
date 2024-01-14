<script lang="ts">
	import JobItem from '../lib/components/JobItem.svelte';
</script>

<div aria-label="experience">
	<h1>Work Experience</h1>
	<ul
		aria-label="Work Experience"
		role="feed"
		class="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:border before:-translate-x-1/2 before:border-slate-200 before:border-dashed after:absolute after:top-6 after:left-8 after:bottom-6 after:border after:-translate-x-1/2 after:border-slate-200"
	>
		<JobItem
			title="Software Engineer"
			company="Unholster"
			tasks={[
				'Built optimization application that low the costs and improve the assignments of allocating people to work in differents part of the country',
				'Help building event sourcing based project that improve internal feedback between teams',
				'Help building self scheduling system that allow public people to schedule their own appointments'
			]}
			favicon_url="/icons/companies/unholster.ico"
			href="https://unholster.com"
			type="Full Time"
			start_period="2023, April"
		/>
		<JobItem
			title="Software Engineer"
			company="Quantsoft"
			tasks={[
				"Built monitoring system to track the status of the company's services",
				"Configure and maintain the company's infrastructure"
			]}
			favicon_url="/icons/companies/quantsoft.ico"
			href="https://quantsoft.cl"
			type="Full Time"
			start_period="2023, January"
			end_period="2023, April"
		/>
		<JobItem
			title="Backend Developer"
			company="MyFuture AI"
			tasks={['Integrate data scientist outputs into client products']}
			favicon_url="/icons/companies/myfuture.ico"
			href="https://myfuture.ai"
			type="Freelancer"
			start_period="2022, May"
			end_period="2023, April"
		/>
		<JobItem
			title="Python Developer"
			company="Unitti"
			tasks={[
				'Built a factoring system to improve factoring companies and their clients experience'
			]}
			favicon_url="/icons/companies/unitti.ico"
			href="https://unitti.com"
			type="Part Time"
			start_period="2021, April"
			end_period="2023, April"
		/>
	</ul>
</div>
