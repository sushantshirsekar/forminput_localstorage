let nameInput = document.getElementById('name');
let emailInput = document.getElementById('emailId');
let phoneInput = document.getElementById('phone');
let afterSubmit = document.querySelector('.submit');
let formInput = document.getElementById('myForm');
let display = document.getElementById('users');

// formInput.addEventListener('submit', saveDetails);
function saveDetails(event)
{
    event.preventDefault();
    let name = event.target.name.value;
    let mail = event.target.email.value;
    let contact = event.target.contact.value;

    let newObj = {
        name,
        mail,
        contact
    }
    // let stringDetails = JSON.stringify(newObj);
    localStorage.setItem(newObj.mail, JSON.stringify(newObj));
    displayDetails(newObj);
}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        displayDetails(userDetailsObj)
    }
})
function displayDetails(user)
{
    document.getElementById('name').value = '';
    document.getElementById('emailId').value = '';
    document.getElementById('phone').value = '';
    if(localStorage.getItem(user.mail) == null){
        removeDisplay(user.mail)
    }
    const parentNode = document.getElementById('users');
    const childHtml = `<li class="user-list" id=${user.mail}>${user.name} ${user.mail} ${user.contact}<br>
    <button class="btn" onclick=deleteDetails('${user.mail}')> Delete </button>
    <button class="btn" onclick=editDetails('${user.mail}','${user.name}','${user.contact}')> Edit </button>
    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHtml;
}
function editDetails(email,name,phone)
{
    document.getElementById('emailId').value = email;
    document.getElementById('name').value = name;
    document.getElementById('phone').value = phone;
    deleteDetails(email);
}
function deleteDetails(mail)
{
    localStorage.removeItem(mail);
    removeDisplay(mail);
}

function removeDisplay(mail)
{
    const parentNode = document.getElementById('users');
    const childNodeDelete = document.getElementById(mail);
    if(childNodeDelete)
    {
    parentNode.removeChild(childNodeDelete);
    }
}




