# Project--Background Animations for Login page:
My project is a simple login page, it contains an account name input form, a password input form ,and a login button.
The CSS defines a background square animation using the @keyframes square rule. This animation moves the background square from the bottom to the top and rotates it when it reaches the top. Therefore, we will see the background square animation when the page loads.
```css
/* CSS code examples */
.bg-squares li {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.15);
    position: absolute;
    bottom: -160px;
    animation: square 20s linear infinite;
}

/* Set a different position,size,animation delay time,
animation duration,and background color for each square */
.bg-squares li:nth-child(1) {
    left: 10%;
}

.bg-squares li:nth-child(2) {
    left: 20%;
    width: 80px;
    height: 80px;
    /* animation delay */
    animation-delay: 2s;
    /* animatiion duration  */
    animation-duration: 17s;
}

.bg-squares li:nth-child(3) {
    left: 25%;
    animation-delay: 4s;
}

.bg-squares li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.25);
    animation-duration: 22s;
}

.bg-squares li:nth-child(5) {
    left: 70%;
}

.bg-squares li:nth-child(6) {
    left: 80%;
    width: 120px;
    height: 120px;
    background-color: rgba(255, 255, 255, 0.2);
    animation-delay: 3s;
}

.bg-squares li:nth-child(7) {
    left: 32%;
    width: 160px;
    height: 160px;
    animation-delay: 7s;
}

.bg-squares li:nth-child(8) {
    left: 55%;
    width: 20px;
    height: 20px;
    animation-delay: 15s;
    animation-duration: 40s;
}

.bg-squares li:nth-child(9) {
    left: 25%;
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    animation-delay: 2s;
    animation-duration: 40s;
}

.bg-squares li:nth-child(10) {
    left: 90%;
    width: 160px;
    height: 160px;
    animation-delay: 11s;
}

.container.success h1 {
    transform: translateY(75px);
}

.container.success .form {
    opacity: 0;
    visibility: hidden;
}

/* animation */
@keyframes square {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-120vh) rotate(600deg);
    }
}
```
There is another aimation in my project: click the login button ,the text'welcome' and the input form will be hidden ,and the text"login successfully!" will show.
```javascript
// JavaScript code example
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const h1 = document.querySelector('h1');
    const btn_login = document.querySelector('.btn-login');

    btn_login.addEventListener('click', function () {
        //  hide the form
        form.style.display = 'none';
        // show login successful
        h1.textContent = 'Login Successful!';
        // success class name
        document.querySelector('.container').classList.add('success');
    });
});
```
# Instructions of pushing my project to Github:

1. Create a new repository on GitHub,named ‘BoXi9252-repo-02’;
2. Confirm my project directory ：assignment-3 folder in JavaScript Basics folder;
3. Connect the local project to the GitHub repo:
    * Open the project folder 'assignment-3'in VSCode, right click to open the Terminal, now I am in the right directory.
    * Initial the Git repo:git init;
    * Stage the changes:git add. ;
    * Commit these changes and push them to the remote GitHub repo:git push origin main;
# References:
Click [here](https://github.com/BoXi9252/BoXi9252-repo-02) to check my project.
Click [My login demo](http://127.0.0.1:5500/assignment/assignment-3/LOG%20IN.html)to test the application.
