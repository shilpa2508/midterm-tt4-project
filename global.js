import * as bootstrap from "bootstrap";
import './global.scss';

document.addEventListener("DOMContentLoaded", () => {
    const dropdownList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownList.forEach(dropdownEl => {
        new bootstrap.Dropdown(dropdownEl);
    });

    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});
