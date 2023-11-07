/**
 * @Author: Your name
 * @Date:   2023-11-01 06:33:38
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-07 16:18:02
 */
//三个判断变量，用于定义在不同 登录状态/网页布局 下的导航栏行为
let isUserMenuOpen = false;
let isMobileMenuOpen = false;
let isUserLoggedIn = true;

/**
 * 简单来说，该函数能控制导航栏下拉行为。
 * 在打开用户菜单或访客菜单时，切换用户图标。
 * 该函数负责控制用户菜单（user-popup）的显示和隐藏，以及用户图标（user-icon）的切换。
 * 1. 如果用户已登录，它会切换用户菜单（user-popup）的可见性和用户图标的图像。
 * 2. 如果用户未登录，它会切换访客菜单（guest-popup）的可见性和用户图标的图像。
 * 3. 无论登录与否，当打开用户菜单或访客菜单时，若移动菜单（mobile-menu）已被开启，则强制关闭已开启的菜单。反之亦然。
 */
function openUser() {
    let x = document.getElementById("user-popup");
    let y = document.getElementById("user-icon");

    if (isUserLoggedIn) { // 用户已登录，执行用户菜单切换逻辑
            if (!isUserMenuOpen) { //当用户菜单未打开时
                x.className += " responsive-user";
                //y.src = "img/close.svg";
                if (body.classList.contains("dark")) {
                    y.src = "img/close_white.svg";
                } else if (body.classList.contains("light")) {
                    y.src = "img/close_black.svg";
                }
                isUserMenuOpen = true;

                // 关闭移动菜单（如果已打开）
                if (isMobileMenuOpen) {
                    let mobileMenu = document.getElementById("mobile-menu");
                    let mobileMenuIcon = document.getElementById("menu-icon");
                    mobileMenu.className = "mobile-menu";
                    //mobileMenuIcon.src = "img/menu_white.svg";
                    if (body.classList.contains("dark")) {
                        mobileMenuIcon.src = "img/menu_white.svg";
                    } else if (body.classList.contains("light")) {
                        mobileMenuIcon.src = "img/menu_black.svg";
                    }
                    isMobileMenuOpen = false;
                }
            } else { //如果用户菜单已经打开
                x.className = "user-popup";
                //y.src = "img/user_white.svg";
                if (body.classList.contains("dark")) {
                    y.src = "img/user_white.svg";
                } else if (body.classList.contains("light")) {
                    y.src = "img/user_black.svg";
                }
                isUserMenuOpen = false;
            }
        } else { // 用户未登录，执行用访客菜单切换逻辑
            let x = document.getElementById("guest-popup");
            if (!isUserMenuOpen) { //当用户菜单未打开时
                x.className += " responsive-user";
                //y.src = "img/close.svg";
                if (body.classList.contains("dark")) {
                    y.src = "img/close_white.svg";
                } else if (body.classList.contains("light")) {
                    y.src = "img/close_black.svg";
                }
                isUserMenuOpen = true;
                
                // 关闭移动菜单（如果已打开）
                if (isMobileMenuOpen) {
                    let mobileMenu = document.getElementById("mobile-menu");
                    let mobileMenuIcon = document.getElementById("menu-icon");
                    mobileMenu.className = "mobile-menu";
                    //mobileMenuIcon.src = "img/menu_white.svg";
                    if (body.classList.contains("dark")) {
                        mobileMenuIcon.src = "img/menu_white.svg";
                    } else if (body.classList.contains("light")) {
                        mobileMenuIcon.src = "img/menu_black.svg";
                    }
                    isMobileMenuOpen = false;
                }
            } else { //如果用户菜单已经打开
                x.className = "guest-popup";
                //y.src = "img/user_white.svg";
                if (body.classList.contains("dark")) {
                    y.src = "img/user_white.svg";
                } else if (body.classList.contains("light")) {
                    y.src = "img/user_black.svg";
                }
                isUserMenuOpen = false;
            }
        }
}
/**
 * 功能基本与openUser相同，但相应的文件名、类名有不同
 */
