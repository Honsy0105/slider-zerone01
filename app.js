// import data from './data'
let data = [
  {
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
    name: "peter doe",
    job: "product manager",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
  },
  {
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
    name: "susan doe",
    job: "developer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
    name: "emma doe",
    job: "designer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
]

const container = document.querySelector('.container')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')


const displaySlider = ()=>{
  if(data.length === 1){
    nextBtn.style.display = 'none'
    prevBtn.style.display = 'none'
  }
  // let people = [...data]
  // if(data.length === 2){
  //   people = [...data, ...data]
  // }
  const elementSlide = data.map((person, slideIndex)=>{
    const { img, name, job, text } = person
    let position = 'next'
    if(slideIndex === 0){
      position = 'active'
    }
    if(slideIndex === data.length - 1){
      position = 'last'
    }
    if(data.length <= 1){
      position = 'active'
    }
    return `<article class="slider ${position}">
    <div class="img-container">
      <img src="${img} " alt="" class="img">
    </div>
    <h4 class="name">${name} </h4>
    <h4 class="job">${job} </h4>
    <p class="text">
      ${text}
    </p>
    <span class="quote"><i class="fas fa-quote-right"></i></span>
  </article>
    `
  }).join('')
  container.innerHTML = elementSlide
}
displaySlider()

const displayIndex = (type)=>{
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling || container.firstElementChild 
 
  active.classList.remove('active')
  last.classList.remove('last')
  next.classList.remove('next')
  if(type === 'prev'){
    active.classList.add('next')
    last.classList.add('active')
    next = last.previousElementSibling || container.lastElementChild
    next.classList.remove('next')
    next.classList.add('last')
    return
  }
  active.classList.add('last')
  last.classList.add('next')
  next.classList.add('active')
}

nextBtn.addEventListener('click', ()=>{
  displayIndex()
})
prevBtn.addEventListener('click', ()=>{
  displayIndex('prev')
})
