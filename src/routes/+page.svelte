<script lang="ts">
    let projectActive = false;
    export const prerender = true;
    export const ssr = true;
    import '../app.postcss';

    import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';
    import { playStartupAnimation } from '$lib/startUp';
    import { scrollUp, scrollDown } from '$lib/scroll';

    function handleClickDown() {
        scrollUp();
        projectActive = true;
    }

    function handleClickUp() {
        scrollDown();
        projectActive = false;
    }

    playStartupAnimation();
</script>

<div id="main" class="container mx-auto p-8 space-y-8 flex justify-center items-center h-screen opacity-0">
    <div class="card p-4 relative">
        {#if !projectActive}
        <section class="flex justify-center fade-in">
            <Avatar class="border-2 border-purple-400 rounded-full" src="https://avatars.githubusercontent.com/u/56565042?v=4" />
        </section>
        <LightSwitch class="{!projectActive ? 'absolute top-5 left-5 light-switch opacity-100' : 'hidden'}" />
        <header class="card-header flex justify-center text-xl font-bold fade-in">Hello I'm Yuki</header>
        <section class="p-4 flex justify-center fade-in">Developer • 18 • he/him</section>
        <section class="flex justify-center button">
            <a class="btn variant-filled-primary" target="_blank" href="mailto:contact@yuki6942.xyz">Contact</a>
            <a class="btn variant-filled-secondary" target="_blank" href="https://discord.com/users/594627968668794896">Discord</a>
            <a class="btn variant-filled-tertiary" target="_blank" href="https://github.com/yuki6942/">GitHub</a>
        </section>
        <section class="flex justify-center button pt-3">
            <a class="btn variant-filled-surface cursor-pointer" on:click={handleClickDown}>Projects</a>
        </section>
        {/if}
        <div id="projects" class="project-content opacity-0 project-fade" style="margin-top: 70px;">
            {#if projectActive}
            <LightSwitch class="absolute top-5 left-5 light-switch opacity-100" />
            <button class="btn up-arrow absolute top-5 right-5" on:click={handleClickUp}>
                <i class="fas fa-arrow-up"></i> 
            </button>
            <section class="flex project-fade" style="margin-top: 35px;">

                <div class="card p-4 m-4 card-hover">
                    <h2 class="text-xl font-semibold text-center">Mira</h2>
                    <p class="text-center pt-15">Mira is a discord bot written in C# using the DSharpPlus lib</p>
                    <a target="_blank" href="https://github.com/yuki6942/Mira" class="btn variant-filled-primary mt-2 pt-15 flex justify-center">View Details</a>
                </div>
          		<div class="card p-4 m-4">
                    <h2 class="text-xl font-semibold card-hover text-center">My Portfolio</h2>
                    <p class="text-center pt-15">The current website your visiting, written with SvelteKit and TypeScript</p>
                    <a target="_blank" href="https://github.com/yuki6942/yuki6942.xyz" class="btn variant-filled-primary mt-2 pt-15 flex justify-center">View Details</a>
                </div>
            </section>
            {/if}
        </div>
    </div>
</div>
<slot />
