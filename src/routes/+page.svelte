<script lang="ts">
    let projectActive = false;
    export const prerender = true;
    export const ssr = true;
    import '../app.postcss';

    import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';
    import { playStartupAnimation } from '$lib/startUp';
    import { projectsScrollUp, projectsScrollDown } from '$lib/scroll';

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

<!-- TODO: Split up this file into multiple ones -->


<div id="main" class="container mx-auto p-8 space-y-8 flex justify-center items-center h-screen opacity-0">
    <div class="card p-4 relative">
        {#if !projectActive}
        <section class="flex justify-center fade-in">
            <Avatar class="border-2 border-white rounded-full" src="https://avatars.githubusercontent.com/u/56565042?v=4" />
        </section>
        <!--<LightSwitch class="{!projectActive ? 'absolute top-5 left-5 light-switch opacity-100' : 'hidden'}" />-->
        <header class="card-header flex justify-center text-xl font-bold fade-in">Hello I'm Yuki</header>
        <section class="p-4 flex justify-center fade-in">Developer • 18 • he/him</section>
        <section class="flex justify-center button">
            <!--
            <a class="btn variant-filled-primary mr-4" target="_blank" href="mailto:contact@yuki6942.xyz">Contact</a>
            <a class="btn variant-filled-secondary mr-4" target="_blank" href="https://discord.com/users/594627968668794896">Discord</a>
            <a class="btn variant-filled-tertiary" target="_blank" href="https://github.com/yuki6942/">GitHub</a>
            -->

            <div class="flex justify-center gap-4">
                <div class="relative group flex flex-col items-center text-center pb-4">
                    <a class="hover:text-orange-500 transition-colors duration-500" target="_blank" href="mailto:contact@yuki6942.xyz">
                        <i class="transition-transform duration-500 far fa-envelope text-4xl transform  hover:scale-125 cursor-pointer "></i>
                    </a>
                </div>
                <div class="relative group flex flex-col items-center text-center">
                    <a class="hover:text-black transition-colors duration-500" target="_blank" href="https://github.com/yuki6942/">
                        <i class="fab fa-github text-4xl transform transition-transform hover:scale-125 cursor-pointer"></i>
                    </a>
                </div>
                <div class="relative group flex flex-col items-center text-center">
                    <a class="hover:text-blue-600 transition-colors duration-500" target="_blank" href="https://twitter.com/yuki6942/">
                        <i class="fab fa-twitter text-4xl transform transition-transform hover:scale-125 cursor-pointer"></i>
                    </a>
                </div>
            </div>

        </section>
        <section class="flex justify-center button pt-3">
            <!-- svelte-ignore a11y-interactive-supports-focus -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!--TODO: Add about section-->
            <!--<a class="btn variant-filled-surface cursor-pointer transform transition-transform hover:scale-105 mr-1" on:click={handleProjectsUp}>About</a>-->
            <!-- svelte-ignore a11y-interactive-supports-focus -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="btn variant-filled-surface cursor-pointer transform transition-transform hover:scale-105" on:click={handleProjectsUp}>Projects</a>
            
        </section>
        {/if}
        <div id="projects" class="project-content opacity-0 project-fade" style="margin-top: 70px;">
            {#if projectActive}
           <!-- <LightSwitch class="absolute top-5 left-5 light-switch opacity-100" />-->
            <button class="btn up-arrow absolute top-5 right-5 transform transition-transform hover:scale-105" on:click={handleProjectsDown}>
                <i class="fas fa-arrow-up"></i> 
            </button>
            <section class="flex" style="margin-top: 35px;">

                <div class="card p-4 m-4 card-hover">
                    <h2 class="text-xl font-semibold text-center">Mira</h2>
                    <p class="text-center pt-15">Mira is a discord bot written in C# using the DSharpPlus lib</p>
                    <a target="_blank" href="https://github.com/yuki6942/Mira" class="btn variant-filled-primary mt-2 pt-15 flex justify-center transform transition-transform hover:scale-105">View Details</a>
                </div>
          		<div class="card p-4 m-4">
                    <h2 class="text-xl font-semibold card-hover text-center">My Portfolio</h2>
                    <p class="text-center pt-15">The current website your visiting, written with SvelteKit and TypeScript</p>
                    <a target="_blank" href="https://github.com/yuki6942/yuki6942.xyz" class="btn variant-filled-primary mt-2 pt-15 flex justify-center transform transition-transform hover:scale-105">View Details</a>
                </div>
            </section>
            {/if}
        </div>
    </div>
</div>
<slot />
