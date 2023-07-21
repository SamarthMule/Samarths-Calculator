const display = document.getElementById('display');
console.log(display);
const buttons = document.getElementsByClassName('btn');
let string = "";

const Arr = Array.from(buttons);
Arr.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
    console.log(string);
    if(e.target.innerHTML == '='){
      string = Number(eval(string)).toFixed(5);
      console.log(string);
      if(string.substring(string.length - 5) == '00000'){
        console.log(string.substring(0,string.length - 6));
        display.value = string.substring(0,string.length - 6);
      }
      else{
        display.value = string;
      }
    }
    else if(e.target.innerHTML == 'AC'){
      string = "";
      display.value = string;
    }
    else if(e.target.innerHTML == 'DE'){
      string = string.substring(0,string.length - 1);
      display.value = string;
    }
    else if(e.target.innerHTML == '%'){
      string = String(parseFloat(string) / 100)
      display.value = string;
    }
    else{
      string += e.target.innerHTML;
      display.value = string;
    }
  })
})