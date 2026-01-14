const subtitleText = document.createElement("p");
const subtitleContainer = document.createElement("div");

subtitleContainer.classList.add("TULKR_container");
subtitleText.classList.add("TULKR_text");

subtitleContainer.appendChild(subtitleText);

subtitleText.innerText = "HELLO this is my sample subtitle!";

document.body.append(subtitleContainer);
