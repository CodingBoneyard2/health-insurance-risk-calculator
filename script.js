function calculateBMI() {
    const heightFt = document.getElementById('heightFt').value;
    const heightIn = document.getElementById('heightIn').value;
    const weightLbs = document.getElementById('weightLbs').value;

    // Validate inputs
    if (isNaN(heightFt) || isNaN(heightIn) || isNaN(weightLbs) || heightFt <= 0 || heightIn < 0 || weightLbs <= 0) {
        alert('Please enter valid numbers greater than 0.');
        return;
    }

    if (heightFt < 2) {
        alert('Height must be at least 2 feet.');
        return;
    }

    // Make API call
    fetch(`https://health-risk-calculator-nodejs-dxh3drh4ebamdeag.centralus-01.azurewebsites.net/bmi-calculator?feet=${heightFt}&inches=${heightIn}&lbs=${weightLbs}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('bmiResult').value = data;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while calculating BMI.');
        });
}