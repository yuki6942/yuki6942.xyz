import gsap from "gsap";

export function scrollUp() {
    const elementsToMove = document.querySelectorAll('.fade-in, .button');
    const card = document.querySelector('.card');

    gsap.to(card, {
        width: '800px', 
        height: '800px', 
        duration: 0.5,
        ease: 'power2.out' 
    });

    gsap.to(elementsToMove, {
        y: -50, 
        opacity: 0, 
        duration: 0.5,
        ease: 'power2.out', 
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
        width: '350px',
        height: '300px',
        duration: 0.5, 
        ease: 'power2.out' 
    });

    gsap.to(elementsToMove, {
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        ease: 'power2.out', 
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