document.addEventListener('DOMContentLoaded', function() {
    // Get all remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');

    // Add event listener to each remove button
    removeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const cartItem = this.closest('.cart-item');
            const itemId = cartItem.getAttribute('data-id');
            // Remove the cart item from the DOM
            cartItem.remove();
            // Optionally, update the total price
            updateTotal();
        });
    });

    // Get all quantity input fields
    const quantityInputs = document.querySelectorAll('.quantity input');

    // Add event listener to each quantity input field
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const quantity = parseInt(this.value);
            if (quantity < 1 || isNaN(quantity)) {
                this.value = 1;
            }
            // Optionally, update the total price
            updateTotal();
        });
    });

    // Function to update the total price
    function updateTotal() {
        let totalPrice = 0;
        const prices = document.querySelectorAll('.cart-item .price');
        prices.forEach(price => {
            const itemPrice = parseFloat(price.textContent.replace('$', ''));
            const itemQuantity = parseInt(price.nextElementSibling.querySelector('input').value);
            totalPrice += itemPrice * itemQuantity;
        });
        document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
    }
});