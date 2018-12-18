document.addEventListener("DOMContentLoaded", function() {

    var chartNavbar = (function($) {
        'use strict';

        // JQUERY CACHING
        var $navContainer = $('.right-nav-container');
        var $subnavigation = $('.subnavigation');
        var $mobileMenuBtn = $('.mobile-menu-btn');
        var $mobileNavBack = $('.mobile-nav-back');
        var $navWrapper = $('.nav-wrapper');

        // LISTENERS
        $('div[data-menu-target]').click(function(e) {
            var $link = $(this);
            var isOpen = $link.hasClass('submenu-active');

            closeAllMenus();

            if (!isOpen) {
                openSubMenu($link);
            }
        });

        $mobileMenuBtn.click(toggleMobileMenu);
        $mobileNavBack.click(closeSubMenus);

        $('#page-body').click(closeAllMenus);
        $('.subnavigation').click(function(e){
            if (!$(this).hasClass("mkto-modal-demo") || !$(this).hasClass("mkto-modal-pricing-nav")) {
                e.stopPropagation();
            }
        })

        // FUNCTIONS
        function openSubMenu($link) {
            var targetId = '#' + $link.attr('data-menu-target');

            $link.addClass('submenu-active');
            $(targetId).addClass('submenu-open');
            $navContainer.addClass('mobile-child-menu-open');
            $subnavigation.addClass('mobile-submenu-open');
            openMobileMenu();

            var targetId = '#' + $link.attr('data-menu-target');
            if (targetId === '#username-submenu'){
                var navbuttons = $('.navigation .right-nav-container.mobile-child-menu-open .nav-buttons')[0];
                $(navbuttons).css("top", "0");
            }
        }

        function closeSubMenus() {
            var active = $('.submenu-active').attr('data-menu-target');
            if (active === 'username-submenu'){
                var navbuttons = $('.navigation .right-nav-container.mobile-child-menu-open .nav-buttons')[0];
                $(navbuttons).css("top", "unset");
            }

            $('.submenu-active').removeClass('submenu-active');
            $('.submenu-open').removeClass('submenu-open');
            $navContainer.removeClass('mobile-child-menu-open');
            $subnavigation.removeClass('mobile-submenu-open');


        }

        function openMobileMenu() {
            $navContainer.addClass('mobile-open');
            $mobileMenuBtn.addClass('mobile-open');
            $navWrapper.addClass('mobile-open');
        }

        function closeMobileMenu() {
            $navContainer.removeClass('mobile-open');
            $mobileMenuBtn.removeClass('mobile-open');
            $navWrapper.removeClass('mobile-open');
        }


        function closeAllMenus() {
            closeSubMenus();
            closeMobileMenu();
        }

        function toggleMobileMenu(e) {
            if ($mobileMenuBtn.hasClass('mobile-open')) {
                closeAllMenus();
            } else {
                openMobileMenu();
            }
        }

    }(window.jQuery));
});
