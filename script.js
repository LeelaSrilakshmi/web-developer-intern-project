document.querySelectorAll('.show-more').forEach(button => {
    const originalText = button.textContent; // Store the original text like "+4" or "+2"
    
    button.addEventListener('click', function() {
        const card = this.closest('.job-card');
        card.classList.toggle('show-extra');

        // Check if the card is in expanded view
        if (card.classList.contains('show-extra')) {
            this.textContent = 'Show less';
        } else {
            this.textContent = originalText; // Revert to original "+4" or "+2"
        }
    });
});
