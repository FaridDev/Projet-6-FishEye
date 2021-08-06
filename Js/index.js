function displayPhotographer(name, id, city, country, tags, tagline, price, portrait) {
    const container = document.createElement("div");
    container.className = "photographer";

    const link = document.createElement("a");
    link.href = "photograph.html";
    const image = document.createElement("img");
    image.src = "../Photos/PhotographersIDPhotos/" + portrait;
    link.append(image)
    container.append(link)
    const title = document.createElement("h2");
    title.textContent = name;
    link.append(title)
    container.append(link)

    const article = document.createElement("div");
    article.className = "information";
    const location = document.createElement("p");
    location.className = "city";
    location.textContent = city + ", " + country;
    article.append(location)
    container.append(article)
    const biography = document.createElement("p");
    biography.textContent = tagline;
    article.append(biography)
    container.append(article)
    const money = document.createElement("p");
    money.className = "price";
    money.textContent = price +"€/jour";
    article.append(money)
    container.append(article)

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    for (let i = 0; i < tags.length; i++) {
        
        const li = document.createElement("li");
        const linka = document.createElement("a");
        linka.innerHTML = tags[i];
        li.append(linka)
        ul.append(li)
    }

    nav.append(ul)
    container.append(nav)
    document.querySelector('main').append(container);
} 
displayPhotographer("Mimi Keel", 243, "London", "UK", ["#portrait", "#events", "#travel", "#animals"], "Voir le beau dans le quotidien", 400, "MimiKeel.jpg");
displayPhotographer("Ellie-Rose Wilkens", 930, "Paris", "France", ["#sports", "#architecture"], "Capturer des compositions complexes", 250, "EllieRoseWilkens.jpg");
displayPhotographer("Tracy Galindo", 82,"Montreal", "Canada", ["#art", "#fashion", "#events"],  "Photographe freelance", 500, "TracyGalindo.jpg");
displayPhotographer("Nabeel Bradford",527, "Mexico City", "Mexico", ["#travel", "#portrait"],  "Toujours aller de l'avant", 350, "NabeelBradford.jpg");
displayPhotographer("Rhode Dubois", 925, "Barcelona", "Spain", ["#sport", "#fashion", "#events", "#animals"], "Je crée des souvenirs", 275, "RhodeDubois.jpg");
displayPhotographer("Marcel Nikolic", 195, "Berlin", "Germany", ["#travel", "#architecture"], "Toujours à la recherche de LA photo", 300, "MarcelNikolic.jpg");
