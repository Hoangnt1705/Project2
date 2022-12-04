//toast
function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        //auto remove toast
        const autoRemovedId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
        //remove toast when click
        toast.onclick = function (e) {
            if (e.target.closest('.toast_close')) {
                main.removeChild(toast);
                clearTimeout(autoRemovedId);
            }
        }
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-check',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-exclamation',
        }
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast', `toast-${type}`)
        toast.style.animation = `slineInleft ease 1s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = ` <div class="toast_icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast_body"> 
            <h3 class="toast_title"> ${title}</h3>
            <p class="toast_msg">${message}</p>
        </div>
        <div class="toast_close">
            <i class="fa-sharp fa-solid fa-circle-xmark"></i>
        </div>`;
        main.appendChild(toast);
    }
}
function showDaCoSanPhamTrongGioHang() {
    toast({
        title: 'Lưu ý',
        message: 'Sản phẩm này đã có trong giỏ hàng',
        type: 'warning',
        duration: 3000
    });
}
function showSuccessToast() {
    toast({
        title: 'thành công',
        message: 'Máy vi tính ok ok ok',
        type: 'success',
        duration: 3000
    });
}
function showThemGioHang() {
    toast({
        title: 'Thành Công',
        message: 'Bạn đã thêm thành công 1 sản phẩm',
        type: 'success',
        duration: 3000
    });
}
let showVeriEmail = () => {
    toast({
        title: 'Thất bại',
        message: 'Bạn cần xác thực tài khoản tại email của bạn',
        type: 'warning',
        duration: 3000
    })
}
let showChangePassword = (text) => {
    toast({
        title: 'Thất bại',
        message: text,
        type: 'warning',
        duration: 3000
    })
}