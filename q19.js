function addItem() {
    let itemText = document.getElementById("itemInput").value;
    if (itemText === "") return;

    let listItem = document.createElement("li");
    listItem.textContent = itemText;

    document.getElementById("list").appendChild(listItem);
    document.getElementById("itemInput").value = "";
    else:
        ok = false;
        return ok;
}