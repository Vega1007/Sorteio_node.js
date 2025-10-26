// public/js/script.js
window.addEventListener('DOMContentLoaded', () => {
    const successMsg = document.querySelector('.success');
    const errorMsg = document.querySelector('.error');

    if (successMsg) {
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 2000);
    }

    if (errorMsg) {
        // Já são exibidos apenas quando existe
    }
});
