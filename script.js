let high = document.getElementById("height");
let wigh = document.getElementById("weight");
let ag = document.getElementById("age");

const submit = document.getElementById("submitbutton");

submit.addEventListener("click", () => {
    height = high.value;
    weight = wigh.value;
    age = ag.value;


    let quality = document.getElementById("resulth1");
    let result = document.getElementById("resultp");


    if (height != null && weight != null) {
        let w = parseFloat(weight);
        let h = parseFloat(height);

        h = h * h;

        let bmi = w / h;
        bmi = bmi * 10000;
        bmi = Math.round(bmi * 10) / 10;

        let h1 = "";

        // for age above 20
        if (bmi < 18.5 && age >= 15) {
            h1 = "Underweight";
        }

        if (bmi >= 18.5 && bmi < 24.9 && age >= 15) {
            h1 = "Normal weight";
        }

        if (bmi >= 25 && bmi < 30 && age >= 15) {
            h1 = "Overweight";
        }

        if (bmi >= 30 && age >= 15) {
            h1 = "Obese";
        }


        // for age below 20
        if (bmi <= 13 && age < 15) {
            h1 = "Underweight";
        }

        if (bmi > 13 && bmi <= 18 && age < 15) {
            h1 = "Normal weight";
        }

        if (bmi >= 19 && bmi <= 22 && age < 15) {
            h1 = "Overweight";
        }

        if (bmi >= 23 && age < 15) {
            h1 = "Obese";
        }

        if(!isNaN(bmi)) {

        quality.innerHTML = h1;
        result.innerHTML = "Your BMI is " + bmi;
        }

        if(isNaN(bmi)) {

            quality.innerHTML = "";
            result.innerHTML = "";
        }
    }

    high.value = ""
    ag.value = ""
    wigh.value = ""

})