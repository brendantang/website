const response = await fetch("/messages.json")
const messages = await response.json()
const entries = document.getElementById("entries")

console.log(messages)
messages.forEach(({name, message, time, id}) => {
  entries.insertAdjacentHTML('afterbegin', 
   `<hr />
    <div class="mb3 pv3 ph3 relative">
      <b class="flex">${name}</b>
      <div class="pa2 mt2">${message}</div>
      <time class="f6 db mt2 o-70">${time}</time>
      <button id="delete_${id}" class="absolute top-1 right-1">
        DELETE!!
      </button>
    </div>`)
})

console.log(messages)

