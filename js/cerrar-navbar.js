var items = document.querySelectorAll('.navbar-nav .nav-link');
items.forEach(function(item) {
item.addEventListener('click', function() {
    var navbar = document.querySelector('.navbar-collapse');
    var bsCollapse = new bootstrap.Collapse(navbar);
    bsCollapse.hide();
});
});
