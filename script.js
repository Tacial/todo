
const input = document.querySelector("#text");
const button = document.querySelector("#btn-add-todo");
const list = document.querySelector("#todo-list");

function removeItem(event) {
    event.target.parentElement.remove();
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    const todo = input.value + "  ";

    const item = document.createElement("li");
    item.textContent = todo;

    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.addEventListener("click", removeItem);

    item.append(removeButton);
    list.appendChild(item)

    input.value = "";
    input.focus();
});
