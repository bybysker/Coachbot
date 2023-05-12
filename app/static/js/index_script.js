// Generate random positions for the drops within the container
function generateRandomPosition(container) {
    const containerRect = container.getBoundingClientRect();
    const dropWidth = 150; // Adjust as needed
    const dropHeight = 150; // Adjust as needed
  
    const randomLeft = Math.floor(Math.random() * (containerRect.width - dropWidth));
    const randomTop = Math.floor(Math.random() * (containerRect.height - dropHeight));
  
    return { left: randomLeft, top: randomTop };
  }
  
  // Position the drops randomly within the container
  function positionDrops() {
    const container = document.querySelector('.container');
    const drops = document.querySelectorAll('.drop');
  
    drops.forEach((drop) => {
      const { left, top } = generateRandomPosition(container);
      drop.style.left = `${left}px`;
      drop.style.top = `${top}px`;
    });
  }
  
  // Call the positionDrops function on page load
  window.addEventListener('load', positionDrops);
  