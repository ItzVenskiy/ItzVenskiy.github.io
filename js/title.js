var message=(message="ItzVenskiy | Главная")+" ";i="0";var temptitle="",speed="200";function titler(){(document.all||document.getElementById)&&(document.title=temptitle+message.charAt(i),temptitle+=message.charAt(i),i++,i==message.length&&(i="0",temptitle=""),setTimeout("titler()",speed))}window.onload=titler;