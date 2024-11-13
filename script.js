let currentIndex = 0;

function showCarouselItem(index) {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - 1; // Loop to the last item
    } else if (currentIndex >= items.length) {
        currentIndex = 0; // Loop to the first item
    }

    showCarouselItem(currentIndex);
}

// Initialize the first carousel item
showCarouselItem(currentIndex);