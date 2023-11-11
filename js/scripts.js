function setToVariable() {

    const click = document.getElementById("click");
    const click2 = document.getElementById("click2");
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
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const span1 = document.createElement("span");
    const p2 = document.createElement("p");
    const span2 = document.createElement("span");
    const p3 = document.createElement("p");
    const span3 = document.createElement("span");


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

    button.setAttribute("type", "submit");
    button.setAttribute("id", "click2");
    button.append("Submit");

    form.append(label1, input1, document.createElement("br"), label2, input2, document.createElement("br"), label3, input3, document.createElement("br"), button);

    document.body.append(h1);
    document.body.append(p);
    document.body.append(form);
    document.body.append(div);


    p1.append("Your favorite food:");
    span1.setAttribute("id", "thing1");
    p1.append(span1);
    p1.style.display = "inline";

    p2.append("Your favorite movie:");
    span2.setAttribute("id", "thing2");
    p2.append(span2);
    p2.style.display = "inline";

    p3.append("Your favorite book:");
    span3.setAttribute("id", "thing3");
    p3.append(span3);
    p3.style.display = "inline";

    div.setAttribute("id", "result");
    div.setAttribute("class", "hidden");
    div.prepend(p1, span1, document.createElement("br"), p2, span2, document.createElement("br"), p3, span3);

}

function formToResult() {
    click2.addEventListener("click", function (event) {
        event.preventDefault();
        const food = document.getElementById("food").value;
        const movie = document.getElementById("movie").value;
        const book = document.getElementById("book").value;

        document.querySelector("span#thing1").innerText = food;
        document.querySelector("span#thing2").innerText = movie;
        document.querySelector("span#thing3").innerText = book;

        document.getElementById("result").removeAttribute("class");
    });
}



window.addEventListener("load", function () {

    click.addEventListener("click", function (event) {
        event.preventDefault();
        setToVariable();
        document.getElementById("click").setAttribute("class", "hidden");
        formToResult();
    });
});