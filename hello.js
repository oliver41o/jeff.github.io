document.addEventListener("DOMContentLoaded", () => {
    let e = document.createElement("button");
    let e2 = document.createElement("input");

    e.textContent = "hello"

    e.addEventListener("click", () => {
        if (!(e2.value === "peter is stinky")) {
            console.log(window.location.href);
            console.log(e2.value);
            window.location.href = e2.value;
        } else {
            console.log("peter is stinky");
        };
    });

    document.body.appendChild(e);
    document.body.appendChild(e2);
});