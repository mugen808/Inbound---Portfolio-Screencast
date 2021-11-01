const myLibrary = [];

function Book(title, year, author, rating, read) {
	(this.title = title),
		(this.author = author),
		(this.year = year),
		(this.rating = rating);
	this.read = read;
}

window.addEventListener('DOMContentLoaded', event => {
	let storage = JSON.parse(localStorage.getItem('bookList'));
	if (storage) {
		for (let i = 0; i < storage.length; i++) {
			myLibrary.push(storage[i]);
			bookToTable(storage[i]);
		}
	}
});
// Adds the submitted data to the myLibrary array
let bookToList = () => {
	let formData = document.getElementsByClassName('text-field');
	if (
		formData[0].value == '' ||
		formData[1].value == '' ||
		formData[2].value == '' ||
		formData[3].value == ''
	) {
		alert('You must fill all inputs');
		return;
	}
	let read = 'No';
	if (checkRead()) {
		read = 'Yes';
	}
	let newBook = new Book(
		formData[0].value,
		formData[1].value,
		formData[2].value,
		formData[3].value,
		read,
	);
	// Push intem into array
	myLibrary.push(newBook);
	// Trigger to update info to DOM
	bookToTable(newBook);
	// Empty forms for next entry
	emptyInput(formData);
	localStorage.setItem('bookList', JSON.stringify(myLibrary));
};

// Inserts the information given by the user as a new row in the table
let bookToTable = newBook => {
	// Get table info and create row
	let table = document.getElementById('books-table');
	let row = table.getElementsByTagName('tbody')[0].insertRow();
	row.classList.add('book-info');

	// Create new cells for the table row
	let cell1 = row.insertCell(0);
	cell1.innerHTML = `${newBook.title}`;
	let cell2 = row.insertCell(1);
	cell2.innerHTML = `${newBook.author}`;
	let cell3 = row.insertCell(2);
	cell3.innerHTML = `${newBook.year}`;
	let cell4 = row.insertCell(3);
	cell4.innerHTML = `${newBook.rating}`;
	let cell5 = row.insertCell(4);
	cell5.classList.add('read-click');
	if (checkRead()) {
		cell5.innerHTML = `Yes`;
	} else {
		cell5.innerHTML = `No`;
	}
	// Creates a delete button for each entry
	let cell6 = row.insertCell(5);
	cell6.classList.add('delete-button');
	cell6.innerHTML = `<i class="fa fa-trash delete-button" aria-hidden="true"></i>`;
};

// Function to empty the form fields after the data is submitted to the list
let emptyInput = formData => {
	for (let i = 0; i < formData.length; i++) {
		formData[i].value = '';
	}
};

// Checks if the user selected the book as read or not
let checkRead = () => {
	let readCheck = document.getElementsByClassName('read');
	return readCheck[0].checked;
};

document.querySelector('.add').addEventListener('click', bookToList);
let bookTable = document.getElementsByClassName('book-info');
let tableBody = document.getElementsByClassName('table-body');
let readInfo = document.querySelector('.read-click');

// Changes the "Read" status on click and removes row when clicked on the trash can button

let dynamicTable = document.querySelector('#books-table');
dynamicTable.addEventListener('click', function (e) {
	// Changes the read status
	if (e.target.classList[0].includes('read-click')) {
		if (e.target.innerHTML == 'Yes') {
			e.target.innerHTML = 'No';
		} else {
			e.target.innerHTML = 'Yes';
		}
	}

	// Removes the row when clicked to remove entry
	if (e.target.classList[0].includes('delete-button')) {
		console.log('active')
		let index = e.target.parentElement.rowIndex - 1;
		myLibrary.splice(index, 1);
		e.target.parentElement.remove();

		// Overwrites localStorage with the updated array
		localStorage.setItem('bookList', JSON.stringify(myLibrary));
	}
});

// Toggle hide the forms field when clicked on
let searchHide = document.querySelector('.new');
searchHide.addEventListener('click', () => {
	let hide = document.querySelector('.flex-container');
	hide.classList.toggle('transition');
});
