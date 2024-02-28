const response = await fetch("/messages.json")
const messages = await response.json()
const entries = document.getElementById("entries")

console.log(messages)
messages.forEach(({name, message, time}) => {
  entries.insertAdjacentHTML('afterbegin', 
  `
      <div class="mv2 pa2">
        ${name} said:<br />
        ${message}
      </div>
    `)
})

console.log(messages)

