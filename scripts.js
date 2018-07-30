$(document).ready(function() {
    $('nav#mobile_menu').mmenu({
        //"slidingSubmenus": false,
        "navbar": {
            "title": 'FOMOWINNER'
        },
        "extensions": [
          "theme-white",
          "pagedim-black"
        ],
        "offCanvas": {
            "position": "right"
        }
    });
    
    // 图片延迟加载
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });
    // 图片切换预览图
    var product_thumb_images = $('a[data-toggle="change-feature-image"]');
    product_thumb_images.mouseenter(function() {
        product_thumb_images.removeClass('current');
        $(this).addClass('current');
        $($(this).data('target')).attr('src', $(this).data('feature')).attr('rel', $(this).data('rel'));
    }).mouseleave(function() {

    });
    // 工具提示栏
    $("[data-toggle=tooltip]").tooltip();
});

// 滚动广告的延迟加载
$(function() {
  return $(".carousel.lazy").on("slide.bs.carousel", function(ev) {
    var lazy;
    lazy = $(ev.relatedTarget).find("img[data-src]");
    lazy.attr("src", lazy.data('src'));
    lazy.removeAttr("data-src");
  });
});
