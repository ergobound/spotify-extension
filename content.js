// window.onload = function () {
//     document.querySelectorAll('*').forEach(el => el.style.webkitUserSelect = 'text');
//     document.querySelectorAll('*').forEach(el => el.style.userSelect = 'text');
// };
// или document.onload = function ...

window.onload = (event) => {
    document.querySelectorAll('*').forEach(el => el.style.webkitUserSelect = 'text');
    document.querySelectorAll('*').forEach(el => el.style.userSelect = 'text');
};

const observer = new MutationObserver((mutations) => {
    applyStylesToAllElements();
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true
});

function applyStylesToAllElements() {
    document.querySelectorAll('*').forEach(el => {
        el.style.webkitUserSelect = 'text';
        el.style.userSelect = 'text'
    });
}
