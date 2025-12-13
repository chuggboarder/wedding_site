  // const scrollContainer = document.getElementById('myScrollContainer');
  const scrollContainer = document.querySelector('ul');
  const tile = document.querySelector('li');
  const scrollAmount = 25; // Adjust scroll amount as needed

  tile.addEventListener('wheel', (e) => {
      tile.scrollLeft += scrollAmount;
  // e.preventDefault();
  // Scroll the container horizontally
{ passive: false } });
  
  scrollContainer.addEventListener('keydown', (event) => {

    if (event.key === 'ArrowLeft') {
      scrollContainer.scrollLeft -= scrollAmount;
      event.preventDefault(); // Prevent default browser behavior (e.g., navigating back)
    } else if (event.key === 'ArrowRight') {
      scrollContainer.scrollLeft += scrollAmount;
      event.preventDefault(); // Prevent default browser behavior
    }

  });
