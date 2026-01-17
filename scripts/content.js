const subtitleText = document.createElement("p");
const subtitleContainer = document.createElement("div");

subtitleContainer.classList.add("TULKR_container");
subtitleText.classList.add("TULKR_text");

subtitleContainer.appendChild(subtitleText);

subtitleText.innerText = "Press play to start playing subs";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case "playing-subtitle": {
      subtitleText.innerText =
        message?.payload?.text ?? "Something wrong in parsing subtitle";
      console.log("Received from popup:", message.payload);
      break;
    }
    default:
      console.log("Invalid payload!");
      break;
  }
});

document.body.append(subtitleContainer);
