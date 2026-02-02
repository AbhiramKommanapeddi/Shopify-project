document.addEventListener('DOMContentLoaded', function () {
    // State
    let state = {
        isSubscription: true,
        step: 1,
        selectedPackage: 1,
        selectedScent: 0,
        frequency: 2,
        cart: [],
        isCartOpen: false
    };

    const packages = [
        { id: 0, label: '1 Oil: 100ML', price: '26.34', oneTimePrice: '30.99', discount: '15' },
        { id: 1, label: '2 Oil: 200ML', price: '23.24', oneTimePrice: '28.99', discount: '25', popular: true },
        { id: 2, label: '3 Oil: 300ML', price: '21.69', oneTimePrice: '26.99', discount: '30', bestValue: true },
    ];

    const scents = [
        { id: 0, name: 'Sweet Harmony Hollow', description: 'Woody & Sweet Blend', icon: '🪵' },
        { id: 1, name: 'Citrus Wilderness Whisper', description: 'Fresh & Zesty Citrus', icon: '🍊' },
        { id: 2, name: 'Fresh Highlander Haven', description: 'Cool Pine & Mountain Air', icon: '🌲' },
    ];

    // Selectors
    const btnSub = document.getElementById('BtnSub');
    const btnOne = document.getElementById('BtnOne');
    const packageListSub = document.getElementById('PackageListSub');
    const scentList = document.getElementById('ScentList');
    const subscriptionOptions = document.getElementById('SubscriptionOptions');
    const scentOptions = document.getElementById('ScentOptions');
    const btnNextStep = document.getElementById('BtnNextStep');
    const btnAddToCart = document.getElementById('BtnAddToCart');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.getElementById('CloseCart');
    const cartItemsContainer = document.getElementById('CartItems');
    const cartCount = document.getElementById('CartCount');
    const headerCartCount = document.getElementById('HeaderCartCount');
    const cartTotal = document.getElementById('CartTotal');
    const cartTrigger = document.querySelector('.cart-trigger');
    const btnCheckout = document.getElementById('BtnCheckout');
    const successOverlay = document.getElementById('SuccessOverlay');
    const btnCloseSuccess = document.getElementById('BtnCloseSuccess');

    // Init
    renderPackages();
    renderScents();
    setupAccordions();
    setupTabs();
    setupGallery();

    // Event Listeners
    if (btnSub) btnSub.addEventListener('click', () => {
        state.isSubscription = true;
        updateToggleButtons();
        renderPackages();
    });

    if (btnOne) btnOne.addEventListener('click', () => {
        state.isSubscription = false;
        updateToggleButtons();
        renderPackages();
    });

    if (btnNextStep) btnNextStep.addEventListener('click', () => {
        state.step = 2;
        updateStepView();
    });

    if (btnAddToCart) btnAddToCart.addEventListener('click', addToCart);
    if (closeCart) closeCart.addEventListener('click', () => toggleCart(false));
    if (cartTrigger) cartTrigger.addEventListener('click', () => toggleCart(true));
    if (btnCheckout) btnCheckout.addEventListener('click', placeOrder);
    if (btnCloseSuccess) btnCloseSuccess.addEventListener('click', () => successOverlay.style.display = 'none');

    // Functions
    function setupAccordions() {
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const toggle = button.querySelector('.faq-toggle');
                const isOpen = answer.classList.contains('active');

                document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
                document.querySelectorAll('.faq-toggle').forEach(t => t.innerText = '+');

                if (!isOpen) {
                    answer.classList.add('active');
                    toggle.innerText = '−';
                }
            });
        });
    }

    function setupTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const ingredientsContent = document.getElementById('IngredientsContent');
        const benefitsContent = document.getElementById('BenefitsContent');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');

                // Update active button
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update content visibility
                if (tab === 'ingredients') {
                    if (ingredientsContent) ingredientsContent.style.display = 'block';
                    if (benefitsContent) benefitsContent.style.display = 'none';
                } else if (tab === 'benefits') {
                    if (ingredientsContent) ingredientsContent.style.display = 'none';
                    if (benefitsContent) benefitsContent.style.display = 'block';
                }
            });
        });
    }

    function setupGallery() {
        const thumbnails = document.querySelectorAll('.thumbnail-item');
        const mainImage = document.getElementById('MainProductImage');
        const mainImageContainer = document.querySelector('.main-image-container');

        if (!mainImage || !mainImageContainer) return;

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Remove active class from all
                thumbnails.forEach(t => t.classList.remove('active'));
                // Add to clicked
                thumb.classList.add('active');

                // Update Image Source
                const newSrc = thumb.getAttribute('data-src');
                if (newSrc) {
                    mainImage.src = newSrc;
                }

                // Handle Custom Styling (Reduced Size)
                const style = thumb.getAttribute('data-style');
                if (style === 'reduced') {
                    mainImage.classList.add('padded-view');
                } else {
                    mainImage.classList.remove('padded-view');
                }
            });
        });
    }

    function updateToggleButtons() {
        if (btnSub) btnSub.classList.toggle('active', state.isSubscription);
        if (btnOne) btnOne.classList.toggle('active', !state.isSubscription);
    }

    function renderPackages() {
        if (!packageListSub) return;
        packageListSub.innerHTML = '';
        packages.forEach((pkg, index) => {
            const item = document.createElement('div');
            item.className = `package-item ${state.selectedPackage === index ? 'active' : ''}`;
            item.addEventListener('click', () => {
                state.selectedPackage = index;
                renderPackages();
            });

            const price = state.isSubscription ? pkg.price : pkg.oneTimePrice;
            item.innerHTML = `
                <div class="pkg-main">
                    <div class="radio-circle">
                        ${state.selectedPackage === index ? '<div class="radio-inner"></div>' : ''}
                    </div>
                    <div class="pkg-text">
                        <span class="pkg-title">£${price}/ bottle</span>
                        <span class="pkg-subtitle">${pkg.label}</span>
                    </div>
                </div>
                ${state.isSubscription ? `
                    <div class="pkg-offer">
                        <div class="offer-pct">${pkg.discount}%</div>
                        <div class="offer-label">OFF</div>
                    </div>
                ` : ''}
            `;
            packageListSub.appendChild(item);
        });
    }

    function renderScents() {
        if (!scentList) return;
        scentList.innerHTML = '';
        scents.forEach((scent, index) => {
            const item = document.createElement('div');
            item.className = `package-item ${state.selectedScent === index ? 'active' : ''}`;
            item.addEventListener('click', () => {
                state.selectedScent = index;
                renderScents();
            });

            item.innerHTML = `
                <div class="pkg-main">
                    <div style="font-size: 24px;">${scent.icon}</div>
                    <div class="pkg-text">
                        <span class="pkg-title">${scent.name}</span>
                        <span class="pkg-subtitle">${scent.description}</span>
                    </div>
                </div>
                <div class="radio-circle">
                    ${state.selectedScent === index ? '<div class="radio-inner"></div>' : ''}
                </div>
            `;
            scentList.appendChild(item);
        });
    }

    function updateStepView() {
        if (state.step === 2) {
            if (subscriptionOptions) subscriptionOptions.style.display = 'none';
            if (scentOptions) scentOptions.style.display = 'flex';
            const step2 = document.getElementById('Step2Indicator');
            if (step2) step2.classList.add('active');
        } else {
            if (subscriptionOptions) subscriptionOptions.style.display = 'flex';
            if (scentOptions) scentOptions.style.display = 'none';
            const step2 = document.getElementById('Step2Indicator');
            if (step2) step2.classList.remove('active');
        }
    }

    function addToCart() {
        const product = {
            id: Date.now(),
            name: "Roots Beard Oil",
            scent: scents[state.selectedScent].name,
            package: packages[state.selectedPackage].label,
            price: state.isSubscription ? packages[state.selectedPackage].price : packages[state.selectedPackage].oneTimePrice,
            isSubscription: state.isSubscription,
            frequency: state.isSubscription ? state.frequency : null,
            quantity: 1
        };
        state.cart.push(product);
        toggleCart(true);
        renderCart();
    }

    function toggleCart(open) {
        state.isCartOpen = open;
        if (cartOverlay) cartOverlay.style.display = open ? 'block' : 'none';
    }

    function renderCart() {
        if (!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';
        let total = 0;
        state.cart.forEach((item) => {
            total += parseFloat(item.price);
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.style = 'background:#f9fafb; padding:16px; border-radius:12px; margin-bottom:12px;';
            div.innerHTML = `
                <div style="display:flex; justify-content:space-between">
                    <div>
                        <div style="font-weight:900; font-size:14px; text-transform:uppercase">${item.name}</div>
                        <div style="font-size:10px; color:#9ca3af">${item.scent} • ${item.package}</div>
                    </div>
                    <div style="font-weight:900; color:#16a34a">£${item.price}</div>
                </div>
            `;
            cartItemsContainer.appendChild(div);
        });
        if (cartCount) cartCount.innerText = state.cart.length;
        if (headerCartCount) headerCartCount.innerText = state.cart.length;
        if (cartTotal) cartTotal.innerText = `£${total.toFixed(2)}`;
    }

    function placeOrder() {
        if (state.cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // Simulate placement
        setTimeout(() => {
            state.cart = [];
            toggleCart(false);
            renderCart();

            const successOverlay = document.getElementById('SuccessOverlay');
            if (successOverlay) successOverlay.style.display = 'flex';
        }, 500);
    }
});
