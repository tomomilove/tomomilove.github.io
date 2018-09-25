// Show the blog archive dropdown on click.
function showBlogArchive() {
    document.getElementById("blog-dropdown").classList.toggle("show");
    document.getElementById("blog-dropdown-button").classList.toggle("show");
}

// Close the blog archive dropdown if Tomomi clicks elsewhere on page.
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button') && !event.target.matches('.dropdown-content') && !event.target.matches('.page-link')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        var dropdownButtons = document.getElementsByClassName("dropdown-button");
        var i;
        for (i = 0; i < dropdownButtons.length; i++) {
            var openDropdownButton = dropdownButtons[i];
            if (openDropdownButton.classList.contains('show')) {
                openDropdownButton.classList.remove('show');
            }
        }
    }
}