function openMenu() {
    let x = document.getElementById("mobile-menu");
    let y = document.getElementById("menu-icon");
    
    if (isUserLoggedIn) { // 用户已登录，执行用户菜单切换逻辑
            if (!isMobileMenuOpen) { //当移动菜单未打开时
                x.className += " responsive";
                //y.src = "img/close.svg";
                if (body.classList.contains("dark")) {
                    y.src = "img/close_white.svg";
                } else if (body.classList.contains("light")) {
                    y.src = "img/close_black.svg";
                }
                isMobileMenuOpen = true;

                // 关闭用户菜单（如果已打开）
                if (isUserMenuOpen) {
                    let userMenu = document.getElementById("user-popup");
                    let userIcon = document.getElementById("user-icon");
                    userMenu.className = "user-popup";
                    //userIcon.src = "img/user_white.svg";
                    if (body.classList.contains("dark")) {
                        userIcon.src = "img/user_white.svg";
                    } else if (body.classList.contains("light")) {
                        userIcon.src = "img/user_black.svg";
                    }
                    isUserMenuOpen = false;
                }
            } else { //如果移动菜单已经打开
                x.className = "mobile-menu";
                //y.src = "img/menu_white.svg";
                if (body.classList.contains("dark")) {
                    y.src = "img/menu_white.svg";
                } else if (body.classList.contains("light")) {
                    y.src = "img/menu_black.svg";
                }
                isMobileMenuOpen = false;
            }
        } else { // 用户未登录，执行用访客菜单切换逻辑
            if (!isMobileMenuOpen) { //当移动菜单未打开时
                x.className += " responsive";
                //y.src = "img/close.svg";
                if (body.classList.contains("dark")) {
                    y.src = "img/close_white.svg";
                } else if (body.classList.contains("light")) {
                    y.src = "img/close_black.svg";
                }
                isMobileMenuOpen = true;
                
                // 关闭访客菜单（如果已打开）
                if (isUserMenuOpen) {
                    let userMenu = document.getElementById("guest-popup");
                    let userMenuIcon = document.getElementById("user-icon");
                    userMenu.className = "guest-popup";
                    //userIcon.src = "img/user_white.svg";
                    if (body.classList.contains("dark")) {
                        userIcon.src = "img/user_white.svg";
                    } else if (body.classList.contains("light")) {
                        userIcon.src = "img/user_black.svg";
                    }
                    isUserMenuOpen = false;
                }
            } else { //如果用户菜单已经打开
                x.className = "mobile-menu";
                //y.src = "img/menu_white.svg";
                if (body.classList.contains("dark")) {
                    y.src = "img/menu_white.svg";
                } else if (body.classList.contains("light")) {
                    y.src = "img/menu_black.svg";
                };
                isMobileMenuOpen = false;
            }
        }
}




/**
 * 监听页面滚动事件，根据滚动距离调整导航栏样式。
 */
window.addEventListener('scroll', function() {
    const menuBg = document.querySelector('.menu-bg');
    const navbar = document.querySelector('.navbar');
    
    // 检查滚动距离是否大于20像素
    if (window.scrollY > 20) {
        // 如果滚动距离大于20像素，使菜单背景可见
        menuBg.style.opacity = '1';
        // 隐藏导航栏底部边框
        navbar.style.borderBottom = '1px solid var(--nav0)';
        // 添加过渡效果以平滑样式变化
        menuBg.style.transition = 'all 0.5s ease-in-out';
        navbar.style.transition = 'all 0.5s ease-in-out';
    } else {
        // 如果滚动距离小于或等于20像素，隐藏菜单背景
        menuBg.style.opacity = '0';
        // 显示导航栏底部边框
        navbar.style.borderBottom = '1px solid var(--primary)';
        // 添加过渡效果以平滑样式变化
        menuBg.style.transition = 'all 0.5s ease-in-out';
        navbar.style.transition = 'all 0.5s ease-in-out';
    }
});




// 获取需要相应的图片实体，以及定义鼠标的判定区间
const headerLogo = document.getElementById("headerLogo");
const userIcon = document.getElementById("user-icon");
const menuicon = document.getElementById("menu-icon");
const Milennium = document.getElementById("Milennium");
const visibleButton = document.getElementById("visible-button");
const body = document.body;
let isPreviewing = false;

/**
 * 鼠标侵入页角svg"visible-button"图层时的行为 (主题预览的一部分)
 */
visibleButton.addEventListener("mouseenter", () => {
    if (!isPreviewing) { // 如果没有在预览主题状态下
        if (body.classList.contains("dark")) { // 如果当前主题是 dark
            // 切换主题到 light
            body.classList.remove("dark");
            body.classList.add("light");
            // 更新页面元素的图片
            headerLogo.src = "img/millennium_logo_black.svg";
            // 如果 userIcon 的 src 不包含 "close"，更新为黑色主题图标；否则更新为黑色 close 图标
            if (userIcon.src.indexOf("close") === -1) {
                userIcon.src = "img/user_black.svg";
            } else {
                userIcon.src = "img/close_black.svg";
            }
            // 如果 menuicon 的 src 不包含 "close"，更新为黑色主题图标；否则更新为黑色 close 图标
            if (menuicon.src.indexOf("close") === -1) {
                menuicon.src = "img/menu_black.svg";
            } else {
                menuicon.src = "img/close_black.svg";
            }
            Milennium.src = "img/Milennium_black.svg"; // 更新 Milennium 图标
        } else if (body.classList.contains("light")) { // 如果当前主题是 light
            // 切换主题到 dark
            body.classList.remove("light");
            body.classList.add("dark");
            // 更新页面元素的图片
            headerLogo.src = "img/millennium_logo_white.svg";
            // 如果 userIcon 的 src 不包含 "close"，更新为白色主题图标；否则更新为白色 close 图标
            if (userIcon.src.indexOf("close") === -1) {
                userIcon.src = "img/user_white.svg";
            } else {
                userIcon.src = "img/close_white.svg";
            }
            // 如果 menuicon 的 src 不包含 "close"，更新为白色主题图标；否则更新为白色 close 图标
            if (menuicon.src.indexOf("close") === -1) {
                menuicon.src = "img/menu_white.svg";
            } else {
                menuicon.src = "img/close_white.svg";
            }
            Milennium.src = "img/Milennium_white.svg"; // 更新 Milennium 图标
        }
    }
});

