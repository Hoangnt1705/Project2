const components = {}
components.cart = ` <body style="background-color: #f6f6f6;" onload="sauKhiDangNhap()">
<div id="toast"></div>
<div id="header">
    <nav class="container">
        <div class="infoHeaderTopL">
            <a href="" class="infoL">Kênh Người Bán</a>&#160;||
            <a href="" class="infoL">Tải ứng dụng</a>&#160;||
            <a href="" class="infoL">Kết nối <i class="fa-solid fa-mug-saucer"></i></a>
        </div>
        <div class="infoHeaderTopR">
            <a href="" class="infoR"><i class="fa-regular fa-bell"></i>&#160;Thông báo</a>
            <a href="" class="infoR">Hỗ trợ</a>
            <a href="" class="infoR"><i class="check49 fa-solid fa-earth-americas"></i>&#160;Tiếng Việt</a>
        </div>
        <a href="" id="logo">
            <img src="./logo.png" alt="Starbucks">
        </a>
        <ul id="main-menu">
            <li>
                <a href="cart.html">ALL &#160;<i class="fa-solid fa-caret-down"></i></a>
                <ul class="sub-menu">
                    <li><a href="">Au Bon Pain</a>
                    <li><a href="">Peet</a>
                    <li><a href="">Caribou</a>
                    <li><a href="">Lavazza</a>
                    <li><a href="">Costa</a>
                    <li><a href="">Panera</a>
                    <li><a href="">Tim Hortons</a>
                    <li><a href="">HighLand Coffee</a>
                    <li><a href="">Trung Nguyen</a>
                    <li><a href="">Phuc Long Coffee</a>
                    <li><a href="">King Coffee</a>
                    <li><a href="">The Coffee House</a>
                </ul>
            </li>
            <li>
                <div class="search" on>
                    <form action="/action_page.php">
                    <input type="text" id="inputSearch" class="inputSearch" name="search" placeholder="&#160;search" autocomplete="off">
                    <button class="font"><i class="fa-solid fa-magnifying-glass" onclick=""></i></button>
                    </form>
                </div>
                <div id="createSuggestion" style="padding-bottom:30px">
                    <h3 id="textFind"></h3>
                    <div id="autoLoadSuggest"></div>       
                </div>
                <div class="thongTinDuoiThanhSearch">
                    <span>Cà phê vị ngọt &#160;&#160;
                        Cà phê đen &#160;&#160;
                        Cà phê dành cho con gái&#160;&#160;
                        Giảm cân&#160;&#160;
                        Cà phê rang&#160;&#160;
                        Cà phê rang ngô
                </div>
            </li>
            <div class="cart-icon">
                <p><i class="fa-solid fa-cart-shopping"></i></p>
            </div>&#160;&#160;&#160;
            <li><a class="liMenuButton" style=" text-align:left; color:#fff;font-weight:500;margin-bottom: -10px; font-size:17px"
                    href="cartLogin.html">
                    <p style="font-size:13px;font-weight:normal; margin: 0 0;">Return</p>& ORDER
                </a>
            </li>
            <li id="truocKhiDangNhap">
                <a class="liMenuButton" id="dangNhapTruoc" 
                    style=" text-align:left; color:#fff;font-weight:500;margin-bottom: -10px; font-size:17px">
                    <p id="profileAfterLogin" style="font-size:13px;font-weight:normal; margin: 0 0; cursor: pointer; ">Hello,
                        sign in</p> <span style=" cursor: pointer;">ĐĂNG NHẬP</span>&#160;<i class="fa-solid fa-caret-down"></i>
                </a>
                <ul id="subMenuLogin" class="sub-menu-login">
                     <input type="button" id="loginForCart" value="Sign In"> 
                     <p class="tagPStartHereBeforeLogin">Khách hàng mới? <a href="#" class="textStartHereBeforeLogin">Bắt đầu ở đây.</a></p>
                     <div id="subMenuLogin" style="display: flex; text-align: justify; padding:10px 30px; font-size: 14px;">
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
                </div>
            </div>
                </ul>
            </li>
        </ul>
    </nav>
</div>
<div style="padding-top: 150px;"></div>

<div id="innerInfoProfile" style="display:flex;"></div>
 <div id="containerCart">
<div class="container full-home-banner">
    <!-- <h2>Carousel Example</h2>   -->
    <div></div>
    <div id=" myCarousel" class="carousel slide full-home-banners__main-banner" data-ride="carousel" " >
      <!-- Indicators -->
      <ol class=" carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner stardust-carousel">
        <div class="item active">
            <img src="./banner4.jpg" alt="Los Angeles" style="width:100%;">
        </div>
        <div class="item">
            <img src="./banner5.jpg" alt="Chicago" style="width:100%;">
        </div>
        <div class="item">
            <img src="./banner6.jpg" alt="New york" style="width:100%;">
        </div>
    </div>
    <!-- Left and right controls -->
    <a class="left-Sl left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right-Sl right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
<div class="full-home-banners__right-wrapper">
    <a href="#" class="full-home-banners__right-banner">
        <div class="n-CE6j_full-home-banners__full-height_full-home-banners__light-background">
            <div class="full-home-banners__right-banner-image_edy5hG"></div>
        </div>
    </a>
    <a href="#" class="full-home-banners__right-banner">
        <div class="n-CE6j_full-home-banners__full-height_full-home-banners__light-background">
            <div class="full-home-banners__right-banner-image_edy5hG2"></div>
        </div>
    </a>
</div>
</div>
<div class="xZ4bbg">
<a href="/m/gi-cung-re-freeship" style="text-decoration: none;">
<div class="KYggX9" style="width: 150px;">
    <div class="_2Ehn-F ybDQTz">
        <div class="n-CE6j dNmwQY">
            <img style="width:52px;height:52px"
                src="https://media3.scdn.vn/img4/2021/12_02/9kXbb4RjnHs0H0JKJokE.png" class="Imghover"
                srcset="https://media3.scdn.vn/img4/2021/12_02/9kXbb4RjnHs0H0JKJokE.png 1x, https://media3.scdn.vn/img4/2021/12_02/9kXbb4RjnHs0H0JKJokE.png 2x">
        </div>
    </div>
    <div class="KSe2W7 TF67TG">Starbucks Fram</div>
</div>
</a>
<a href="/m/gi-cung-re-freeship" style="text-decoration: none;">
<div class="KYggX9" style="width: 150px;">
    <div class="_2Ehn-F ybDQTz">
        <div class="n-CE6j dNmwQY">
            <img style="width:48px;height:48px"
                src="https://salt.tikicdn.com/ts/upload/73/50/e1/83afc85db37c472de60ebef6eceb41a7.png"
                class="Imghover"
                srcset="https://salt.tikicdn.com/cache/w100/ts/upload/73/50/e1/83afc85db37c472de60ebef6eceb41a7.png 1x, https://salt.tikicdn.com/cache/w100/ts/upload/73/50/e1/83afc85db37c472de60ebef6eceb41a7.png 2x">
        </div>
    </div>
    <div class="KSe2W7 TF67TG">Mã Giảm Giá</div>
</div>
</a>
<a href="/m/gi-cung-re-freeship" style="text-decoration: none;">
<div class="KYggX9" style="width: 150px;">
    <div class="_2Ehn-F ybDQTz">
        <div class="n-CE6j dNmwQY">
            <img style="width:51px;height:51px"
                src="https://media3.scdn.vn/img4/2021/01_12/Crz8i79uPgWYZJXgJF79.png" class="Imghover"
                srcset="https://media3.scdn.vn/img4/2021/01_12/Crz8i79uPgWYZJXgJF79.png 1x, https://media3.scdn.vn/img4/2021/01_12/Crz8i79uPgWYZJXgJF79.png 2x">
        </div>
    </div>
    <div class="KSe2W7 TF67TG">Săn Voucher Khuyến Mãi</div>
</div>
</a>
<a href="/m/gi-cung-re-freeship" style="text-decoration: none;">
<div class="KYggX9" style="width: 150px;">
    <div class="_2Ehn-F ybDQTz">
        <div class="n-CE6j dNmwQY">
            <img style="width:51px;height:51px"
                src="https://salt.tikicdn.com/ts/upload/68/9c/2f/6fc82a9a9713a2c2b1968e9760879f6e.png"
                class="Imghover"
                srcset="https://salt.tikicdn.com/ts/upload/68/9c/2f/6fc82a9a9713a2c2b1968e9760879f6e.png 1x, https://salt.tikicdn.com/ts/upload/68/9c/2f/6fc82a9a9713a2c2b1968e9760879f6e.png  2x">
        </div>
    </div>
    <div class="KSe2W7 TF67TG">Đồ Uống Siêu Tốc</div>
</div>
</a>
<a href="/m/gi-cung-re-freeship" style="text-decoration: none;">
<div class="KYggX9" style="width: 150px;">
    <div class="_2Ehn-F ybDQTz">
        <div class="n-CE6j dNmwQY">
            <img style="width:46px;height:46px"
                src="https://salt.tikicdn.com/ts/upload/73/e0/7d/af993bdbf150763f3352ffa79e6a7117.png"
                class="Imghover"
                srcset="https://salt.tikicdn.com/cache/w100/ts/upload/73/e0/7d/af993bdbf150763f3352ffa79e6a7117.png 1x, https://salt.tikicdn.com/cache/w100/ts/upload/73/e0/7d/af993bdbf150763f3352ffa79e6a7117.png 2x">
        </div>
    </div>
    <div class="KSe2W7 TF67TG">Thẻ Thành Viên & Member Card</div>
</div>
</a>
<a href="/m/gi-cung-re-freeship" style="text-decoration: none;">
<div class="KYggX9" style="width: 150px;">
    <div class="_2Ehn-F ybDQTz">
        <div class="n-CE6j dNmwQY">
            <img style="width:48px;height:48px"
                src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FEXq1SfIXIGbES29vheTRE9mMe-FQo8g-6x04PDqOtGo%2Fpreset%3Araw%2Fplain%2F21c12d192ad3c976e750215ab6bef36a-2750566621721983030.jpg&w=256&q=95"
                class="Imghover"
                srcset="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FEXq1SfIXIGbES29vheTRE9mMe-FQo8g-6x04PDqOtGo%2Fpreset%3Araw%2Fplain%2F21c12d192ad3c976e750215ab6bef36a-2750566621721983030.jpg&w=256&q=95 1x, https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FEXq1SfIXIGbES29vheTRE9mMe-FQo8g-6x04PDqOtGo%2Fpreset%3Araw%2Fplain%2F21c12d192ad3c976e750215ab6bef36a-2750566621721983030.jpg&w=256&q=95 2x">
        </div>
    </div>
    <div class="KSe2W7 TF67TG">Vòng Quay May Mắn</div>
</div>
</a>
</div>
<div class=" hfMLFx home_brand">
<!-- <div>
        <p>
            AAAAAAAAAA
        </p>
    </div> -->
<div class="ifHeXL">

<a href="./bannerbot1.png" data-view-id="home_banner_quick" class="side-brand">
    <picture class="webpimg-container">
        <source type="image/webp" srcset="./bannerbot1.png 1x, ./bannerbot1.png 2x">
        <img src="./bannerbot1.png./bannerbot1.png 1x, ./bannerbot1.png 2x"
            class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo">
    </picture>
</a>
<a href="https://www.starbucks.co.uk/" data-view-id="home_banner_quick"
    class="center-brand fWjUGoStarbucks">
    <picture class="webpimg-container">
        <source type="image/webp" srcset="./bannerbothellowen.jpg 1x, ./bannerbothellowen.jpg 2x">
        <img src="./bannerbothellowen.jpg" srcset="./bannerbothellowen.jpg 1x, ./bannerbothellowen.jpg 2x"
            class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo fWjUGoStarbucks">
    </picture>
</a>
<!-- <a href="./bannerbot2.jpg" data-view-id="home_banner_quick" class="side-brand">
        <picture class="webpimg-container">
        <source type="image/webp" srcset="./bannerbot2.jpg 1x, ./bannerbot2.jpg 2x">
        <img src="./bannerbot2.jpg" srcset="./bannerbot2.jpg 1x, ./bannerbot2.jpg 2x" class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo">
    </picture>
</a> -->
</div>
<div id="toastLoading"></div>
<div class="containerdoitac">
<h1>🍁Các Sản Phẩm Liên Kết Phổ Biến</h1>
<ul class="tab">
    <li class="tab-item active" id="trendClick"><img class="imgLienKet"
            src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-HighLands-Coffee.png" alt=""></li>
    <li class="tab-item" id="newClick"><img class="imgLienKet"
            src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/logo-phuc-long-coffee-and-tea.png"
            alt=""></li>
    <li class="tab-item" id="bestSellClick"><img class="imgLienKet" style="width:69px"
            src="https://order.thecoffeehouse.com/_nuxt/img/squarelogo.035676b.png" alt=""></li>
</ul>
<div class="scrollbar scrollbar-primary">
    <div class="force-overflow">
        <div id="trend" class="animation">
            <ul class="product-list colum">
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover1"
                        href=""><img style="z-index:9; width:200px" src="./highland/TRASENVANG.png" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>

                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover2"
                        href=""><img style="width:200px" src="./highland/270_crop_CHOCOLATE-FREEZE.png"
                            alt="">
                        <div class="hoverthongtinsanpham">Chocolate Freeze</div>
                    </a>
                    <div class="pDTGqb">Bán 12k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover3"
                        href=""><img style="width:200px" src="./highland/TRATHACHDAO.png" alt="">
                        <div class="hoverthongtinsanpham">Trà Thạch Đào</div>
                    </a>
                    <div class="pDTGqb">Bán 47k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover4"
                        href=""><img style="width:200px" src="./highland/270_crop_COOKIES-CREAM.png" alt="">
                        <div class="hoverthongtinsanpham">Cookies Cream</div>
                    </a>
                    <div class="pDTGqb">Bán 68k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover5"
                        href=""><img style="width:200px" src="./highland/270_crop_phindi_choco_new.png"
                            alt="">
                        <div class="hoverthongtinsanpham">Phindi Chocolate</div>
                    </a>
                    <div class="pDTGqb">Bán 19k+ / tháng</div>
                </li>
            </ul>
        </div>
        <div id="new" class="animation">
            <ul class="product-list">
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover6"
                        href=""><img style="width:190px" src="./phuclong/phuclong.png" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover7"
                        href=""><img style="width:190px" src="./phuclong/phuclong1.png" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover8"
                        href=""><img style="width:190px" src="./phuclong/phuclong2.png" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover9"
                        href=""><img style="width:190px" src="./phuclong/phuclong3.png" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover10"
                        href=""><img style="width:190px" src="./phuclong/phuclong4.png" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>
                </li>
            </ul>
        </div>
        <div id="best-sell" class="animation">
            <ul class="product-list">
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover11"
                        href=""><img style="width:190px" src="./thecoffeehouse/bannerbot.webp" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover12"
                        href=""><img style="width:190px" src="./thecoffeehouse/bannerbot1.webp" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover13"
                        href=""><img style="width:190px" src="./thecoffeehouse/bannerbot2.webp" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover14"
                        href=""><img style="width:190px" src="./thecoffeehouse/bannerbot3.webp" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>
                </li>
                <li><a class="li-lienket-hover" style="text-decoration: none;" id="li-lienket-hover15"
                        href=""><img style="width:190px" src="./thecoffeehouse/bannerbot4.webp" alt="">
                        <div class="hoverthongtinsanpham">Trà Sen Vàng</div>
                    </a>
                    <div class="pDTGqb">Bán 77k+ / tháng</div>
                </li>

            </ul>
        </div>
    </div>
</div>
</div>
</div>
<nav class="stardust-tabs-header-wrapper" style="top: 12.6rem">
<ul class="stardust-tabs-header">
<li class="stardust-tabs-header__tab stardust-tabs-header__tab--active">
    <div class="FA284N N-5qHu" style="background: rgb(238, 77, 45);">

    </div>
    <div class="FJibgJ">
        <span style="color: #006341;">GỢI Ý HÔM NAY</span>
    </div>
</li>
</ul>
<i class="stardust-tabs-header__tab-indicator" style=" width: 100%; transform: translateX(0%);">
</i>
</nav>
<section class="product">
<div class="container" id="container">
<div id="productItems" class="product-items"></div>
</section>
<section class="cart">
<i class="fa-regular fa-circle-xmark iconcancel"></i>
<h2>Giỏ hàng</h2>
<form action="">
<table>
    <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chọn</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<div style="text-align: right;" class="price-total">
    <p style="font-weight: bold; padding-left: -20px">Tổng tiền:&#160;
        <span></span><sup>đ</sup>&#160;&#160;&#160;
    </p>
</div>
<button>đặt đơn</button>
</form>
</section>
<div style="justify-content: center;display: flex;margin-top: -70px;"><div class="pagination">
<a href="#">&laquo;</a>
<a href="#">1</a>
<a href="#" class="active">2</a>
<a href="#">3</a>
<a href="#">4</a>
<a href="#">5</a>
<a href="#">6</a>
<a href="#">&raquo;</a>
</div></div>
<!-- chatCskhPhongTo -->
<div id="starbuckMiniChatEmbeddedLarge" style="position: fixed; right: 8px; bottom: 0px; z-index: 99999">
    <div class="src-pages-Entry-index__root--1G_Ox">
    <div class="src-pages-Entry-index__logo-wrapper--IqLfz">
        <i class="_3kEAcT1Mk5 src-pages-Entry-index__chat--3rr3d">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="chat-icon">
                <path
                    d="M18 6.07a1 1 0 01.993.883L19 7.07v10.365a1 1 0 01-1.64.768l-1.6-1.333H6.42a1 1 0 01-.98-.8l-.016-.117-.149-1.783h9.292a1.8 1.8 0 001.776-1.508l.018-.154.494-6.438H18zm-2.78-4.5a1 1 0 011 1l-.003.077-.746 9.7a1 1 0 01-.997.923H4.24l-1.6 1.333a1 1 0 01-.5.222l-.14.01a1 1 0 01-.993-.883L1 13.835V2.57a1 1 0 011-1h13.22zm-4.638 5.082c-.223.222-.53.397-.903.526A4.61 4.61 0 018.2 7.42a4.61 4.61 0 01-1.48-.242c-.372-.129-.68-.304-.902-.526a.45.45 0 00-.636.636c.329.33.753.571 1.246.74A5.448 5.448 0 008.2 8.32c.51 0 1.126-.068 1.772-.291.493-.17.917-.412 1.246-.74a.45.45 0 00-.636-.637z">
    
                </path>
            </svg>
        </i>
        <i class="_3kEAcT1Mk5 src-pages-Entry-index__logo--2m8Mr">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 22" class="chat-icon">
                <path
                    d="M9.286 6.001c1.161 0 2.276.365 3.164 1.033.092.064.137.107.252.194.09.085.158.064.203 0 .046-.043.182-.194.251-.26.182-.17.433-.43.752-.752a.445.445 0 00.159-.323c0-.172-.092-.3-.227-.365A7.517 7.517 0 009.286 4C5.278 4 2 7.077 2 10.885s3.256 6.885 7.286 6.885a7.49 7.49 0 004.508-1.484l.022-.043a.411.411 0 00.046-.71v-.022a25.083 25.083 0 00-.957-.946.156.156 0 00-.227 0c-.933.796-2.117 1.205-3.392 1.205-2.846 0-5.169-2.196-5.169-4.885C4.117 8.195 6.417 6 9.286 6zm32.27 9.998h-.736c-.69 0-1.247-.54-1.247-1.209v-3.715h1.96a.44.44 0 00.445-.433V9.347h-2.45V7.035c-.021-.043-.066-.065-.111-.043l-1.603.583a.423.423 0 00-.29.41v1.362h-1.781v1.295c0 .238.2.433.445.433h1.337v4.19c0 1.382 1.158 2.505 2.583 2.505H42v-1.339a.44.44 0 00-.445-.432zm-21.901-6.62c-.739 0-1.41.172-2.013.496V4.43a.44.44 0 00-.446-.43h-1.788v13.77h2.234v-4.303c0-1.076.895-1.936 2.013-1.936 1.117 0 2.01.86 2.01 1.936v4.239h2.234v-4.561l-.021-.043c-.202-2.088-2.012-3.723-4.223-3.723zm10.054 6.785c-1.475 0-2.681-1.12-2.681-2.525 0-1.383 1.206-2.524 2.681-2.524 1.476 0 2.682 1.12 2.682 2.524 0 1.405-1.206 2.525-2.682 2.525zm2.884-6.224v.603a4.786 4.786 0 00-2.985-1.035c-2.533 0-4.591 1.897-4.591 4.246 0 2.35 2.058 4.246 4.59 4.246 1.131 0 2.194-.388 2.986-1.035v.604c0 .237.203.431.453.431h1.356V9.508h-1.356c-.25 0-.453.173-.453.432z">
    
                </path>
            </svg>
        </i>
    </div>
    </div>
    </div>
    <!-- chatCskhThuNho -->
    
    <div id="starbuckMiniChatEmbedded" style="position: fixed; right: 8px; bottom: 0px; z-index: 99999;display:none;">
    <div class="src-pages-ChatWindow-index__container--1qoj1">
    <div class="src-pages-ChatWindow-index__header--USXSl">
        <div class="src-pages-ChatWindow-index__logo-wrapper--1rM8W">
            <i class="_3kEAcT1Mk5 src-pages-ChatWindow-index__logo--3ygfr">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 22" class="chat-icon"
                    style="color: #006341;">
                    <path
                        d="M9.286 6.001c1.161 0 2.276.365 3.164 1.033.092.064.137.107.252.194.09.085.158.064.203 0 .046-.043.182-.194.251-.26.182-.17.433-.43.752-.752a.445.445 0 00.159-.323c0-.172-.092-.3-.227-.365A7.517 7.517 0 009.286 4C5.278 4 2 7.077 2 10.885s3.256 6.885 7.286 6.885a7.49 7.49 0 004.508-1.484l.022-.043a.411.411 0 00.046-.71v-.022a25.083 25.083 0 00-.957-.946.156.156 0 00-.227 0c-.933.796-2.117 1.205-3.392 1.205-2.846 0-5.169-2.196-5.169-4.885C4.117 8.195 6.417 6 9.286 6zm32.27 9.998h-.736c-.69 0-1.247-.54-1.247-1.209v-3.715h1.96a.44.44 0 00.445-.433V9.347h-2.45V7.035c-.021-.043-.066-.065-.111-.043l-1.603.583a.423.423 0 00-.29.41v1.362h-1.781v1.295c0 .238.2.433.445.433h1.337v4.19c0 1.382 1.158 2.505 2.583 2.505H42v-1.339a.44.44 0 00-.445-.432zm-21.901-6.62c-.739 0-1.41.172-2.013.496V4.43a.44.44 0 00-.446-.43h-1.788v13.77h2.234v-4.303c0-1.076.895-1.936 2.013-1.936 1.117 0 2.01.86 2.01 1.936v4.239h2.234v-4.561l-.021-.043c-.202-2.088-2.012-3.723-4.223-3.723zm10.054 6.785c-1.475 0-2.681-1.12-2.681-2.525 0-1.383 1.206-2.524 2.681-2.524 1.476 0 2.682 1.12 2.682 2.524 0 1.405-1.206 2.525-2.682 2.525zm2.884-6.224v.603a4.786 4.786 0 00-2.985-1.035c-2.533 0-4.591 1.897-4.591 4.246 0 2.35 2.058 4.246 4.59 4.246 1.131 0 2.194-.388 2.986-1.035v.604c0 .237.203.431.453.431h1.356V9.508h-1.356c-.25 0-.453.173-.453.432z">
    
                    </path>
                </svg>
            </i>
        </div>
        <div class="src-pages-ChatWindow-index__operator-wrapper--Wcn9j">
            <div class="src-pages-ChatWindow-index__operator-item-wrapper--2_9Si">
                <div class="">
                    <i
                        class="_3kEAcT1Mk5 src-pages-ChatWindow-index__hide-dialog--1STCP src-pages-ChatWindow-index__operator-item--JM24S">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="chat-icon">
                            <path
                                d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H9v-1h5V2H9V1h5zM2 13v1h1v1H2a1 1 0 01-.993-.883L1 14v-1h1zm6 1v1H4v-1h4zM2 3.999V12H1V3.999h1zm5.854 1.319l2.828 2.828a.5.5 0 010 .708l-2.828 2.828a.5.5 0 11-.708-.707L9.121 9H4.5a.5.5 0 010-1h4.621L7.146 6.025a.5.5 0 11.708-.707zM3 1v1H2v.999H1V2a1 1 0 01.883-.993L2 1h1zm5 0v1H4V1h4z">
    
                            </path>
                        </svg>
                    </i>
                </div>
            </div>
            <div class="src-pages-ChatWindow-index__operator-item-wrapper--2_9Si">
                <div class="">
                    <i id="starbuckMiniChatEmbeddedSmall"
                        class="_3kEAcT1Mk5 src-pages-ChatWindow-index__minimize--3dPxE src-pages-ChatWindow-index__operator-item--JM24S">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon">
                            <path
                                d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zm0 1H2v12h12V2zm-2.904 5.268l-2.828 2.828a.5.5 0 01-.707 0L4.732 7.268a.5.5 0 11.707-.707l2.475 2.475L10.39 6.56a.5.5 0 11.707.707z">
    
                            </path>
                        </svg>
                    </i>
                </div>
            </div>
        </div>
    </div>
    <div class="src-pages-ChatWindow-index__windows--3KL4n">
        <div class="src-components-Common-Toast-index__root--KRxFo src-components-Common-Toast-index__hide--AnmmH"
            style="transition: opacity 200ms ease-in-out 0s; opacity: 0;">
            <div class="src-components-Common-Toast-index__message--1WynW">
    
            </div>
        </div>
        <div class="src-pages-ChatWindow-index__details--3uIPO">
            <div class="src-pages-ChatWindow-index__blank--2pLm1">
                <div class="src-pages-ChatWindow-index__plate--2ADRp">
                    <img src="https://www.starbucks.co.uk/sites/starbucks-uk/files/styles/c05_tabbed_525x416/public/2020-07/Rewards_C05-Cup.png.webp?itok=wUnAWSxN"
                        class="src-pages-ChatWindow-index__image--3GQ-r">
                </div>
                <div class="src-pages-ChatWindow-index__title--200qt">Xin Chào!</div>
            </div>
        </div>
        <div class="src-pages-ConversationLists-index__root--3_OYj">
            <div class="src-pages-ConversationLists-Headerbar-index__root--1dKOe">
                <div class="src-pages-ConversationLists-Headerbar-index__search--3qaBZ">
                    <input class="src-pages-ConversationLists-Headerbar-index__input--1vfwR"
                        placeholder="Tìm theo tên khách hàng" value="">
                    <div class="src-pages-ConversationLists-Headerbar-index__wrapper--2E1h9 ">
                        <i class="_3kEAcT1Mk5 src-pages-ConversationLists-Headerbar-index__icon--2Eyzi">
                            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="chat-icon">
                                <g transform="translate(3 3)">
                                    <path
                                        d="M393.846 708.923c174.012 0 315.077-141.065 315.077-315.077S567.858 78.77 393.846 78.77 78.77 219.834 78.77 393.846s141.065 315.077 315.077 315.077zm0 78.77C176.331 787.692 0 611.36 0 393.845S176.33 0 393.846 0c217.515 0 393.846 176.33 393.846 393.846 0 217.515-176.33 393.846-393.846 393.846z">
                                    </path>
                                    <rect transform="rotate(135 825.098 825.098)" x="785.713" y="588.79"
                                        width="78.769" height="472.615" rx="1"></rect>
                                </g>
                            </svg></i>
                    </div>
                </div>
                <div
                    class="src-pages-ConversationLists-Headerbar-index__filter--2-eFW src-pages-ConversationLists-Headerbar-index__reddot-filter--1McFP">
                    <div class="MVc6-6sBJu">
                        <div class="src-pages-ConversationLists-Headerbar-index__selected--2-Frn">Tất cả<i
                                class="_3kEAcT1Mk5 src-pages-ConversationLists-Headerbar-index__arrow-down--32-9v"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="chat-icon">
                                    <path d="M6.243 6.182L9.425 3l1.06 1.06-4.242 4.243L2 4.061 3.06 3z"></path>
                                </svg></i></div>
                    </div>
                </div>
            </div>
            <div class="src-pages-ConversationLists-index__conversation-lists--gMnh8">
                <div class="_3YurerlznH src-pages-ConversationLists-ConversationCells-index__empty--2z4Bf"><img style="cursor:pointer;"
                        src="https://www.starbucks.co.uk/sites/starbucks-uk/files/styles/c05_tabbed_525x416/public/2020-07/Rewards_C05-Hand_new.png.webp?itok=U3a0Jlku"
                        class="_1jxtCX6jiG" href="https://friendlychat-143db.web.app/">
                    <a href="https://friendlychat-143db.web.app/" class="_3l9IBXMpxr" style="margin-left: 10px;">Click! Cộng đồng trò chuyện và hỗ trợ cùng bạn.</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="ReactModalPortal"></div>
    </div>
</body>
</div>

    <footer>
        <div class="footer-gray">
        <div class="footer-custom">
        <div class="footer-lists" style="width:100%">
            <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Đặt hàng miễn phí</h6>
                <ul class="ftr-links-sub">
                    <li>800-952-5592</li>
                </ul>
                <h6 class="ftr-hdr">Quốc gia</h6>
                <ul class="ftr-links-sub">
                    <li><a href="http://www.art.fr" rel="nofollow">Việt Nam</a></li>
                    <li><a href="https://www.art.co.uk" rel="nofollow">United Kingdom</a></li>
                </ul>
            </div>
            <!--/.footer-list-wrap-->
            <div class="footer-list-wrap" style="padding-left:5px">
                <h6 class="ftr-hdr">Dịch vụ khách hàng</h6>
                <ul class="ftr-links-sub">
                    <li><a href="/help/talktous.html" rel="nofollow">Contact Us</a></li>
                    <li><a href="/help/placingorders.html" rel="nofollow">Ordering</a></li>
                    <li><a href="/help/shipping.html" rel="nofollow">Shipping &amp; Delivery</a></li>
                    <li><a href="/help/shippingreturns.html" rel="nofollow">Returns</a></li>
                    <li><a href="/help/international-shipping.html" rel="nofollow">International Orders</a></li>
                    <li><a href="/~/egift-cards/" rel="nofollow">Gift Cards</a></li>
                    <li><a href="/help/faq.html" rel="nofollow">FAQs</a></li>
                </ul>
            </div>
            <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Về chúng tôi</h6>
                <ul class="ftr-links-sub">
                    <li><a href="/asp/aboutus/default-asp/_/posters.htm" rel="nofollow">Di sản</a></li>
                    <li><a href="http://corporate.art.com/careers" rel="nofollow">Công ty</a></li>
                    <li><a href="/asp/landing/artistrising" rel="nofollow">Cơ hội nghề nghiệp</a></li>
                    <li><a href="/~/art-for-business" rel="nofollow">Business &amp; Trade Sales</a></li>
                    <li><a href="http://affiliates.art.com/index.aspx" rel="nofollow">Affiliate Program</a></li>
                </ul>
            </div>
            <!--/.footer-list-wrap-->
            <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Tài khoản</h6>
                <ul class="ftr-links-sub">
                    <art:content rule="!loggedin">
                        <li class="ftr-Login"><span class="link login-trigger">Access My Account</span></li>
                        <li><span class="link"
                                onclick="link('/asp/secure/your_account/track_orders-asp/_/posters.htm')">Track My
                                Order</span></li>
                    </art:content>
                    <art:content rule="loggedin">
                        <li class="ftr-Login"><span class="link ftr-access-my-account">Access My Account</span></li>
                        <li><span class="link"
                                onclick="window.location.href = getProfileKey() + '?pagetype=oh';">Track My
                                Order</span></li>
                    </art:content>
                </ul>
            </div>
            <!--/.footer-list-wrap-->
        </div>
        <!--/.footer-lists-->
        <div class="footer-email">
            <h6 class="ftr-hdr">Đăng ký cho các ưu đãi độc quyền</h6>
            <div id="ftr-email" class="ftr-email-form">
                <form id="ftrEmailForm" method="post" action="http://em.art.com/pub/rf">
                    <div class="error">Please enter a valid email address</div>
                    <input type="text" name="email_address_" id="ftrEmailInput" class="input"
                        placeholder="Enter email address" />
                    <!--
                      -->
                    <input type="submit" class="button" value="SUBMIT" />
                    <input type="hidden" name="country_iso2" value="">
                    <input type="hidden" name="language_iso2" value="en">
                    <input type="hidden" name="site_domain" value="art.com">
                    <input type="hidden" name="email_acq_source" value="01-000001">
                    <input type="hidden" name="email_acq_date" value="" id="ftr-email-date">
                    <input type="hidden" name="brand_id" value="ART">
                    <input type="hidden" name="_ri_"
                        value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk">
                </form>
            </div>
            <!--/.ftr-email-form-->
            <div class="ftr-email-privacy-policy"></div>
        </div>
        <!--/.footer-email-->
        <div class="footer-social">
            <h6 class="ftr-hdr">Follow Us</h6>
            <ul>
                <li>
                    <a href="https://www.facebook.com/art.com" title="Facebook"
                        onclick="_gaq.push(['_trackSocial', 'Facebook', 'Follow', 'Footer', 'undefined', 'True']);">
                        <img width="24" height="24" alt="Like us on Facebook"
                            src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png">
                    </a>
                </li>
                <li>
                    <a href="https://plus.google.com/108089796661280870153" title="Google+"
                        onclick="_gaq.push(['_trackSocial', 'GooglePlus', 'Follow', 'Footer', 'undefined', 'True']);">
                        <img width="24" height="24" alt="Follow us on Google+"
                            src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png">
                    </a>
                </li>
                <li>
                    <a href="https://pinterest.com/artdotcom/" target="_blank">
                        <img width="24" height="24" alt="Follow us on Pinterest"
                            src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png">
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://instagram.com/artdotcom/">
                        <img width="24" height="24" alt="Follow us on Instagram"
                            src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png">
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/artdotcom" title="Twitter"
                        onclick="_gaq.push(['_trackSocial', 'Twitter', 'Follow', 'Footer', 'undefined', 'True']);">
                        <img width="67" alt="Follow us on Twitter"
                            src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png">
                    </a>
                </li>
            </ul>
        </div>
        <!--/.footer-social-->
        
        <!--/.footer-legal-->
        <div class="footer-payment">
            <ul>
                <li class="ftr-stella">
                    <span title="Stella Service"
                        onclick="openLink('http://www.stellaservice.com/profile/Art.com/')"></span>
                </li>
                <li>
                    <span onclick="clickTrack(); return false;" onmouseover="this.style.cursor='pointer'"><img
                            border="0" alt="HACKER SAFE certified sites prevent over 99.9% of hacker crime."
                            src="https://images.scanalert.com/meter/www.art.com/31.gif"></span>
                </li>
                <li class="ftr-bbb">
                    <span title="BBB"
                        onclick="openLink('http://www.bbb.org/raleigh-durham/business-reviews/art-suppliers/artcom-inc-in-raleigh-nc-5001914')"></span>
                </li>
            </ul>
        </div>
        <!--/.footer-payment-->
        </div>
        <!--/.footer-custom-->
        </div>
        <!--/.footer-gray-->
        <div class='lentop'>
        <div>
        <i class="lendtop fa-solid fa-arrow-up"></i>
        </div>
        </div>
        </footer>
        <footer class="site-footer">
        <div class="container">
        <div class="row" style=" display:flex;">
        <div class="footer-legal" style="width:65%;font-size:13px;">
            <p>&copy; 1996-2022, Starbucks.com, Inc. or its affiliates | <a href="/help/privacy-policy.html"
                    rel="nofollow">Khả năng truy cập Web</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Chính Sách Bảo Mật Thông Tin</a> | <a
                    href="/help/terms-of-sale.html" rel="nofollow">Điều khoản Sử dụng</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Sơ đồ Trang web</a> | <a
                    href="/help/terms-of-sale.html" rel="nofollow">Tùy Chọn Cookie</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Lựa chọn tín nhiệm</a> | <a
                    href="/help/terms-of-sale.html" rel="nofollow">Các chức năng lề</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Tùy chỉnh đồ họa</a> | <a
                    href="/help/terms-of-sale.html" rel="nofollow">Chức năng chuẩn bị update</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Chức năng update</a> | <a
                    href="/help/terms-of-sale.html" rel="nofollow">Dịch vụ đi kèm</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Search</a> | <a href="/help/terms-of-sale.html"
                    rel="nofollow">Phụ lục chức năng</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Công cụ bán hàng</a> | <a
                    href="/help/terms-of-sale.html" rel="nofollow">Terms of Sale</a>
            </p>
        </div>
        <div class="footer-legal"
            style="width:15%;transform: rotate(270deg);margin-left:60px;padding-top:100px;font-weight:bold;font-size:25px">
            <p id="starbuck-footerlate" style="margin: 0 -113px 10px;">Starbucks <sup>&copy;</sup></p>
        </div>
        </div>
        </div>
        </footer>`;

