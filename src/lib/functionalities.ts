export function scrollIntoView(event: Event) {
	const target = event.target as HTMLAnchorElement;
	const sectionRef = target.getAttribute('href') ?? '#';
	const el = document.querySelector(sectionRef);
	if (!el) return;
	el.scrollIntoView({
		behavior: 'smooth'
	});
}
