chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: '#3aa757' }, function() {
    console.log('The color is green.')
  })

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.google.com' }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ])
  })
})

function loadScript(scriptFileName, tabId, callback) {
  chrome.tabs.executeScript(tabId, {
    file: `/js/${scriptFileName}.js`,
    runAt: 'document_end',
    callback
  })
}

const allowURL = /http*slack.com*/
chrome.webNavigation.onCompleted.addListener(
  () => {
    //   if (!tab.url.match(arrowURL)) {
    //     console.log('the url did not match: ' + tab.url)
    //     return
    //   }
    console.log(
      'this page is load completed~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
    )
    chrome.tabs.query({ currentWindow: true, active: true }, function(
      tabArray
    ) {
      loadScript('resize-emoji', tabArray[0].id, () => {
        console.log('injdect js file successly')
      })
    })
  },
  { url: [{ urlMatches: 'https://www.google.com/' }] }
)

chrome.runtime.onMessage.addListener(function(message, callback) {
    if (message == "changeColor"){
      chrome.tabs.executeScript({
        file: 'resize-emoji.js'
      });
    }
 })
