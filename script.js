const result = document.querySelector(".Result")

function insert(valor) {
    result.innerHTML += valor
}

function clean() {
    result.innerHTML = ""
}

function backspace() {
    result.innerHTML = result.innerHTML.slice(0, -1)
}

function calculate() {
    document.getElementById("Result").innerHTML = eval(result.innerHTML)
}