document.addEventListener('DOMContentLoaded', () => {
  // Navbar

  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Modals

  var rootEl = document.documentElement;
  var $modals = getAll('.modal');
  var $modalButtons = getAll('.modal-button');
  var $modalCloses = getAll(
    '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
  );

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function($el) {
      $el.addEventListener('click', function() {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        rootEl.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function($el) {
      $el.addEventListener('click', function() {
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', function(event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
  });

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function($el) {
      $el.classList.remove('is-active');
    });
  }

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});

function show(id) {
  document.getElementById(id).style.visibility = 'visible';
}

function hide(id) {
  document.getElementById(id).style.visibility = 'hidden';
}

function dismiss(d) {
  d.parentNode.style.display = 'none';
}
