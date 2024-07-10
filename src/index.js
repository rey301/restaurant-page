import './style.css';
import Food from './assets/images/food.jpg';
import Side1Image from './assets/images/beef-tataki.png';
import Side2Image from './assets/images/salmon-tataki.png';
import Side3Image from './assets/images/tofu-tataki.png';
import Book1Img from './assets/images/book-1.png';
import Book2Img from './assets/images/book-2.png';

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
                <div class="menu bg"></div>
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

const shopPage = (function () {
	// Create the main container div
	const section = document.createElement('div');

	// Create the title div and its children
	const titleDiv = document.createElement('div');
	titleDiv.classList.add('title');

	const titleCookbooks = document.createElement('div');
	titleCookbooks.id = 'title-cookbooks';
	titleCookbooks.textContent = 'cookbooks';

	const cookbooksBg = document.createElement('div');
	cookbooksBg.classList.add('cookbooks', 'bg');

	titleDiv.appendChild(titleCookbooks);
	titleDiv.appendChild(cookbooksBg);

	// Create the books div and its children
	const booksDiv = document.createElement('div');
	booksDiv.classList.add('books');

	// Create the first book div and its children
	const book1 = document.createElement('div');
	book1.classList.add('book-1');

	const book1Img = document.createElement('img');
	book1Img.classList.add('book-image');
	book1Img.id = 'book-1-img';
	book1Img.src = Book1Img;

	const book1Title = document.createElement('div');
	book1Title.classList.add('book-title');
	book1Title.textContent = 'wagamama your way';

	const book1Desc = document.createElement('div');
	book1Desc.classList.add('book-desc');
	book1Desc.textContent = `most dishes in our cookbook are plant-based + every recipe that isn't, can be modified with one of our plant-based hacks. meaning you can wok from home, your way recreate wagamama classics or try out fresh new recipes from japan + asia, wagamama your way is not just about having the freedom to add a little more chilli to taste or squeeze of lime for tang. now, the choice to make plants the centre to your bowl over to you`;

	const book1WhereToBuy = document.createElement('div');
	book1WhereToBuy.textContent = 'where to buy it';

	const book1LinkBtn = document.createElement('div');
	book1LinkBtn.classList.add('linkBtn');

	book1.appendChild(book1Img);
	book1.appendChild(book1Title);
	book1.appendChild(book1Desc);
	book1.appendChild(book1WhereToBuy);
	book1.appendChild(book1LinkBtn);

	// Create the second book div and its children
	const book2 = document.createElement('div');
	book2.classList.add('book-2');

	const book2Img = document.createElement('img');
	book2Img.classList.add('book-image');
	book2Img.id = 'book-2-img';
	book2Img.src = Book2Img;

	const book2Title = document.createElement('div');
	book2Title.classList.add('book-title');
	book2Title.textContent = 'feed your soul';

	const book2Desc = document.createElement('div');
	book2Desc.classList.add('book-desc');
	book2Desc.textContent = `your guide to modern nourishment - the wagamama way. fresh favourites, balanced bowls + soulful staples - all designed to be made mindfully. cook quick midweek meals + slow-cooked ramens. iconic classics like katsu curry and yaki soba. plus, plant-based bowls such as kare burosu ramen + yasai itame. our latest cookbook is here to help you stay nourished. from bowl to soul`;

	const book2WhereToBuy = document.createElement('div');
	book2WhereToBuy.textContent = 'where to buy it';

	const book2LinkBtn1 = document.createElement('div');
	book2LinkBtn1.classList.add('linkBtn');

	const book2LinkBtn2 = document.createElement('div');
	book2LinkBtn2.classList.add('linkBtn-2');

	book2.appendChild(book2Img);
	book2.appendChild(book2Title);
	book2.appendChild(book2Desc);
	book2.appendChild(book2WhereToBuy);
	book2.appendChild(book2LinkBtn1);
	book2.appendChild(book2LinkBtn2);

	// Append books to the books div
	booksDiv.appendChild(book1);
	booksDiv.appendChild(book2);

	// Append title and books to the main container
	section.appendChild(titleDiv);
	section.appendChild(booksDiv);

	// Append the main container to the body or any other desired parent element
	document.body.appendChild(section);

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

const shopBtn = document.getElementById('shopBtn');
shopBtn.addEventListener('click', () => {
	if (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	content.appendChild(shopPage);
});
