let name = "";
let email = "";
let message = "";

const submitForm = document.querySelector('.send-msg-form')
const topTilte = document.querySelector('.top-title')

const formName = document.querySelector('.f-name')
const formEmail = document.querySelector('.f-email')
const formMessage = document.querySelector('.f-message')


const testFunc = (e) => console.log('clicked!!')

topTilte.addEventListener('click', (e) => console.log("works"))


submitForm.addEventListener('click', async (e) => {
  e.preventDefault(); 

  console.log(formName.value, formEmail.value, formMessage.value)

  console.log('submit stuff')
})

console.log("so far so good")