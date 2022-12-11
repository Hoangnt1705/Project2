const controller = {};
const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
controller.register = (data) => {
    if (_.isEmpty(data.username)) {
        data.username = '';
        view.documentStyleDisplay("labelUsername", "none")
        view.ErrorMessages("errorUsername", "Vui lòng nhập tên tài khoản!");
    }
    else if (data.username.length < 4) {
        data.username = '';
        view.documentStyleDisplay("labelUsername", "none")
        view.ErrorMessages("errorUsername", "Tên tài khoản phải trên 5 ký tự");
    }
    else {
        view.documentStyleDisplay("labelUsername", "block")
        view.ErrorMessages("errorUsername", "");
    }


    if (_.isEmpty(data.email)) {
        data.email = '';
        view.documentStyleDisplay("labelEmail", "none")
        view.ErrorMessages("errorEmail", "Vui lòng nhập email!");
    }
    else if (!emailIsValid(data.email)) {
        data.email = '';
        view.documentStyleDisplay("labelEmail", "none")
        view.ErrorMessages("errorEmail", "Sai định dạng email!");
    }
    else {
        view.documentStyleDisplay("labelEmail", "block")
        view.ErrorMessages("errorEmail", "");
    }


    if (_.isEmpty(data.password)) {
        data.password = '';
        view.documentStyleDisplay("labelPassword", "none")
        view.ErrorMessages("errorPassword", "Vui lòng nhập mật khẩu!");
    }
    else if (data.password.length < 7) {
        data.password = '';
        view.documentStyleDisplay("labelPassword", "none")
        view.ErrorMessages("errorPassword", "Mật khẩu phải trên 6 ký tự");
    }
    else {
        view.documentStyleDisplay("labelPassword", "block")
        view.ErrorMessages("errorPassword", "");
    }
    if (_.isEmpty(data.comfirmPassword)) {
        data.comfirmPassword = '';
        view.documentStyleDisplay("labelComfirmPassword", "none")
        view.ErrorMessages("errorComfirmPassword", "Vui lòng xác thực mật khẩu!");

    }
    else if (data.comfirmPassword.length < 7) {
        data.comfirmPassword = '';
        view.documentStyleDisplay("labelComfirmPassword", "none")
        view.ErrorMessages("errorComfirmPassword", "Mật khẩu phải trên 6 ký tự");
    }
    else if (data.comfirmPassword !== data.password) {
        data.comfirmPassword = '';
        view.documentStyleDisplay("labelComfirmPassword", "none")
        view.ErrorMessages("errorComfirmPassword", "Xác thực lại mật khẩu không đúng");
    }
    else {
        view.documentStyleDisplay("labelComfirmPassword", "block")
        view.ErrorMessages("errorComfirmPassword", "");
    }
    var submitRegister = document.getElementById("submitRegister")
    submitRegister.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("myBtn").click();
        }
    });
    if (data.username && data.email && data.password && data.comfirmPassword) {
        model.register(data);
    }
}
controller.login = (data) => {
    const emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    if (_.isEmpty(data.email)) {
        data.email = '';
        view.documentStyleDisplay("labelEmail", "none");
        view.ErrorMessages("errorEmail", "Vui lòng nhập email!");
    }
    else if (!emailIsValid(data.email)) {
        data.email = '';
        view.documentStyleDisplay("labelEmail", "none");
        view.ErrorMessages("errorEmail", "Sai định dạng email!");
    }
    else {
        view.documentStyleDisplay("labelEmail", "block");
        view.ErrorMessages("errorEmail", "");
    }
    if (_.isEmpty(data.password)) {
        data.password = '';
        view.documentStyleDisplay("labelPassword", "none");
        view.ErrorMessages("errorPassword", "Vui lòng nhập mật khẩu!");
    }
    else if (data.password.length < 7) {
        data.password = '';
        view.documentStyleDisplay("labelPassword", "none");
        view.ErrorMessages("errorPassword", "Mật khẩu phải trên 6 ký tự");
    }
    else {
        view.documentStyleDisplay("labelPassword", "block");
        view.ErrorMessages("errorPassword", "");
    }
    if (data.password && data.email) {
        model.login(data);
    }
}
// đây là phần valid sau khi model lấy người dùng sau khi đăng nhập

