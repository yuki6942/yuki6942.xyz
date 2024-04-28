<script lang="ts">
	export const prerender = true;
	export const ssr = true;
	import '../app.postcss';

	import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';

</script>


<div class="container mx-auto p-8 space-y-8 flex justify-center items-center h-screen">
	
	<div class="card p-4 relative">
		<section class="flex justify-center">
			<Avatar class="border-2 border-purple-400 rounded-full" src="https://avatars.githubusercontent.com/u/56565042?v=4" />
		</section>

		<LightSwitch class="absolute top-5 left-5"/>	

		<header class="card-header flex justify-center text-xl font-bold">Hello I'm  Yuki</header>
		<section class="p-4 flex justify-center">Developer • 18 • he/him</section>

		<section>
			<a class="btn variant-filled-primary" target="_blank" href="mailto:contact@yuki6942.xyz">Contact</a>
			<a class="btn variant-filled-secondary" target="_blank" href="https://discord.com/users/594627968668794896">Discord</a>
			<a class="btn variant-filled-tertiary" target="_blank" href="https://github.com/yuki6942/">GitHub</a>
		</section>
	</div>
</div>


<slot />
