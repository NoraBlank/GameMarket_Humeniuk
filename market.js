//Перевірка підключенного файлу скриптів
console.log("Перевірка")

//отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

//перевірка існування знайденого блоку
if (itemsDiv) {
    //вивід знайденого елементу
    console.log(itemsDiv)
    // console.log("Поле classList: ", itemsDiv.classList)
    // console.log("Поле id: ", itemsDiv.id)
    // console.log("Поле clientWidth: ", itemsDiv.clientWidth)
    // console.log("Поле innerHTML: ", itemsDiv.innerHTML)

    // itemsDiv.innerText = "Перший програмно доданий текст"
    // itemsDiv.innerText += "Другий програмно доданий текст"
    // itemsDiv.innerHTML = "<div class = item></div>"
    // itemsDiv.innerHTML = "<div class = item></div>"
    // itemsDiv.innerHTML = "<div class = item></div>"
    // itemsDiv.innerHTML = "<div class = item></div>"
    for (let i = 0; i < 100; i++) {
        itemsDiv.innerHTML += "<div class = 'item'></div>"
    }
} else {
    //вивід повідомлення про не знайденний блок
    console.log("Блок товарів не знайдено")
}