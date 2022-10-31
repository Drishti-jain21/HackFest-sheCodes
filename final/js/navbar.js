const showPopUp = () => {
    const popup = document.getElementById("PopUp");
    setTimeout(() => {
      popup.style.display = "flex";
    }, 1000);
  };
  
  const toggle = () => {
    const popup = document.getElementById("PopUp");
    console.log(popup);
    popup.style.display = "none";
  };
  
  showPopUp();
  
  window.onload = function () {
    window.addEventListener("scroll", function (e) {
      let s = this.scrollY;
      let w = this.outerWidth;
      let h = document.getElementsByClassName("paralax")[0].clientWidth;
      let h_b = document.getElementsByClassName("container")[0].clientWidth;
      let p = (s / h) * 100;
      let p_b = (s / h_b) * 100;
      let opas = 1 - (1 / 100) * p_b;
      let z_1 = 1 + (w / 10000) * p_b;
      document.getElementsByClassName(
        "p-item4"
      )[0].style = `transform: scale(${z_1});opacity: ${opas}`;
      let z_2 = 1 + (w / 5000000) * p;
      document.getElementsByClassName(
        "p-item1"
      )[0].style = `transform: scale(${z_2})`;
      let hr = (w / 2000) * p_b;
      let z_3 = 1 + w * 0.000005 * p_b;
      document.getElementsByClassName(
        "p-item2"
      )[0].style = `transform: translate3d(${hr}px,0,0) scale(${z_3})`;
      let hr_2 = (w / 1500) * p_b;
      let z_4 = 1 + w * 0.00001 * p_b;
      document.getElementsByClassName(
        "p-item3"
      )[0].style = `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;
    });
  };
  
  var words = ["INNERVE'22"];
  var letters = "abcdefghijklmnopqrstuvwxyz#%&^+=-",
    speed = 250,
    steps = 4,
    loader = document.querySelector("#loader");
  
  function getRandomWord() {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
  }
  function getRandomLetter() {
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    return randomLetter;
  }
  
  function randomWordLoop() {
    var word = getRandomWord();
    var textLength = word.length;
    for (var i = 0; i < textLength; i++) {
      (function (i, word) {
        letterAppear(i, word);
      })(i, word);
    }
  
    function letterAppear(i, word) {
      setTimeout(function () {
        randomLetters(i, word);
      }, speed * i);
    }
  
    function randomLetters(i, word) {
      for (var j = 0; j <= steps; j++) {
        charsAnim(i, word, j);
      }
    }
  
    function charsAnim(i, word, j) {
      setTimeout(function () {
        var count = j;
        if (j < steps) {
          randomChar(i, word, count, j);
        } else {
          goodChar(i, word, count, j);
        }
        /* seems it fails less if I divide j, don't know why */
        /*}, (speed/steps)*(j / 1.8));*/
      }, (speed / steps) * j - speed / steps);
    }
  
    function randomChar(i, word, count, j) {
      var letter = getRandomLetter();
      if (j > 0) {
        var oldText = loader.textContent.slice(0, -1);
      } else {
        var oldText = loader.textContent;
      }
      loader.textContent = oldText + letter;
    }
    function goodChar(i, word, count, j) {
      var oldText = loader.textContent.slice(0, -1);
      loader.textContent = oldText + word[i];
      if (i == textLength - 1) {
        removeWord();
      }
    }
  
    function removeWord() {
      setTimeout(function () {
        for (var k = 0; k < textLength; k++) {
          removeLetters(k);
        }
      }, speed * 2);
    }
    function removeLetters(k) {
      setTimeout(function () {
        removeLetter(k);
      }, 75 * k);
    }
    function removeLetter(k) {
      var actualText = loader.textContent.slice(0, -1);
      loader.textContent = actualText;
      if (k == textLength - 1) {
        randomWordLoop();
      }
    }
  }
  
  randomWordLoop();
  