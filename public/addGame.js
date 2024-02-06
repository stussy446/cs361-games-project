document.getElementById("addGameForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const gameName = document.getElementById("game-name").value;

  const data = {
    name: gameName,
  };

  fetch("/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Server response:", data);
    })
    .catch((error) => {
      console.error("Error sending data to the server:", error);
    });
});
