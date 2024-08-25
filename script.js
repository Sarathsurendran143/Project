//javascript

document.getElementById('create-note').addEventListener('click', createNote);

function createNote() {
    const notesContainer = document.getElementById('notes-container');
    
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    
    const textarea = document.createElement('textarea');
    textarea.placeholder = "Write your note here...";
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', () => saveNote(textarea));
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteNote(noteDiv));
    
    buttonsDiv.appendChild(saveBtn);
    buttonsDiv.appendChild(deleteBtn);
    
    noteDiv.appendChild(textarea);
    noteDiv.appendChild(buttonsDiv);
    
    notesContainer.appendChild(noteDiv);
}

function saveNote(textarea) {
    // You can add logic to save notes here, e.g., saving to local storage or a database
    textarea.setAttribute('readonly', 'readonly');
    textarea.style.backgroundColor = '#f0f0f0';
}

function deleteNote(noteDiv) {
    noteDiv.remove();
}