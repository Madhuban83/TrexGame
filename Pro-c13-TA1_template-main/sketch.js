var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);

  input = createInput()
  input.position(5,60)

  heading = createElement('h4','enter any alphabet')
  heading.position(5,20)
 
}

function draw() {

  const value = input.value()
  switch(value){
    case 'a':console.log("vowle")
             break;
    case 'e':console.log("vowle")
             break;
    case 'i':console.log("vowle")
             break;
    case 'o':console.log("vowle")
             break;
    case 'u':console.log("vowle")
             break;
    default:console.log("any other alphabet")
             break;
  }
  
}

