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


resizeEmoji(128)