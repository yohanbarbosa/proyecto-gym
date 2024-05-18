let totalCalories = 0;

function addFood() {
    const foodSelect = document.getElementById('food');
    const gramsInput = document.getElementById('grams');
    const foodList = document.getElementById('foodList');
    const totalCaloriesElement = document.getElementById('totalCalories');

    const foodName = foodSelect.options[foodSelect.selectedIndex].text;
    const caloriesPer100g = foodSelect.options[foodSelect.selectedIndex].getAttribute('data-calories');
    const grams = gramsInput.value;

    if (grams === '' || grams <= 0) {
        alert('Por favor, ingresa una cantidad válida de gramos.');
        return;
    }

    const calories = (grams * caloriesPer100g) / 100;
    totalCalories += calories;

    const listItem = document.createElement('li');
    listItem.textContent = `${grams}g de ${foodName}: ${calories.toFixed(2)} kcal`;
    foodList.appendChild(listItem);

    totalCaloriesElement.textContent = totalCalories.toFixed(2);
    
    gramsInput.value = '';
}