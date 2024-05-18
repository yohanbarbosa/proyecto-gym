document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activityLevel = document.getElementById('activityLevel').value;

    let bmr;

    // Calculate BMR
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Activity multiplier
    let activityMultiplier;

    switch (activityLevel) {
        case 'sedentary':
            activityMultiplier = 1.2;
            break;
        case 'lightly_active':
            activityMultiplier = 1.375;
            break;
        case 'moderately_active':
            activityMultiplier = 1.55;
            break;
        case 'very_active':
            activityMultiplier = 1.725;
            break;
        case 'super_active':
            activityMultiplier = 1.9;
            break;
        default:
            activityMultiplier = 1;
    }

    const maintenanceCalories = bmr * activityMultiplier;
    const caloriesToLose = maintenanceCalories - 500;
    const caloriesToGain = maintenanceCalories + 500;

    document.getElementById('caloriesToLose').textContent = `Calorías para perder peso: ${caloriesToLose.toFixed(2)} kcal`;
    document.getElementById('caloriesToMaintain').textContent = `Calorías para mantener el peso: ${maintenanceCalories.toFixed(2)} kcal`;
    document.getElementById('caloriesToGain').textContent = `Calorías para ganar peso: ${caloriesToGain.toFixed(2)} kcal`;

    document.getElementById('result').style.display = 'block';
});