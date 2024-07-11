document.addEventListener('DOMContentLoaded', function () {
  const mainText = document.querySelector('.main-text');
  const textOriginal = document.querySelector('.text-original');
  const textHover = document.querySelector('.text-hover');
  const candidText = document.querySelector('.candid-text');
  const seriousCheckbox = document.getElementById('ch1');
  const candidTextSpans = candidText.querySelectorAll('span');
  let isClicked = false;
  let currentTextIndex = 0;
  let loopInterval;

  if (seriousCheckbox.checked) {
    candidText.classList.add('hidden');
        mainText.style.display = 'block';
        mainText.style.opacity = 1;
        stopCandidTextLoop();
    } else {
        mainText.style.display = 'none';
        candidText.classList.remove('hidden');
        startCandidTextLoop();
    }

  function fadeOut(element, callback) {
      element.style.opacity = 1;
      (function fade() {
          if ((element.style.opacity -= 0.02) < 0) {
              element.style.display = 'none';
              callback();
          } else {
              requestAnimationFrame(fade);
          }
      })();
  }

  function fadeIn(element, callback) {
      element.style.opacity = 0;
      element.style.display = 'block';
      (function fade() {
          let val = parseFloat(element.style.opacity);
          if (!((val += 0.02) > 1)) {
              element.style.opacity = val;
              requestAnimationFrame(fade);
          } else {
              callback();
          }
      })();
  }

  function showNextCandidText() {
      const currentText = candidTextSpans[currentTextIndex];
      fadeIn(currentText, function () {
          setTimeout(function () {
              fadeOut(currentText, function () {
                  currentTextIndex = (currentTextIndex + 1) % candidTextSpans.length;
                  showNextCandidText();
              });
          }, 3000); // Delay before fading out (adjust as needed)
      });
  }

  function startCandidTextLoop() {
      showNextCandidText();
  }

  function stopCandidTextLoop() {
      candidTextSpans.forEach(function (text) {
          text.style.display = 'none';
      });
      currentTextIndex = 0;
  }

  mainText.addEventListener('click', function () {
      if (!isClicked) {
          fadeOut(textOriginal, function () {
              fadeIn(textHover);
              isClicked = true;
          });
      } else {
          fadeOut(textHover, function () {
              fadeIn(textOriginal);
              isClicked = false;
          });
      }
  });

  seriousCheckbox.addEventListener('change', function () {
      if (seriousCheckbox.checked) {
        stopCandidTextLoop();
        candidText.classList.add('hidden');
        fadeIn(mainText);
      } else {
          fadeOut(mainText, function () {
            candidText.classList.remove('hidden');
            startCandidTextLoop();
        });
      }
  });
});