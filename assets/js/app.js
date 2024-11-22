
const openSidebarButton = document.getElementById('open-sidebar');
const closeSidebarButton = document.getElementById('close-sidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

openSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.add('show');
});

closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.remove('show');
});
 

// Clicking on overlay is closing side bar

overlay.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.remove('show');
});