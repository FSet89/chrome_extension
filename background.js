// https://anobjectisa.com/?p=410

chrome.runtime.onInstalled.addListener(({ reason, version }) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    console.log("Install")
  }
});

chrome.action.onClicked.addListener((tab) => {
  console.log("click");
});



chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {


      info = get_url_info();



      chrome.storage.local.set({
          url: tab.url,
          info: info,
      }, function(){});

      chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["./content-script.js"]
      })
        .then(() => {
            console.log("INJECTED THE FOREGROUND SCRIPT.");
        })
        .catch(err => console.log(err));


    }
  }
);

function get_url_info(){
  var info = {'id':0, 'name':'bob'};
  return info
}