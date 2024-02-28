const response = await fetch("/messages.json");
const messages = await response.json();
const entries = document.getElementById("entries");

messages.forEach(({ name, message, time }) => {
  entries.insertAdjacentHTML(
    "afterbegin",
    `<div id="message_${time}" class="mb3 pv3 ph3 relative">
      <b class="flex">${name}</b>
      <div class="pa2 mt2">${message}</div>
      <time class="f6 db mt2 o-70">${new Date(time)}</time>
      <button data-message-time="${time}" class="delete_button absolute top-1 right-1">
        DELETE!!
      </button>
    </div>`,
  );
});

const deleteButtons = document.querySelectorAll("button.delete_button");

const deleteMessage = async (e) => {
  const time = e.target.dataset["messageTime"];
  await fetch(`/messages/${time}`, { method: "DELETE" });
  e.target.parentElement.remove();
};

deleteButtons.forEach((butt) => {
  butt.addEventListener("click", deleteMessage);
});
