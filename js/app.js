let PokemonUl = document.querySelector(".hero-list");

for(let cards of pokemons ){
	let PokemonLi = document.createElement("li");
	let PokemonHero = document.createElement("div");
	let PokemonImg = document.createElement("img");
	let PokemonMain = document.createElement("div");
	let PokemonTop = document.createElement("div");
	let PokemonHead = document.createElement("h3");
	let PokemonHeart = document.createElement("img");
	let PokemonDesc = document.createElement("p");
	let PokemonBottom = document.createElement("div");
	let PokemonWeight = document.createElement("span");
	let PokemonAge = document.createElement("span");
	//=============================================
	PokemonHero.appendChild(PokemonImg);
	PokemonMain.appendChild(PokemonTop);
	PokemonMain.appendChild(PokemonDesc);
	PokemonMain.appendChild(PokemonBottom);
	PokemonTop.appendChild(PokemonHead);
	PokemonTop.appendChild(PokemonHeart);
	PokemonBottom.appendChild(PokemonWeight);
	PokemonBottom.appendChild(PokemonAge);
	PokemonLi.appendChild(PokemonHero);
	PokemonLi.appendChild(PokemonMain);
	PokemonUl.appendChild(PokemonLi);
	//=============================================
	PokemonLi.setAttribute("class", "hero-item border mt-3 border-2 border-dark bg-white");
	PokemonHero.setAttribute("class", "hero-inner");
	PokemonImg.setAttribute("src", `${cards.img}`);
	PokemonImg.setAttribute("width", 157);
	PokemonImg.setAttribute("height", 157);
	PokemonMain.setAttribute("class","wrapper mb-2");
	PokemonTop.setAttribute("class", "d-flex align-items-center justify-content-between");
	PokemonHeart.setAttribute("src", "images/heart.svg");
	PokemonHeart.setAttribute("width", 30);
	PokemonHeart.setAttribute("height", 30);
	PokemonHead.setAttribute("class", "wrapper-heading");
	PokemonDesc.setAttribute("class", "mb-4 title");
	PokemonBottom.setAttribute("class", "d-flex align-items-center");
	PokemonWeight.setAttribute("class", "span-volue");
	PokemonAge.setAttribute("class", "span-volue");
	//===============================================
	PokemonHead.innerHTML = cards.name;
	PokemonDesc.innerHTML = cards.candy;
	PokemonWeight.innerHTML = cards.weight;
	PokemonAge.innerHTML = cards.height;
}