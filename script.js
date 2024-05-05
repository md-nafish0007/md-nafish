// Existing JavaScript code
// ...

// Add this to your JavaScript file
const cursorTrail = document.getElementById('cursorTrail');
const positions = [];
const trailLength = 20; // Adjust this for longer/shorter trail

document.addEventListener('mousemove', e => {
  // Add current position to the start of the array
  positions.unshift({ x: e.pageX, y: e.pageY });
  
  // Remove old positions
  while (positions.length > trailLength) {
    positions.pop();
  }
  
  // Remove old cursors
  while (cursorTrail.firstChild) {
    cursorTrail.firstChild.remove();
  }
  
  // Add a cursor for each position
  positions.forEach((pos, index) => {
    const div = document.createElement('div');
    div.classList.add('cursor');
    div.style.backgroundColor = 'white';
    div.style.left = pos.x + 'px';
    div.style.top = pos.y + 'px';
    div.style.transform = `scale(${(trailLength - index) / trailLength})`;
    div.style.opacity = ((trailLength - index) / trailLength) * 0.5; // Adjust this for more/less opacity
    cursorTrail.appendChild(div);
  });
});