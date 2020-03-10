
const Selector = {
    wrapper       : '.wrapper',
    contentWrapper: '.content-wrapper',
    layoutBoxed   : '.layout-boxed',
    mainFooter    : '.main-footer',
    mainHeader    : '.main-header',
    sidebar       : '.sidebar',
    controlSidebar: '.control-sidebar',
    fixed         : '.fixed',
    sidebarMenu   : '.sidebar-menu',
    logo          : '.main-header .logo'
}
const ClassName = {
    fixed         : 'fixed',
    holdTransition: 'hold-transition'
  }


export function correctHeight() {

    // Get window height and the wrapper height
    var footerHeight  = $(Selector.mainFooter).outerHeight() || 0
    var neg           = $(Selector.mainHeader).outerHeight() + footerHeight
    var windowHeight  = $(window).height()
    var sidebarHeight = $(Selector.sidebar).height() || 0

    // Set the min-height of the content and sidebar based on
    // the height of the document.
    if ($('body').hasClass(ClassName.fixed)) {
        $(Selector.contentWrapper).css('min-height', windowHeight - footerHeight)
    } else {
        var postSetHeight

        if (windowHeight >= sidebarHeight) {
            $(Selector.contentWrapper).css('min-height', windowHeight - neg)
            $(Selector.sidebar).css('min-height', $(document).height())
            postSetHeight = windowHeight - neg
        } else {
            $(Selector.contentWrapper).css('min-height', sidebarHeight)
            postSetHeight = sidebarHeight
        }

        // Fix for the control sidebar height
        //var $controlSidebar = $(Selector.controlSidebar)
        //if (typeof $controlSidebar !== 'undefined') {
        //if ($controlSidebar.height() > postSetHeight)
        //    $(Selector.contentWrapper).css('min-height', $controlSidebar.height())
        //}
    }    

    // Make sure the body tag has the .fixed class
    if (!$('body').hasClass(ClassName.fixed)) {
        if (typeof $.fn.slimScroll !== 'undefined') {
            $(Selector.sidebar).slimScroll({ destroy: true }).height('auto')
        }
        return    
    }
      
}

export function detectBody() {
    if ($(document).width() < 769) {
        $('body').addClass('sidebar-collapse')
    } else {
        $('body').removeClass('sidebar-collapse')
    }
}

export function smoothlyMenu() {
    if ($('body').hasClass('sidebar-collapse')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('.main-sidebar').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('.main-sidebar').fadeIn(200);
            }, 100);
    } else if (!$('body').hasClass('sidebar-collapse')) {
        $('.main-sidebar').hide();
        setTimeout(
            function () {
                $('.main-sidebar').fadeIn(400);
            }, 100);
    }
}
