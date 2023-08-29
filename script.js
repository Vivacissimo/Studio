const menuBtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');

// Adding Event Listner to menu btn
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('showSidebar');
    console.log('clicked');
});

// Adding Event Listner to document
document.addEventListener('mouseup', (e) => {
    if (!sidebar.contains(e.target)){
        sidebar.classList.remove('showSidebar');
    }
});