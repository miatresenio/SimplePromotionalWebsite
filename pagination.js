document.addEventListener("DOMContentLoaded", function() {
    const paginationLinks = document.querySelectorAll('.pagination .page-link');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Smooth scroll to the target element
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Add hover effect to the target card
            targetElement.querySelector('.card').classList.add('hovered');

            // Remove the hover effect after 2 seconds
            setTimeout(() => {
                targetElement.querySelector('.card').classList.remove('hovered');
            }, 2000);
        });
    });
});