components.login = `
<div id="toast"></div>
<div id="toastLoading"></div>
<nav class="axexMF">
<div class="D3jUo5">
    <div class="_0L93MD"><a class="UbNlH7" href="/" style="display: flex; margin-left: 200px; margin-bottom: 20px;">         
       <img style="width:7%" src="https://1000logos.net/wp-content/uploads/2016/12/Starbucks-Logo.png" alt="">
        </a>
        <div class="u9tve2">Đăng nhập</div>
</nav>
<section class="vh-100">
<div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://seaga.com/wp-content/uploads/2019/04/starbucks-logo-png-transparent-pngpix-5301.png"
                class="img-fluid" alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form id="loginForm">
                <div style="margin-bottom: 78px" class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p class="lead fw-normal mb-0 me-3">Đăng nhập với</p>
                    <button type="button" class="btnLinkLogin btnNeumorphism-primary btnNeumorphism-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" class="btnLinkLogin btnNeumorphism-primary btnNeumorphism-floating mx-1">
                        <i class="fab fa-twitter"></i>
                    </button>
                    <button type="button" class="btnLinkLogin btnNeumorphism-primary btnNeumorphism-floating mx-1">
                        <i class="fab fa-linkedin-in"></i>
                    </button>
                </div>
                <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0"></p>
                </div>
                <!-- Email input -->
                <div class="form-outline mb-4">
                <label id="labelEmail" class="form-label-register" for="form3Example3">Địa chỉ email</label>
                <label id="errorEmail" style="color:red"></label></br>
                <input type="email" class="inputChangeProfile" name="email" class="form-control form-control-lg"
                placeholder="Mời bạn nhập email" />
                </div>
                <!-- Password input -->
                <div class="form-outline mb-3">
                <label id="labelPassword" class="form-label-register" for="form3Example4">Mật khẩu</label>
                <label id="errorPassword" style="color:red"></label></br>
                <input type="password" class="inputChangeProfile" name="password" class="form-control form-control-lg"
                placeholder="Mời bạn nhập mật khẩu" />
                </div> 
                <div class="d-flex justify-content-between align-items-center">
                    <!-- Checkbox -->
                    <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3">
                            Ghi nhớ đăng nhập
                        </label>
                    </div>
                    <a href="#!" class="text-body">Quên mật khẩu?</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" class="btnLinkLogin btnNeumorphism-primary btnNeumorphism-lg"
                        style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                    <p  class="small fw-bold mt-2 pt-1 mb-0">Bạn không có mật khẩu? <a id="registerForRegister" href="#!"
                            class="link-danger">Đăng ký</a></p>
                </div>

            </form>
        </div>
    </div>
</div>
</section>
<footer>
        <div class="footer-gray">
        <div class="footer-custom">
        <div class="footer-lists" style="width:100%">
            <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Đặt hàng miễn phí</h6>
                <ul class="ftr-links-sub">
                    <li>800-952-5592</li>
                </ul>
                <h6 class="ftr-hdr">Quốc gia</h6>
                <ul class="ftr-links-sub">
                    <li><a href="http://www.art.fr" rel="nofollow">Việt Nam</a></li>
                    <li><a href="https://www.art.co.uk" rel="nofollow">United Kingdom</a></li>
                </ul>
            </div>
            <!--/.footer-list-wrap-->
            <div class="footer-list-wrap" style="padding-left:5px">
                <h6 class="ftr-hdr">Dịch vụ khách hàng</h6>
                <ul class="ftr-links-sub">
                    <li><a href="/help/talktous.html" rel="nofollow">Contact Us</a></li>
                    <li><a href="/help/placingorders.html" rel="nofollow">Ordering</a></li>
                    <li><a href="/help/shipping.html" rel="nofollow">Shipping &amp; Delivery</a></li>
                    <li><a href="/help/shippingreturns.html" rel="nofollow">Returns</a></li>
                    <li><a href="/help/international-shipping.html" rel="nofollow">International Orders</a></li>
                    <li><a href="/~/egift-cards/" rel="nofollow">Gift Cards</a></li>
                    <li><a href="/help/faq.html" rel="nofollow">FAQs</a></li>
                </ul>
            </div>
            <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Về chúng tôi</h6>
                <ul class="ftr-links-sub">
                    <li><a href="/asp/aboutus/default-asp/_/posters.htm" rel="nofollow">Di sản</a></li>
                    <li><a href="http://corporate.art.com/careers" rel="nofollow">Công ty</a></li>
                    <li><a href="/asp/landing/artistrising" rel="nofollow">Cơ hội nghề nghiệp</a></li>
                    <li><a href="/~/art-for-business" rel="nofollow">Business &amp; Trade Sales</a></li>
                    <li><a href="http://affiliates.art.com/index.aspx" rel="nofollow">Affiliate Program</a></li>
                </ul>
            </div>
            <!--/.footer-list-wrap-->
            <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Tài khoản</h6>
                <ul class="ftr-links-sub">
                    <art:content rule="!loggedin">
                        <li class="ftr-Login"><span class="link login-trigger">Access My Account</span></li>
                        <li><span class="link" onclick="link('/asp/secure/your_account/track_orders-asp/_/posters.htm')">Track My
                                Order</span></li>
                    </art:content>
                    <art:content rule="loggedin">
                        <li class="ftr-Login"><span class="link ftr-access-my-account">Access My Account</span></li>
                        <li><span class="link" onclick="window.location.href = getProfileKey() + '?pagetype=oh';">Track My
                                Order</span></li>
                    </art:content>
                </ul>
            </div>
            <!--/.footer-list-wrap-->
        </div>
        <!--/.footer-lists-->
        <div class="footer-email">
            <h6 class="ftr-hdr">Đăng ký cho các ưu đãi độc quyền</h6>
            <div id="ftr-email" class="ftr-email-form">
                <form id="ftrEmailForm" method="post" action="http://em.art.com/pub/rf">
                    <div class="error">Please enter a valid email address</div>
                    <input type="text" name="email_address_" id="ftrEmailInput" class="input" placeholder="Enter email address">
                    <!--
                      -->
                    <input type="submit" class="button" value="SUBMIT">
                    <input type="hidden" name="country_iso2" value="">
                    <input type="hidden" name="language_iso2" value="en">
                    <input type="hidden" name="site_domain" value="art.com">
                    <input type="hidden" name="email_acq_source" value="01-000001">
                    <input type="hidden" name="email_acq_date" value="" id="ftr-email-date">
                    <input type="hidden" name="brand_id" value="ART">
                    <input type="hidden" name="_ri_" value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk">
                </form>
            </div>
            <!--/.ftr-email-form-->
            <div class="ftr-email-privacy-policy"></div>
        </div>
        <!--/.footer-email-->
        <div class="footer-social">
            <h6 class="ftr-hdr">Follow Us</h6>
            <ul>
                <li>
                    <a href="https://www.facebook.com/art.com" title="Facebook" onclick="_gaq.push(['_trackSocial', 'Facebook', 'Follow', 'Footer', 'undefined', 'True']);">
                        <img width="24" height="24" alt="Like us on Facebook" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png">
                    </a>
                </li>
                <li>
                    <a href="https://plus.google.com/108089796661280870153" title="Google+" onclick="_gaq.push(['_trackSocial', 'GooglePlus', 'Follow', 'Footer', 'undefined', 'True']);">
                        <img width="24" height="24" alt="Follow us on Google+" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png">
                    </a>
                </li>
                <li>
                    <a href="https://pinterest.com/artdotcom/" target="_blank">
                        <img width="24" height="24" alt="Follow us on Pinterest" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png">
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://instagram.com/artdotcom/">
                        <img width="24" height="24" alt="Follow us on Instagram" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png">
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/artdotcom" title="Twitter" onclick="_gaq.push(['_trackSocial', 'Twitter', 'Follow', 'Footer', 'undefined', 'True']);">
                        <img width="67" alt="Follow us on Twitter" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png">
                    </a>
                </li>
            </ul>
        </div>
        <!--/.footer-social-->
        
        <!--/.footer-legal-->
        <div class="footer-payment">
            <ul>
                <li class="ftr-stella">
                    <span title="Stella Service" onclick="openLink('http://www.stellaservice.com/profile/Art.com/')"></span>
                </li>
                <li>
                    <span onclick="clickTrack(); return false;" onmouseover="this.style.cursor='pointer'"><img border="0" alt="HACKER SAFE certified sites prevent over 99.9% of hacker crime." src="https://images.scanalert.com/meter/www.art.com/31.gif"></span>
                </li>
                <li class="ftr-bbb">
                    <span title="BBB" onclick="openLink('http://www.bbb.org/raleigh-durham/business-reviews/art-suppliers/artcom-inc-in-raleigh-nc-5001914')"></span>
                </li>
            </ul>
        </div>
        <!--/.footer-payment-->
        </div>
        <!--/.footer-custom-->
        </div>
        <!--/.footer-gray-->
        <div class="lentop" style="display: block;">
        <div>
        <i class="lendtop fa-solid fa-arrow-up"></i>
        </div>
        </div>
        </footer>
        <footer class="site-footer">
        <div class="container">
        <div class="row" style=" display:flex;">
        <div class="footer-legal" style="width:65%;font-size:13px;">
            <p>© 1996-2022, Starbucks.com, Inc. or its affiliates | <a href="/help/privacy-policy.html" rel="nofollow">Khả năng truy cập Web</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Chính Sách Bảo Mật Thông Tin</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Điều khoản Sử dụng</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Sơ đồ Trang web</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Tùy Chọn Cookie</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Lựa chọn tín nhiệm</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Các chức năng lề</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Tùy chỉnh đồ họa</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Chức năng chuẩn bị update</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Chức năng update</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Dịch vụ đi kèm</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Search</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Phụ lục chức năng</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Công cụ bán hàng</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Terms of Sale</a>
            </p>
        </div>
        <div class="footer-legal" style="width:15%;transform: rotate(270deg);margin-left:60px;padding-top:100px;font-weight:bold;font-size:25px">
            <p id="starbuck-footerlate" style="margin: 0 -113px 10px;">Starbucks <sup>©</sup></p>
        </div>
        </div>
        </div>
        </footer>`;

