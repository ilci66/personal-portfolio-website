// require('dotenv').config()

const submitForm = document.querySelector('.send-msg-form')
const topTilte = document.querySelector('.top-title')

const formName = document.querySelector('.f-name')
const formEmail = document.querySelector('.f-email')
const formMessage = document.querySelector('.f-message')

const formResModal = document.querySelector('.form-res-modal');
const modalClose = document.querySelector('.fa-times');
const modalText = document.querySelector('.form-res-text');

const sideBar = document.querySelector('.side-bar');
const menuArrow = document.querySelector('.menu-arrow');

// const testFunc = (e) => console.log('clicked!!')

// topTilte.addEventListener('click', (e) => console.log("works"))

menuArrow.addEventListener('click', () => {
  // testFunc()
  // console.log(menuArrow.classList.contains('move-right'))
  // console.log(menuArrow.classList)
  if(!menuArrow.classList.contains('move-right')) {
    menuArrow.classList.add('move-right');
    menuArrow.style.transform = "rotate(180deg)";
    menuArrow.style.marginLeft = '200px';
    
    sideBar.style.left= "0px";
    // don't play with the position it's already fixed on media queries
    // sideBar.style.display = 'block';
    // sideBar.style.position = 'fixed';
  }else {
    menuArrow.classList.remove('move-right');
    menuArrow.style.backgroundColor = "inherit";
    menuArrow.style.transform = "none";
    menuArrow.style.marginLeft = '25px';

    sideBar.style.left= "-300px";
    // sideBar.style.display = 'block';
  }
})
// if(window.innerWidth > 960) {
//   console.log(window.innerWidth)
//   sideBar.style.left = 0
//   sideBar.style.display = 'block';
//   sideBar.style.position = 'sticky';

// }
submitForm.addEventListener('submit', async (e) => {
  e.preventDefault(); 

  
  // console.log(formName.value, formEmail.value, formMessage.value,)
  
  const escapeHtml = (str) => {
    var map ={
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, (m) => map[m]);
  };
  let escapedName = await escapeHtml(formName.value);
  let escapedEmail = await escapeHtml(formEmail.value);
  let escapedMessage = await escapeHtml(formMessage.value);

  const data = await {
    name: escapedName,
    email: escapedEmail,
    message: escapedMessage 
  }

  // const data = await {
  //   name: formName.value,
  //   email: formEmail.value,
  //   message: formMessage.value 
  // }

  // console.log("data ==> ", data)

  if( formName.value == "" ||  formEmail.value == "" || formMessage.value == "") {
    modalText.textContent = "Missing required fields."
    formResModal.style.display = "flex";
    return
  }else {
    fetch(`/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      formName.value = ""
      formEmail.value = ""
      formMessage.value = ""

      // const smileIcon = document.createElement('span')
      // smileIcon.classList.add("fa-smile-beam")
      modalText.textContent = data.message
      // modalText.append(smileIcon)
      formResModal.style.display = "flex";
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  
  // console.log('submit stuff')
})

modalClose.addEventListener('click', () => {
  formResModal.style.display = "none";
})

// console.log("so far so good")