function calculateBMI() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value / 100; // Convert cm to meters
    const weight = document.getElementById('weight').value;

    if (height === 0 || weight === 0) {
        document.getElementById('result').innerText = "Height and weight values must be greater than zero.";
        return;
    }

    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}, which means you are ${category}.`;
}
