const view = {};
var app = document.getElementById("app");
// đây là function toastComfirm
view.toastComfirm = (id, valueAtribute, idTitlePopUpVerifyError, valueTitlePopUpVerifyError, idAttributeText, valueAtributeText, idMenubarWillHidden, valueHidden) => {
    let infoPopupError = document.getElementById("infoPopup");
    infoPopupError.className = "error";
    document.getElementById(idMenubarWillHidden).style.zIndex = valueHidden;
    let taskLoginComfirm = document.getElementById(id);
    taskLoginComfirm.className = valueAtribute;
    let titlePopUpVerifyError = document.getElementById(idTitlePopUpVerifyError);
    titlePopUpVerifyError.innerHTML = valueTitlePopUpVerifyError;
    let textPopUpError = document.getElementById(idAttributeText);
    textPopUpError.innerHTML = valueAtributeText;
    return;
};
view.toastComfirmSuccess = (id, valueAtribute, idTitlePopUpVerifySuccess, valueTitlePopUpVerifySuccess, idAttributeText, valueAtributeText, idMenubarWillHidden, valueHidden) => {
    let infoPopupSuccess = document.getElementById("infoPopup");
    infoPopupSuccess.className = "success";
    document.getElementById(idMenubarWillHidden).style.zIndex = valueHidden;
    let taskLoginComfirm = document.getElementById(id);
    taskLoginComfirm.className = valueAtribute;
    let titlePopUpVerifySuccess = document.getElementById(idTitlePopUpVerifySuccess);
    titlePopUpVerifySuccess.innerHTML = valueTitlePopUpVerifySuccess;
    let textPopUpError = document.getElementById(idAttributeText);
    textPopUpError.innerHTML = valueAtributeText;
    return;
};
view.buttonVerify = (idVerify, attribute, valueVerify) => {
    document.getElementById(idVerify).setAttribute(attribute, valueVerify);
    return;
};
view.ErrorMessages = (index, value) => {
    document.getElementById(index).innerText = value;
}
view.documentStyleDisplay = (id, value) => {
    document.getElementById(id).style.display = value;
}
// đây là function toastLoading
view.toastLoading = (idValueToastLoading, visibleOrHidden) => {
    let idToastLoading = document.getElementById(idValueToastLoading)
    idToastLoading.innerHTML = `<div class="content">
    <div>
        <div class="starbuck-popup starbuck-modal__transition-enter-done">
            <div class="starbuck-popup__overlay"></div>
            <div class="starbuck-popup__container">
                <div class="case__loading">
                    <div class="big__circle">
                        <div class="inner__circle"></div>
                        <div class="loader">
                            <svg class="circular" viewBox="25 25 50 50">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stop-color="#00e8aa" />
                                        <stop offset="50%" stop-color="#00e857" />
                                        <stop offset="100%" stop-color="#00e8ad" />
                                    </linearGradient>
                                </defs>
                                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"
                                    stroke-miterlimit="10" stroke="url(#gradient)" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
    idToastLoading.style.visibility = visibleOrHidden;
}
view.setScreenActive = (ScreenName) => {
    var data = firebase.auth().currentUser;
    switch (ScreenName) {
        case "cart":
            app.innerHTML = components.cart
            const user = firebase.auth().currentUser;
            let searchInput = document.querySelector('.search input');
            searchInput.addEventListener('input', function (e) {
                let search = e.target.value.trim().toLowerCase();
                let listCart = document.querySelectorAll('.product-item')
                listCart.forEach(item => {
                    console.log(item.innerText);
                    if (item.innerText.toLowerCase().includes(search)) {
                        item.setAttribute("style", "display:block")
                    }
                    else {
                        item.setAttribute("style", "display:none")
                    };
                });
            });
            const cartbtn = document.querySelector(".fa-circle-xmark")
            const cartshow = document.querySelector(".fa-cart-shopping")
            cartshow.addEventListener("click", function () {
                document.querySelector(".cart").style.right = "0"
            });
            cartbtn.addEventListener("click", function () {
                document.querySelector(".cart").style.right = "-100%"
            });
            //........................... 
            $(function () {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
                    else $(".lentop").fadeOut();
                });
                $(".lentop").click(function () {
                    $("body,html").animate({ scrollTop: 0 }, "slow");
                });
            });
            let starbuckMiniChatEmbeddedLarge = document.getElementById("starbuckMiniChatEmbeddedLarge")
            starbuckMiniChatEmbeddedLarge.addEventListener("click", () => {
                document.getElementById("starbuckMiniChatEmbedded").style.display = "block";
            });
            let starbuckMiniChatEmbeddedSmall = document.getElementById("starbuckMiniChatEmbeddedSmall")
            starbuckMiniChatEmbeddedSmall.addEventListener("click", () => {
                document.getElementById("starbuckMiniChatEmbedded").style.display = "none";
            });
            let trendClick = document.getElementById("trendClick");
            trendClick.addEventListener("click", () => {
                console.log("aaaaa");
                document.getElementById('trend').style.display = 'block';
                document.getElementById('new').style.display = 'none';
                document.getElementById('best-sell').style.display = 'none';
            });
            let newClick = document.getElementById("newClick");
            newClick.addEventListener("click", () => {
                console.log("aaaaa");
                document.getElementById('new').style.display = 'block';
                document.getElementById('trend').style.display = 'none';
                document.getElementById('best-sell').style.display = 'none';
            });
            let bestSellClick = document.getElementById("bestSellClick");
            bestSellClick.addEventListener("click", () => {
                console.log("aaaaa");
                document.getElementById('best-sell').style.display = 'block';
                document.getElementById('trend').style.display = 'none';
                document.getElementById('new').style.display = 'none';
            });
            let loginForCart = document.getElementById("loginForCart")
            loginForCart.addEventListener("click", () => {
                view.setScreenActive("login")
            });
            // lấy thông tin người dùng sau khi đăng nhập
            controller.getInfoProfile(user);
            // view.dataLoginAfterLogin = (a, b) => {
            //     document.getElementById(a).innerHTML = b;
            // }
            view.subMenuLogin = (index) => {
                document.getElementById(index).innerHTML =
                    `<div id="test" style="display: flex; text-align: justify; padding:10px 30px">
                <div style="">
                    <strong>Danh Sách Của Bạn</strong>
                    <a class="innersubMenuLogin" href="#!">Tạo một Danh sách</a>
                    <a class="innersubMenuLogin" href="#!">Tìm một Danh sách</a>
                    <a class="innersubMenuLogin" href="#!">Danh sách từ thiện của Starbucks</a>
                </div>
                <div style="margin-left:40px; padding-left:20px; border-left: 1pt solid gray;">
                    <strong>Tài Khoản Của Bạn</strong>
                    <a class="innersubMenuLogin" id="directInfoProfile" href="">Tài Khoản</a>
                    <a class="innersubMenuLogin" href="#!">Đơn Đặt hàng</a>
                    <a class="innersubMenuLogin" href="#!">Danh sách theo dõi</a>
                    <a class="innersubMenuLogin" href="#!">Lịch sử Duyệt web</a>
                    <a class="innersubMenuLogin" href="#!">Mua và thuê video</a>
                    <a class="innersubMenuLogin" id="btnLogOut" href="#!">Đăng xuất</a>
                </div>
            </div>`;
                //logout ở bên trong phần sau khi đăng nhập thành công
                let logOut = document.getElementById("btnLogOut");
                logOut.addEventListener("click", (event) => {
                    event.preventDefault();
                    controller.logOut();
                });
                // đây là phần chuyển sang trang hồ sơ thông tin sau khi click vào
                let directInfoProfile = document.getElementById("directInfoProfile")
                directInfoProfile.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.getElementById("containerCart").style.display = "none";
                    let innerInfoProfile = document.getElementById("innerInfoProfile")
                    innerInfoProfile.innerHTML = components.infoProfile
                    let menu = document.querySelector('#menu-btn');
                    let header = document.querySelector('.header');
                    document.getElementById("myAccount").className = "aaaaa";

                    menu.onclick = () => {
                        menu.classList.toggle('fa-times');
                        header.classList.toggle('active');
                    };
                    window.onscroll = () => {
                        menu.classList.remove('fa-times');
                        header.classList.remove('active');
                    };
                    // chuyển màu màn hình profile
                    let themeToggler = document.querySelector('#theme-toggler');
                    themeToggler.onclick = () => {
                        themeToggler.classList.toggle('fa-sun');
                        if (themeToggler.classList.contains('fa-sun')) {
                            document.body.classList.add('active');
                        } else {
                            document.body.classList.remove('active');
                        };
                    };
                    controller.getInfoProfileVerify(user);
                    var popUpButton = document.getElementById("popUpButton")
                    // cập nhật password
                    let changePassword = document.getElementById("clickChangePassword")
                    changePassword.addEventListener("click", () => {
                        e.preventDefault();
                        view.toastComfirm("taskLoginComfirm", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Để bảo mật tài khoản, đầu tiên vui lòng nhập mật khẩu cho tài khoản của bạn.", "header", "0");
                        popUpButton.addEventListener("click", () => {
                            taskLoginComfirm.className = taskLoginComfirm.className.replace("show", "")
                            document.getElementById("homeInfoProfile").style.visibility = "hidden";
                            document.getElementById("header").style.zIndex = "1";
                            let wrapHomeInfoProfile = document.getElementById("wrapHomeInfoProfile");
                            wrapHomeInfoProfile.innerHTML = components.infoProfileVerify;
                            let buttonVerify = document.getElementById("buttonVerify")
                            // bật toast
                            buttonVerify.addEventListener("click", () => {
                                let data = firebase.auth().currentUser;
                                let passwordVerify = document.getElementById("buttonFormVerify").passwordVerify.value; // sẽ lấy value mật khẩu từ form nhét vào phần credential (tạo thông tin thêm)
                                let credentials = firebase.auth.EmailAuthProvider.credential(
                                    data.email,
                                    passwordVerify,
                                );
                                // tắt toast
                                let popUpButtonVerify = document.getElementById("popUpButtonVerify")
                                popUpButtonVerify.addEventListener("click", () => {
                                    view.toastComfirm("taskLoginComfirm", "", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Để bảo mật tài khoản, đầu tiên vui lòng nhập mật khẩu cho tài khoản của bạn.", "header", "0");
                                });
                                // sau đó chuyền credential này qua phần control xử lý
                                controller.infoProfileVerifyPassword(data, credentials);
                                // trong phần đối số này thằng data sẽ so sánh kiểm tra xem có trùng khớp với nhau không                               
                            });
                            // check mật khẩu phần password verify
                            let checkPasswordVerifyID = document.getElementById("buttonFormVerify").passwordVerify
                            checkPasswordVerifyID.addEventListener("input", () => {
                                controller.checkVerifyButton(checkPasswordVerifyID.value);
                            });
                            let keyEnterPasswordVerify = document.getElementById("passwordVerify");
                            keyEnterPasswordVerify.addEventListener("keypress", (event) => {
                                controller.keyEnterPasswordVerify(event);
                            });
                            view.checkInputChangePassword = () => {
                                let checkInputChangePassword = document.getElementById("formChangePassword").changePassword;
                                let checkInputComfirmChangePassword = document.getElementById("formChangePassword").comfirmChangePassword;
                                let dataInput = {
                                    checkInputChangePassword: checkInputChangePassword,
                                    checkInputComfirmChangePassword: checkInputComfirmChangePassword
                                };
                                checkInputChangePassword.addEventListener("input", () => {
                                    return controller.checkChangePassword(dataInput.checkInputChangePassword.value);
                                });
                                checkInputComfirmChangePassword.addEventListener("input", () => {
                                    return controller.whenCheckInputComfirmPassword(dataInput.checkInputComfirmChangePassword.value);
                                });
                                checkInputComfirmChangePassword.addEventListener("keypress", (event) => {
                                    controller.keyEnterPasswordChangePassword(event);
                                });
                                // phần xử lý đổi email
                                let buttonChangePassword = document.getElementById("buttonChangePassword")
                                buttonChangePassword.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    return controller.checkValidChangePassword(data, dataInput);
                                });
                                 // tắt popup sau khi xử lý đổi email
                                 let offPopUpButtonChangePassword = document.getElementById("popUpButtonChangePassword");
                                 offPopUpButtonChangePassword.addEventListener("click", (e) => {
                                     view.toastComfirm("taskLoginComfirm", "", "titlePopUpVerify", `<i class="fa-solid fa-check"></i>Đổi mật khẩu thành công !`, "textPopUpError", "Bạn đã đổi mật khẩu thành công, bấm OK bạn sẽ quay về trang chủ của mình.", "header", "0");
                                     window.location.reload();
                                 });
                            }

                        });
                    });
                    // cập nhật email
                    let changeEmail = document.getElementById("changeEmail");
                    changeEmail.addEventListener("click", (event) => {
                        event.preventDefault();
                        view.toastComfirm("taskLoginComfirm", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Để bảo mật tài khoản, đầu tiên vui lòng nhập mật khẩu cho tài khoản của bạn.", "header", "0");
                        popUpButton.addEventListener("click", () => {
                            taskLoginComfirm.className = taskLoginComfirm.className.replace("show", "")
                            document.getElementById("homeInfoProfile").style.visibility = "hidden";
                            document.getElementById("header").style.zIndex = "1";
                            let wrapHomeInfoProfile = document.getElementById("wrapHomeInfoProfile");
                            wrapHomeInfoProfile.innerHTML = components.infoProfileVerify;
                            let buttonVerify = document.getElementById("buttonVerify");
                            // bật toast
                            buttonVerify.addEventListener("click", () => {
                                let passwordVerify = document.getElementById("buttonFormVerify").passwordVerify.value; // sẽ lấy value mật khẩu từ form nhét vào phần credential (tạo thông tin thêm)
                                let credentials = firebase.auth.EmailAuthProvider.credential(
                                    data.email,
                                    passwordVerify,
                                );
                                // tắt toast
                                let popUpButtonVerify = document.getElementById("popUpButtonVerify")
                                popUpButtonVerify.addEventListener("click", () => {
                                    return view.toastComfirm("taskLoginComfirm", "", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Để bảo mật tài khoản, đầu tiên vui lòng nhập mật khẩu cho tài khoản của bạn.", "header", "0");
                                });
                                // sau đó chuyền credential này qua phần control xử lý
                                controller.infoProfileVerifyEmail(data, credentials);
                                // trong phần đối số này thằng data sẽ so sánh kiểm tra xem có trùng khớp với nhau không   
                            });

                            // check mật khẩu phần email verify
                            let checkPasswordVerifyID = document.getElementById("buttonFormVerify").passwordVerify;
                            checkPasswordVerifyID.addEventListener("input", () => {
                                return controller.checkVerifyButton(checkPasswordVerifyID.value);
                            });
                            let keyEnterPasswordVerify = document.getElementById("passwordVerify");
                            keyEnterPasswordVerify.addEventListener("keypress", (event) => {
                                return controller.keyEnterPasswordVerify(event);
                            });
                            // đây là phần check input xem có nhập vào không ở Change Email 
                            view.checkInputChangeEmail = () => {
                                let checkInputChangeEmail = document.getElementById("formChangeEmail").changeEmail;
                                checkInputChangeEmail.addEventListener("input", () => {
                                    return controller.checkChangeEmail(checkInputChangeEmail.value);
                                });
                                let keyEnterPasswordChangeEmail = document.getElementById("changeEmail");
                                keyEnterPasswordChangeEmail.addEventListener("keypress", (event) => {
                                    controller.keyEnterPasswordChangeEmail(event);
                                });
                                // phần xử lý đổi email
                                let buttonChangeEmail = document.getElementById("buttonChangeEmail")
                                buttonChangeEmail.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    return controller.checkValidChangeEmail(data, checkInputChangeEmail.value);
                                });
                                // tắt popup sau khi xử lý đổi email
                                let offPopUpButtonChangeEmail = document.getElementById("popUpButtonChangeEmail");
                                offPopUpButtonChangeEmail.addEventListener("click", (e) => {
                                    view.toastComfirm("taskLoginComfirm", "", "titlePopUpVerify", `<i class="fa-solid fa-check"></i>Đổi email thành công !`, "textPopUpError", "Bạn đã đổi email thành công, vui lòng đến hộp thư của bạn để xác nhận.", "header", "0");
                                    window.location.reload();
                                });

                            };
                        });

                    });
                });
            };
            // ẩn nút login sau khi đăng nhập thành công
            view.documentStyleDisplay = (id, value) => {
                document.getElementById(id).style.display = value;
            };
            const checkAdd = firebase.auth().currentUser;
            controller.addCart(checkAdd);
            break;
        case "login":
            // đây là nút bấm chuyển trang đăng ký    
            app.innerHTML = components.login
            let registerForRegister = document.getElementById("registerForRegister")
            registerForRegister.addEventListener("click", () => {
                view.setScreenActive("register");
            });
            // đây là bấm đăng nhập
            let loginForm = document.getElementById("loginForm");
            loginForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(data);
            });
            view.ErrorMessages = (index, value) => {
                document.getElementById(index).innerText = value;
            }
            view.documentStyleDisplay = (id, value) => {
                document.getElementById(id).style.display = value;
            }
            break;

        case "register":
            app.innerHTML = components.register
            let registerNextToLogin = document.getElementById("registerNextToLogin")
            registerNextToLogin.addEventListener("click", () => {
                view.setScreenActive("login")
            });

            let registerForm = document.getElementById("registerForm");
            registerForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const data = {
                    username: registerForm.username.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    comfirmPassword: registerForm.comfirmPassword.value,
                }
                controller.register(data);
            });
            break;
        case "infoProfile":
            app.innerHTML = components.infoProfile;
            break;
        case "infoProfileVerify":
            app.innerHTML = components.infoProfileVerify;
            break;
        case "taskChangeEmail":
            app.innerHTML = components.taskChangeEmail;
            break;
        case "taskChangePassword":
            app.innerHTML = components.taskChangeEmail;
            break;
    }
}

