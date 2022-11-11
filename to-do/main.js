let tasks = []
let readTasks = []

window.onload = () => {
  const tasksJSON = JSON.parse(localStorage.getItem("@TODO"))
  const readJSON = JSON.parse(localStorage.getItem('@TODOREAD'))

  if (!tasksJSON) return 
  for (let tar of tasksJSON) {
    tasks.push(tar)
  }
  if (readJSON) {
    for(let readed of readJSON) {
      readTasks.push(readed)
    }
  }
  if (!tasks) return 

  tasks.forEach((tar, desc) => {

    tasksvar.innerHTML += `
    <p class="task" id="${desc}">
      <img src="/assets/logo-check.svg" class="checkTask" id="${desc}">
      <span>${tar}</span>
      <img src="/assets/logo-trash.svg" class="deleteTask" id="${desc}">
    </p>
    `

    readTasks.forEach(readed => {
      if (Number(document.getElementById(index).id) === Number(readed)) {
        document.getElementById(desc).classList.add('checked')
      }
    })
  })
}
const tasksvar = document.querySelector('#tasks')
const inputvar = document.getElementsByTagName("input")[0]


let i = 2
addEventListener('click', (event) => { 
  if (event.target.className === 'deleteTask') {
    const indexOfRemove = event.target.id
    tasks.splice(Number(indexOfRemove), 1)

    let readDifferenceOne = []
    if (event.composedPath()[1].classList.contains('checked')) {
      readTasks.forEach(item => {
        if (!(Number(item) === Number(indexOfRemove))) {
          readDifferenceOne.push((item - 1))
        }
      })
    } else {
    
      readTasks.forEach((item) => { 
        if (Number(item) < Number(event.composedPath()[1].id)) {
          readDifferenceOne.push(item)
        } else {
          readDifferenceOne.push((item - 1))
        }
      })
    }
    
    if (!tasks) return

    tasksvar.innerHTML = ''

    tasks.forEach((tar, desc) => {
      tasksvar.innerHTML += 
      `
      <p class="task" id="${desc}">
        <img src="/assets/logo-check.svg" class="checkTask" id="${desc}">
        <span>${tar}</span>
        <img src="/assets/logo-trash.svg" class="deleteTask" id="${desc}">
      </p>
      `

      readDifferenceOne.forEach(readed => {
        if (Number(document.getElementById(desc).id) === Number(readed)) {
          document.getElementById(desc).classList.add('checked')
        }
      })
    })

    localStorage.setItem('@TODO', JSON.stringify(tasks))
    localStorage.setItem('@TODOREAD', JSON.stringify(readDifferenceOne))

    readTasks = readDifferenceOne
  } 
  else if (event.target.className === 'checkTask') {
    if (Number(event.composedPath()[1].id) === Number(event.target.id) && (i === 2)) {
      event.composedPath()[1].classList.add('checked')
      readTasks.push(event.target.id)
      localStorage.setItem('@TODOREAD', JSON.stringify(readTasks))
      i += 1
    } 
    else {
      event.composedPath()[1].classList.add('deschecked')
      readTasks.push(event.target.id)
      localStorage.setItem('@TODOREAD', JSON.stringify(readTasks))
      i -= 1
    }
    }
  }
)

let count
addEventListener('keypress', (event) => {
  
  tasks.length === 0 ? count = 0 : count = tasks.length

  if (event.key === 'Enter') {
    if (inputvar.value.length !== 0) {
      tasksvar.innerHTML += `
      <p class="task" id="${count}">
        <img src="/assets/logo-check.svg" class="checkTask" id="${count}">
        <span>${inputvar.value}</span>
        <img src="/assets/logo-trash.svg" class="deleteTask" id="${count++}">
      </p>`
      tasks.push(inputvar.value)
      inputvar.value = ''
      localStorage.setItem("@TODO", JSON.stringify(tasks))
    }
  }
  count = 0
})