controller.getInfoProfile = (data) => {
    if (data !== null && data.emailVerified) {
        model.getInfoProfile(data);
    };
};
controller.getInfoProfileVerify = (data) => {
    if (data !== null) {
        model.getInfoProfileVerify(data);
    };
};
// đây là phần valid đăng xuất
controller.logOut = () => {
    try {
        view.toastLoading("toastLoading", "visible")
        setTimeout(async () => {
            view.toastLoading("toastLoading", "hidden")
            return await firebase.auth().signOut();
        }, 2000);

    } catch (error) {
        alert(error.message);
    };

};

controller.addCart = async (data) => {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //add cart
    let addcart = (productPrice, productImg, productName) => {
        var addtr = document.createElement("tr");
        let cartItem = document.querySelectorAll("tbody tr");
        showThemGioHang();
        if (addtr == null) { showThemGioHang() };
        for (let i = 0; i < cartItem.length; i++) {
            var productT = document.querySelectorAll(".title");
            if (productT[i].innerText == productName) {
                showDaCoSanPhamTrongGioHang();
                return;
            };
        };
        var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="' + productImg + '" alt=""><span class="title">' + productName + '</span></td><td><p><span class="prices">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width: 35px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;" ><span class="cart-delete">Xóa</span></td></tr>'
        addtr.innerHTML = trcontent;
        var cartTable = document.querySelector("tbody");
        cartTable.append(addtr);
        carttotal();
        deleteCart();
    };
    //tong tien phia duoi cung gio hang
    function carttotal() {
        let cartItem = document.querySelectorAll("tbody tr");
        var totalItems = 0;
        // console.log(cartItem.length);
        for (let i = 0; i < cartItem.length; i++) {
            let inputValue = cartItem[i].querySelector("input").value;
            //    console.log(inputValue);
            let productPrice = cartItem[i].querySelector(".prices").innerText;
            //    console.log(productPrice);
            let totalItem = inputValue * productPrice; //* 1000
            //    let totalB = totalA.toLocaleString('de-DE')
            //    console.log(totalB);
            totalItems = totalItems + totalItem;
            // totalPaser =  totalItems.toLocaleString('de-DE')
        }
        var cartSum = document.querySelector(".price-total span");
        cartSum.innerHTML = totalItems.toLocaleString('de-DE');
        inputchange();
    };
    //delete
    function deleteCart() {
        var cartItem = document.querySelectorAll("tbody tr");
        for (let i = 0; i < cartItem.length; i++) {
            var productT = document.querySelectorAll(".cart-delete");
            productT[i].addEventListener('click', function (event) {
                var cartDelete = event.target
                var cartItemRemove = cartDelete.parentElement.parentElement;
                cartItemRemove.remove();
                carttotal();
            });
        };
    };
    //inputchange
    function inputchange() {
        var cartItem = document.querySelectorAll("tbody tr");
        for (let i = 0; i < cartItem.length; i++) {
            var inputValue = cartItem[i].querySelector("input");
            inputValue.addEventListener("change", function () {
                carttotal();
            });
        };
    };
    const btnNeumorphism = document.querySelectorAll(".btnAddCart");
    btnNeumorphism.forEach((button, index) => {
        button.addEventListener("click", async (event) => {
            var btnItem = event.target;
            var product = btnItem.parentElement;
            console.log(">>> check", product);
            var productImg = product.querySelector("img").src;
            var productName = product.querySelector("h1").innerText;
            var productPrice = product.querySelector("span").innerText;
            try {
                if (await data) {
                    var uid = await data;
                    addcart(productPrice, productImg, productName);
                }
                else {
                    view.setScreenActive("login");
                };
            } catch (error) {
                console.log(error);
            };
        });
    });
};
// đây là phần control xử lý model phần xác thực bảo mật đổi thông tin
controller.infoProfileVerifyEmail = async (data, credentials) => {
    if (firebase.auth().currentUser && firebase.auth().currentUser.emailVerified) {
        model.infoProfileVerifyEmail(data, credentials); // thằng này sẽ chuyển dữ liệu từ view gửi sang cho model
    }
    else {
        alert("thất bại, vui lòng kiểm tra hộp thư.")
        view.toastLoading("toastLoading", "hidden")
    }

};
controller.infoProfileVerifyPassword = (data, credentials) => {
    view.toastLoading("toastLoading")
    model.infoProfileVerifyPassword(data, credentials); // thằng này sẽ chuyển dữ liệu từ view gửi sang cho model
};
// đây là phần xử lý email
controller.checkValidChangeEmail = (data, checkInputChangeEmail) => {
    let errorInputChangeEmail = document.getElementById("errorInputChangeEmail")
    if (!emailIsValid(checkInputChangeEmail)) {
        return errorInputChangeEmail.innerText = "Email sai định dạng";
    }
    else {
        errorInputChangeEmail.innerText = "";
        return model.getChangeEmail(data, checkInputChangeEmail);
    }

}
// đây là phần xử lý đổi mật khẩu
controller.checkValidChangePassword = (data, dataInput) => {
    let errorInputChangePassword = document.getElementById("errorInputChangePassword")
    let errorInputComfirmChangePassword = document.getElementById("errorInputComfirmChangePassword");
    if (_.isEmpty(dataInput.checkInputChangePassword.value)) {
        errorInputChangePassword.innerText = "Mật khẩu không được để trống";
    }
    else if (dataInput.checkInputChangePassword.value.length < 7) {
        errorInputChangePassword.innerText = "Mật khẩu phải từ 6 ký tự trở lên";
    }
    else {
        errorInputChangePassword.innerText = "";
    };
    if (_.isEmpty(dataInput.checkInputComfirmChangePassword.value)) {
        errorInputComfirmChangePassword.innerText = "Xác thực mật khẩu không được để trống";
    }
    else if (dataInput.checkInputComfirmChangePassword.value !== dataInput.checkInputChangePassword.value) {
        errorInputComfirmChangePassword.innerText = "Xác thực không khớp với mật khẩu đã nhập";
    }
    else {
        errorInputComfirmChangePassword.innerText = "";
    }
    if (dataInput.checkInputComfirmChangePassword.value && dataInput.checkInputChangePassword.value) {
        model.getChangePassword(data, dataInput);

    }
}
controller.checkVerifyButton = (checkPasswordVerifyID) => {
    if (_.isEmpty(checkPasswordVerifyID)) { // đây là kiểm tra phần buttonVerify nếu trống thì sẽ k bấm được
        view.buttonVerify("buttonVerify", "class", "fa-solid fa-floppy-disk buttonVerify")
    }
    if (!_.isEmpty(checkPasswordVerifyID)) {
        view.buttonVerify("buttonVerify", "class", "fa-solid fa-floppy-disk")
        document.getElementById("buttonVerify").style.opacity = "1";
    };
};
controller.checkChangeEmail = (checkPasswordChangeEmail) => {
    if (_.isEmpty(checkPasswordChangeEmail)) { // đây là kiểm tra phần buttonVerify nếu trống thì sẽ k bấm được
        view.buttonVerify("buttonChangeEmail", "class", "fa-solid fa-floppy-disk buttonVerify")
        document.getElementById("buttonChangeEmail").style.opacity = "0.3";

    }
    if (!_.isEmpty(checkPasswordChangeEmail)) {
        view.buttonVerify("buttonChangeEmail", "class", "fa-solid fa-floppy-disk")
        document.getElementById("buttonChangeEmail").style.opacity = "1";
    };
};
controller.checkChangePassword = (checkChangePassword) => {
    if (_.isEmpty(checkChangePassword)) { // đây là kiểm tra phần buttonVerify nếu trống thì sẽ k bấm được
        view.buttonVerify("buttonChangePassword", "class", "fa-solid fa-floppy-disk buttonVerify")
        document.getElementById("buttonChangePassword").style.opacity = "0.3";

    }
    if (!_.isEmpty(checkChangePassword)) {
        view.buttonVerify("buttonChangePassword", "class", "fa-solid fa-floppy-disk")
        document.getElementById("buttonChangePassword").style.opacity = "1";
    };
};
controller.whenCheckInputComfirmPassword = (checkPasswordChangePassword) => {
    if (_.isEmpty(checkPasswordChangePassword)) { // đây là kiểm tra phần buttonVerify nếu trống thì sẽ k bấm được
        view.buttonVerify("buttonChangePassword", "class", "fa-solid fa-floppy-disk buttonVerify")
    }
    if (!_.isEmpty(checkPasswordChangePassword)) {
        view.buttonVerify("buttonChangePassword", "class", "fa-solid fa-floppy-disk")
        document.getElementById("buttonChangePassword").style.opacity = "1";
    };
};
// valid enter phần verify
controller.keyEnterPasswordVerify = (event) => {
    if (event.key === "Enter") {
        document.getElementById("buttonVerify").click();
    };
};
controller.keyEnterPasswordChangeEmail = (event) => {
    if (event.key === "Enter") {
        document.getElementById("buttonChangeEmail").click();
    };
};
controller.keyEnterPasswordChangePassword = (event) => {
    if (event.key === "Enter") {
        document.getElementById("buttonChangePassword").click();
    };
};
controller.saveChangeImage = () => {
    model.saveChangeImage();
}

