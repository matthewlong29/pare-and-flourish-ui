document.addEventListener('DOMContentLoaded', () => {
  // get all "navbar-burger" elements
  let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // get the target from the "data-target" attribute
        let target = $el.dataset.target;
        let $target = document.getElementById(target);
        // toggle the className on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      })
    })
  }
});
