
var modal = document.getElementsByClassName("modal")[0]! as HTMLElement;

var btn = document.getElementsByClassName("btn")[0]!;

var span = document.getElementsByClassName("close")[0]!;

btn.addEventListener("click", () => {
    modal.style.display = "block";
});

span.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
