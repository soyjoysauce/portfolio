//**  this js file is for creating **//

$(document).ready(init);
  
function init () {
  slideMaker = new slideMaker();
  $(slideMaker).bind(this);

  console.log("imageCarousel", imageCarousel);
  console.log("init carousel made");
};

class slideMaker {
  constructor() {
    this.imageSlide1 = {
      info: $("<div>", {
        class:
          "tp-caption cap-title font-accident-two-normal color00 e-uppercase tp-resizeme rs-parallaxlevel-2",
        "data-x": "center",
        "data-y": "bottom",
        "data-basealign": "grid",
        "data-voffset": "40",
        "data-hoffset": "0",
        "data-width": "auto",
        "data-height": "auto",
        "data-whitespace": "['nowrap', 'normal','normal','normal']",
        "data-transform_idle": "o:1;",
        "data-transform_in":
          "z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;",
        "data-transform_out": "auto:auto;s:700;",
        "data-start": "950",
        "data-splitin": "none",
        "data-splitout": "none",
        "data-responsive_offset": "on",
        "data-fontsize": "['36','34','30','20'] ",
        "data-lineheight": "['120','100','90','80']",
        style: "z-index: 2;",
        text: "Welcome to My Website"
      })
    };

    this.imageSlide2 = {
      info: $("<div>", {
        class:
          "tp-caption cap-sub-subtitle font-regular-normal color00 e-uppercase tp-resizeme rs-parallaxlevel-2",
        "data-x": "center",
        "data-y": "bottom",
        "data-basealign": "grid",
        "data-voffset": "50",
        "data-hoffset": "0",
        "data-width": "auto",
        "data-height": "auto",
        "data-whitespace": "[‘nowrap’,’normal’,’normal’,’normal’]",
        "data-transform_idle": "o:1;",
        "data-transform_in":
          "z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;",
        "data-transform_out": "auto:auto;s:700;",
        "data-start": "1500",
        "data-splitin": "none",
        "data-splitout": "none",
        "data-responsive_offset": "on",
        style: "z-index: 2;",
        text: "Scroll Down"
      })
    };

    this.imageSlide3 = {
      info: $("<div>", {
        class: "tp-caption Hero-Button rev-btn  rs-parallaxlevel-2",
        "data-x": "['center','center','center','center']",
        "data-hoffset": "['0','0','0','0']",
        "data-y": "bottom",
        "data-voffset": "0",
        "data-width": "none",
        "data-height": "none",
        "data-whitespace": "nowrap",
        "data-transform_idle": "o:1;",
        "data-transform_hover":
          "o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;",
        "data-style_hover":
          "c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);cursor:pointer;",
        "data-transform_in":
          "z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;",
        "data-transform_out": "auto:auto;s:700;",
        "data-mask_out": "x:inherit;y:inherit;s:inherit;e:inherit;",
        "data-start": "2000",
        "data-splitin": "none",
        "data-splitout": "none",
        "data-actions":
          "[{'event':'click','action':'scrollbelow','offset':'0px'}]",
        "data-responsive_offset": "on",
        "data-responsive": "off",
        style:
          "z-index: 9; white-space: nowrap;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box; border: none; background: rgba(255, 255, 255, .6); color: #252525;",
        text: "OR CLICK HERE"
      })
    };
    this.carouselSlot = [];
    const image_slides = {
      imageSlide1: new imageSlide1,
      imageSlide2: new imageSlide2,
      imageSlide3: new imageSlide3
    };
    const { imageSlide1, imageSlide2, imageSlide3 } = image_slides;
    console.log(image_slides);

    this.makeSlides();
  }

  makeSlides() {
    let image_arr = this.imageArray;
    let carousel_slot = this.carouselSlot;
    let counter = 1;
    while (carousel_slot.length !== image_arr.length) {
      let carouselSlide = {
        id: counter,
        slide: image_arr[randomNum],
        info: $("<div>", {
          id: counter,
          slide: image_arr[randomNum]
        })
      };
      $(".carousel").append(carouselSlide.info.clone());
      counter++;
    }
  }
}

for (var i = 0; i < 10; i++) {
  (function(index) {
    var button = $("<button>")
      .text("Button " + index)
      .on("click", function() {
        console.log("Current value of i: ", index);
      });
    $("body").append(button);
  })(i);
}

// NOTE: Finish making 3 of imageSlide object (3) so that it is created dynamically on each picture.

