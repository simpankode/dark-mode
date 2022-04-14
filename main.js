// Define function
toggle = function(e) {
    const container = document.documentElement
    container.dataset.colorMode = container.dataset.colorMode === 'light' ? 'dark' : 'light'
}
  
  // Assign function
  const button = document.querySelector('#button');
  button.onclick = toggle
  
  