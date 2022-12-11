const model = {};
const firebaseApp = firebase.initializeApp({ /* Firebase config */
    apiKey: "AIzaSyD4YfE1zlxCwSHY1o_Prn-4EgQNXQLB2pQ",
    authDomain: "project2thi.firebaseapp.com",
    projectId: "project2thi",
    storageBucket: "project2thi.appspot.com",
    messagingSenderId: "505954566029",
    appId: "1:505954566029:web:e03843e61fada08c8e47c4"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const ref = firebase.storage().ref();
const store = firebase.storage();
model.register = (data) => {
    try {
        view.toastLoading("toastLoading", "visible");
        setTimeout(async () => {
            view.toastLoading("toastLoading", "hidden");
            let dataUser = '';
            let response = await auth.createUserWithEmailAndPassword(data.email, data.password);
            view.setScreenActive("login");
            auth.currentUser.sendEmailVerification();
            showRegisterSuccess("Đăng ký tài khoản thành công, vui lòng kiểm tra hộp thư để xác nhận tài khoản.")
            return setTimeout(async () => {
                await view.setScreenActive("login");
            }, 2000);
        }, 1000);
    } catch (error) {
        view.toastLoading("toastLoading", "hidden");
        showRegisterFail("Đăng ký thất bại.")
    }
}
model.login = async (data) => {
    try {
        view.toastLoading("toastLoading", "visible")
        let response = await auth.signInWithEmailAndPassword(data.email, data.password)
        if (response.user.emailVerified) {
            setTimeout(() => {
                view.toastLoading("toastLoading", "hidden")
                view.setScreenActive("cart");
            }, 2000);
        }
        else {
            view.toastLoading("toastLoading", "visible")
            setTimeout(() => {
                view.toastLoading("toastLoading", "hidden")
                showVeriEmail();
                auth.currentUser.sendEmailVerification();
            }, 2000);
        }
    } catch (error) {
        view.toastLoading("toastLoading", "hidden");
        showLoginFail("Sai tài khoản hoặc mật khẩu.");
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
        showLoginFail(error.message)
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
                    view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Sai tài khoản hoặc mật khẩu.", "header", "0");
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
                    view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Sai tài khoản hoặc mật khẩu.", "header", "0");
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
                view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-check"></i>Đổi email thành công !`, "textPopUpError", "Bạn đã đổi email thành công, vui lòng đến hộp thư của bạn để xác nhận.", "header", "0");
            } catch (error) {
                view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Đổi email thất bại, vui lòng thao tác lại`, "textPopUpError", `${error.message}`, "header", "0");
            }
        }, 2000);
    }, 0);
};
model.getChangePassword = (data, dataInput) => {
    setTimeout(() => {
        view.toastLoading("toastLoading", "visible")
        return setTimeout(async () => {
            try {
                await data.updatePassword(dataInput.checkInputComfirmChangePassword.value);
                view.toastLoading("toastLoading", "hidden");
                view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-check"></i>Đổi mật khẩu thành công !`, "textPopUpError", "Bạn đã đổi mật khẩu thành công, bấm OK bạn sẽ quay về trang chủ của mình.", "header", "0");
            } catch (error) {
                view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Đổi mật khẩu thất bại, vui lòng thao tác lại`, "textPopUpError", `${error.message}`, "header", "0");
            }
        }, 2000);
    }, 0);
};
// send image lên firebase 
model.saveChangeImage = () => {
    setTimeout(async () => {
        view.toastLoading("toastLoading", "visible");
        const file = document.querySelector("#imageUploadInput").files[0]
        console.log(file.name);
        const name = `${auth.currentUser.uid}/${file.name}`;
        const metadata = {
            contentType: file.type
        };
        const task = ref.child(name).put(file, metadata)
        await task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                console.log(url);
                view.divToastAfterClickChangeImage();
                view.toastLoading("toastLoading", "hidden");
                auth.currentUser.updateProfile({ photoURL: url });
                return setTimeout(() => {
                    window.location.reload()
                }, 2000);
            });
    }, 50);
}
// trỏ vào firebase ra lệnh xóa tài khoản
model.submitDelete = (data) => {
    let toastAfterClickChangeImage = document.getElementById("toastAfterClickChangeImage");
    setTimeout(async () => {
        try {
            await data.delete()
            toastAfterClickChangeImage.textContent = "Xóa tài khoản thành công !"
        } catch (error) {
            toastAfterClickChangeImage.textContent = error.message
        }
    }, 4000);
};
model.displayItems = async (item) => {
    var productItems = document.getElementById("productItems")
    var productItem = ``;
    // *{ thằng này là kết quả của API DATA
    const response = await fetch(item);
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
        productItem += await
            `<div class="product-item">
                    <img src="${data[i].image}" alt="">
                    <div class="product-item-text">
                        <p><span>${data[i].price}</span><sup>đ</sup></p>
                        <h1 id="id" style="font-weight: bold; font-size: 18px;"> ${data[i].name}</h1>
                    </div>
                    <button class="btnAddCart">Thêm vào giỏ hàng</button>
                </div>\n`;
    }
    productItems.innerHTML = await productItem;
    const checkAdd = await firebase.auth().currentUser;
    controller.addCart(checkAdd);
};
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

