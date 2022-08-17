function BMI(weight,heiht) {
    let result = weight / (height * heiht)
    return result;
}

console.log(BMI(70 , 1.7));

function status(bmi) {
if (bmi < 18.5) {
    return "لديك نقص في الوزن"
} else if ( bmi >= 18.5 && bmi <25) {
    return "وزنك صحي";
} else {
    return "لديك زياده قي الوزن";
}

}


function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

let bmi = BMI(weight, height);

let desc = status(bmi);

let div = document.getElementById("result")

div.innerText = bmi + " == " + desc;
}










