components.register = `
<nav class="axexMF">
<div class="D3jUo5">
    <div class="_0L93MD"><a class="UbNlH7" href="/" style="display: flex; margin-left: 200px; margin-bottom: 20px;">         
       <img style="width:7%" src="https://1000logos.net/wp-content/uploads/2016/12/Starbucks-Logo.png" alt="">
        </a>
        <div class="u9tve2">Đăng ký</div>
</nav>
<div id="toastLoading"></div>
<section class="vh-100">
<div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://seaga.com/wp-content/uploads/2019/04/starbucks-logo-png-transparent-pngpix-5301.png"
                class="img-fluid" alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form action="" id="registerForm">
                <div style="margin-bottom: 78px" class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p class="lead fw-normal mb-0 me-3">Đăng ký với</p>
                    <button type="button" class="btnLinkLogin btnNeumorphism-primary btnNeumorphism-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btnLinkLogin btnNeumorphism-primary btnNeumorphism-floating mx-1">
                        <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button" class="btnLinkLogin btnNeumorphism-primary btnNeumorphism-floating mx-1">
                        <i class="fab fa-linkedin-in"></i>
                    </button>
                </div>

                <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0"></p>
                </div>
                <!-- Username input -->
                <div class="form-outline mb-5">
                <label id ="labelUsername" class="form-label-register" for="form3Example3">Họ và tên</label>
                <label id="errorUsername" style="color:red"></label></br>
                    <input type="text" class="inputChangeProfile" name="username" class="form-control form-control-lg"
                        placeholder="Mời bạn nhập tên tài khoản" />
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                <label id="labelEmail" class="form-label-register" for="form3Example3">Địa chỉ email</label>
                <label id="errorEmail" style="color:red"></label></br>
                    <input type="email" class="inputChangeProfile" name="email" class="form-control form-control-lg"
                        placeholder="Mời bạn nhập email" />

                </div>

                <!-- Password input -->
                <div class="form-outline mb-3">
                <label id="labelPassword" class="form-label-register" for="form3Example4">Mật khẩu</label>
                <label id="errorPassword" style="color:red"></label></br>
                    <input type="password" class="inputChangeProfile" name="password" class="form-control form-control-lg"
                    placeholder="Mời bạn nhập mật khẩu" />
                </div> 
                <div class="form-outline mb-3">
                <label id="labelComfirmPassword" class="form-label-register" for="form3Example4">Xác thực</label>
                <label id="errorComfirmPassword" style="color:red"></label></br>
                <input type="password" class="inputChangeProfile" name="comfirmPassword" class="form-control form-control-lg"
                    placeholder="Mời bạn xác thực mật khẩu" />
            </div>

                <div class="d-flex justify-content-between align-items-center">
                    <!-- Checkbox -->
                    <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3">
                            Bạn có đồng ý với điều khoản bảo mật ? <span style="color:red"> Điều khoản bảo mật </span> <a href="#!"
                            class="link-danger">tại đây</a> 
                        </label>
                    </div>
                    
                </div>
                <a   href="#!" id="registerNextToLogin" class="text-body">Đăng nhập?</a>

                <div class="text-center text-lg-start mt-4 pt-2">

                    <button type="submit" id="submitRegister" class="btnLinkLogin btnNeumorphism-primary btnNeumorphism-lg" 
                        style="padding-left: 2.5rem; padding-right: 2.5rem;">Đăng ký</button>

                    <p class="small fw-bold mt-2 pt-1 mb-0">Bạn không có mật khẩu? <a href="#!"
                            class="link-danger">Đăng ký</a></p>
                </div>

            </form>
        </div>
    </div>
</div>
</section>
<footer>
        <div class="footer-gray">
        <div class="footer-custom">
        <div class="footer-lists" style="width:100%">
            <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Đặt hàng miễn phí</h6>
                <ul class="ftr-links-sub">
                    <li>800-952-5592</li>
                </ul>
                <h6 class="ftr-hdr">Quốc gia</h6>
                <ul class="ftr-links-sub">
                    <li><a href="http://www.art.fr" rel="nofollow">Việt Nam</a></li>
                    <li><a href="https://www.art.co.uk" rel="nofollow">United Kingdom</a></li>
                </ul>
            </div>
            <!--/.footer-list-wrap-->
            <div class="footer-list-wrap" style="padding-left:5px">
                <h6 class="ftr-hdr">Dịch vụ khách hàng</h6>
                <ul class="ftr-links-sub">
                    <li><a href="/help/talktous.html" rel="nofollow">Contact Us</a></li>
                    <li><a href="/help/placingorders.html" rel="nofollow">Ordering</a></li>
                    <li><a href="/help/shipping.html" rel="nofollow">Shipping &amp; Delivery</a></li>
                    <li><a href="/help/shippingreturns.html" rel="nofollow">Returns</a></li>
                    <li><a href="/help/international-shipping.html" rel="nofollow">International Orders</a></li>
                    <li><a href="/~/egift-cards/" rel="nofollow">Gift Cards</a></li>
                    <li><a href="/help/faq.html" rel="nofollow">FAQs</a></li>
                </ul>
            </div>
            <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Về chúng tôi</h6>
                <ul class="ftr-links-sub">
                    <li><a href="/asp/aboutus/default-asp/_/posters.htm" rel="nofollow">Di sản</a></li>
                    <li><a href="http://corporate.art.com/careers" rel="nofollow">Công ty</a></li>
                    <li><a href="/asp/landing/artistrising" rel="nofollow">Cơ hội nghề nghiệp</a></li>
                    <li><a href="/~/art-for-business" rel="nofollow">Business &amp; Trade Sales</a></li>
                    <li><a href="http://affiliates.art.com/index.aspx" rel="nofollow">Affiliate Program</a></li>
                </ul>
            </div>
            <!--/.footer-list-wrap-->
            <div class="footer-list-wrap">
                <h6 class="ftr-hdr">Tài khoản</h6>
                <ul class="ftr-links-sub">
                    <art:content rule="!loggedin">
                        <li class="ftr-Login"><span class="link login-trigger">Access My Account</span></li>
                        <li><span class="link" onclick="link('/asp/secure/your_account/track_orders-asp/_/posters.htm')">Track My
                                Order</span></li>
                    </art:content>
                    <art:content rule="loggedin">
                        <li class="ftr-Login"><span class="link ftr-access-my-account">Access My Account</span></li>
                        <li><span class="link" onclick="window.location.href = getProfileKey() + '?pagetype=oh';">Track My
                                Order</span></li>
                    </art:content>
                </ul>
            </div>
            <!--/.footer-list-wrap-->
        </div>
        <!--/.footer-lists-->
        <div class="footer-email">
            <h6 class="ftr-hdr">Đăng ký cho các ưu đãi độc quyền</h6>
            <div id="ftr-email" class="ftr-email-form">
                <form id="ftrEmailForm" method="post" action="http://em.art.com/pub/rf">
                    <div class="error">Please enter a valid email address</div>
                    <input type="text" name="email_address_" id="ftrEmailInput" class="input" placeholder="Enter email address">
                    <!--
                      -->
                    <input type="submit" class="button" value="SUBMIT">
                    <input type="hidden" name="country_iso2" value="">
                    <input type="hidden" name="language_iso2" value="en">
                    <input type="hidden" name="site_domain" value="art.com">
                    <input type="hidden" name="email_acq_source" value="01-000001">
                    <input type="hidden" name="email_acq_date" value="" id="ftr-email-date">
                    <input type="hidden" name="brand_id" value="ART">
                    <input type="hidden" name="_ri_" value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk">
                </form>
            </div>
            <!--/.ftr-email-form-->
            <div class="ftr-email-privacy-policy"></div>
        </div>
        <!--/.footer-email-->
        <div class="footer-social">
            <h6 class="ftr-hdr">Follow Us</h6>
            <ul>
                <li>
                    <a href="https://www.facebook.com/art.com" title="Facebook" onclick="_gaq.push(['_trackSocial', 'Facebook', 'Follow', 'Footer', 'undefined', 'True']);">
                        <img width="24" height="24" alt="Like us on Facebook" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png">
                    </a>
                </li>
                <li>
                    <a href="https://plus.google.com/108089796661280870153" title="Google+" onclick="_gaq.push(['_trackSocial', 'GooglePlus', 'Follow', 'Footer', 'undefined', 'True']);">
                        <img width="24" height="24" alt="Follow us on Google+" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png">
                    </a>
                </li>
                <li>
                    <a href="https://pinterest.com/artdotcom/" target="_blank">
                        <img width="24" height="24" alt="Follow us on Pinterest" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png">
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://instagram.com/artdotcom/">
                        <img width="24" height="24" alt="Follow us on Instagram" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png">
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/artdotcom" title="Twitter" onclick="_gaq.push(['_trackSocial', 'Twitter', 'Follow', 'Footer', 'undefined', 'True']);">
                        <img width="67" alt="Follow us on Twitter" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png">
                    </a>
                </li>
            </ul>
        </div>
        <!--/.footer-social-->
        
        <!--/.footer-legal-->
        <div class="footer-payment">
            <ul>
                <li class="ftr-stella">
                    <span title="Stella Service" onclick="openLink('http://www.stellaservice.com/profile/Art.com/')"></span>
                </li>
                <li>
                    <span onclick="clickTrack(); return false;" onmouseover="this.style.cursor='pointer'"><img border="0" alt="HACKER SAFE certified sites prevent over 99.9% of hacker crime." src="https://images.scanalert.com/meter/www.art.com/31.gif"></span>
                </li>
                <li class="ftr-bbb">
                    <span title="BBB" onclick="openLink('http://www.bbb.org/raleigh-durham/business-reviews/art-suppliers/artcom-inc-in-raleigh-nc-5001914')"></span>
                </li>
            </ul>
        </div>
        <!--/.footer-payment-->
        </div>
        <!--/.footer-custom-->
        </div>
        <!--/.footer-gray-->
        <div class="lentop" style="display: block;">
        <div>
        <i class="lendtop fa-solid fa-arrow-up"></i>
        </div>
        </div>
        </footer>
        <footer class="site-footer">
        <div class="container">
        <div class="row" style=" display:flex;">
        <div class="footer-legal" style="width:65%;font-size:13px;">
            <p>© 1996-2022, Starbucks.com, Inc. or its affiliates | <a href="/help/privacy-policy.html" rel="nofollow">Khả năng truy cập Web</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Chính Sách Bảo Mật Thông Tin</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Điều khoản Sử dụng</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Sơ đồ Trang web</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Tùy Chọn Cookie</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Lựa chọn tín nhiệm</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Các chức năng lề</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Tùy chỉnh đồ họa</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Chức năng chuẩn bị update</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Chức năng update</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Dịch vụ đi kèm</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Search</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Phụ lục chức năng</a>
                | <a href="/help/terms-of-use.html" rel="nofollow">Công cụ bán hàng</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Terms of Sale</a>
            </p>
        </div>
        <div class="footer-legal" style="width:15%;transform: rotate(270deg);margin-left:60px;padding-top:100px;font-weight:bold;font-size:25px">
            <p id="starbuck-footerlate" style="margin: 0 -113px 10px;">Starbucks <sup>©</sup></p>
        </div>
        </div>
        </div>
        </footer>`;

