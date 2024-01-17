const emojiContainer = document.querySelector("table>tbody");
let emojis = [];

function handleSearch(e) {  

  emojis = [];
  emojiContainer.innerHTML = '';

  const input = document.querySelector("form>input");
  const query = input.value;

  emojiList.forEach((emoji) => {

    if (
      emoji.description.startsWith(query) ||
      emoji.category.startsWith(query) ||
      emoji.aliases.some((alise) => alise.startsWith(query)) ||
      emoji.tags.some((tag) => tag.startsWith(query))
    ) {
        emojis.push({
            icon: emoji.emoji,
            aliases: emoji.aliases[0],
            description: emoji.description
        });
    }

  });

  emojis.forEach((emoji) => {
    const row = document.createElement("tr");
    const icon = document.createElement("td");
    const aliases = document.createElement("td");
    const description = document.createElement("td");

    icon.innerText = emoji.icon;
    aliases.innerText = emoji.aliases;
    description.innerText = emoji.description;

    row.classList.add("row");
    icon.classList.add("emoji");
    aliases.classList.add("aliases");
    description.classList.add("description");

    row.append(icon, aliases, description);

    emojiContainer.appendChild(row);
  });

}



window.addEventListener("load", () => {
  emojiList.forEach((emoji) => {
    const row = document.createElement("tr");
    const icon = document.createElement("td");
    const aliases = document.createElement("td");
    const description = document.createElement("td");

    icon.innerText = emoji.emoji;
    aliases.innerText = emoji.aliases[0];
    description.innerText = emoji.description;

    row.classList.add("row");
    icon.classList.add("emoji");
    aliases.classList.add("aliases");
    description.classList.add("description");

    row.append(icon, aliases, description);

    emojiContainer.appendChild(row);
  });
});
