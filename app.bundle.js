(()=>{var t={56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},s=[],o=0;o<t.length;o++){var d=t[o],c=r.base?d[0]+r.base:d[0],h=i[c]||0,l="".concat(c," ").concat(h);i[c]=h+1;var p=n(l),A={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(A);else{var u=a(A,r);r.byIndex=o,e.splice(o,0,{identifier:l,updater:u,references:1})}s.push(l)}return s}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var i=r(t=t||[],a=a||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var o=n(i[s]);e[o].references--}for(var d=r(t,a),c=0;c<i.length;c++){var h=n(i[c]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}i=d}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},183:(t,e,n)=>{"use strict";t.exports=n.p+"1563338dd6bda7b9cedf.png"},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(s[d]=!0)}for(var c=0;c<t.length;c++){var h=[].concat(t[c]);r&&s[h[0]]||(void 0!==i&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=i),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),a&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=a):h[4]="".concat(a)),e.push(h))}},e}},354:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},365:(t,e,n)=>{"use strict";n.d(e,{A:()=>p});var r=n(354),a=n.n(r),i=n(314),s=n.n(i),o=n(417),d=n.n(o),c=new URL(n(183),n.b),h=s()(a()),l=d()(c);h.push([t.id,`:root {\n  --board-width: 500px;\n  --board-cell-width: 8;\n}\n\n* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  line-height: 1.5rem;\n}\n\nbody {\n  /* background-color: grey; */\n  background: url(${l});\n  height: 100vh;\n}\n\nbody > div {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nbody > div > div {\n  width: 1200px;\n  height: 840px;\n  padding: 40px;\n\n  border-radius: 20px;\n  background-color: rgb(0 0 0 / 0.5);\n  text-align: center;\n\n  color: white;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\n.winnerBanner {\n  font-size: 3rem;\n  margin-top: 40px;\n}\n\n.gameboard {\n  border: solid 1px black;\n  width: var(--board-width);\n  height: 500px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboardHeaders {\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  font-size: 1.4rem;\n}\n\n.boardsDiv {\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n}\n\n.gameboardRow {\n  flex-grow: 1;\n  display: flex;\n}\n\n.gameboardCell {\n  border: solid 1px black;\n  width: calc(var(--board-width) / var(--board-cell-width));\n  color: white;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1.4rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.gameboardCellComputer:hover {\n  border: solid 1px red;\n}\n\n.noInteraction {\n  background-color: blue;\n}\n\n.playerBattleship {\n  background-color: green;\n}\n\n.hit {\n  background-color: red;\n}\n\n.sunk {\n  background-color: black;\n}\n\nbutton {\n  border: none;\n  margin-top: 20px;\n  width: 100px;\n  height: 40px;\n  border-radius: 20px;\n  font-size: 1.2rem;\n}\n\nbutton:hover {\n  background-color: lightgray;\n}\n`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;EAC5B,mDAAmC;EACnC,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;;EAEb,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;;EAElB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,aAAa;;EAEb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,yDAAyD;EACzD,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;;EAEjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;AAC7B",sourcesContent:[":root {\n  --board-width: 500px;\n  --board-cell-width: 8;\n}\n\n* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  line-height: 1.5rem;\n}\n\nbody {\n  /* background-color: grey; */\n  background: url(./assets/ocean.png);\n  height: 100vh;\n}\n\nbody > div {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nbody > div > div {\n  width: 1200px;\n  height: 840px;\n  padding: 40px;\n\n  border-radius: 20px;\n  background-color: rgb(0 0 0 / 0.5);\n  text-align: center;\n\n  color: white;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\n.winnerBanner {\n  font-size: 3rem;\n  margin-top: 40px;\n}\n\n.gameboard {\n  border: solid 1px black;\n  width: var(--board-width);\n  height: 500px;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboardHeaders {\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  font-size: 1.4rem;\n}\n\n.boardsDiv {\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n}\n\n.gameboardRow {\n  flex-grow: 1;\n  display: flex;\n}\n\n.gameboardCell {\n  border: solid 1px black;\n  width: calc(var(--board-width) / var(--board-cell-width));\n  color: white;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1.4rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.gameboardCellComputer:hover {\n  border: solid 1px red;\n}\n\n.noInteraction {\n  background-color: blue;\n}\n\n.playerBattleship {\n  background-color: green;\n}\n\n.hit {\n  background-color: red;\n}\n\n.sunk {\n  background-color: black;\n}\n\nbutton {\n  border: none;\n  margin-top: 20px;\n  width: 100px;\n  height: 40px;\n  border-radius: 20px;\n  font-size: 1.2rem;\n}\n\nbutton:hover {\n  background-color: lightgray;\n}\n"],sourceRoot:""}]);const p=h},417:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},522:t=>{t.exports=class{constructor(t){this.length=t,this.timesHit=0,this.sunk=!1}hit(){this.timesHit+=1}isSunk(){return this.timesHit>=this.length}}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var t=n(72),e=n.n(t),r=n(825),a=n.n(r),i=n(659),s=n.n(i),o=n(56),d=n.n(o),c=n(540),h=n.n(c),l=n(113),p=n.n(l),A=n(365),u={};u.styleTagTransform=p(),u.setAttributes=d(),u.insert=s().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=h(),e()(A.A,u),A.A&&A.A.locals&&A.A.locals;var m=n(522),g=n.n(m);const b=class{width=8;height=8;numberOfShips=4;shipsSunk=0;board=[];constructor(){for(let t=0;t<this.height;t++){this.board[t]=[];for(let e=0;e<this.width;e++)this.board[t][e]={ship:null,display:"O"}}const t=this.createShips(this.numberOfShips);this.placeShips(t)}createShips(t){const e=[];for(let n=0;n<t;n++){let t=new(g())(n+2);e.push(t)}return e}placeShips(t){t.forEach(((t,e)=>{let n=this.getRandomInt(this.width),r=this.getRandomInt(this.height),a=this.getRandomInt(2);for(;;)if(0===a)if(n+t.length>this.width-1)n=this.getRandomInt(this.width),r=this.getRandomInt(this.height);else{let e=!1,a=n;for(let i=0;i<t.length;i++)null!==this.board[r][a].ship&&(e=!0,n=this.getRandomInt(this.width),r=this.getRandomInt(this.height)),a++;if(!e){for(let e=0;e<t.length;e++)this.board[r][n].ship=t,n++;break}}else if(1===a)if(r+t.length>this.height-1)n=this.getRandomInt(this.width),r=this.getRandomInt(this.height);else{let e=!1,a=r;for(let i=0;i<t.length;i++)null!==this.board[a][n].ship&&(e=!0,n=this.getRandomInt(this.width),r=this.getRandomInt(this.height)),a++;if(!e){for(let e=0;e<t.length;e++)this.board[r][n].ship=t,this.board[r][n].display="O",r++;break}}}))}getRandomInt(t){return Math.floor(Math.random()*t)}receiveAttack(t,e){return null===this.board[t][e].ship?(this.board[t][e].display="M",!1):(this.board[t][e].display="H",this.board[t][e].ship.hit(),!this.board[t][e].ship.isSunk()||(this.shipsSunk++,this.updateForSunkShips(),!0))}updateForSunkShips(){for(let t=0;t<this.height;t++)for(let e=0;e<this.width;e++)null!==this.board[t][e].ship&&this.board[t][e].ship.isSunk()&&(this.board[t][e].display="S")}checkForAllShipsSunk(){return this.shipsSunk===this.numberOfShips}printBoardDisplayHelper(){const t=[];for(let e=0;e<this.height;e++){t[e]=[];for(let n=0;n<this.width;n++)t[e][n]=this.board[e][n].display}}},f=class{attacks=[];surroundingAttacks=[];prevAttack=[];prevAttackHit=!1;constructor(t){this.name=t,this.gameboard=new b,this.generateAllAttacks()}receiveAttack(t,e){return!!this.gameboard.receiveAttack(t,e)}generateAllAttacks(){const t=[];for(let e=0;e<this.gameboard.width;e++)for(let n=0;n<this.gameboard.width;n++)t.push([n,e]);this.shuffle(t),this.attacks=t}shuffle(t){let e=t.length;for(;0!=e;){let n=Math.floor(Math.random()*e);e--,[t[e],t[n]]=[t[n],t[e]]}}generateAttack(){let t=null;if(0!==this.surroundingAttacks.length)for(let t=0;t<this.surroundingAttacks.length;t++){let e=this.surroundingAttacks[t][0],n=this.surroundingAttacks[t][1];"H"!==this.gameboard.board[e][n].display&&"S"!==this.gameboard.board[e][n].display||this.surroundingAttacks.splice(t,1)}if(this.prevAttackHit){let e=this.generateValidAttacks();if(this.surroundingAttacks=[...this.surroundingAttacks,...e],0!==this.surroundingAttacks.length){t=this.surroundingAttacks.pop();for(let e=0;e<this.attacks.length;e++)t[0]===this.attacks[e][0]&&t[1]===this.attacks[e][1]&&this.attacks.splice(e,1);return t}}else if(0!==this.surroundingAttacks.length){t=this.surroundingAttacks.pop();for(let e=0;e<this.attacks.length;e++)t[0]===this.attacks[e][0]&&t[1]===this.attacks[e][1]&&this.attacks.splice(e,1);return t}return this.attacks.pop()}generateValidAttacks(){let[t,e]=this.prevAttack;return[[1,0],[-1,0],[0,1],[0,-1]].map((([n,r])=>[n+t,r+e])).filter((([t,e])=>t>=0&&t<this.gameboard.width&&e>=0&&e<this.gameboard.width)).filter((([t,e])=>"O"===this.gameboard.board[t][e].display||"B"===this.gameboard.board[t][e].display))}getRandomInt(t){return Math.floor(Math.random()*t)}};new class{constructor(){this.p1=new f("Player"),this.computer=new f("Computer"),this.gameOver=!1,this.winnerBanner=null,this.boardWidth=this.p1.gameboard.width,this.boardHeight=this.p1.gameboard.height,this.gameBoardsDiv=null,this.gameboarder=document.querySelector("body > div > div"),this.createBoardDisplay()}createBoardDisplay(){this.gameboarder.textContent="",this.createBoardHeaders();const t=document.createElement("div");t.classList.add("boardsDiv"),t.append(this.createGameboardDisplay(this.p1)),t.append(this.createGameboardDisplay(this.computer)),this.gameboarder.append(t),this.createResetButton(),this.createWinningBanner(),this.gameBoardsDiv=t}createBoardHeaders(){const t=document.createElement("h1");t.textContent="Battleship",this.gameboarder.append(t);const e=document.createElement("div");e.classList.add("gameboardHeaders");const n=document.createElement("h2");n.textContent=this.p1.name+"s Board";const r=document.createElement("h2");r.textContent=this.computer.name+"s Board",e.append(n),e.append(r),this.gameboarder.append(e)}createGameboardDisplay(t){const e=document.createElement("div");e.classList.add("gameboard");for(let n=0;n<this.boardHeight;n++){const r=document.createElement("div");r.classList.add("gameboardRow"),e.append(r);for(let e=0;e<this.boardWidth;e++){"Computer"!==t.name&&this.markPlayersShipLocations(t,n,e);const a=document.createElement("div");a.textContent=t.gameboard.board[n][e].display,"Computer"===t.name&&this.createComputersGameboardCell(t,a,n,e),this.updateCellColor(a,t.gameboard.board[n][e].display),a.classList.add("gameboardCell"),r.append(a)}}return e}markPlayersShipLocations(t,e,n){"H"!==t.gameboard.board[e][n].display&&"S"!==t.gameboard.board[e][n].display&&null!==t.gameboard.board[e][n].ship&&(t.gameboard.board[e][n].display="B")}createComputersGameboardCell(t,e,n,r){e.classList.add("gameboardCellComputer"),"O"!==t.gameboard.board[n][r].display&&"T"!==t.gameboard.board[n][r].display||this.gameOver||e.addEventListener("click",(()=>{this.playGame(t,n,r)}))}createResetButton(){const t=document.createElement("button");t.textContent="Reset",t.addEventListener("click",(()=>{this.p1=new f("Player"),this.computer=new f("Computer"),this.gameOver=!1,this.winnerBanner.textContent="",this.updateBoardDisplay()})),this.gameboarder.append(t)}createWinningBanner(){const t=document.createElement("h2");t.classList.add("winnerBanner"),this.gameboarder.append(t),this.winnerBanner=t}updateCellColor(t,e){"O"===e||"T"===e?t.classList.add("noInteraction"):"B"===e?t.classList.add("playerBattleship"):"H"===e?(t.classList.remove("noInteraction"),t.classList.remove("playerBattleship"),t.classList.add("hit")):"S"===e&&(t.classList.remove("noInteraction"),t.classList.remove("playerBattleship"),t.classList.remove("hit"),t.classList.add("sunk"))}playGame(t,e,n){t.gameboard.receiveAttack(e,n);let r=this.checkForWinner();if(!r){let[t,e]=this.p1.generateAttack(),n=this.p1.receiveAttack(t,e);this.p1.prevAttackHit=!!n,this.p1.prevAttack=[t,e]}r=this.checkForWinner(),"p1"===r?(this.winnerBanner.textContent="Player Wins",this.gameOver=!0,document.createElement("h2").textContent="Player Wins"):"computer"===r&&(this.winnerBanner.textContent="Computer Wins",this.gameOver=!0),this.updateBoardDisplay()}updateBoardDisplay(){this.gameBoardsDiv.textContent="",this.gameBoardsDiv.append(this.createGameboardDisplay(this.p1)),this.gameBoardsDiv.append(this.createGameboardDisplay(this.computer))}checkForWinner(){return this.p1.gameboard.checkForAllShipsSunk()?"computer":this.computer.gameboard.checkForAllShipsSunk()?"p1":null}}})()})();
//# sourceMappingURL=app.bundle.js.map