/**
 * 鼠标离开页角svg"visible-button"图层时的行为 (主题预览的一部分)
 */
visibleButton.addEventListener("mouseleave", () => {
    if (!isPreviewing) { // 如果没有在预览主题状态下
        if (body.classList.contains("light")) { // 如果当前主题是 light
            // 切换主题到 dark
            body.classList.remove("light");
            body.classList.add("dark");
            // 更新页面元素的图片
            headerLogo.src = "img/millennium_logo_white.svg";
            // 如果 userIcon 的 src 不包含 "close"，更新为白色主题图标；否则更新为白色 close 图标
            if (userIcon.src.indexOf("close") === -1) {
                userIcon.src = "img/user_white.svg";
            } else {
                userIcon.src = "img/close_white.svg";
            }
            // 如果 menuicon 的 src 不包含 "close"，更新为白色主题图标；否则更新为白色 close 图标
            if (menuicon.src.indexOf("close") === -1) {
                menuicon.src = "img/menu_white.svg";
            } else {
                menuicon.src = "img/close_white.svg";
            }
            Milennium.src = "img/Milennium_white.svg"; // 更新 Milennium 图标
        } else if (body.classList.contains("dark")) { // 如果当前主题是 dark
            // 切换主题到 light
            body.classList.remove("dark");
            body.classList.add("light");
            // 更新页面元素的图片
            headerLogo.src = "img/millennium_logo_black.svg";
            // 如果 userIcon 的 src 不包含 "close"，更新为黑色主题图标；否则更新为黑色 close 图标
            if (userIcon.src.indexOf("close") === -1) {
                userIcon.src = "img/user_black.svg";
            } else {
                userIcon.src = "img/close_black.svg";
            }
            // 如果 menuicon 的 src 不包含 "close"，更新为黑色主题图标；否则更新为黑色 close 图标
            if (menuicon.src.indexOf("close") === -1) {
                menuicon.src = "img/menu_black.svg";
            } else {
                menuicon.src = "img/close_black.svg";
            }
            Milennium.src = "img/Milennium_black.svg"; // 更新 Milennium 图标
        }
    }
});

/**
 * 鼠标点击页角svg"visible-button"图层时的行为 (打断主题预览)
 */
visibleButton.addEventListener("click", () => {
    isPreviewing = !isPreviewing; // 切换预览状态（如果之前是预览中则结束，反之亦然）
    if (isPreviewing) { // 如果用户正在预览
        // 什么都不做
    } else {
        // 用户结束预览，根据点击时的主题进行切换
        if (body.classList.contains("dark")) { // 如果当前主题是 dark
            // 切换主题到 light
            body.classList.remove("dark");
            body.classList.add("light");
            // 更新页面元素的图片
            headerLogo.src = "img/millennium_logo_black.svg";
            // 如果 userIcon 的 src 不包含 "close"，更新为黑色主题图标
            if (userIcon.src.indexOf("close") === -1) {
                userIcon.src = "img/user_black.svg";
            }
            // 如果 menuicon 的 src 不包含 "close"，更新为黑色主题图标
            if (menuicon.src.indexOf("close") === -1) {
                menuicon.src = "img/menu_black.svg";
            }
            Milennium.src = "img/Milennium_black.svg"; // 更新 Milennium 图标
        } else if (body.classList.contains("light")) { // 如果当前主题是 light
            // 切换主题到 dark
            body.classList.remove("light");
            body.classList.add("dark");
            // 更新页面元素的图片
            headerLogo.src = "img/millennium_logo_white.svg";
            // 如果 userIcon 的 src 不包含 "close"，更新为白色主题图标
            if (userIcon.src.indexOf("close") === -1) {
                userIcon.src = "img/user_white.svg";
            }
            // 如果 menuicon 的 src 不包含 "close"，更新为白色主题图标
            if (menuicon.src.indexOf("close") === -1) {
                menuicon.src = "img/menu_white.svg";
            }
            Milennium.src = "img/Milennium_white.svg"; // 更新 Milennium 图标
        }
    }
});


// 添加额外的事件监听器，重置 isPreviewing 变量，确保切换完主题重置预览状态
visibleButton.addEventListener("mouseleave", () => {
    isPreviewing = false;
});




// 获取按钮元素
const scrollToTopButton = document.getElementById("scrollToTopButton");

// 监听页面滚动事件
window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    // 当页面滚动到后25%时显示按钮，否则隐藏
    if (scrollHeight > pageHeight * 0.75) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }
});

// 监听按钮点击事件，滚动到页面顶部
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



