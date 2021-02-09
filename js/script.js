let n = document.getElementById("card-count").innerText;
let p = 0;
const trash = document.getElementById("card-remove");

function addToCard(e) {

    p = e.children[1].innerText;
    if (p < 5) {
        p++;
        e.children[0].style.display = "none";
        e.children[1].style.display = "inline-block";
        e.children[1].innerHTML = p;

        n++;
        document.getElementById("card-count").innerHTML = n;

        if (n > 0) {
            trash.style.visibility = "visible";
        };
    } else {
        alert("Не больше 5 единиц!!");
    }
};
function clearCard() {
    document.getElementById("card-count").innerHTML = 0;
    p = 0;
    n = 0;
    const bougth = document.getElementsByClassName("product__tirer-bougth");
    const tirer = document.getElementsByClassName("product__tirer");
    for (let b of bougth) {
        b.style.display = "none";
        b.innerHTML = "";
    };
    for (let t of tirer) {
        t.style.display = "inline-block";
    };
    trash.style.visibility = "hidden";
}