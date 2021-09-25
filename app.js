const placeholders = document.querySelectorAll('.placeholder');
const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

function dragStart(event) {
	setTimeout(() => {
		event.target.classList.add('hide');
	})
}

function dragEnd(event) {
	event.target.classList.remove('hide');
}


placeholders.forEach(placeholder => {
	placeholder.addEventListener('dragover', dragOver);
	placeholder.addEventListener('dragenter', dragEnter);
	placeholder.addEventListener('dragleave', dragLeave);
	placeholder.addEventListener('drop', dragDrop)	
})

function dragOver(event) {
	event.preventDefault();
}

function dragEnter(event) {
	event.target.classList.add('hovered')
}

function dragLeave(event) {
	event.target.classList.remove('hovered')
}

function dragDrop(event) {
	event.target.classList.remove('hovered')
	event.target.append(item)
}