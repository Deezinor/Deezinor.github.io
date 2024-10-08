// Function to toggle the mobile menu
function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// Function to filter the project grid based on the selected category
document.querySelectorAll('.filter-list-item a').forEach(filterLink => {
  filterLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior

    const filter = this.getAttribute('data-filter'); // Get the filter value (category)
    console.log("Filter selected:", filter); // Log the selected filter

    const projects = document.querySelectorAll('.grid-item'); // Select all project items

    // Loop through all projects and show/hide based on the selected filter
    projects.forEach(project => {
      if (filter === 'all') {
        project.style.display = 'block'; // Show all projects when "All" is selected
      } else if (project.classList.contains(filter)) {
        project.style.display = 'block'; // Show projects that match the selected category
      } else {
        project.style.display = 'none'; // Hide projects that don't match the selected category
      }
    });
  });
});

