/*
 * lgtm - content.js
 * Copyright(c) 2016 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict'

chrome.runtime.onMessage.addListener((req, sender, res) => {
  document.getElementById('new_comment_field').textContent = req.img
  res()
})