components.infoProfile = `
<body style="padding-left: 30rem; !importaint">
<header class="header" >
    <div class="user">
    <a class="" id="taskChangeImage" href="">
          <span class="glyphicon glyphicon-camera"></span>
        </a>
        <img id="imageAccount" style="border:none;" src="" alt="">
        <h3>Construction Loading...</h3>
        <p>Sửa hồ sơ</p>
    </div>
    <nav class="navbar">
        <a class="" style="padding-left: 20px;" href="#home"><i class="fa-solid fa-gift">&#160;</i>Siêu sale sinh nhật</a>
        <a id="myAccount" style="padding-left:20px !important" class="btnNavBarInfoProfile" href="#about"><i class="fa-solid fa-person"></i>&#160;Tài Khoản Của Tôi</a>
        <a class="btnNavBarInfoProfile"  href="#services"><i class="fa-solid fa-down-long"></i></i>&#160;</i>Đơn Mua</a>
        <a class="btnNavBarInfoProfile" href="#portfolio"><i class="fa-solid fa-bell"></i>&#160;Thông Báo</a>
        <a class="btnNavBarInfoProfile" href="#contact"><i class="fa-solid fa-barcode"></i>&#160;kho Voucher</a>
        <a id= "setting" style="padding-left:20px" class="btnNavBarInfoProfile" href="#contact"><i class="fa-solid fa-gear"></i></i>&#160;Cài đặt</a>
    </nav>
</header>
<!-- header section ends -->
<div id="menu-btnNeumorphism" class="fas fa-bars"></div>
<!-- theme toggler  -->
<div id="theme-toggler" class="fas fa-moon"></div>
<!-- home div starts  -->
<div id="wrapHomeInfoProfile">
<div class="home" id="homeInfoProfile">
    <h1 class="titleHoSoCuaToi titleHoSoCuaToiNeumorphism">Hồ Sơ Của Tôi</h1>
    <p class="titleHoSoCuaToiMore">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
    <div class="content">
    <div id="taskComfirmFunc" >
        <div>
            <div class="starbuck-popup starbuck-modal__transition-enter-done">
                <div class="starbuck-popup__overlay"></div>
                <div class="starbuck-popup__container">
                    <div id= "infoPopup" >
                        <div id="titlePopUpVerify" class="titlePopUp"></div>
                        <div id="textPopUpError" class="textPopUpError"></div>
                    </div>
                    <div >
                    <button type="button" id="popUpButton" class="popUpButton">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Tên đăng nhập</a>
        <input id= "usernameInProVerify" class="inputChangeProfile"
            type="text">
    </div>
    <div id="toastLoading"></div>
    <div class="content" style="margin-left: 12rem;">
        <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Mật khẩu</a><span class="textChangeProfile">*************</span>
        <a href="#" id="clickChangePassword" class="changeEmail">Thay đổi</a>
    </div>
    <div class="content" style="margin-left: 15rem;">

        <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Email</a><span id = "emailInProVerify" class="textChangeProfile"></span>
        <a href="#" id="changeEmail" class="changeEmail">Thay đổi</a>
    </div>
    <div class="content" style="margin-left: 8.5rem;">

        <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Số điện thoại</a><span class="textChangeProfile">Construction Buiding....</span>
        <a href="#" id="changePhone" class="changeEmail">Thay đổi</a>
    </div>
    <div class="content" style="margin-right: 35.1rem;display: flex">
        <div>
        <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Giới tính</a>
        </div>
        <div style="margin-top: 30px;">
        <a href="" class="btnGender">Nam</a><a href="" class="btnGender">Nữ</a><a href="" class="btnGender">Khác</a>
        </div>
    </div>
    <div class="share">
        <a href=""></a> <a href="#" class="fa-solid fa-floppy-disk"></a>
    </div>
</div>
</div>
<section class="cart">
<i class="fa-regular fa-circle-xmark iconcancel"></i>
<h2>Giỏ hàng</h2>
<form action="">
<table>
    <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chọn</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<div style="text-align: right;" class="price-total">
    <p style="font-weight: bold; padding-left: -20px">Tổng tiền:&#160;
        <span></span><sup>đ</sup>&#160;&#160;&#160;
    </p>
</div>
<button>đặt đơn</button>
</form>
</section>
</body>
`
components.infoProfileVerify = `
<form action="" id="buttonFormVerify">
<div class="home" id="homeInfoProfile">
    <h1 class="titleHoSoCuaToi titleHoSoCuaToiNeumorphism">Xác thực </h1>
    <p class="titleHoSoCuaToiMore" style="margin-right: 53rem">Để bảo mật tài khoản, vui lòng xác thực mật khẩu để tiến hành thay đổi</p>
    <div class="content">
    <div id="taskComfirmFunc">
        <div>
            <div class="starbuck-popup starbuck-modal__transition-enter-done">
                <div class="starbuck-popup__overlay"></div>
                <div class="starbuck-popup__container">
                    <div id="infoPopup" >
                        <div id ="titlePopUpVerify" class="titlePopUp"><i class="fa-solid fa-xmark"></i>Xác thực thất bại</div>
                        <div id="textPopUpError" class="textPopUpError"></div>
                    </div>
                    <div>
                    <button type="button" id="popUpButtonVerify" class="popUpButton">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div id="toastLoading"></div>
    <div class="content">
    <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Tên đăng nhập</a><input name="emailVerify" class="inputChangeProfile" value="tuanhoang1705@gmail.com" type="text">
    </div>
    <div class="content" style="margin-left: 5rem;">
        <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Mật khẩu</a>
        <input name="passwordVerify" id="passwordVerify" class="inputChangeProfile" type="password">
    </div>
    <div class="share">
        <a href=""></a> <a href="#" class="fa-solid fa-floppy-disk buttonVerify" id="buttonVerify"></a>
    </div>
</div>
</form>
<section class="cart">
<i class="fa-regular fa-circle-xmark iconcancel"></i>
<h2>Giỏ hàng</h2>
<form action="">
<table>
    <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chọn</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<div style="text-align: right;" class="price-total">
    <p style="font-weight: bold; padding-left: -20px">Tổng tiền:&#160;
        <span></span><sup>đ</sup>&#160;&#160;&#160;
    </p>
</div>
<button>đặt đơn</button>
</form>
</section>`;
components.taskChangeEmail = `
<form action="" id="formChangeEmail">
<div class="home" id="homeInfoProfile">
    <h1 class="titleHoSoCuaToi titleHoSoCuaToiNeumorphism">Đổi Email </h1>
    <p class="titleHoSoCuaToiMore" style="margin-right: 53rem">Vui lòng tiến hành đổi Email</p>
    <div class="content">
    <div id="taskComfirmFunc">
    <div>
        <div class="starbuck-popup starbuck-modal__transition-enter-done">
            <div class="starbuck-popup__overlay"></div>
            <div class="starbuck-popup__container">
                <div id="infoPopup" >
                    <div id ="titlePopUpVerify" class="titlePopUp"><i class="fa-solid fa-xmark"></i>Xác thực thất bại</div>
                    <div id="textPopUpError" class="textPopUpError"></div>
                </div>
                <div>
                <button type="button" id="popUpButtonChangeEmail" class="popUpButton">OK</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    <div id="toastLoading"></div>
    <div class= "titleInputChangeEmail"> 
    <i class="titleInputChangeEmail">Email phải đẩy đủ các ký tự @, .vn, .com...</i>
    </div>
    <div id="errorInputChangeEmail"></div>
    <div class="content" style="margin-left: 5rem;">
        <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Email</a>
        <input type="email" name="changeEmail" id="changeEmail" class="inputChangeProfile">
    </div>
    <div class="share">
        <a href=""></a> <a href="#" class="fa-solid fa-floppy-disk buttonVerify" id="buttonChangeEmail"></a>
    </div>
</div>
</form>
<section class="cart">
<i class="fa-regular fa-circle-xmark iconcancel"></i>
<h2>Giỏ hàng</h2>
<form action="">
<table>
    <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chọn</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<div style="text-align: right;" class="price-total">
    <p style="font-weight: bold; padding-left: -20px">Tổng tiền:&#160;
        <span></span><sup>đ</sup>&#160;&#160;&#160;
    </p>
</div>
<button>đặt đơn</button>
</form>
</section>`;
components.taskChangePassword = `<form action="" id="formChangePassword">
<div class="home" id="homeInfoProfile">
    <h1 class="titleHoSoCuaToi titleHoSoCuaToiNeumorphism">Đổi mật khẩu </h1>
    <p class="titleHoSoCuaToiMore" style="margin-right: 64rem">Vui lòng tiến hành đổi mật khẩu</p>
    <div class="content">
    <div id="taskComfirmFunc">
        <div>
            <div class="starbuck-popup starbuck-modal__transition-enter-done">
                <div class="starbuck-popup__overlay"></div>
                <div class="starbuck-popup__container">
                    <div id="infoPopup" >
                        <div id ="titlePopUpVerify" class="titlePopUp"><i class="fa-solid fa-xmark"></i>Xác thực thất bại</div>
                        <div id="textPopUpError" class="textPopUpError"></div>
                    </div>
                    <div>
                    <button type="button" id="popUpButtonChangePassword" class="popUpButton">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div id="toastLoading"></div>
    <div id="errorInputChangePassword"></div>
    <div style="
    margin-left: 21rem;" class="content">
    <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Mật khẩu</a>
    <input type="password" name="changePassword" class="inputChangeProfile">
    </div>
    <div id="errorInputComfirmChangePassword"></div>
    <div class="content" style="margin-left: 13rem;">
        <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Xác thực mật khẩu</a>
        <input type="password" id="comfirmChangePassword" name="comfirmChangePassword" class="inputChangeProfile">
    </div>
    <div class="share">
        <a href=""></a> <a href="#" class="fa-solid fa-floppy-disk buttonVerify" id="buttonChangePassword"></a>
    </div>
</div>
</form>
<section class="cart">
<i class="fa-regular fa-circle-xmark iconcancel"></i>
<h2>Giỏ hàng</h2>
<form action="">
<table>
    <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chọn</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<div style="text-align: right;" class="price-total">
    <p style="font-weight: bold; padding-left: -20px">Tổng tiền:&#160;
        <span></span><sup>đ</sup>&#160;&#160;&#160;
    </p>
</div>
<button>đặt đơn</button>
</form>
</section>`;

