document.getElementById('event-search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const categorySearch = document.getElementById('category-search').value.toLowerCase();
    const locationSearch = document.getElementById('location-search').value.toLowerCase();
    const dateSearch = document.getElementById('date-search').value;

    // Get all event cards
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(function(card) {
        const eventCategory = card.getAttribute('data-category');
        const eventDate = card.getAttribute('data-date');
        let cardVisible = true;

        // Filter by category
        if (categorySearch && eventCategory.toLowerCase() !== categorySearch) {
            cardVisible = false;
        }

        // Filter by date (ensure date format is consistent)
        if (dateSearch && new Date(eventDate) > new Date(dateSearch)) {
            cardVisible = false;
        }

        // Show/Hide based on filters
        card.style.display = cardVisible ? 'block' : 'none';
    });
});

// Filter button functionality
function filterEvents(filter) {
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(function(card) {
        const eventCategory = card.getAttribute('data-category');
        const eventDate = card.getAttribute('data-date');
        let cardVisible = true;

        if (filter === 'all') {
            cardVisible = true;
        } else if (filter === 'upcoming') {
            const today = new Date().toISOString().split('T')[0]; // Get today's date
            if (new Date(eventDate) <= new Date(today)) {
                cardVisible = false;
            }
        } else if (filter !== eventCategory) {
            cardVisible = false;
        }

        card.style.display = cardVisible ? 'block' : 'none';
    });
}
