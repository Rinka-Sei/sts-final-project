// Function to perform search
function searchContent() {
    // Get search query from the input box
    var query = document.getElementById('searchBox').value.toLowerCase();

    // Get all sections with class "container"
    var sections = document.getElementsByClassName('container');

    // Container to hold matching results in the sidebar
    var sidebarResultsContainer = document.getElementById('sidebarSearchResults');

    // Clear previous results
    sidebarResultsContainer.innerHTML = '';

    // Loop through each section and check for a match
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];

        // Check if the section's content contains the search query
        if (section.innerText.toLowerCase().includes(query)) {
            // Create a link to the matched section
            var resultLink = document.createElement('a');
            resultLink.href = '#' + section.id;
            resultLink.textContent = section.querySelector('h2').textContent;

            // Attach a click event handler to smoothly scroll to the target section
            resultLink.addEventListener('click', function (event) {
                event.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                var targetSection = document.getElementById(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });

            // Append the link to the results container within the sidebar
            sidebarResultsContainer.appendChild(resultLink);
        }
    }

    // Display a message if no results found
    if (sidebarResultsContainer.children.length === 0) {
        sidebarResultsContainer.innerHTML = '<p>No results found.</p>';
    }
}
