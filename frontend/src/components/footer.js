import React from "react";

const Footer = () => {
    return(
        <footer className="footer_main">
            <div className="footer_right">
                <a href="https://vk.com/smushko2" target="_blank" rel="noreferrer"><img src="http://www.zhlks2.spb.ru/upload/medialibrary/9cc/9cc254ac0147b83d2de448099e8b262b.png" className="icon_style" alt="VK icon"/></a>
                <a href="https://github.com/Kotsik23" target="_blank" rel="noreferrer"><img src="http://frogmandesignz.com/images/icons/Github.png" className="icon_style" alt="GitHub icon"/></a>
                <a href="https://www.facebook.com/profile.php?id=100008355991727" target="_blank" rel="noreferrer"><img src="https://cdn.pixabay.com/photo/2018/05/08/18/25/facebook-3383596_1280.png" className="icon_style" alt="Facebook icon"/></a>
                <a href="https://www.linkedin.com/in/oleg-smushko-57a722224/" target="_blank" rel="noreferrer"><img src="https://www.definedge.com/media/01-linkedin-01.png" className="icon_style" alt="linkedin icon"/></a>
            </div>
            <div className="footer_left">
                <p className="footer_links">
                    <a className="link_1" href="/">Home</a>
                    <a href="/about" className="menu">About</a>
                    <a href="/credits" className="menu">Credits</a>
                </p>
                <p>MyWebSite.com &copy;2021</p>
            </div>
        </footer>
    )
}

export default Footer;