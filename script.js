const subscoreContainer = document.getElementById("sub-scores");

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const current of data) {
      console.log(current);

      const subscoreItem = document.createElement("div");
      subscoreItem.classList.add("sub-score");
      subscoreItem.classList.add(
        "sub-score--" + current.category.toLowerCase()
      );
      subscoreContainer.appendChild(subscoreItem);

      const subscoreIcon = document.createElement("img");
      subscoreIcon.classList.add("sub-score__icon");
      subscoreIcon.src = current.icon;
      subscoreIcon.alt = current.category.toLowerCase() + " icon";
      subscoreItem.appendChild(subscoreIcon);

      let newSpan = document.createElement("span");
      newSpan.classList.add("sub-score__category");
      newSpan.textContent = current.category;
      subscoreItem.appendChild(newSpan);

      newSpan = document.createElement("span");
      newSpan.classList.add("sub-score__score");
      newSpan.textContent = current.score;
      subscoreItem.appendChild(newSpan);

      newSpan = document.createElement("span");
      newSpan.classList.add("sub-score__outof");
      newSpan.textContent = "/ 100";
      subscoreItem.appendChild(newSpan);
    }
  })
  .catch((error) => {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`Error: ${error.message}`));
    document.body.insertBefore(p, subscoreContainer);
  });
