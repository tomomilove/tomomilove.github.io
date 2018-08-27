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

function searchResults() {
    var cx = '005232764583077479877:w75dvueircq';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
}

function executeQuery() {
    var input = document.getElementById('cse-search-input-box-id');
    if (input.value != '') {
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host;
        // window.open(baseUrl + "/search_results/?q=" + input.value);
        window.open("/search_results/?q=" + input.value, "_self");
    }
    // var element = google.search.cse.element.getElement('searchresults-only0');
    // if (input.value == '') {
      // element.clearAllResults();
    // } else {
      // element.execute(input.value);
    // }
    // return false;
  }
