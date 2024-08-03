document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Add 'animate__animated' class to elements in the viewport on scroll
    const elements = document.querySelectorAll('.animate__animated');
    function animateOnScroll() {
      elements.forEach(el => {
        if (isInViewport(el)) {
          el.classList.add('animate__fadeIn');
        }
      });
    }
  
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
  
    // Initial check if elements are in the viewport
    animateOnScroll();
  });
  