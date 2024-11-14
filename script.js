//// Get the carousel container and items
//const carouselContainer = document.querySelector('.carousel-container');
//const carouselItems = document.querySelectorAll('.carousel-item');
//
//// Set the current index
//let currentIndex = 0;
//
//// Function to show the next carousel item
//function showNextItem() {
//   // Get the next index
//   const nextIndex = (currentIndex + 1) % carouselItems.length;
//
//   // Remove the active class from the current item
//   carouselItems[currentIndex].classList.remove('active');
//
//   // Add the active class to the next item
//   carouselItems[nextIndex].classList.add('active');
//
//   // Update the current index
//   currentIndex = nextIndex;
//}
//
//// Function to show the previous carousel item
//function showPreviousItem() {
//   // Get the previous index
//   const previousIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//
//   // Remove the active class from the current item
//   carouselItems[currentIndex].classList.remove('active');
//
//   // Add the active class to the previous item
//   carouselItems[previousIndex].classList.add('active');
//
//   // Update the current index
//   currentIndex = previousIndex;
//}
//
//// Add event listeners for swipe gestures
//carouselContainer.addEventListener('touchstart', (e) => {
//    const touch = e.touches[0];
//    const startX = touch.clientX;
//    const startY = touch.clientY;
//
//    // Add event listener for touchmove
//    carouselContainer.addEventListener('touchmove', (e) => {
//        const touch = e.touches[0];
//        const endX = touch.clientX;
//        const endY = touch.clientY;
//
//        // Calculate the swipe direction (horizontal swipe)
//        const swipeDirection = Math.atan2(endY - startY, endX - startX);
//
//        // Only consider horizontal swipe (if the swipe angle is more horizontal than vertical)
//        if (Math.abs(swipeDirection) < Math.PI / 4) {
//            // If swipe to the right (swipeDirection is positive)
//            if (endX > startX) {
//                showPreviousItem();  // Go to previous item
//            }
//            // If swipe to the left (swipeDirection is negative)
//            else if (endX < startX) {
//                showNextItem();  // Go to next item
//            }
//        }
//    });
//
//    // Stop auto-swipe when the user taps and holds (for demonstration)
//    let holdTimer;
//    carouselContainer.addEventListener('touchend', () => {
//        clearTimeout(holdTimer); // Clear the timer
//        // Optionally, you can perform actions when the user taps and holds (e.g., stop carousel movement)
//        holdTimer = setTimeout(() => {
//            console.log('Hold detected. Stopping carousel (no more auto-swipe).');
//        }, 1000); // 1-second hold detection
//    });
//});
//
//// Add event listener for click on carousel items (optional for manual navigation)
//carouselContainer.addEventListener('click', (e) => {
//    // Get the clicked item
//    const clickedItem = e.target.closest('.carousel-item');
//
//    // Show the next or previous item based on the clicked item
//    if (clickedItem && clickedItem.classList.contains('active')) {
//        showNextItem();
//    } else {
//        showPreviousItem();
//    }
//});

$(function () {
			"use strict";
			
			setTimeout(function () {
				$('.loader_bg').fadeToggle();
				showNextItem();
			}, 1500);
});
