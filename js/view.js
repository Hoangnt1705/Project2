const view = {};
var app = document.getElementById("app");
// đây là function toastComfirm
view.toastComfirm = (id, valueAtribute, idTitlePopUpVerifyError, valueTitlePopUpVerifyError, idAttributeText, valueAtributeText, idMenubarWillHidden, valueHidden) => {
    let infoPopupError = document.getElementById("infoPopup");
    infoPopupError.className = "error";
    document.getElementById(idMenubarWillHidden).style.zIndex = valueHidden;
    let taskComfirmFunc = document.getElementById(id);
    taskComfirmFunc.className = valueAtribute;
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
    let taskComfirmFunc = document.getElementById(id);
    taskComfirmFunc.className = valueAtribute;
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
    window.scrollTo(0, 0);
}
view.setScreenActive = async (ScreenName) => {
    var data = await firebase.auth().currentUser;
    switch (ScreenName) {
        case "cart":
            app.innerHTML = components.cart
            const user = await firebase.auth().currentUser;
            // let searchInput = document.querySelector('.search input');
            // searchInput.addEventListener('input', function (e) {
            //     let search = e.target.value.trim().toLowerCase();
            //     let listCart = document.querySelectorAll('.product-item')
            //     listCart.forEach(item => {
            //         if (item.innerText.toLowerCase().includes(search)) {
            //             item.setAttribute("style", "display:block")
            //         }
            //         else {
            //             item.setAttribute("style", "display:none")
            //         };
            //     });
            // });
            let offViewCartShopping = () => {
                const cartbtn = document.querySelector(".fa-circle-xmark");
                const cartshow = document.querySelector(".fa-cart-shopping");
                cartshow.addEventListener("click", function () {
                    document.querySelector(".cart").style.right = "0";
                });
                cartbtn.addEventListener("click", function () {
                    document.querySelector(".cart").style.right = "-100%";
                });
            }
            offViewCartShopping();
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
                document.getElementById('trend').style.display = 'block';
                document.getElementById('new').style.display = 'none';
                document.getElementById('best-sell').style.display = 'none';
            });
            let newClick = document.getElementById("newClick");
            newClick.addEventListener("click", () => {
                document.getElementById('new').style.display = 'block';
                document.getElementById('trend').style.display = 'none';
                document.getElementById('best-sell').style.display = 'none';
            });
            let bestSellClick = document.getElementById("bestSellClick");
            bestSellClick.addEventListener("click", () => {
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
            // function xử lý dữ liệu ở myaccount 
            let functionChangeEmailAndPasswordInAccount = () => {
                controller.getInfoProfileVerify(user);
                var popUpButton = document.getElementById("popUpButton")
                // cập nhật password
                let changePassword = document.getElementById("clickChangePassword")
                changePassword.addEventListener("click", () => {
                    view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Để bảo mật tài khoản, đầu tiên vui lòng nhập mật khẩu cho tài khoản của bạn.", "header", "1");
                    popUpButton.addEventListener("click", () => {
                        taskComfirmFunc.className = taskComfirmFunc.className.replace("show", "")
                        document.getElementById("homeInfoProfile").style.visibility = "hidden";
                        document.getElementById("header").style.zIndex = "1";
                        let wrapHomeInfoProfile = document.getElementById("wrapHomeInfoProfile");
                        wrapHomeInfoProfile.innerHTML = components.infoProfileVerify;
                        offViewCartShopping();
                        let buttonVerify = document.getElementById("buttonVerify")
                        // bật toast
                        buttonVerify.addEventListener("click", async () => {
                            let data = await firebase.auth().currentUser;
                            let passwordVerify = document.getElementById("buttonFormVerify").passwordVerify.value; // sẽ lấy value mật khẩu từ form nhét vào phần credential (tạo thông tin thêm)
                            let credentials = firebase.auth.EmailAuthProvider.credential(
                                data.email,
                                passwordVerify
                            );
                            // tắt toast
                            let popUpButtonVerify = document.getElementById("popUpButtonVerify")
                            popUpButtonVerify.addEventListener("click", () => {
                                view.toastComfirm("taskComfirmFunc", "", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Để bảo mật tài khoản, đầu tiên vui lòng nhập mật khẩu cho tài khoản của bạn.", "header", "1");
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
                                view.toastComfirm("taskComfirmFunc", "", "titlePopUpVerify", `<i class="fa-solid fa-check"></i>Đổi mật khẩu thành công !`, "textPopUpError", "Bạn đã đổi mật khẩu thành công, bấm OK bạn sẽ quay về trang chủ của mình.", "header", "1");
                                window.location.reload();
                            });
                        };
                    });
                });
                // cập nhật email
                let changeEmail = document.getElementById("changeEmail");
                changeEmail.addEventListener("click", (event) => {
                    event.preventDefault();
                    view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Để bảo mật tài khoản, đầu tiên vui lòng nhập mật khẩu cho tài khoản của bạn.", "header", "1");
                    popUpButton.addEventListener("click", () => {
                        taskComfirmFunc.className = taskComfirmFunc.className.replace("show", "")
                        document.getElementById("homeInfoProfile").style.visibility = "hidden";
                        document.getElementById("header").style.zIndex = "1";
                        let wrapHomeInfoProfile = document.getElementById("wrapHomeInfoProfile");
                        wrapHomeInfoProfile.innerHTML = components.infoProfileVerify;
                        offViewCartShopping();
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
                                return view.toastComfirm("taskComfirmFunc", "", "titlePopUpVerify", `<i class="fa-solid fa-xmark"></i>Xác thực thất bại`, "textPopUpError", "Để bảo mật tài khoản, đầu tiên vui lòng nhập mật khẩu cho tài khoản của bạn.", "header", "1");
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
                                view.toastComfirm("taskComfirmFunc", "", "titlePopUpVerify", `<i class="fa-solid fa-check"></i>Đổi email thành công !`, "textPopUpError", "Bạn đã đổi email thành công, vui lòng đến hộp thư của bạn để xác nhận.", "header", "1");
                                window.location.reload();
                            });

                        };
                    });
                });
            }
            //...........................................function xử lý chụp ảnh

            let functionRunTaskImage = () => {
                let taskChangeImage = document.getElementById("taskChangeImage")
                taskChangeImage.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.getElementById("header").style.zIndex = "1";
                    let popUpButtonChangeImage = document.getElementById("popUpButton");
                    popUpButtonChangeImage.innerText = "Thoát";
                    view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-paperclip"></i>Lựa chọn`, "textPopUpError", `
                    <div id ="customclickChangeImage">
                    <button type= "button" id= "clickCameraAndAttachedWithChange" class="clickCameraAndAttachedWithChange"><i class="fa-solid fa-camera"></i></button>
                    <button type= "file" id= "clickAttachedWithChange" class="clickAttachedWithChange"><i class="fa-solid fa-image"></i></button>
                  </div>
                    <div id="imageUploadWrap" class="image-upload-wrap">
                        <input id ="imageUploadInput" class="file-upload-input" type='file' accept="image/*" />
                        <div class="drag-text">
                        <h3 class="h3ChangeImage">Kéo và thả tệp hoặc chọn thêm hình ảnh</h3>
                        </div>
                    </div>
                    <div class="file-upload-content">
                        <img class="file-upload-image" width="200" height="200" src="#" alt="your image" />
                        <div class="image-title-wrap">
                        <button type="button" id= "removeChangeImage" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
                        <button type="button" id ="saveChangeImage" class="saveImage">Save <span class="image-title">Uploaded Image</span></button>

                        </div>
                    </div>`, "header", "1");
                    // phần camera chụp ảnh
                    let clickCameraAndAttachedWithChange = document.getElementById("clickCameraAndAttachedWithChange");
                    let infoPopupChangeImage = document.getElementById("infoPopup");
                    let popUpButtonCamera = document.getElementById("popUpButton")
                    clickCameraAndAttachedWithChange.addEventListener("click", (e) => {
                        e.preventDefault();
                        infoPopupChangeImage.style.width = "900px";
                        infoPopupChangeImage.style.height = "680px";
                        popUpButtonCamera.style.marginLeft = "22rem";
                        // view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-users-viewfinder"></i>Chụp ảnh`, "textPopUpError", `<video id="video" width="200" height="200" autoplay controls playsinline></video><button style="margin: 30px 30px 30px 30px;" id="snapCamera" class="btnNeumorphism"><i class="fa-solid fa-circle-notch"></i>Shot</button></br><canvas id="canvas" width="640" height="250"></canvas>`, "header", "1");
                        view.toastComfirm("taskComfirmFunc", "show", "titlePopUpVerify", `<i class="fa-solid fa-users-viewfinder"></i>Chụp ảnh`, "textPopUpError", 
                        `<div class="backgroundCameraChange">
                        <span class="InmoreBackgroundImage">
                        <video id="video" width="480" height="640" autoplay playsinline></video>
                        </span>
                        </div>
                        <canvas id="canvasChangeImage" width="60" height="60px">aaaaaa</canvas>
                        <button class="snapCamera btnNeumorphism" id="snapCamera"><i class="fa-solid fa-circle-notch"></i></button>`, "header", "1");

                        const video = document.getElementById("video");
                        const canvasChangeImage = document.getElementById("canvasChangeImage");
                        const snapCamera = document.getElementById("snapCamera");
                        const constraints = {
                            audio: false,
                            video: {
                                width: 400, height: 400
                            }
                        }
                        let initWebcam = async () => {
                            try {
                                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                                handleStream(stream)
                            } catch (error) {
                                console.log(error);
                            }
                        }
                        let handleStream = (stream) => {
                            window.stream = stream;
                            video.srcObject = stream
                        }
                        var context = canvasChangeImage.getContext("2d");
                        snapCamera.addEventListener("click", function () {
                            context.drawImage(video, 0, 0, 60, 60);
                            var image = new Image();
                            image.id = "pic"
                            image.src = canvasChangeImage.toDataURL("image/png");
                            console.log(image.src);
                            var button = document.createElement("button");
                            button.textContent = "Upload Image";
                            document.body.appendChild(button);
                            button.onclick = function () {
                                const ref = firebase.storage().ref()
                                ref.child(new Date() + "-" + "base64").putString(image.src, "data_url")
                                    .then(function (snapshot) {
                                        console.log("Image upload");
                                        alert("Image Uploaded")
                                    });
                            };
                        });
                        initWebcam()
                        // tắt phần camera đi
                        let popUpButtonOffCamera = document.getElementById("popUpButton");
                        popUpButtonOffCamera.addEventListener("click", () => {
                            infoPopupChangeImage.style.height = "220px";
                            infoPopupChangeImage.style.width = "440px";
                            popUpButton.style.marginLeft = "8rem";
                            view.toastComfirm("taskComfirmFunc", "", "titlePopUpVerify", `<video id="video" width="200" height="200" autoplay controls playsinline></video></br><canvas id="canvas" width="400" height="250"></canvas>`, "textPopUpError", "", "header", "1");
                        })
                    });
                    // tắt toast
                    let clickAttachedWithChange = document.getElementById("clickAttachedWithChange")
                    popUpButtonChangeImage.addEventListener("click", () => {
                        view.toastComfirm("taskComfirmFunc", "", "titlePopUpVerify", `<i class="fa-solid fa-paperclip"></i>Lựa chọn`, "textPopUpError", `<div id = "customclickChangeImage">
                    <button type= "button" id= "clickCameraAndAttachedWithChange" class="clickCameraAndAttachedWithChange"><i class="fa-solid fa-camera"></i></button>
                    <button type= "button" id= "clickAttachedWithChange" class="clickAttachedWithChange"><i class="fa-solid fa-image"></i></button>
                  </div>`, "header", "1");
                        infoPopupChangeImage.style.height = "220px";
                    });
                    let removeUploadImage = () => {
                        $('.file-upload-input').replaceWith($('.file-upload-input').clone());
                        $('.file-upload-content').hide();
                        $('.image-upload-wrap').show();
                    }
                    $('.image-upload-wrap').bind('dragover', function () {
                        $('.image-upload-wrap').addClass('image-dropping');
                    });
                    $('.image-upload-wrap').bind('dragleave', function () {
                        $('.image-upload-wrap').removeClass('image-dropping');
                    });
                    // click attached xuất ảnh ra màn hình
                    clickAttachedWithChange.addEventListener("click", () => {
                        let imageUploadWrap = document.getElementById("imageUploadWrap")
                        imageUploadWrap.style.visibility = "visible";
                        infoPopupChangeImage.style.height = "550px";
                        let readURLImage = (input) => {
                            if (input.files && input.files[0]) {
                                var reader = new FileReader();
                                reader.onload = function (e) {
                                    $('.image-upload-wrap').hide();
                                    $('.file-upload-image').attr('src', e.target.result);
                                    $('.file-upload-content').show();
                                    $('.image-title').html(input.files[0].name);
                                };
                                reader.readAsDataURL(input.files[0]);
                            }
                            else {
                                removeUploadImage();
                            };
                        };
                        let imageUploadInput = document.getElementById("imageUploadInput");
                        console.log(imageUploadInput);
                        imageUploadInput.addEventListener("change", (e) => {
                            e.preventDefault()
                            readURLImage(this)
                            console.log(readURLImage(imageUploadInput));
                        });
                    });
                    let removeChangeImage = document.getElementById("removeChangeImage");
                    removeChangeImage.addEventListener("click", (e) => {
                        removeUploadImage();
                    });
                    // hiển thị thông báo sau khi cập nhật ảnh
                    view.divToastAfterClickChangeImage = () => {
                        let divToastAfterClickChangeImage = document.createElement("div");
                        let customclickChangeImage = document.getElementById("customclickChangeImage")
                        divToastAfterClickChangeImage.classList.add("toastAfterClickChangeImage")
                        console.log(divToastAfterClickChangeImage);
                        divToastAfterClickChangeImage.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i>&#160;Thành công`
                        customclickChangeImage.append(divToastAfterClickChangeImage);
                    }
                    let saveChangeImage = document.getElementById("saveChangeImage");
                    saveChangeImage.addEventListener("click", (e) => {
                        view.toastLoading("toastLoading", "hidden");
                        controller.saveChangeImage();
                    })
                });
            }


            /*..................................................................................................*/
            // search từ API
            let parentTagA = document.createElement("div");
            parentTagA.classList.add("ItemProduct")
            let textFind = document.getElementById("textFind")
            let createSuggestion = document.getElementById("createSuggestion")
            textFind.innerHTML = `Đăng ký và nhận voucher mua 2 tặng 1 Trà sen vàng <img src="https://cdn-icons-png.flaticon.com/512/5318/5318477.png" alt="5318477.png" width="28px" style="position: absolute; right: 2%; margin-top: -10px;"> `;
            createSuggestion.style.height = "150px";

            let viewSuggestion = () => {
                let inputSearch = document.getElementById("inputSearch").value;
                var API = `http://localhost:8080/api/search?name=${inputSearch}`;
                var pageimage = [];
                if (inputSearch == '') {
                    textFind.innerHTML = `Đăng ký và nhận voucher mua 2 tặng 1 Trà sen vàng <img src="https://cdn-icons-png.flaticon.com/512/5318/5318477.png" alt="5318477.png" width="28px" style="position: absolute; right: 2%; margin-top: -10px;"> `;
                    createSuggestion.style.height = "150px";
                    console.log("nothing");
                    parentTagA.style.visibility = "hidden";
                }
                else {
                    parentTagA.style.visibility = "visible";
                    createSuggestion.style.height = "435px";
                    //đây là function fetch API
                    async function funcSearch(url) {
                        // *{ thằng này là kết quả của API DATA
                        const response = await fetch(url);
                        let data = await response.json();
                        //}*
                        try {
                            renderSearch = ``;
                            for (let i = 0; i < 6; i++) {
                                console.log(data[i]);
                                renderSearch += await `<a class="checkTest" style="color:black;text-decoration: none;" href="#" style="display: flex;">
                            <div>
                              <p><img style="width:30px;margin-right:30px;background-size:cover;" src="${data[i].image}" alt="">${data[i].name}</p>
                          </div>
                          </a>`;
                                parentTagA.innerHTML = renderSearch;
                                let createSuggestion = document.querySelector("#createSuggestion");
                                createSuggestion.append(parentTagA);
                            };
                        } catch (error) {
                            console.log(error.message);
                        }
                    };
                    funcSearch(API);
                };
            };
            let valueInputSearch = document.getElementById("inputSearch");
            valueInputSearch.addEventListener("input", (e) => {
                textFind.innerText = `Bạn đang tìm kiếm "${valueInputSearch.value}"`;
                viewSuggestion();

            });
            // data của các mặt hàng chạy từ API
            let API = 'http://localhost:8080/api/search?name';
            view.displayItems = (url) => {
                controller.displayItems(url)
            }
            view.displayItems(API);
            view.subMenuLogin = (index) => {
                document.getElementById(index).innerHTML =
                    `<div id="subMenuLogin" style="display: flex; text-align: justify; padding:10px 30px; font-size: 14px;">
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
                logOut.addEventListener("click", (e) => {
                    e.preventDefault();
                    controller.logOut();
                });
                // đây là phần chuyển sang trang hồ sơ thông tin sau khi click vào
                let directInfoProfile = document.getElementById("directInfoProfile")
                directInfoProfile.addEventListener("click", async (e) => {
                    e.preventDefault();
                    document.getElementById("containerCart").style.display = "none";
                    let innerInfoProfile = document.getElementById("innerInfoProfile")
                    innerInfoProfile.innerHTML = components.infoProfile;
                    controller.addCart(user);
                    offViewCartShopping();
                    view.toastLoading("toastLoading", "visible")
                    setTimeout(() => {
                        view.toastLoading("toastLoading", "hidden")
                    }, 3000);
                    // DOM phần bảng lựa chọn.
                    let menu = document.querySelector('#menu-btnNeumorphism');
                    let header = document.querySelector('.header');
                    let myAccount = document.getElementById("myAccount");
                    let setting = document.getElementById("setting");
                    let wrapHomeInfoProfile = document.getElementById("wrapHomeInfoProfile");
                    let imageAccount = document.getElementById("imageAccount");
                    myAccount.className = "beingClickMyAccount";
                    imageAccount.src = await firebase.auth().currentUser.photoURL || "https://media.istockphoto.com/id/1127367070/vector/user-member-vector-icon-for-social-net-or-smartphone-ui-app-design-isolated-avatar-profile.jpg?s=612x612&w=0&k=20&c=8OEJ3JyfsyTWi_PGqxlRNwT4VQJElBPuPv9gGlrQx3o=";

                    // bấm vào phần account
                    myAccount.addEventListener("click", (e) => {
                        view.toastLoading("toastLoading", "visible")
                        setTimeout(() => {
                            view.toastLoading("toastLoading", "hidden")
                        }, 2000);
                        setting.className = setting.className.replace("beingClickSetting", "")
                        myAccount.className = "beingClickMyAccount";
                        wrapHomeInfoProfile.innerHTML = components.account;
                        // lưu ý đây là chức năng xử lý dữ liệu khi click lại vào account,
                        // ở bên dưới cũng có 1 chuỗi xử lý dữ liệu như vậy, nhưng là click vào account ban đầu
                        functionChangeEmailAndPasswordInAccount();
                        functionRunTaskImage();
                        offViewCartShopping();

                    }); // end account.
                    // bấm vào phần setting
                    setting.addEventListener("click", (e) => {
                        myAccount.className = myAccount.className.replace("beingClickMyAccount", "");
                        setting.className = "beingClickSetting";
                        view.toastLoading("toastLoading", "visible");
                        setTimeout(() => {
                            view.toastLoading("toastLoading", "hidden")
                            wrapHomeInfoProfile.innerHTML = components.setting;
                            offViewCartShopping();
                            let warningDeleteText = document.getElementById("warningDeleteText");
                            let confirmDeleteAccount = document.getElementById("confirmDeleteAccount");
                            let inputDelete = document.getElementById("formDelete").inputDelete;
                            let buttonDelete = document.getElementById("formDelete")
                            warningDeleteText.innerText = `This action cannot be undone. This will permanently delete the ${user.email} account, wiki, issues, comments, packages, secrets, workflow runs, and remove all collaborator associations.`
                            confirmDeleteAccount.innerHTML = `Please type <strong>${user.email}</strong> to confirm.`;
                            // kiểm tra xác nhận "capcha" trước khi xóa
                            inputDelete.addEventListener("input", (e) => {
                                e.preventDefault();
                                controller.settingDelete(inputDelete.value, user.email);
                            });
                            // bấm xóa tài khoản
                            buttonDelete.addEventListener("submit", (e) => {
                                e.preventDefault();
                                const userDelete = firebase.auth().currentUser;
                                controller.submitDelete(userDelete);
                            });
                            functionRunTaskImage();
                        }, 2000);
                    });

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
                    functionChangeEmailAndPasswordInAccount();
                    functionRunTaskImage();
                });
            };
            // ẩn nút login sau khi đăng nhập thành công
            view.documentStyleDisplay = (id, value) => {
                document.getElementById(id).style.display = value;
            };
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
        case "setting":
            app.innerHTML = components.setting;
            offViewCartShopping();
            break;
    }
}

