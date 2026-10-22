//local storage
var notes = JSON.parse(localStorage.getItem("notes")) || [];

var notesDiv = document.getElementById("notes");

// Display  notes
function showNotes() {
    notesDiv.innerHTML = "";

    //del notes
    for (var i = 0; i < notes.length; i++) {
        notesDiv.innerHTML += `
            <div class="note">
                <p>${notes[i]}</p>
                <button onclick="deleteNote(${i})">Delete</button>
            </div>`;
    }
}
// Add  new note
function saveNote() {
    var text = document.getElementById("note").value;

    // input is empty show a message
    if (text == "") {
        alert("Write a note first!");
        return;
    }

    notes.push(text);
    // Save notes in browser
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("note").value = "";
    showNotes();
}

// Delete a note
function deleteNote(i) {
    notes.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

// Show saved notes when page opens
showNotes();
