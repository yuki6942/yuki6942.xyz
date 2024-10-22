import gsap from "gsap";
import { onMount } from "svelte";

export function playStartupAnimation() {
    onMount(() => {
        // Make sure the card starts hidden
        const main = document.getElementById('main');
        main?.classList.remove('opacity-0');

        gsap.fromTo(
            '.card',
            { height: 0 },
            { height: '300px', duration: 0.5, ease: 'power2.Out' }
        );
        gsap.fromTo(
            '.card',
            { width: 0 },
            { width: '350px', duration: 0.5, ease: 'power2.out', delay: 0.4 }
        );

        gsap.fromTo(
            '.button',
            { y: '100%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 0.5, ease: 'back.in', delay: 0.9 }
        );

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((element, index) => {
            const delay = index * 0.3;

            gsap.fromTo(
                element,
                { opacity: 0, visibility: 'hidden' },  // Hidden initially
                { opacity: 1, visibility: 'visible', duration: 0.5, delay: 0.9 + delay } // Visible after animation
            );
        });
    });
}
