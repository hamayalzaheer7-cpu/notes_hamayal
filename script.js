var notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
    notesDiv.innerHTML = "";

    for (var i = 0; i < notes.length; i++) {
        notesDiv.innerHTML += `
            <div class="note">
                <p>${notes[i]}</p>
                <button class="delete" onclick="deleteNote(${i})">Delete</button>
            </div>`;
    }
}

var notesDiv = document.getElementById("notes");

function saveNote() {
    var text = document.getElementById("note").value.trim();

    if (text == "") {
        alert("Write a note first!");
        return;
    }

    notes.push(text);
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("note").value = "";
    showNotes();
}

function deleteNote(i) {
    notes.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

showNotes();
