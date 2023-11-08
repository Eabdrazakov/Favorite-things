window.onload = function () {

    const form = document.querySelector("form");
    form.onsubmit = function (event) {

        const favoriteThings = [];

        const favoriteFood = document.getElementById("food").value;
        const favoriteMovie = document.getElementById("movie").value;
        const favoriteBook = document.getElementById("book").value;

        favoriteThings.push(favoriteFood);
        favoriteThings.push(favoriteMovie);
        favoriteThings.push(favoriteBook);

        const secondElement = favoriteThings[1];
        const firstElement = favoriteThings[0];
        const thirdElement = favoriteThings[2];

        const newFavoriteThings = [];
        newFavoriteThings.push(secondElement);
        newFavoriteThings.push(firstElement);
        newFavoriteThings.push(thirdElement);


        const ul = document.createElement("ul");
        newFavoriteThings.forEach(function (item) {
            const li = document.createElement("li");
            li.append(document.createTextNode(item));
            ul.append(li);
        });

        document.body.append(ul);

        event.preventDefault();
    }
}