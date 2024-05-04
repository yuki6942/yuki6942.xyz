import gsap from "gsap";
import { onMount } from "svelte";

export function playStartupAnimation() {

    onMount(() => {

        // Make it so the card is hidden at first, so it looks better when opening the site in a new tab
        document.getElementById('main')?.classList.remove('opacity-0')

        gsap.fromTo('.card', { height: 0 }, {height: '300', duration: 0.5, ease: 'power2.Out'});
        gsap.fromTo('.card', { width: 0 }, { width: '350', duration: 0.5, ease: 'power2.out', delay: 0.4 });
        gsap.fromTo('.light-switch', { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0.5, ease: 'bounce.out', delay: 0.9 });
        gsap.fromTo('.button', { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.5, ease: 'back.in', delay: 0.9 });



        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((element, index) => {
            // Add delay between elements
            const delay = index * 0.3;
            gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.9 + delay });
        });

        
    });
}