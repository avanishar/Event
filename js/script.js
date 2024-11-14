// Event Carousel Logic
const eventCarousel = document.querySelector('.event-carousel');
let eventIndex = 0; // Initial index for events

function showEvents(direction) {
    const totalEvents = eventCarousel.children.length;
    const visibleEvents = 3; // Number of events visible at a time
    const maxIndex = Math.ceil(totalEvents / visibleEvents) - 1;

    if (direction === 'next') {
        eventIndex++;
        if (eventIndex > maxIndex) {
            eventIndex = 0; // Loop back to the start
        }
    } else if (direction === 'prev') {
        eventIndex--;
        if (eventIndex < 0) {
            eventIndex = maxIndex; // Loop to the last set
        }
    }

    // Slide the event carousel
    eventCarousel.style.transform = `translateX(-${eventIndex * 100}%)`;
}

// Add automatic sliding for events every 4 seconds
setInterval(() => showEvents('next'), 4000);

// Review Carousel Logic
const reviewCarousel = document.querySelector('.review-carousel');
let reviewIndex = 0; // Initial index for reviews

function showReviews(direction) {
    const totalReviews = reviewCarousel.children.length;
    const visibleReviews = 3; // Number of reviews visible at a time
    const maxReviewIndex = Math.ceil(totalReviews / visibleReviews) - 1;

    if (direction === 'next') {
        reviewIndex++;
        if (reviewIndex > maxReviewIndex) {
            reviewIndex = 0; // Loop back to the start
        }
    } else if (direction === 'prev') {
        reviewIndex--;
        if (reviewIndex < 0) {
            reviewIndex = maxReviewIndex; // Loop to the last set
        }
    }

    // Slide the review carousel
    reviewCarousel.style.transform = `translateX(-${reviewIndex * 100}%)`;
}

// Add automatic sliding for reviews every 3 seconds
setInterval(() => showReviews('next'), 3000);

// Newsletter Subscription form submission handler
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thanks for subscribing with ${email}!`);
        document.getElementById('email').value = ''; // Clear input field
    } else {
        alert('Please enter a valid email address.');
    }
});
