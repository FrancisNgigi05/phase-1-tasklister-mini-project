document.addEventListener("DOMContentLoaded", function () {
	const tasklist = document.querySelector('#tasks');
	const submit = document.querySelector('#create-task-form');
	submit.addEventListener('submit', function (event) {
		event.preventDefault();

		const input = document.querySelector('input#new-task-description');

		const taskDescription = input.value;

		// create a new ul element
		const newTask = document.createElement('li');

		// the text content to be set at the li element
		newTask.textContent = taskDescription;

		
		// creating the delete button
		const deleteButton = document.createElement('button');
		deleteButton.textContent = "x";
		
		deleteButton.addEventListener('click', function () {
			tasklist.removeChild(newTask);
		});
		// append the delete button to the li element
		newTask.appendChild(deleteButton);

		// append the li element to the ul element
		tasklist.appendChild(newTask);
	
		// clear the input field after adding the task
		input.value = '';
	});
});
