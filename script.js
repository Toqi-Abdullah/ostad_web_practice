   
//#1: Print numbers from 1 to 10
  
  /*for(var i=1; i<=10; i++){
    document.write(i + "<br/>");
  }

  //  #2: Print the odd numbers less than 100
  for(var i=1; i<=100; i=i+2){
    document.write(i + "<br/>");
  }
  //#3: Print the multiplication table with 7
  for (var i = 1; i <= 10; i++) {
    var row = "7 * " + i + " = " + 7 * i;
    console.log(row);}
    // #4: Print all the multiplication tables with numbers from 1 to 10
    for (var i = 1; i <= 10; i++) {
        printTable(i);
        console.log("");
    }
    
    function printTable(n) {
        for (var i = 1; i <= 10; i++) {
            var row = n + " * " + i + " = " + n * i;
            console.log(row);
        }
    }
    //#5: Calculate the sum of numbers from 1 to 10
    var sum = 0;
    for (var i = 1; i<=10; i++){
    var sum = sum + i;

    }
    console.log(sum);
    //#8: Create a function that will convert from Celsius to Fahrenheit
    function CelsiusTOFahrenheit(n){
      return n*1.8 + 32;}
      var r = CelsiusTOFahrenheit(20);
    console.log(r)

    //#9: Create a function that will convert from Fahrenheit to Celsius
    function FahrenheitToCelsius(n){
      return (n-32)/1.8;
    }
    var result =  FahrenheitToCelsius(68);
    console.log(result)*/
   // #10: Calculate the sum of numbers in an array of numbers
  //  function arrSum(ar){
  //   var sum = 0;
  //   for (i=0; i<ar.length; i++){
  //     sum += ar[i]
  //   }
  //   return(sum);
  //  }
  //  var ar = [20,30,40,50];
  //  var sum =  arrSum(ar);
  //  console.log(sum);
   //#11: Calculate the average of the numbers in an array of numbers
   function arrSum(ar){
    var sum = 0;
    var n = ar.length;
    for (i=0; i<n; i++){
      sum += ar[i]
    }
    return sum/n;
   }
   var ar = [20,30,40,50,20];
   var sum =  arrSum(ar);
   console.log(sum);
   

    
