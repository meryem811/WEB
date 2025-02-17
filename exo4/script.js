function RandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let listItems = document.querySelectorAll("#list li");
listItems.forEach(function(item) {
    item.addEventListener("click", function()
     {item.style.backgroundColor = RandomColor();
    });
});