controller.settingDelete = (inputDelete, asWithCurrenUser) => {
    if (inputDelete === asWithCurrenUser) {
        document.getElementById('buttonDelete').disabled = false;
    }
    else {
        document.getElementById('buttonDelete').disabled = true;
    };
};

controller.submitDelete = (data) => {
    model.submitDelete(data);
}

controller.displayItems = (data) => {
    model.displayItems(data);
}

document.addEventListener("click", (evt) => {
    const getSuggest = document.getElementById("inputSearch");
    const createSuggestion = document.getElementById("createSuggestion")
    let targetEl = evt.target; // clicked element      
    do {
        if (targetEl == getSuggest) {
            // This is a click inside, does nothing, just return.
            createSuggestion.style.display = "block";
            return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside. 
    if (createSuggestion == "" || createSuggestion == null) {
        console.log("nothing");
    } else {
        document.getElementById("createSuggestion").style.display = "none";
    }
});
//thằng parentTagA sẽ tạo 1 thẻ div và sẽ không bị tác động(gọi theo) function viewSuggestion khi chạy oninput
//và nó sẽ là thẻ div tĩnh chứa các thông tin thay đổi khi xử lý các hàm được chứa bởi nó.
// let parentTagA = document.createElement("div");
// // đây value sẽ chạy theo keyup của ô input
// let viewSuggestion = () => {
//     let inputSearch = document.getElementById("inputSearch").value;
//     let displayValueSuggest = document.getElementById("displayValueSuggest");
//     displayValueSuggest.innerText = inputSearch;
//     var API = `http://localhost:8080/api/search?name=${inputSearch}`;
//     var pageimage = [];
//     //đây là function fetch API
//     async function funcSearch(url) {
//         // *{ thằng này là kết quả của API DATA
//         const response = await fetch(url);
//         let data = await response.json();
//         //}*
//         renderSearch = ``;
//         for (const index in data) {
//             console.log(index);
//         };
//     };
//     funcSearch(API)

// }
// viewSuggestion();


