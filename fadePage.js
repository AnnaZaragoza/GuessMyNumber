"strict mode";

function fadeInPage() {
  if (!window.AnimationEvent) {
    return;
  }

  var fader = document.getElementById('fader-page');
  fader.classList.add('fade-out');
}

fadeInPage();
