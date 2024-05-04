import gsap from "gsap";

export function scrollUp() {
    const elementsToMove = document.querySelectorAll('.fade-in, .button');
    const card = document.querySelector('.card');

    gsap.to(card, {
        width: '800px', // Set the width to 800px
        height: '800px', // Set the height to 800px
        duration: 0.5, // Animation duration
        ease: 'power2.out' // Easing function
    });

    gsap.to(elementsToMove, {
        y: -50, // Move elements up by 50 pixels
        opacity: 0, // Set opacity to 0
        duration: 0.5, // Animation duration
        ease: 'power2.out', // Easing function
    });

    setTimeout(() => {
        document.getElementById('projects')?.classList.remove('opacity-0')
    }, 200);

    const elements = document.querySelectorAll('.project-fade');
    elements.forEach((element, index) => {
        // Add delay between elements
        const delay = index * 0.3;
        gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.2 + delay });
    });

}

export function scrollDown() {
    const elementsToMove = document.querySelectorAll('.fade-in, .button');
    const card = document.querySelector('.card');

    gsap.to(card, {
        width: '350px', // Set the width back to 350px
        height: '300px', // Set the height back to 300px
        duration: 0.5, // Animation duration
        ease: 'power2.out' // Easing function
    });

    gsap.to(elementsToMove, {
        y: 0, // Move elements back to their original position
        opacity: 1, // Set opacity back to 1
        duration: 0.5, // Animation duration
        ease: 'power2.out', // Easing function
    });

    const projectContent = document.getElementById('projects');
    if (projectContent) {
        projectContent.classList.add('opacity-0');
    }

    const elements = document.querySelectorAll('.project-fade');
    elements.forEach((element, index) => {
        // Add delay between elements
        const delay = index * 0.3;
        gsap.to(element, { opacity: 0, duration: 0.5, delay: delay });
    });
}