// JavaScript interprets registered events as event objects with properties and methods. When you create an event handler function on a specific event, you create a property of the event object.
// An event handler function is registered as a property attached to the DOM element being interacted with, or the event target. 

// let before = document.querySelector('.before');
// let after = document.querySelector('.after');
// let readMore = document.querySelector('.read-more');
// let readLess = document.querySelector('.read-less');

// readMore.onclick = () => {
//     before.style.display = 'none';
//     after.style.display = 'block';
// };
// readLess.onclick = () => {
//     before.style.display = 'block';
//     after.style.display = 'none';
// };
// =========================================================
// EVENT LISTENER
// let view = document.getElementById('view-button');
// let close = document.getElementById('close-button');
// let codey = document.getElementById('codey');
// let open = function() {
//   codey.style.display = 'block';
//   close.style.display = 'block';
// };
// let hide = function() {
//   codey.style.display = 'none';
//   close.style.display = 'none';
// };
// view.onclick = open;
// close.onclick = hide;
// const textChange = () => {
//   view.innerHTML = 'Hello, World!';
// };
// const textReturn = () => {
//   view.innerHTML = 'View';
// };
// view.addEventListener('click', textChange);
// close.addEventListener('click', textReturn);
//========================================================
