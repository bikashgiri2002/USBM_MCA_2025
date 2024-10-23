const form = document.getElementById('bmi-form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultElement = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    console.log(typeof(weight));
    console.log(typeof(height));
    if (isNaN(weight) || isNaN(height)) {
        resultElement.textContent = 'Please enter valid numbers';
        return;
    }

    const bmi = calculateBMI(weight, height);
    const result = getResult(bmi);

    resultElement.textContent = `Your BMI is ${bmi.toFixed(2)} (${result})`;
});

function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

function getResult(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 25) {
        return 'Normal';
    } else if (bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}