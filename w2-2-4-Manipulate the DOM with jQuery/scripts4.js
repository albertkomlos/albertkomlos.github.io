
//Manipulate the DOM with jQuery


let names = ['Adam', 'Eva', 'Bela', 'Albert', 'Andi'];

names.forEach((name) => {
    $('ul').append('<li>'+name+'</li>');
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('div').append('<h1 id="h1bottom">'+additionalBlock.title+'</h1>', '<p id="pbottom">'+additionalBlock.text+'</p>')

