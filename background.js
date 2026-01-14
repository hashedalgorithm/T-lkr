console.log("Worker loaded");

chrome.action.onClicked.addListener((tab) => {
  console.log(tab.title);
  console.log("Hellooo");
});