components.account = `<div class="home" id="homeInfoProfile">
<h1 class="titleHoSoCuaToi titleHoSoCuaToiNeumorphism">Hồ Sơ Của Tôi</h1>
<p class="titleHoSoCuaToiMore">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
<div class="content">
<div id="taskComfirmFunc" >
    <div>
        <div class="starbuck-popup starbuck-modal__transition-enter-done">
            <div class="starbuck-popup__overlay"></div>
            <div class="starbuck-popup__container">
                <div id= "infoPopup" >
                    <div id="titlePopUpVerify" class="titlePopUp"></div>
                    <div id="textPopUpError" class="textPopUpError"></div>
                </div>
                <div >
                <button type="button" id="popUpButton" class="popUpButton">OK</button>
                </div>
            </div>
        </div>
    </div>
</div>
    <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Tên đăng nhập</a>
    <input id= "usernameInProVerify" class="inputChangeProfile"
        type="text">
</div>
<div id="toastLoading"></div>
<div class="content" style="margin-left: 12rem;">
    <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Mật khẩu</a><span class="textChangeProfile">*************</span>
    <a href="#" id="clickChangePassword" class="changeEmail">Thay đổi</a>
</div>
<div class="content" style="margin-left: 15rem;">

    <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Email</a><span id = "emailInProVerify" class="textChangeProfile"></span>
    <a href="#" id="changeEmail" class="changeEmail">Thay đổi</a>
</div>
<div class="content" style="margin-left: 8.5rem;">

    <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Số điện thoại</a><span class="textChangeProfile">0392609539</span>
    <a href="#" id="changePhone" class="changeEmail">Thay đổi</a>
</div>
<div class="content" style="margin-right: 35.1rem;display: flex">
    <div>
    <a href="#" style="margin-bottom:32px" class="btnNeumorphism">Giới tính</a>
    </div>
    <div style="margin-top: 30px;">
    <a href="" class="btnGender">Nam</a><a href="" class="btnGender">Nữ</a><a href="" class="btnGender">Khác</a>
    </div>
</div>
<div class="share">
    <a href=""></a> <a href="#" class="fa-solid fa-floppy-disk"></a>
</div>
</div>
<section class="cart">
<i class="fa-regular fa-circle-xmark iconcancel"></i>
<h2>Giỏ hàng</h2>
<form action="">
<table>
    <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chọn</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<div style="text-align: right;" class="price-total">
    <p style="font-weight: bold; padding-left: -20px">Tổng tiền:&#160;
        <span></span><sup>đ</sup>&#160;&#160;&#160;
    </p>
</div>
<button>đặt đơn</button>
</form>
</section>`;

