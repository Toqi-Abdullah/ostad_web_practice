function calculateBmi () {
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value;
    const bmi = weight / (height * height);
    const result= document.querySelector("#result");
    document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;

document.getElementById("calculateBtn").addEventListener("click", calculateBMI)};