const formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  const token = data.token;

  localStorage.setItem("token", token);
});

const getMyProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:3000/getMyProfile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  console.log(data);
};

const statusElement = document.getElementById("status");

const updateStatus = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    const response = await fetch("http://localhost:3000/getMyProfile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      statusElement.textContent = "Vous êtes connecté";
    } else {
      statusElement.textContent = "Vous n'êtes pas connecté";
    }
  } else {
    statusElement.textContent = "Vous n'êtes pas connecté";
  }
};
