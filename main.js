const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const resume = document.querySelector('.resume')
const clear = document.querySelector('.clear')
const number = document.querySelector('.number')

let isPaused = false;
start.onclick = function(){
  let num = 0
  let counter = setInterval(() => {
    
    if(!isPaused){
      num++
      number.innerHTML = num
    }
  }, 1000)
  
  clear.addEventListener('click', () => {
    clearInterval(counter)
    number.innerHTML = 0
  })
}

stop.addEventListener('click', () => {
  if(!isPaused){
    isPaused = true;
  }else{
    isPaused = false
  }
})

resume.addEventListener('click', () => {
  isPaused = false
})