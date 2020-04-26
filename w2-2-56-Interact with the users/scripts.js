
// function changeColor () {
//     var elem = document.querySelector('button')
//     elem.style.backgroundColor = ${'#color'}
// }

// var color = document.getElementById("inputcolor").Value;



$('#button1').on('click', () => {
    $('body').append('<p>Fuck Yeah, You clicked on me</p>')
})
$('#button2').on('click', () => {
    $('#button1').text('New Button')
})


//elso megoldas:::::::
// $('#button3').on('click', () => {
//     let color = $('#inputcolor').val()  
//     $('button').css('background' , color)
// })



//masodik megoldas:::::::
// document.getElementById("button3").addEventListener('click',function(){
//     let color = $('#inputcolor').val()
//     $('button').css('background' , color)
// })




//harmadik megoldas:::::::
function changeColor () {
    let color = $('#inputcolor').val()
    $('button').css('background' , color)
    //make the color change only a one time event:
    document.getElementById("button3").removeEventListener('click', changeColor)

}

document.getElementById("button3").addEventListener('click', changeColor)



