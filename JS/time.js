let d = document;


export default function timer(){
    let hours = 10;
  let minutes = 0;
  let seconds = 0; 

  function actualizar() {
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } 
      }
    }

    document.getElementById('hrs').textContent = mostrador(hours);
    document.getElementById('min').textContent = mostrador(minutes);
    document.getElementById('sec').textContent = mostrador(seconds);
  }

  function mostrador(value) {
    return value < 10 ? '0' + value : value;
  }

  
 setInterval(actualizar, 1000);
    
}


