var hold;function blinkTitle(t){t||(t={});var e=t.delay||0,n=t.message||"",i=t.notifyOffPage||!1,l=t.timeout||!1,o=t.title||document.title;function u(){document.title===o?document.title=n:document.title=o}hold=i?setInterval((function(){document.hidden&&u()}),e):setInterval((function(){u()}),e),l&&setTimeout(blinkTitleStop,l)}function blinkTitleStop(){clearInterval(hold)}module.exports=blinkTitle;