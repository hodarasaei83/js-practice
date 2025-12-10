//promise
const users = [
  {id: 1, name:'user one'},
  {id: 2, name:'user two'},
  {id: 3, name:'user three'},
]

function getUsers(){
  setTimeout(() => {
    let list = ''
    users.forEach((user) => {
      list += `<li>${user.id}: ${user.name}</li>`
    })
    document.body.innerHTML = list
  }, 1000);
}

function createUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user)
      const error = false

      if(!error){
        resolve()
      }else {
        reject('Something went wrong')
      }
    }, 2000);
  })
}

createUser({id:4, name:'user four'}).then(getUsers).catch(err => console.log(err))

const userData = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
Promise.all([userData]).then(values => console.log('values',values))


//Async Await
async function addUser() {
  await createUser({id:5, name:'async user'})

  getUsers()
}
addUser()

async function fetchUsers(){
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await result.json()
  console.log("async await fetch data",data)
}
fetchUsers()