//selectors
const submitBtnElm = document.querySelector('#submit');
const displayGeneratePasswordElm = document.querySelector('#display');
const passwordGenerateBtnElm = document.querySelector('#generateBtn');
const passwordCopyBtnElm = document.querySelector('#copyBtn');
const formElm = document.querySelector('#form');
const nameElm = document.querySelector('#name');
const userNameElm = document.querySelector('#userName');
const emailElm = document.querySelector('#email');
const phoneElm = document.querySelector('#phone');
const slugElm = document.querySelector('#slug');
const websiteElm = document.querySelector('#website');
const passwordElm = document.querySelector('#password');
const generatePasswordFieldBtn = document.querySelector('#generatePasswordFieldBtn')
const selfPasswordFieldBtn = document.querySelector('#selfPasswordFieldBtn');
const generatePasswordField = document.querySelector('.generatePasswordField');
const selfPasswordField = document.querySelector('.selfPasswordField');

//Generate Password Characters
let chars = 'AB85abc*';

//validation with regular expression
formElm.addEventListener('submit', (e) =>{
    e.preventDefault();
     checkInputs();
});

function checkInputs(){
    //get the values from the input
   const nameElmValue = nameElm.value.trim();
   const userNameElmValue = userNameElm.value.trim();
   const emailElmValue = emailElm.value.trim();
   const phoneElmValue = phoneElm.value.trim();
   const slugElmValue = slugElm.value.trim();
   const websiteElmValue = websiteElm.value.trim();
   const passwordElmValue = passwordElm.value.trim();

   //regular expression
   const nameElmCheck = /^[A-Za-z]{3,}$/;
   const userNameElmCheck = /[A-Za-z0-9]{5,30}/;
   const emailElmCheck = /\w{2,}@\w{2,20}\.\w{2,5}/;
   const phoneElmCheck = /\+?(88)?01[7-9](\d){8}/;
   const slugElmCheck = /^[a-z0-9(-_)?]+$/igm;
   const websiteElmCheck = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;
   const passwordElmCheck = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,16}$/;

   //Name Check With Regular Expression
   if (nameElmValue === '') {
      setErrorFor(nameElm, 'Name can not be blank')
   }else if(!(nameElmCheck.test(nameElmValue))) {
      setErrorFor(nameElm, 'Must be more than 5 characters, must not contain any numbers and special characters')
   }else{
      setSuccessFor(nameElm, 'Name is Valid')
   }

   //User Name Check With Regular Expression
   if (userNameElmValue === '') {
      setErrorFor(userNameElm, 'Username can not be blank')
   }else if(!(userNameElmCheck.test(userNameElmValue))) {
      setErrorFor(userNameElm, 'Username must be 5 characters')
   }else{
      setSuccessFor(userNameElm, 'Username is Valid')
   }

   //Email Check With Regular Expression
   if (emailElmValue === '') {
      setErrorFor(emailElm, 'Email can not be blank')
   }else if(!(emailElmCheck.test(emailElmValue))) {
      setErrorFor(emailElm, 'Email is not valid. Provide valid email address')
   }else{
      setSuccessFor(emailElm, 'Email is Valid')
   }

   //Phone Check With Regular Expression
   if (phoneElmValue === '') {
      setErrorFor(phoneElm, 'Phone can not be blank')
   }else if(!(phoneElmCheck.test(phoneElmValue))) {
      setErrorFor(phoneElm, 'Phone number must be like BD Formate +8801704577922, 01704577922')
   }else{
      setSuccessFor(phoneElm, 'Phone is Valid')
   }

   //Slug Check With Regular Expression
   if (slugElmValue === '') {
      setErrorFor(slugElm, 'Slug can not be blank')
   }else if(!(slugElmCheck.test(slugElmValue))) {
      setErrorFor(slugElm, 'Slug is not valid')
   }else{
      setSuccessFor(slugElm, 'Slug is Valid')
   }

   //Website Check With Regular Expression
   if (websiteElmValue === '') {
      setErrorFor(websiteElm, 'Website can not be blank')
   }else if(!(websiteElmCheck.test(websiteElmValue))) {
      setErrorFor(websiteElm, 'Website is not valid')
   }else{
      setSuccessFor(websiteElm, 'Website is Valid')
   }

   //Password Check With Regular Expression
   if (passwordElmValue === '') {
      setErrorFor(passwordElm, 'Password can not be blank')
   }else if(!(passwordElmCheck.test(passwordElmValue))) {
      setErrorFor(passwordElm, `Ensure string has two uppercase letters, one special case letter,  two digits, three lowercase letters and not more than 8 characters`)
   }else{
      setSuccessFor(passwordElm, 'Password is Valid')
   }
}

//Generate Password Field Event
generatePasswordFieldBtn.addEventListener('click', (e) =>{
   e.preventDefault();
   generatePasswordField.style.display = 'block';
   selfPasswordField.style.display = 'none';

});

//Generate Password Event
passwordGenerateBtnElm.addEventListener('click',(e)=>{
   e.preventDefault();
   let i;
   let randomPassword = '';
   for (let i = 0; i < 8; i++) {
      randomPassword = randomPassword + chars.charAt(
         Math.floor(Math.random()*chars.length)
      );
   }
    displayGeneratePasswordElm.value = randomPassword;  
});

//Copy Password Event
passwordCopyBtnElm.addEventListener('click',(e)=>{
   e.preventDefault(); 
   displayGeneratePasswordElm.select();
   document.execCommand('copy');
   alert('Your Password has copied to clipboard');
});

//Self Password Field Event
selfPasswordFieldBtn.addEventListener('click', (e) =>{
   e.preventDefault();
   generatePasswordField.style.display = 'none';
   selfPasswordField.style.display = 'block';

});

//Set Error Message
function setErrorFor(input, ErrorMessage){
   const formControl = input.parentElement;
   const span = formControl.querySelector('span');
   span.style.color = 'red';
   span.innerHTML = ErrorMessage;

}

//Set Success Message
function setSuccessFor(input, successMessage){
   const formControl = input.parentElement;
   const span = formControl.querySelector('span');
   span.style.color = 'green';
   span.innerHTML = successMessage;
}
