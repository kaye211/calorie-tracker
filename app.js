// Food List

class Food {
	constructor(food, amount, unit, calories) {
		this.food = food;
		this.amount = amount;
		this.unit = unit;
		this.calories = calories;
	}
}
class UI {
	addFoodToList(food) {
		const list = document.getElementById('food-list');
		// Create table row element
		const row = document.createElement('tr');

		console.log(row);
		// Insert columns
		//Why is it called food and producing undefined with food.name
		row.innerHTML = `
		
			<td>${food.food}</td> 
		    <td>${food.amount}</td>
			<td>${food.unit}</td>
			<td>${food.calories}</td>
		    <td><a href="#" class="delete">X<a></td>
		  `;

		list.appendChild(row);
	}
	clearFields() {
		document.getElementById('name').value = '';
		document.getElementById('amount').value = '';
		document.getElementById('unit').value = '';
		document.getElementById('calories').value = '';
	}
	showAlert(message, className) {
		// Create div
		const div = document.createElement('div');
		// Add classes
		div.className = `alert ${className}`;
		// Add text
		div.appendChild(document.createTextNode(message));
		// Get parent
		const container = document.querySelector('.modal-body');
		// Get form
		const form = document.querySelector('#food-form');
		// Insert alert
		container.insertBefore(div, form);

		// Timeout after 3 sec
		setTimeout(function() {
			document.querySelector('.alert').remove();
		}, 3000);
	}

	deleteFood(target) {
		if (target.className === 'delete') {
			target.parentElement.parentElement.remove();
		}
	}
}

// Event Listeners
// For ADD
document.getElementById('food-form').addEventListener('submit', function(e) {
	// Get form input
	const name = document.getElementById('name').value;
	const amount = document.getElementById('amount').value;
	const unit = document.getElementById('unit').value;
	const calories = document.getElementById('calories').value;
	// const name = document.getElementById('name').value,
	// (amount = document.getElementById('amount').value),
	// 	(unit = document.getElementById('unit').value),
	// 	(calories = document.getElementById('calories').value);
	console.log(name, amount, calories, unit);

	//Instantiate constructor
	const food = new Food(name, amount, unit, calories);
	console.log(food);

	// Add food to table with UI
	// Instantiate UI
	const ui = new UI();

	// console.log(ui);

	// Validate
	if (name === '' || amount === '' || unit === '' || calories === '') {
		// Error alert
		ui.showAlert('Please fill in all fields', 'error');
	} else {
		// Add food to list

		ui.addFoodToList(food);

		// Show success
		ui.showAlert('Food Added!', 'success');
		ui.clearFields();
	}

	// Clear fields

	e.preventDefault();
	// }
});

// Listener for delete
document.getElementById('food-list').addEventListener('click', function(e) {
	// Instantiate UI
	const ui = new UI();

	// Delete book
	ui.deleteFood(e.target);

	// Show message
	ui.showAlert('Food Removed!', 'success');

	e.preventDefault();
});
