const response = await fetch("/messages.json")
const messages = await response.json()
const entries = document.getElementById("entries")

messages.forEach(({name, message, time}) => {
  entries.insertAdjacentHTML('afterbegin', 
   `<hr />
    <div class="mb3 pv3 ph3 relative">
      <b class="flex">${name}</b>
      <div class="pa2 mt2">${message}</div>
      <time class="f6 db mt2 o-70">${new Date(time)}</time>
      <button id="delete_${time}" class="absolute top-1 right-1">
        DELETE!!
      </button>
    </div>`)
})

