function pingSite() {
    fetch('https://health-risk-calculator-nodejs-dxh3drh4ebamdeag.centralus-01.azurewebsites.net/api/ping')
      .then(response => response.json())
      .then(data => console.log('Server response:', data))
      .catch(error => console.error('Error:', error));
  }
  window.onload = pingSite;

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

    function calculateInsurancePoints() {
        const ageGroup = document.querySelector('input[name="age"]:checked').value;
        const bmiResults = document.getElementById('bmiResult').value;
        const bloodPressure = document.querySelector('input[name="blood_pressure"]:checked').value;
        const familyDiseases = document.querySelector('input[name="family_disease"]:checked').value;
        
        fetch(`https://health-risk-calculator-nodejs-dxh3drh4ebamdeag.centralus-01.azurewebsites.net/point-system?agegroup=${ageGroup}&bmiresults=${bmiResults}&bloodpressure=${bloodPressure}&familydiseases=${familyDiseases}`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('result-status').value = data; // Use innerText instead of value
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while calculating Insurance.');
            });
    }
    

/*
    function calculateInsurancePoints() {
    
        let points = 0;
    
        // Age points
        const ageGroup = document.querySelector('input[name="age"]:checked').value;
        if (ageGroup === 'age-1') {
            points += 0;
        } else if (ageGroup === 'age-2') {
            points += 10;
        } else if (ageGroup === 'age-3') {
            points += 20;
        } else {
            points += 30;
        }
    
        // BMI points
        const bmiResult = document.getElementById('bmiResult').value;
        if (bmiResult === "Results Will Display Here") {
            points +=0;
        }
        else if (bmiResult === "Normal") {
            points += 0;
        } else if (bmiResult === "Overweight") {
            points += 30;
        } else if (bmiResult === "Underweight") {
            points += 30;
        }else {
            points += 75;
        }
    
        // Blood Pressure points
        const bloodPressure = document.querySelector('input[name="blood_pressure"]:checked').value;
        if (bloodPressure === 'normal') {
            points += 0;
        } else if (bloodPressure === 'elevated') {
            points += 15;
        } else if (bloodPressure === 'st-1') {
            points += 30;
        } else if (bloodPressure === 'st-2') {
            points += 75;
        } else if (bloodPressure === 'crisis') {
            points += 100;
        }
    
        // Family Disease points
        const familyDiseases = document.querySelector('input[name="family_disease"]:checked').value;
        if (familyDiseases === 'None') {
            points += 10;
        }
        else if (familyDiseases === 'Cancer') {
            points += 10;
        }
        else if (familyDiseases === 'Diabetes') {
            points += 10;
        }
        else if (familyDiseases === 'Hypertension') {
            points += 10;
        }
    
        // Determine risk category
        let insuranceStatus;
        if (points <= 20) {
            insuranceStatus = 'Low risk';
        } else if (points <= 50) {
            insuranceStatus = 'Moderate risk';
        } else if (points <= 75) {
            insuranceStatus = 'High risk';
        } else {
            insuranceStatus = 'Uninsurable';
        }
        window.location.href = `result.html?status=${insuranceStatus}`;
    }
*/
    document.getElementById('calculate_button').addEventListener('click', function() {
        calculateInsurancePoints();     
    }); 