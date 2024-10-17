<script lang="ts">
	import '../app.postcss';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { playStartupAnimation } from '$lib/startUp';
	import { projectsScrollUp, projectsScrollDown } from '$lib/scroll';
	import { calculateAge } from '$lib/birthday';

	let projectActive = false;
	let currentAge: number;
	const birthDate = new Date(2005, 5, 30); // js month starts at 0
	currentAge = calculateAge(birthDate);

	function handleProjectsUp() {
		projectsScrollUp();
		projectActive = true;
	}

	function handleProjectsDown() {
		projectsScrollDown();
		projectActive = false;
	}

	playStartupAnimation();
</script>

<div
	id="main"
	class="container mx-auto p-8 space-y-8 flex justify-center items-center h-screen opacity-0"
>
	<div class="card p-4 relative">
		{#if !projectActive}
			<section class="flex justify-center fade-in">
				<Avatar
					class="border-2 border-white rounded-full transition duration-500 transform hover:scale-125 hover:border-pink-400"
					src="https://avatars.githubusercontent.com/u/56565042?v=4"
				/>
			</section>
			<header class="card-header flex justify-center text-xl font-bold fade-in">
				Hello I'm Yuki
			</header>
			<section class="p-4 flex justify-center fade-in">Developer • {currentAge} • he/him</section>
			<section class="flex justify-center items-center socialLinks my-4">
				<div class="relative group flex flex-col items-center text-center">
					<a
						id="mail"
						class="transition-all duration-300 ease-in-out hover:bg-mail hover:w-11 hover:h-11 hover:mx-4 rounded-full shadow-lg flex justify-center items-center w-10 h-10 bg-gray-800"
						target="_blank"
						href="mailto:contact@yuki6942.xyz"
					>
						<i
							class="transition-transform duration-300 fill-current text-white text-lg far fa-envelope"
						></i>
					</a>
				</div>
				<div class="relative group flex flex-col items-center text-center">
					<a
						id="discord"
						class="transition-all duration-300 ease-out transform flex justify-center items-center w-10 h-10 bg-gray-800 rounded-full shadow-lg hover:w-11 hover:h-11 hover:mx-4 ho hover:bg-discord"
						target="_blank"
						href="https://discord.com/users/594627968668794896"
					>
						<i
							class="transition-transform duration-300 fill-current text-white text-lg fab fa-discord"
						></i>
					</a>
				</div>

				<div class="relative group flex flex-col items-center text-center">
					<a
						id="github"
						class="transition-all duration-300 ease-out transform flex justify-center items-center w-10 h-10 bg-gray-800 rounded-full shadow-lg hover:w-11 hover:h-11 hover:mx-4 hover:bg-github"
						target="_blank"
						href="https://github.com/yuki6942/"
					>
						<i
							class="transition-transform duration-300 fill-current text-white text-lg fab fa-github"
						></i>
					</a>
				</div>

				<div class="relative group flex flex-col items-center text-center">
					<a
						id="twitter"
						class="transition-all duration-300 ease-out transform flex justify-center items-center w-10 h-10 bg-gray-800 rounded-full shadow-lg hover:w-11 hover:h-11 hover:mx-4 ho hover:bg-twitter"
						target="_blank"
						href="https://twitter.com/yuki6942/"
					>
						<i
							class="transition-transform duration-300 fill-current text-white text-lg fab fa-twitter"
						></i>
					</a>
				</div>
			</section>

			<section class="flex justify-center items-center socialLinks my-4">
				<a
					class="btn variant-filled-surface cursor-pointer transform transition-transform hover:scale-105"
					on:click={handleProjectsUp}>Projects</a
				>
			</section>
		{/if}
		<div id="projects" class="project-content opacity-0 project-fade" style="margin-top: 70px;">
			{#if projectActive}
				<button
					class="btn up-arrow absolute top-5 right-5 transform transition-transform hover:scale-105"
					on:click={handleProjectsDown}
				>
					<i class="fas fa-arrow-up"></i>
				</button>
				<section class="flex" style="margin-top: 35px;">
					<div class="card p-4 m-4 card-hover">
						<h2 class="text-xl font-semibold text-center">Mira</h2>
						<p class="text-center pt-15">
							Mira is a discord bot written in C# using the DSharpPlus lib
						</p>
						<a
							target="_blank"
							href="https://github.com/yuki6942/Mira"
							class="btn variant-filled-primary mt-2 pt-15 flex justify-center transform transition-transform hover:scale-105"
							>View Details</a
						>
					</div>
					<div class="card p-4 m-4 card-hover">
						<h2 class="text-xl font-semibold card-hover text-center">My Portfolio</h2>
						<p class="text-center pt-15">
							The current website your visiting, written in SvelteKit and TypeScript
						</p>
						<a
							target="_blank"
							href="https://github.com/yuki6942/yuki6942.xyz"
							class="btn variant-filled-primary mt-2 pt-15 flex justify-center transform transition-transform hover:scale-105"
							>View Details</a
						>
					</div>
				</section>
			{/if}
		</div>
	</div>
</div>
<slot />
