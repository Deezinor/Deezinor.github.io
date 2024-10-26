// Function to toggle the mobile menu
function toggleMobileMenu(): void {
    const menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("active");
    } else {
        console.warn("Menu element not found");
    }
}
  
  // Function to filter the project grid based on the selected category
  const filterLinks = document.querySelectorAll<HTMLAnchorElement>('.filter-list-item a');
  
  filterLinks.forEach(filterLink => {
    filterLink.addEventListener('click', function (e: MouseEvent): void {
      e.preventDefault(); // Prevent the default link behavior
  
      const filter = this.getAttribute('data-filter'); // Get the filter value (category)
      if (!filter) {
        console.warn("Filter attribute not found");
        return;
      }
  
      console.log("Filter selected:", filter); // Log the selected filter
  
      const projects = document.querySelectorAll<HTMLElement>('.grid-item'); // Select all project items
  
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
  