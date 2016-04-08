/*
 * lgtm - popup.js
 * Copyright(c) 2016 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

const el = document.getElementById('lgtm')
let json = null

const sendMsg = (msg) => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, msg, function (res) {
      window.close()
    })
  })
}

const loadImg = (cb) => {
  el.parentElement.className = "loader"

  var xhr = new XMLHttpRequest()

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      json = JSON.parse(this.responseText)
      el.src = json.actualImageUrl
      el.className = ""
    }
    el.parentElement.className = ""
  })

  xhr.open("GET", "http://www.lgtm.in/g", true)
  xhr.setRequestHeader("accept", "application/json")
  xhr.setRequestHeader("content-type", "application/json")
  xhr.setRequestHeader("cache-control", "no-cache")

  xhr.send()
}

const onClick = (e) => {
  sendMsg({img: `[![LGTM](${json.actualImageUrl})](${json.actualImageUrl})`})
}

el.addEventListener('click', onClick)

loadImg()
