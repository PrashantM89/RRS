

// Get the carousel container and items  
const carouselContainer = document.querySelector('.carousel-container');  
const carouselItems = document.querySelectorAll('.carousel-item');  
  
// Set the carousel interval  
const interval = 5000; // 5 seconds  
  
// Set the current index  
let currentIndex = 0;  
  
// Function to show the next carousel item  
function showNextItem() {  
   // Get the next index  
   const nextIndex = (currentIndex + 1) % carouselItems.length;  
  
   // Remove the active class from the current item  
   carouselItems[currentIndex].classList.remove('active');  
  
   // Add the active class to the next item  
   carouselItems[nextIndex].classList.add('active');  
  
   // Update the current index  
   currentIndex = nextIndex;  
}  

// Function to show the previous carousel item  
function showPreviousItem() {  
   // Get the previous index  
   const previousIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;  
  
   // Remove the active class from the current item  
   carouselItems[currentIndex].classList.remove('active');  
  
   // Add the active class to the previous item  
   carouselItems[previousIndex].classList.add('active');  
  
   // Update the current index  
   currentIndex = previousIndex;  
}  
  
// Add event listeners for swipe gestures  
carouselContainer.addEventListener('touchstart', (e) => {  
   const touch = e.touches[0];  
   const startX = touch.clientX;  
   const startY = touch.clientY;  
  
   // Add event listener for touchmove  
   carouselContainer.addEventListener('touchmove', (e) => {  
      const touch = e.touches[0];  
      const endX = touch.clientX;  
      const endY = touch.clientY;  
  
      // Calculate the swipe direction  
      const swipeDirection = Math.atan2(endY - startY, endX - startX);  
  
      // Show the next or previous item based on the swipe direction  
      if (swipeDirection > 0) {  
        showNextItem();  
      } else if (swipeDirection < 0) {  
        showPreviousItem();  
      }  
   });  
});  
  
// Add event listener for click on carousel items  
carouselContainer.addEventListener('click', (e) => {  
   // Get the clicked item  
   const clickedItem = e.target.closest('.carousel-item');  
  
   // Show the next or previous item based on the clicked item  
   if (clickedItem.classList.contains('active')) {  
      showNextItem();  
   } else {  
      showPreviousItem();  
   }  
});  
  
// Set the interval to show the next item  
setInterval(showNextItem, interval);

$(function () {
			"use strict";
			
			setTimeout(function () {
				$('.loader_bg').fadeToggle();
				showNextItem();
			}, 1500);
});