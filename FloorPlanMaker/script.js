// Select elements
const grid = document.getElementById('grid');
const blockDimensions = document.getElementById('block-dimensions');
const block = document.getElementById('block');
const addBlockButton = document.getElementById('add-block-button');

// Variables to store block position and dimensions
let blockX = 0;
let blockY = 0;
let blockWidth = 50;
let blockHeight = 50;

// Function to create a new block element
function createBlock() {
  const newBlock = document.createElement('div');
  newBlock.className = 'block';
  newBlock.style.width = blockWidth + 'px';
  newBlock.style.height = blockHeight + 'px';
  newBlock.style.left = blockX + 'px';
  newBlock.style.top = blockY + 'px';
  grid.appendChild(newBlock);
}

// Function to add block to the grid
function addBlockToGrid() {
  // Reset block position
  blockX = Math.floor((grid.offsetWidth - blockWidth) / 2);
  blockY = Math.floor((grid.offsetHeight - blockHeight) / 2);
  // Update block dimensions in UI
  blockDimensions.textContent = blockWidth + ' x ' + blockHeight;
  // Create and add block to the grid
  createBlock();
}

// Event listeners for block size inputs
document.getElementById('width-input').addEventListener('input', function() {
  blockWidth = parseInt(this.value);
});
document.getElementById('height-input').addEventListener('input', function() {
  blockHeight = parseInt(this.value);
});

// Event listener for add block button
addBlockButton.addEventListener('click', addBlockToGrid);

// Event listeners for block movement
let activeBlock = null;
let initialX = null;
let initialY = null;

function dragStart(e) {
  activeBlock = e.target;
  initialX = e.clientX - blockX;
  initialY = e.clientY - blockY;
}

function dragEnd() {
  activeBlock = null;
}

function drag(e) {
  if (activeBlock) {
    e.preventDefault();
    blockX = e.clientX - initialX;
    blockY = e.clientY - initialY;
    activeBlock.style.left = blockX + 'px';
    activeBlock.style.top = blockY + 'px';
  }
}

grid.addEventListener('mousedown', dragStart);
grid.addEventListener('mouseup', dragEnd);
grid.addEventListener('mousemove', drag);

const blocks = [];

function addBlockToGrid() {
  // Reset block position
  blockX = Math.floor((grid.offsetWidth - blockWidth) / 2);
  blockY = Math.floor((grid.offsetHeight - blockHeight) / 2);
  // Update block dimensions in UI
  blockDimensions.textContent = blockWidth + ' x ' + blockHeight;
  // Create and add block to the grid
  const newBlock = createBlock();
  blocks.push(newBlock);
}
