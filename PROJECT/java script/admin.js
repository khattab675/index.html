document.getElementById("addStudent").addEventListener("click", function () {
	const studentTable = document.getElementById("studentTable");
	const newRow = studentTable.insertRow();

	const idCell = newRow.insertCell(0);
	const nameCell = newRow.insertCell(1);
	const emailCell = newRow.insertCell(2);
	const phoneCell = newRow.insertCell(3);
	const dobCell = newRow.insertCell(4);
	const programCell = newRow.insertCell(5);
	const actionsCell = newRow.insertCell(6);

	idCell.textContent = prompt("Enter Student ID:");
	nameCell.textContent = prompt("Enter Student Name:");
	emailCell.textContent = prompt("Enter Student Email:");
	phoneCell.textContent = prompt("Enter Student Phone Number:");
	dobCell.textContent = prompt("Enter Student Date of Birth:");
	programCell.textContent = prompt("Enter Student Program:");
	actionsCell.innerHTML = '<button class="delete">Delete</button>';

	// Add delete functionality
	newRow.querySelector(".delete").addEventListener("click", function () {
		newRow.remove();
	});
});

// Add Course Functionality
document.getElementById("addCourse").addEventListener("click", function () {
	const courseTable = document.getElementById("courseTable");
	const newRow = courseTable.insertRow();

	const idCell = newRow.insertCell(0);
	const titleCell = newRow.insertCell(1);
	const professorCell = newRow.insertCell(2);
	const creditsCell = newRow.insertCell(3);
	const actionsCell = newRow.insertCell(4);

	idCell.textContent = prompt("Enter Course ID:");
	titleCell.textContent = prompt("Enter Course Title:");
	professorCell.textContent = prompt("Enter Professor Name:");
	creditsCell.textContent = prompt("Enter Course Credits:");
	actionsCell.innerHTML = '<button class="delete">Delete</button>';

	// Add delete functionality
	newRow.querySelector(".delete").addEventListener("click", function () {
		newRow.remove();
	});
});

// Add Professor Functionality
document.getElementById("addProf").addEventListener("click", function () {
	const professorTable = document.getElementById("profTable");
	const newRow = professorTable.insertRow();

	const idCell = newRow.insertCell(0);
	const titleCell = newRow.insertCell(1);
	const programCell = newRow.insertCell(2);
	const emailCell = newRow.insertCell(3);
	const phoneCell = newRow.insertCell(4);
	const actionsCell = newRow.insertCell(5);

	const professorId = prompt("Enter Professor ID:");
	const professorTitle = prompt("Enter Professor Title:");
	const professorProgram = prompt("Enter Program:");
	const professorEmail = prompt("Enter Email:");
	const professorPhone = prompt("Enter Phone Number:");

	idCell.textContent = professorId;
	titleCell.textContent = professorTitle;
	programCell.textContent = professorProgram;
	emailCell.textContent = professorEmail;
	phoneCell.textContent = professorPhone;
	actionsCell.innerHTML = '<button class="delete">Delete</button>';

	// Add delete functionality
	newRow.querySelector(".delete").addEventListener("click", function () {
		newRow.remove();
	});
});
