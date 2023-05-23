// custom JS
$(document).ready(function () {
  $(".ProductCardMedia .slick_slider").slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  });
  $(document).on("click", ".product_color_title", function () {
    let BtnText = $(this).text();
    BtnText = BtnText.toLowerCase();
    console.log( BtnText)
    let sliderData = $(this).closest(".card-wrapper").find(".ProductCardMedia");
    console.log(sliderData)
    $(sliderData).find(".slick-slide").each(function (index) {
        let ImgALT = $(this).attr("alt").toLowerCase();
        if (BtnText == ImgALT) {
          let sliderDataID = $(this).attr("data-id");
          let productSlider = $(sliderData).find(".slick_slider");
          $(productSlider).slick('slickGoTo', sliderDataID);    
        }
      });
  });
});


function mainImage(){
  $(".product-big-image img").attr('src', $(".product-images-previews .active").attr("data-img"));
}

$(".product-images-previews ul li:first-child").addClass("active");
mainImage();

$(document).on("click",".product-images-previews ul li",function() {
  $(".product-images-previews ul li").removeClass("active");
  $(this).addClass("active");
  mainImage();
    console.log(mainImage);
});