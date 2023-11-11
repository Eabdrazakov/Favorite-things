function setToVariable() {

    const click = document.getElementById("click");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const form = document.createElement("form");
    const label1 = document.createElement("label");
    const input1 = document.createElement("input");
    const label2 = document.createElement("label");
    const input2 = document.createElement("input");
    const label3 = document.createElement("label");
    const input3 = document.createElement("input");
    const button = document.createElement("button");


    h1.append("Favorite things!");
    p.append("Share your favorite things with us:");

    label1.setAttribute("for", "food");
    label1.append("What is your favorite food:");
    input1.setAttribute("id", "food");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "food");

    label2.setAttribute("for", "movie");
    label2.append("What is your favorite movie:");
    input2.setAttribute("id", "movie");
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "movie");

    label3.setAttribute("for", "book");
    label3.append("What is your favorite book:");
    input3.setAttribute("id", "book");
    input3.setAttribute("type", "text");
    input3.setAttribute("name", "book");

    button.setAttribute("type", "button");
    button.append("Submit");

    form.append(label1, input1, document.createElement("br"), label2, input2, document.createElement("br"), label3, input3, document.createElement("br"), button);

    document.body.append(h1);
    document.body.append(p);
    document.body.append(form);

}



window.addEventListener("load", function () {

    click.addEventListener("click", function (event) {
        event.preventDefault();
        setToVariable();
        document.getElementById("click").setAttribute("class", "hidden");
    })
});