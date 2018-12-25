var bkg = chrome.extension.getBackgroundPage()

function setInitialInputVal() {
  let emojiSizeInput = document.getElementById('emoji-size')
  bkg.console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  chrome.storage.sync.get(['emoji-size'], function(result) {
    bkg.console.log(result['emoji-size'])
    emojiSizeInput.value = result['emoji-size'] || 48
  })
}

function setInputListener() {
  let submitBtn = document.getElementById('submit-button')
  let emojiSizeInput = document.getElementById('emoji-size')
  submitBtn.onclick = function() {
    chrome.storage.sync.set({ 'emoji-size': emojiSizeInput.value }, result => {
      bkg.console.log('success update slack emoji size')
    })
  }
}

function init() {
  setInitialInputVal()
  setInputListener()
}

init()