components.setting =
    `
    <div id="wrapSetting" class="">
    <div data-view-component="true" class="Subhead">
        <h2 data-view-component="true" class="Subhead-heading">General</h2>
    </div>
    <div class="content">
                    <div id="taskComfirmFunc" >
                        <div>
                            <div class="starbuck-popup starbuck-modal__transition-enter-done">
                                <div class="starbuck-popup__overlay"></div>
                                <div class="starbuck-popup__container">
                                    <div id= "infoPopup" >
                                        <div id="titlePopUpVerify" class="titlePopUp"></div>
                                        <div id="textPopUpError" class="textPopUpError" style="padding-left: 15px;"></div>
                                    </div>
                                    <div >
                                    <button type="button" id="popUpButton" class="popUpButton" style="right: 10%">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    <div class="Box">
        <form class="js-repo-features-form" data-autosubmit="true" data-turbo="false"
             accept-charset="UTF-8" method="post"><input type="hidden"
                name="_method" value="put" autocomplete="off"><input type="hidden" name="authenticity_token"
                value="JaVwCDDFfrrTm0EQr1bYSNuLGiSM1b2IMEFpdG-g814qf6TdbJSY1zmHGm07k0O9B9GOCKEyTeBmokxr_VZ-fA">
            <div class="Box-row py-0">
            <div id="toastLoading"></div>
                <div role="group" aria-label="Wikis"
                style="padding-bottom: 10px"
                    class="form-checkbox js-repo-option js-toggler-container wikis-options on">
                    <input type="hidden" name="has_wiki" value="0">
                    <input type="checkbox" name="has_wiki" value="1" class="js-toggler-target"
                        aria-describedby="wiki-feature-desc" id="wiki-feature" checked="">
                    <label for="wiki-feature">Wikis</label>
                    <span class="status-indicator ml-1 js-status-indicator">
                    </span>
                    <p id="wiki-feature-desc" class="note">
                        Wikis host documentation for your account.
                    </p>
                    <div class="form-checkbox js-repo-option wikis-restrict-editing">
                        <input type="hidden" name="wiki_access_to_pushers" value="0">
                        <input type="checkbox" name="wiki_access_to_pushers" value="1"
                            aria-describedby="wiki-pusher-access-desc" id="wiki-pusher-access" checked="">
                        <label for="wiki-pusher-access">Restrict editing to collaborators only</label>
                        <span class="status-indicator ml-1 js-status-indicator">
                        </span>
                        <p id="wiki-pusher-access-desc" class="note">Public wikis will still be readable by
                            everyone.</p>
                    </div>
                </div>
            </div>
            
            <div class="Box-row py-0">
                <div style="padding-bottom: 10px" class="form-checkbox js-repo-option">
                    <input type="hidden" name="has_issues" value="0">
                    <input type="checkbox" name="has_issues" value="1" aria-describedby="issues-desc"
                        id="issue-feature" checked="">
                    <label for="issue-feature">Issues</label>
                    <span class="status-indicator ml-1 js-status-indicator">
                    </span>
                    <p id="issues-desc" class="note">
                        Issues integrate lightweight task tracking into your account.
                        Keep projects on track with issue labels and milestones, and reference them in commit
                        messages.
                    </p>

                    <div data-view-component="true" class="flash my-3">


                        <div class="d-flex flex-md-row flex-column flex-md-items-center flex-items-start">
                            <div class="mb-md-0 mb-3">
                                <h3 class="h5 mb-2">Get organized with issue templates</h3>
                                <p class="pr-6 mb-0">Give contributors issue templates that help you cut through the
                                    noise and help them push your project forward.</p>
                            </div>
                            <div>
                                <a href="" class="btnSetting btnNeumorphism-primary">
                                    Set up templates
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Box-row py-0">
                <div style="padding-bottom: 10px" class="form-checkbox js-repo-option">
                    <input type="hidden" name="enable_Account_funding_links" value="0">
                    <input type="checkbox" name="enable_Account_funding_links"
                        aria-describedby="account-funding-links-feature-desc"
                        id="account-funding-links-feature" value="1">
                    <label  for="account-funding-links-feature">Sponsorships</label>
                    &nbsp;
                    <span class="status-indicator v-align-top ml-1 js-status-indicator">
                    </span>
                    <p id="account-funding-links-feature-desc" class="note">
                        Sponsorships help your community know how to financially support this account.
                    </p>
                    <div data-view-component="true" class="flash my-3">


                        <div class="d-flex flex-md-row flex-column flex-md-items-center flex-items-start">
                            <div class="mb-md-0 mb-3">
                                <h3 class="h5 mb-2">
                                    Display a "Sponsor" button
                                </h3>
                                <p class="pr-6 mb-0">
                                    Add links to Starbuck Sponsors or third-party methods your account accepts for
                                    financial contributions to your project.
                                </p>
                            </div>

                            <div>
                                <a class="btnSetting btnNeumorphism-primary"
                                    
                                    href="">Set up sponsor button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Box-row py-0">
                <div class="form-checkbox js-repo-option">
                    <input type="hidden" name="archive_program_opt_out_enabled" value="1">
                    <input type="checkbox" name="archive_program_opt_out_enabled" value="0"
                        aria-describedby="archive-program-opt-out-feature-desc" id="archive-program-opt-out-feature"
                        checked="">
                    <label for="archive-program-opt-out-feature">
                        Preserve this account
                    </label>
                    <span class="status-indicator ml-1 js-status-indicator">
                    </span>
                    <p id="archive-program-opt-out-feature-desc" class="note color-fg-muted">
                        Include this code in the <a style ="color: rgb(102, 204, 153);" href="https://archiveprogram.starbuck.com/faq/">Starbuck Archive
                            Program</a>.
                    </p>
                </div>
            </div>

            <noscript>
                <button type="submit" data-view-component="true" class="btnNeumorphism-primary btnNeumorphism"> Save changes
                </button>
            </noscript>
        </form>
        <form class="border-top js-repo-features-form" data-autosubmit="true" data-turbo="false"
             accept-charset="UTF-8" method="post"><input
                type="hidden" name="_method" value="put" autocomplete="off"><input type="hidden"
                name="authenticity_token"
                value="0xjEJThe961cWBUZLRZRe-Eq8SrjJl9aHFIu-Xh5-jke6Usy0grnH15osKhndgYxsSpy6RE3RCuKcHkGis7-fQ">
            <div class="Box-row py-0">
                <div class="form-checkbox js-repo-option">
                    <input type="hidden" name="has_discussions" value="0">
                    <input type="checkbox" name="has_discussions" value="1"
                        aria-describedby="discussions-feature-desc" id="discussions-feature">
                    <label for="discussions-feature">Discussions</label>
                    <span class="status-indicator ml-1 js-status-indicator">
                    </span>
                    <p id="discussions-feature-desc" class="note">
                        Discussions is the space for your community to have conversations,
                        ask questions and post answers without opening issues.
                    </p>
                </div>
            </div>
        </form>
        <div data-view-component="true" class="flash ml-5 mr-3 my-3">


            <div class="d-flex flex-md-row flex-column flex-md-items-center flex-items-start">
                <div class="mb-md-0 mb-3">
                    <h3 class="h5 mb-2">Get started with Discussions</h3>
                    <p class="pr-6 mb-0">Engage your community by having discussions right in your account, where
                        your community already lives</p>
                </div>
                <div>
                    <form data-turbo="false" class="" method="post"><input class="btnSetting btnNeumorphism-primary"
                            type="submit" value="Set up discussions"><input type="hidden" name="authenticity_token"
                            value="R4A4cfNWtAgRb4SxLDjrH30SO4b_GcbjP-xxsjt4fS2ERrLFOqrLudd6_TNPPDGUBTC9T6048vn9KRj65GyDlw">
                    </form>
                </div>
            </div>
        </div>
        <form class="border-top js-repo-features-form" data-autosubmit="true" data-turbo="false"
             accept-charset="UTF-8" method="post"><input type="hidden"
                name="_method" value="put" autocomplete="off"><input type="hidden" name="authenticity_token"
                value="Ayho88Hx6ydxEkImTYZcG8MqZrvm0jM9CAAzUtZuB9L-aqqEu7tx97CRkKYLorfne2xcfFtGjjduF8txvjftDA">
            <div class="Box-row py-0">
                <div style="padding-top: 5px" class="form-checkbox js-repo-option">
                    <input type="hidden" name="memex_projects_enabled" value="0">
                    <input type="checkbox" name="memex_projects_enabled"
                        aria-describedby="memex-projects-feature-desc" id="memex-projects-feature" value="1"
                        checked="">
                    <label for="memex-projects-feature">Check my projects</label>
                    <span class="status-indicator v-align-top ml-1 js-status-indicator">
                    </span>
                    <p id="memex-projects-feature-desc" class="note">
                        Projects on Starbuck are created at the account owner's level
                        (organization or user) and can be linked to a account's Projects tab.
                        Projects are suitable for cross-account development efforts such as
                        feature work, complex product roadmaps or even Issue triage.
                    </p>
                </div>

            </div>
        </form>
    </div>
    <div class="taskDelete">
    <div class="flex-auto">
    <strong style="color:rgb(192, 57, 43);">Are you absolutely sure?</strong>
    <p class="warningDelete mb-0">
        Unexpected bad things will happen if you don’t read this!
    </p>
    <p id ="warningDeleteText" class=" mb-0"></p>
    <p id ="confirmDeleteAccount"></p>
</div>
    <form action="" accept-charset="UTF-8" method="" id ="formDelete">
        <p>
            <input type="text" id="inputDelete" name="inputDelete" class="form-control input-block">
        </p>
        <button data-disable-invalid="" type="submit" data-view-component="true" id = "buttonDelete" name ="buttonDelete" class="btnDelete btnNeumorphism-danger btnNeumorphism btnNeumorphism-block"disabled>
         <span class="d-md-inline-block d-none">I understand the consequences, delete this account</span>
            <span class="d-inline-block d-md-none">Delete this account</span>
        </button>
    </form>
    <div class="flex-auto">
        <strong>Delete this account</strong>

        <p class="mb-0">
            Once you delete a account, there is no going back. Please be certain.
        </p>
    </div>
    </div>
</div>
<section class="cart">
<i class="fa-regular fa-circle-xmark iconcancel"></i>
<h2>Giỏ hàng</h2>
<form action="">
<table>
    <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chọn</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<div style="text-align: right;" class="price-total">
    <p style="font-weight: bold; padding-left: -20px">Tổng tiền:&#160;
        <span></span><sup>đ</sup>&#160;&#160;&#160;
    </p>
</div>
<button>đặt đơn</button>
</form>
</section>`;

