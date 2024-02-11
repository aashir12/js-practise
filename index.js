

var num1=parseInt(prompt('int 1'));
var num2=parseInt(prompt('int 2'));
var num3=parseInt(prompt('int 3'));
var greater1;
var greater2;
var greater3;

if(num1>num2 && num1>num3){
  greater1=num1;
  if(num2>num3){
    greater2=num2;  
    greater3=num3;  
}
else if(num2<num3){
    greater2=num3;
    greater3=num2;  

}

}
else if(num2>num1 && num2>num3){
    greater1=num2;
    if(num1>num3){
      greater2=num1;  
      greater3=num3;  
  }
  else if(num3>num1){
      greater2=num3;
      greater3=num1;  
  
  }
  
  }
  
else if(num3>num1 && num3>num2){
    greater1=num3;
    if(num1>num2){
      greater2=num1;  
      greater3=num2;  
  
  }
  else if(num2>num1){
      greater2=num2;
      greater3=num1;  
  
  }
  
  }

alert(greater1+'  '+greater2+'  '+greater3)