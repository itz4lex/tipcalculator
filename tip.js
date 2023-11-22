
function twenty() { 
  
    var percent = document.getElementById("userInput").value; 
      
    var num = document.getElementById("userInput").value; 
    document.getElementById("tip20") 
        .value = (num / 100) * percent; 
} 
  
function five() { 
  
    var num1 = document.getElementById("userInput").value; 
       
    var num2 = document.getElementById("userInput").value; 
    document.getElementById("tip25") 
            .value = (num1 * 100) / num2 + "%"; 
}
function fifteen() { 
  
   
    var num1 = document.getElementById("userInput").value; 
      
    var num2 = document.getElementById("userInput").value; 
    document.getElementById("tip15") 
            .value = (num1 * 100) / num2 + "%"; 
}
