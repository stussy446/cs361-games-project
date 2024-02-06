document.getElementById("delete-game").addEventListener("click", (e) => {
  e.preventDefault();

  const gameName = document.getElementById("game-name");
  console.log(`game name is ${gameName}`);

  const data = {
    name: gameName,
  };

  fetch("/games", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error deleting data from the server:", error);
    });
});
