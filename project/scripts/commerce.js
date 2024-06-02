document.addEventListener('DOMContentLoaded', () => {
		// Lazy load images
		const lazyImages = document.querySelectorAll('img.lazy');
		const loadImages = (image) => {
				image.src = image.dataset.src;
		};

		const imageObserver = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
						if (entry.isIntersecting) {
								loadImages(entry.target);
								observer.unobserve(entry.target);
						}
				});
		});

		lazyImages.forEach(image => {
				imageObserver.observe(image);
		});

		// Add to cart functionality
		const cart = JSON.parse(localStorage.getItem('cart')) || [];

		const updateCart = () => {
				const cartItemsContainer = document.querySelector('.cart-items');
				const totalPriceElement = document.querySelector('.total-price');
				cartItemsContainer.innerHTML = '';
				let totalPrice = 0;

				cart.forEach(product => {
						const item = document.createElement('div');
						item.classList.add('cart-item');
						item.innerHTML = `
								<h3>${product.name}</h3>
								<p>${product.price}</p>
						`;
						cartItemsContainer.appendChild(item);
						totalPrice += parseFloat(product.price.replace('$', ''));
				});

				totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
		};

		const addToCartButtons = document.querySelectorAll('.add-to-cart');
		addToCartButtons.forEach(button => {
				button.addEventListener('click', (event) => {
						const product = {
								name: event.target.dataset.product,
								price: event.target.previousElementSibling.textContent
						};
						cart.push(product);
						localStorage.setItem('cart', JSON.stringify(cart));
						alert('Product added to cart');
						updateCart();
				});
		});

		if (document.querySelector('.cart-items')) {
				updateCart();
		}

		// Update footer year and last modified date
		const yearElement = document.getElementById('year');
		const lastModifiedElement = document.getElementById('lastModified');

		if (yearElement) {
				yearElement.textContent = new Date().getFullYear();
		}

		if (lastModifiedElement) {
				lastModifiedElement.textContent = document.lastModified;
		}
});
