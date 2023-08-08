let userForm = document. getElementById ("Con");
const retrieveEntries = () => {
    let entries = localStorage. getItem ("user-entries");
    if (entries) {
    entries = JSON. parse (entries) ;
    } else {
    entries = [];
    }
    return entries;
}
    let userEntries = retrieveEntries () ;

    const dispe= ()=>{
        const entries=retrieveEntries();
    



    const tableEntries = entries.slice(-1). map( (entry) => {
        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell = `<td class='border px-4 py-2'>${entry. dob}</td>`;
        const acceptTermsCell = `<td class='border px-4 py-2'>${entry.acceptedTermsAndconditions}</td>`;
        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`
        var table= document.getElementById("tt");
        table.insertAdjacentHTML("beforeEnd",row);
        return row;
        });


    }

const saveUserForm = (event) => {
event. preventDefault ();
const name = document. getElementById ("name"). value;
const email = document. getElementById ("email") . value;
const password = document. getElementById("pwd"). value;
const dob = document. getElementById ("dob") . value;
const acceptedTermsAndconditions = document.getElementById("c1") . checked;
const entry = {
    name, email, password, dob, acceptedTermsAndconditions
    };

userEntries .push (entry) ;
localStorage. setItem("user-entries", JSON.stringify (userEntries) );
dispe();
}
userForm. addEventListener("submit", saveUserForm) ;



 

dispe();