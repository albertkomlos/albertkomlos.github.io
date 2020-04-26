var x = document.getElementById("counter")

let a = 0

function Increase () {
    a = a + 1
    $('#counter').text(a)
}

document.getElementById("IncreaseButton").addEventListener('click', Increase)


function Decrease () {
    a = a - 1
    $('#counter').text(a)
}

document.getElementById("DecreaseButton").addEventListener('click', Decrease)

