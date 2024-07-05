import './style.css';
import Food from './assets/images/food.jpg';
import Side1Image from './assets/images/beef-tataki.png';
import Side2Image from './assets/images/salmon-tataki.png';
import Side3Image from './assets/images/tofu-tataki.png';
{
	/* <section id="first-section">
			<h1>Welcome to <span id="logo">Go Eat</span></h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
			<img id='food-image' src="./assets/images/food.jpg" alt="food">
	</section> */
}

const homePage = (function () {
	const section = document.createElement('section');
	section.id = 'home-page';

	// Create the h1 element
	const h1 = document.createElement('h1');
	h1.textContent = 'Welcome to ';
	const spanLogo = document.createElement('span');
	spanLogo.id = 'logo';
	spanLogo.textContent = 'Go Eat';
	h1.appendChild(spanLogo);
	section.appendChild(h1);

	// Create the p element
	const p = document.createElement('p');
	p.textContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.';
	section.appendChild(p);

	// Create the img element
	const img = new Image();
	img.id = 'food-image';
	img.src = Food;
	img.alt = 'food';
	section.appendChild(img);

	return section;
})();

const menuPage = (function () {
	const section = document.createElement('section');

	// Create title section
	const titleDiv = document.createElement('div');
	titleDiv.className = 'title';
	titleDiv.innerHTML = `
                <div id="title-our">our</div>
                <div id="title-menu">menu</div>
                <div class="bg"></div>
            `;
	section.appendChild(titleDiv);

	// Create navigation bar menu
	const navBarMenu = document.createElement('div');
	navBarMenu.className = 'nav-bar-menu';
	navBarMenu.innerHTML = `
                <ul class="categories">
                    <li>sides + sharing</li>
                    <li>big plates</li>
                    <li>extras</li>
                    <li>desserts</li>
                    <li>drinks</li>
                    <li>non gluten</li>
                    <li>kids</li>
                </ul>
            `;
	section.appendChild(navBarMenu);

	// Create sides container
	const sidesContainer = document.createElement('div');
	sidesContainer.className = 'sides-container';
	sidesContainer.innerHTML = `
        <div class="sides-header">
            <div class="sides-title">sides + sharing</div>
            <div class="sides-line"></div>
            <div class="sides-desc">
                steamed, wrapped, folded, skewered. enjoy our small
                plates. full of flavour and perfect for sharing.
            </div>
        </div>
        <div class="card-container">
            ${createCard('side-1', Side1Image, 'beef-fillet + pickled mooli seared tataki', 'thinly sliced and drizzled with a zesty yuzu sauce, garnished with chilli + coriander')}
            ${createCard('side-2', Side2Image, 'sashimi salmon + pickled mooli seared tataki', 'thinly sliced and drizzled with a zesty yuzu sauce, garnished with chilli + coriander')}
            ${createCard('side-3', Side3Image, 'smoky tofu + avocado seared tataki (vg)', 'thinly sliced and drizzled with a zesty yuzu sauce, garnished with chilli + coriander')}
        </div>
    `;

	section.appendChild(sidesContainer);

	function createCard(imgId, imgSrc, title, description) {
		return `
            <div class="card">
                <img class="card-image" id="${imgId}" src="${imgSrc}" />
                <div class="new">new</div>
                <div class="card-info">
                    <div class="card-title">${title}</div>
                    <div class="card-desc">${description}</div>
                </div>
                <div class="calories">(115 kcals)</div>
                <div class="qv-btn">quick view</div>
            </div>
        `;
	}

	return section;
})();

const content = document.getElementById('content');
content.appendChild(homePage);

const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', () => {
	if (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	content.appendChild(homePage);
});

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
	if (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	content.appendChild(menuPage);
});
