let count = document.querySelector('.count')
let refresh = document.querySelector('.refresh')
const main = document.querySelector('.main')
const min = document.querySelector('.min')
const plus = document.querySelector('.plus')
const alert = document.querySelector('.alert')

const substract = () => {
  if (count.textContent <= 0) {
    return
  } else {
    count.textContent--
    if (count.textContent <= 10) {
      main.style.backgroundColor = '#bcccdc'
      alert.innerHTML = `LIGHT <br> COUNTER`
    }
  }
}
const add = () => {
  if (count.textContent >= 10) {
    alert.textContent = 'Buy the pro version'
    main.style.backgroundColor = 'black'
  } else {
    count.textContent++
  }
}
const reload = () => {
  window.location.reload()
}
min.addEventListener('click', substract)
plus.addEventListener('click', add)
refresh.addEventListener('click', reload)
