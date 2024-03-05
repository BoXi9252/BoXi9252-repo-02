



document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const h1 = document.querySelector('h1');
    const btn_login = document.querySelector('.btn-login');

    btn_login.addEventListener('click', function () {
        // 隐藏表单 hide the form
        form.style.display = 'none';
        // 显示登录成功的消息：show login successful
        h1.textContent = 'Login Successful!';
        // 添加成功类名以触发样式变化
        document.querySelector('.container').classList.add('success');
    });
});
