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
	section.id = 'menu-page';

	// Menu container
	const menuContainer = document.createElement('div');
	menuContainer.id = 'menu-container';

	const h1 = document.createElement('h1');
	h1.textContent = 'Go Eat';

	const list = document.createElement('ul');

	const items = [
		'arugula bowl  21',
		'homespun pork belly & locally-sourced bay leaf  22',
		'clam  21',
		'udon booze tacos with quinoa rye panini  15',
		'rounded oyster with pan-seared kale tartare & ham  20',
		'brined anchovy  22',
		'seasonal bluefish  19',
		'market sungold with rice medley  16',
		'pressed acorn & salt  22',
		'orecchiette, chorizo frittata & ramp jam  20',
	];

	for (let i = 0; i < items.length; i++) {
		const item = document.createElement('li');
		item.textContent = items[i];
		list.appendChild(item);
	}

	menuContainer.appendChild(h1);
	menuContainer.appendChild(list);

	section.appendChild(menuContainer);

	return section;
})();

// Create the img element
const sideImg1 = document.getElementById('side-1');
sideImg1.src = Side1Image;

const sideImg2 = document.getElementById('side-2');
sideImg2.src = Side2Image;

const sideImg3 = document.getElementById('side-3');
sideImg3.src = Side3Image;

// const content = document.getElementById('content');
// content.appendChild(homePage);