imageSlide1 = {
  info: $("<div>", {
    class:
      "tp-caption cap-title font-accident-two-normal color00 e-uppercase tp-resizeme rs-parallaxlevel-2",
    "data-x": "center",
    "data-y": "bottom",
    "data-basealign": "grid",
    "data-voffset": "40",
    "data-hoffset": "0",
    "data-width": "auto",
    "data-height": "auto",
    "data-whitespace": ["nowrap", "normal", "normal", "normal"],
    "data-transform_idle": "o:1;",
    "data-transform_in":
      "z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;",
    "data-transform_out": "auto:auto;s:700;",
    "data-start": "950",
    "data-splitin": "none",
    "data-splitout": "none",
    "data-responsive_offset": "on",
    "data-fontsize": "['36','34','30','20'] ",
    "data-lineheight": "['120','100','90','80']",
    style: "z-index: 2;",
    text: "Welcome to My Website"
  })
};

imageSlide2 = {
  info: $("<div>", {
    class:
      "tp-caption cap-sub-subtitle font-regular-normal color00 e-uppercase tp-resizeme rs-parallaxlevel-2",
    "data-x": "center",
    "data-y": "bottom",
    "data-basealign": "grid",
    "data-voffset": "50",
    "data-hoffset": "0",
    "data-width": "auto",
    "data-height": "auto",
    "data-whitespace": "[‘nowrap’,’normal’,’normal’,’normal’]",
    "data-transform_idle": "o:1;",
    "data-transform_in":
      "z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;",
    "data-transform_out": "auto:auto;s:700;",
    "data-start": "1500",
    "data-splitin": "none",
    "data-splitout": "none",
    "data-responsive_offset": "on",
    style: "z-index: 2;",
    text: "Scroll Down"
  })
};

imageSlide3 = {
  info: $("<div>", {
    class: "tp-caption Hero-Button rev-btn  rs-parallaxlevel-2",
    "data-x": "['center','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "bottom",
    "data-voffset": "0",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-transform_idle": "o:1;",
    "data-transform_hover": "o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;",
    "data-style_hover":
      "c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);cursor:pointer;",
    "data-transform_in":
      "z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;",
    "data-transform_out": "auto:auto;s:700;",
    "data-mask_out": "x:inherit;y:inherit;s:inherit;e:inherit;",
    "data-start": "2000",
    "data-splitin": "none",
    "data-splitout": "none",
    "data-actions": "[{'event':'click','action':'scrollbelow','offset':'0px'}]",
    "data-responsive_offset": "on",
    "data-responsive": "off",
    style:
      "z-index: 9; white-space: nowrap;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box; border: none; background: rgba(255, 255, 255, .6); color: #252525;",
    text: "OR CLICK HERE"
  })
};
//   <!-- this is a layer that i have to inser into every li tag-->
//                                 <!-- LAYER NR. 1 -->
//                                 <!-- <div class="tp-caption cap-title font-accident-two-normal color00 e-uppercase tp-resizeme rs-parallaxlevel-2" data-x="center"
//                                     data-y="bottom" data-basealign="grid" data-voffset="40" data-hoffset="0" data-width=”auto”
//                                     data-height=”auto” data-whitespace=”[‘nowrap’,’normal’,’normal’,’normal’]” data-transform_idle="o:1;"
//                                     data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
//                                     data-transform_out="auto:auto;s:700;" data-start="950" data-splitin=”none” data-splitout=”none”
//                                     data-responsive_offset=”on” data-fontsize="['36','34','30','20']" data-lineheight="['120','100','90','80']"
//                                     style="z-index: 2;">Welcome to My Website
//                                 </div> -->
//                                 <!-- LAYER NR. 3 -->
//                                 <!-- <div class="tp-caption cap-sub-subtitle font-regular-normal color00 e-uppercase tp-resizeme rs-parallaxlevel-2" data-x="center"
//                                     data-y="bottom" data-basealign="grid" data-voffset="50" data-hoffset="0" data-width=”auto”
//                                     data-height=”auto” data-whitespace=”[‘nowrap’,’normal’,’normal’,’normal’]” data-transform_idle="o:1;"
//                                     data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
//                                     data-transform_out="auto:auto;s:700;" data-start="1500" data-splitin=”none” data-splitout=”none”
//                                     data-responsive_offset=”on” style="z-index: 2;">Scroll Down
//                                 </div> -->
//                                 <!-- LAYER NR. 4 -->
//                                 <!-- <div class="tp-caption Hero-Button rev-btn  rs-parallaxlevel-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
//                                     data-y="bottom" data-voffset="0" data-width="none" data-height="none" data-whitespace="nowrap"
//                                     data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;"
//                                     data-style_hover="c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);cursor:pointer;"
//                                     data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
//                                     data-transform_out="auto:auto;s:700;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
//                                     data-start="2000" data-splitin="none" data-splitout="none" data-actions='[{"event":"click","action":"scrollbelow","offset":"0px"}]'
//                                     data-responsive_offset="on" data-responsive="off" style="z-index: 9; white-space: nowrap;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box; border: none; background: rgba(255, 255, 255, .6); color: #252525;">
//                                     OR CLICK HERE
//                                 </div> -->
//<!-- this is a layer that i have to inser into every li tag-->
