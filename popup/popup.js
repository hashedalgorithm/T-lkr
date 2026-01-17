let timeouts = [];
let subtitles = [];
let currentTab;

function handleFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    subtitles = parseSubtitles(reader.result);
    console.log("Parsed subtitles:", subtitles);
  };
  reader.readAsText(file);
}

function parseSubtitles(text) {
  return text
    .replace(/\r/g, "")
    .split("\n\n")
    .map((block) => {
      const lines = block.split("\n");
      if (lines.length < 2) return null;

      const timeLine = lines.find((l) => l.includes("-->"));

      if (!timeLine) return null;
      const [start, end] = timeLine.split(" --> ");

      return {
        start: toSeconds(start),
        end: toSeconds(end),
        text: lines.slice(lines.indexOf(timeLine) + 1).join(" "),
      };
    })
    .filter(Boolean);
}

function toSeconds(time) {
  const [h, m, s] = time.replace(",", ".").split(":");
  return Number(h) * 3600 + Number(m) * 60 + Number(s);
}

function intializeCurrentTab() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) {
        reject("No active tabs!");
      }

      currentTab = tabs[0];
      resolve();
    });
  });
}

async function sendSubtitleToContentScript(subtitle) {
  if (!currentTab) {
    await intializeCurrentTab();
  }

  chrome.tabs.sendMessage(currentTab.id, {
    type: "playing-subtitle",
    payload: subtitle,
  });
}

function playSubtitles() {
  clearPlayback();

  console.log("playing subs");

  subtitles.forEach((sub) => {
    const delay = sub.start * 1000;
    const timeout = setTimeout(async () => {
      await sendSubtitleToContentScript(sub);
    }, delay);
    timeouts.push(timeout);
  });
}

function clearPlayback() {
  timeouts.forEach(clearTimeout);
  timeouts = [];
  console.clear();
}

function main() {
  const fileInput = document.getElementById("TULKR_fileInput");
  const playButton = document.getElementById("TULKR_playbutton");
  //   const clearBtn = document.getElementById("clearBtn");

  fileInput.addEventListener("change", handleFile);
  playButton.addEventListener("click", playSubtitles);

  // clearBtn.addEventListener("click", clearPlayback);
}

main();
