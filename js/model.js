const model = {};
const firebaseApp = firebase.initializeApp({ /* Firebase config */
    apiKey: "AIzaSyBjFG6vuZsGQlJeVC4sYEfrbVlaoilnJus",
    authDomain: "project---module-2.firebaseapp.com",
    projectId: "project---module-2",
    storageBucket: "project---module-2.appspot.com",
    messagingSenderId: "764674509336",
    appId: "1:764674509336:web:4c2fb319a966515ef7116d"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
model.register = async (data) => {
    try {
        let dataUser = '';
        let response = await auth.createUserWithEmailAndPassword(data.email, data.password);
        view.setScreenActive("login");
        auth.currentUser.sendEmailVerification();
    } catch (error) {
        alert(error.message);
    }
}
model.login = async (data) => {
    try {
        let response = await auth.signInWithEmailAndPassword(data.email, data.password)
        if (response.user.emailVerified) {
            view.setScreenActive("cart");
        }
        else {
            showVeriEmail();
            auth.currentUser.sendEmailVerification();
        }
    } catch (error) {
        alert(error.message);
    }
}
// đây là phần lấy dữ liệu người dùng sau khi đăng nhập từ firebase
model.getInfoProfile = async (data) => {
    try {
        await data.providerData.forEach((profile) => {
            let profileAfterLogin = document.getElementById("profileAfterLogin");
            profileAfterLogin.innerHTML = `Hello, ${profile.email.slice(0, 17)}...`;
        });
        view.documentStyleDisplay("loginForCart", "none");
        view.subMenuLogin("subMenuLogin");
    } catch (error) {
        console.log(error.message);
    }
}
model.getInfoProfileVerify = async (data) => {
    try {
        await data.providerData.forEach((profile) => {
            let usernameInProVerify = document.getElementById("usernameInProVerify");
            let emailInProVerify = document.getElementById("emailInProVerify");
            usernameInProVerify.value = profile.email;
            emailInProVerify.innerHTML = profile.email;
        });
    } catch (error) {
        console.log(error.message);
    }
}
// đây là phần model xử lý model phần xác thực bảo mật đổi thông tin
model.infoProfileVerifyEmail = async (data, credentials) => { // thằng này sẽ tiếp nhận credential ở control trung gian truyền qua từ view.
    await data.reauthenticateWithCredential(credentials) // reauthenticateWithCredential (kiểm tra xem reauthenticate {là phần thông tin đã đăng ký} với phần credentials có trùng nhau không)
        .then(() => {
            return setTimeout(() => {
                view.toastLoading("toastLoading", "visible")
                return setTimeout(() => {
                    let wrapHomeInfoProfile = document.getElementById("wrapHomeInfoProfile");
                    wrapHomeInfoProfile.innerHTML = components.taskChangeEmail;
                    setTimeout(() => {
                        view.checkInputChangeEmail();
                    }, 2000);
                }, 2000);
            }, 10);

        })
        .catch(() => {
            return setTimeout(() => {
                view.toastLoading("toastLoading", "visible")
                return setTimeout(() => {
                    view.toastLoading("toastLoading", "hidden");
                    view.toastComfirm("taskLoginComfirm", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Sai tài khoản hoặc mật khẩu.", "header", "0");
                }, 2000);
            }, 10);
        });
};
model.infoProfileVerifyPassword = async (data, credentials) => { // thằng này sẽ tiếp nhận credential ở control trung gian truyền qua từ view.
    await data.reauthenticateWithCredential(credentials) // reauthenticateWithCredential (kiểm tra xem reauthenticate {là phần thông tin đã đăng ký} với phần credentials có trùng nhau không)
        .then(() => {
            return setTimeout(() => {
                view.toastLoading("toastLoading", "visible")
                return setTimeout(() => {
                    let wrapHomeInfoProfile = document.getElementById("wrapHomeInfoProfile");
                    wrapHomeInfoProfile.innerHTML = components.taskChangePassword;
                    setTimeout(() => {
                        view.checkInputChangePassword();
                    }, 2000);
                }, 2000);
            }, 10);
        })
        .catch(() => {
            return setTimeout(() => {
                view.toastLoading("toastLoading", "visible")
                return setTimeout(() => {
                    view.toastLoading("toastLoading", "hidden");
                    view.toastComfirm("taskLoginComfirm", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Sai tài khoản hoặc mật khẩu.", "header", "0");
                }, 2000);
            }, 10);
        });
};
model.getChangeEmail = (data, checkInputChangeEmail) => {
    setTimeout(() => {
        view.toastLoading("toastLoading", "visible")
        return setTimeout(async () => {
            try {
                await data.updateEmail(checkInputChangeEmail);
                await data.sendEmailVerification();
                view.toastLoading("toastLoading", "hidden");
                view.toastComfirm("taskLoginComfirm", "show", "titlePopUpVerify", `<i class="fa-solid fa-check"></i>Đổi email thành công !`, "textPopUpError", "Bạn đã đổi email thành công, vui lòng đến hộp thư của bạn để xác nhận.", "header", "0");
            } catch (error) {
                view.toastComfirm("taskLoginComfirm", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Đổi email thất bại, vui lòng thao tác lại`, "textPopUpError", `${error.message}`, "header", "0");
            }
        }, 2000);
    }, 0);
}
model.getChangePassword = (data, dataInput) => {
    setTimeout(() => {
        view.toastLoading("toastLoading", "visible")
        return setTimeout(async () => {
            try {
                await data.updatePassword(dataInput.checkInputComfirmChangePassword.value);
                view.toastLoading("toastLoading", "hidden");
                view.toastComfirm("taskLoginComfirm", "show", "titlePopUpVerify", `<i class="fa-solid fa-check"></i>Đổi mật khẩu thành công !`, "textPopUpError", "Bạn đã đổi mật khẩu thành công, bấm OK bạn sẽ quay về trang chủ của mình.", "header", "0");
            } catch (error) {
                view.toastComfirm("taskLoginComfirm", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Đổi mật khẩu thất bại, vui lòng thao tác lại`, "textPopUpError", `${error.message}`, "header", "0");
            }
        }, 2000);
    }, 0);
}
// model.updateEmailSuccess = async (data, inputValueChangeEmail) => {
//     try {
//        await data.updateEmail(inputValueChangeEmail.value);
//         await data.sendEmailVerification();
//         view.toastLoading("toastLoading", "hidden");
//     } catch (error) {
//         view.toastLoading("toastLoading", "hidden");
//         alert(error.message);
//     }
// }
// model.updatePasswordSuccess = async (data, inputValueChangePassword) => {
//     try {

//         view.toastLoading("toastLoading", "hidden");
//         alert("okk")
//     } catch (error) {
//         view.toastLoading("toastLoading", "hidden");
//         alert(error.message);
//     }
// }

