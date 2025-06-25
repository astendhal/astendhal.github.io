var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "你的BMI值为 " + bmi + " 你的体重过轻 " ;
	} else if (bmi >= 18.5 && bmi <= 23.9) {
		measure = "Your BMI is " + bmi + " 你的体重正常 " ;
	} else if (bmi >= 24 && bmi <= 27.9) {
		measure = "Your BMI is " + bmi + " 你的体重超重 " ;
	} else if (bmi >= 28) {
		measure = "Your BMI is " + bmi + " 你的体重已达到肥胖程度 " ;
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}
