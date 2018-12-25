function resizeEmoji(size) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  var styleCode = `
        .emoji.emoji-sizer.emoji-only{
            font-size: ${size}px;
        }
    `
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = styleCode
  } else {
    styleElement.appendChild(document.createTextNode(styleCode))
  }
  document.getElementsByTagName('head')[0].appendChild(styleElement)
}

chrome.storage.sync.get(['emoji-size'], function(result) {
  var size = result['emoji-size'] || 48
  resizeEmoji(size)
})
