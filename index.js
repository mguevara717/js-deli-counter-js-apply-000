var katzDeli = [];
var x = 0;

function takeANumber(katzDeli) {
    x += 1;
    
    katzDeli.push(x); 
    
    return x;
    
}

function nowServing(katzDeli) { 
     if (katzDeli.length === 0) {
         return ("There is nobody waiting to be served!");
     }
    
    else {
      return ("Currently serving " +  katzDeli.shift() + ".");
    }
}

function currentLine(katzDeli) { 
  var array = [];
  var x = 0;
 
  for(var i = 0; i < katzDeli.length; i++) { 
      x = x + 1;
      array.push(x  + '. ' + katzDeli[i])
  }  
  
      if (katzDeli.length === 0) {
        return("The line is currently empty.");
    }
      else {
       return("The line is currently: " + array.join(', '));
      }

}// end of currentLine

