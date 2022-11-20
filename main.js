function addItem() {
    var inputVal = document.getElementById('input').value
    var listEl = document.getElementById('list')
    var error = document.getElementById('error')

    if (inputVal.length < 2) {
        error.innerText = 'sizning kiritgan qiymatingiz 2ta ha rfdan kam,'
        repeat
    }

    if(inputVal.length > 0){
        error.innerText = ""
    }


    var newEl = document.createElement('li')
    newEl.className = 'item'
    newEl.className = 'new-item'
    newEl.innerText = inputVal

    listEl.appendChild(newEl)
    console.log(newEl)

}
