const text = document.querySelector("#hello");
const button = document.querySelector("#byeButton");


button.addEventListener(
"click", function(){
    text.innerHTML = "Goodbye World"
}
);

