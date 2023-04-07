const form = document.getElementById('form')
const userName = document.getElementById('name')
const mobile = document.getElementById('mobile')
const email = document.getElementById('email')
const collegeName = document.getElementById('college')
const discipline = document.getElementById('discipline')
const collegeID = document.getElementById('collegeid')
const year = document.getElementById('year')
const tEvents = document.getElementById('t-events')
const ntEvents = document.getElementById('nt-events')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs()
{
    const usernameValue = userName.value.trim();
    const mobileValue = mobile.value.trim();
    const emailValue = email.value.trim();
    const collegeNameValue = collegeName.value.trim();
    const disciplineValue = discipline.value.trim();
    const collegeIDValue = collegeID.value.trim();
    const yearValue = year.value;
    const tEventsValue = tEvents.value;
    const ntEventsValue = ntEvents.value;

    // Regular expressions
    var unameCheck = /^[a-zA-Z ]+$/;
    var mobileCheck = /^[6789][0-9]{9}$/;
    var emailCheck = /^[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;
    var collegeCheck = /^[a-zA-Z ,&]+$/;
    var disciplineCheck = /^[a-zA-Z ,&]+$/;
    var collegeidCheck = /^[a-zA-Z0-9-]+$/;

    // Username Validation
    if(usernameValue === '' || usernameValue == null){
        setErrorFor(userName, 'Name field cannot be blank');
    }
    else if(!unameCheck.test(usernameValue)){
        setErrorFor(userName, 'Type only Alphabets');
    }
    else
    {
        setSuccessFor(userName);
    }
    // End Username Validation

    // Mobile Number Validation
    if(mobileValue === '' || mobileValue == null){
        setErrorFor(mobile, 'Mobile field cannot be blank');
    }
    else if(!mobileCheck.test(mobileValue)){
        setErrorFor(mobile, 'Type valid mobile number');
    }
    else{
        setSuccessFor(mobile);
    }
    // End Mobile Number Validation

    // Email Validation
    if(emailValue === '' || emailValue == null){
        setErrorFor(email, 'Email field cannot be blank');
    }
    else if(!emailCheck.test(emailValue)){
        setErrorFor(email, 'Type valid Email');
    }
    else{
        setSuccessFor(email);
    }
    // End Email Validation

    // CollegeName Validation
    if(collegeNameValue === '' || collegeNameValue == null){
        setErrorFor(collegeName, 'College name field cannot be blank');
    }
    else if(!collegeCheck.test(collegeNameValue)){
        setErrorFor(collegeName, 'Type your College Name correctly');
    }
    else{
        setSuccessFor(collegeName);
    }
    // End CollegeName Validation

    // Discipline Validation
    if(disciplineValue === '' || disciplineValue == null){
        setErrorFor(discipline, 'Discipline field cannot be blank');
    }
    else if(!disciplineCheck.test(disciplineValue)){
        setErrorFor(discipline, 'Type your Department & Course correctly');
    }
    else{
        setSuccessFor(discipline);
    }
    // End Discipline Validation

    // College ID Validation
    if(collegeIDValue === '' || collegeIDValue == null){
        setErrorFor(collegeID, 'College ID field cannot be blank');
    }
    else if(!collegeidCheck.test(collegeIDValue)){
        setErrorFor(collegeID, 'Invalid College ID');
    }
    else{
        setSuccessFor(collegeID);
    }
    // End College ID Validation

    // Year Validation
    if(yearValue === '-1'){
        setErrorFor(year, 'Choose your Year');
    }
    else{
        setSuccessFor(year);
    }
    // End Year Validation

    // Technical Events Validation
    if(tEventsValue === '-1'){
        setErrorFor(tEvents, 'Choose your Technical events');
    }
    else{
        setSuccessFor(tEvents);
    }
    // End Technical Events Validation

    // Non-technical Events Validation
    if(ntEventsValue === '-1'){
        setErrorFor(ntEvents, 'Choose your Non-technical events');
    }
    else{
        setSuccessFor(ntEvents);
    }
    // End Non-technical Events Validation

    // shows a success message 
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

