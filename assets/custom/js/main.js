//**  this js file is for creating **//

$(document).ready(init);

function init() {
  slideMaker = new slideMaker();
  $(slideMaker).bind(this);

  console.log("slideMaker", slideMaker);
  console.log("slide maker made");
}

class slideMaker {
  constructor() {
    this.imageArray = [
      "assets/custom/images/soy-image/paintings/IMG_0001.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0002.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0003.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0004.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0005.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0006.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0007.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0008.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0009.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0010.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0011.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0012.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0013.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0014.jpg",
      "assets/custom/images/soy-image/paintings/IMG_0015.jpg"
    ];

    this.makeSlides();
  }

  makeSlides() {
    let image_array = this.imageArray;
    let slide_slot_array = [];

    image_array.map(function(image) {
      let divSlide1 = {
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
          "data-whitespace": "['nowrap', 'normal', 'normal', 'normal']",
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

      let divSlide2 = {
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
          "data-whitespace": "['nowrap','normal','normal','normal']",
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

      let divSlide3 = {
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
            '[{"event":"click","action":"scrollbelow","offset":"0px"}]',
          "data-responsive_offset": "on",
          "data-responsive": "off",
          style:
            "z-index: 9; white-space: nowrap;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box; border: none; background: rgba(255, 255, 255, .6); color: #252525;",
          text: "OR CLICK HERE"
        })
      };

      let myLi = {
        info: $("<li>", {
          "data-transition": "fade",
          "data-slotamount": "1",
          "data-masterspeed": "1000",
          "data-saveperformance": "off",
          "data-title": "Slide",
          id: "myLi"
        })
      };

      let myImg = {
        info: $("<img>", {
          id: "myImg",
          src: image,
          class: "rev-slidebg",
          style: "filter:brightness(20%)",
          alt: "fullslide2",
          "data-bgposition": "center center",
          "data-bgfit": "cover",
          "data-bgrepeat": "no-repeat"
        })
      };

      //create a node buffer that builds the array structure before sending to the dom

      $("#div_carousel").prepend(myLi.info.clone());
      $("#myLi").append(
        myImg.info.clone(),
        divSlide1.info.clone(),
        divSlide2.info.clone(),
        divSlide3.info.clone()
      );
      // $("#myImg").append(divSlide1.info.clone());

      // $("<div>", { id: "div_SLIDEDIV" })
      //   .prepend(divSlide1.info.clone())
      //   .prepend(divSlide2.info.clone())
      //   .prepend(divSlide3.info.clone())
      // .appendTo("#myImg");
    });
  }
}

// $("<ul/>", { id: "div_carousel" })
//   .prepend(myLi.info.clone())
//   .prepend(myImg.info.clone())
//   .append(divSlides)
//   .appendTo("#Slider1");

// $("#div_carousel").find('#imageSlide1');
// $("#myLi").append(imageSlide2.info.clone());
// $("#myLi").append(imageSlide3.info.clone());

/* <span>span</span>
<p>p</p>
<p>p</p>
<div>div</div>
<span>span</span>
<p>p</p>
<div>div</div>
<b></b>
 
<script>
var list = $( "div, p, span" )
  .map( function() {
    return this.tagName;
  })
  .get()
  .join( ", " );
$( "b" ).append( document.createTextNode( list ) );
</script>
 
</body> */

// for (var i = 0; i < 10; i++) {
//   (function(index) {
//     var button = $("<button>")
//       .text("Button " + index)
//       .on("click", function() {
//         console.log("Current value of i: ", index);
//       });
//     $("body").append(button);
//   })(i);
// }

// let image_arr = this.imageArray;
//     let carousel_slot = this.carouselSlot;
//     let counter = 1;
//     while (carousel_slot.length !== image_arr.length) {
//       let carouselSlide = {
//         id: counter,
//         slide: image_arr[randomNum],
//         info: $("<div>", {
//           id: counter,
//           slide: image_arr[randomNum]
//         })
//       };
//       $(".carousel").append(carouselSlide.info.clone());
//       counter++;
//     }
//   }

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

// let div_slide1 = this.divSlide1['info'];
// let div_slide2 = this.divSlide2['info'];
// let div_slide3 = this.divSlide3['info'];

// const div_slides = {
//   divSlide1: div_slide1,
//   divSlide2: div_slide2,
//   divSlide3: div_slide3
// };

// let divSlide1 = {
//   info: $("<div>", {
//     info:
//       "<div class='tp-caption cap-title font-accident-two-normal color00 e-uppercase tp-resizeme rs-parallaxlevel-2' data-x='center' data-y='bottom' data-basealign='grid' data-voffset='40' data-hoffset='0' data-width='auto' data-height='auto' data-whitespace='[‘nowrap’,’normal’,’normal’,’normal’]' data-transform_idle='o:1;'data-transform_in='z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;' data-transform_out='auto:auto;s:700;' data-start='950' data-splitin='none' data-splitout='none' data-responsive_offset='on' data-fontsize='[36,34,30,20]' data-lineheight='[120,100,90,80]' style='z-index: 2;' text='Welcome to My Website'> Welcome to My Website</div>"
//   })
// };

// let divSlide2 = {
//   info: $("<div>", {
//     info:
//       "<div class='tp-caption cap-sub-subtitle font-regular-normal color00 e-uppercase tp-resizeme rs-parallaxlevel-2' data-x='center' data-y='bottom' data-basealign='grid' data-voffset='50' data-hoffset='0' data-width='auto' data-height=”auto” data-whitespace=”[‘nowrap’,’normal’,’normal’,’normal’]” data-transform_idle='o:1;' data-transform_in='z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;' data-transform_out='auto:auto;s:700;' data-start='1500' data-splitin='none' data-splitout='none' data-responsive_offset='on' style='z-index: 2;'>Scroll Down</div>"
//   })
// };

// let divSlide3 = {
//   info: $("<div>", {
//     info:
//       "<div class=tp-caption Hero-Button rev-btn  rs-parallaxlevel-2' data-x='['center','center','center','center']' data-hoffset='['0','0','0','0']' data-y='bottom' data-voffset='0' data-width='none' data-height='none' data-whitespace='nowrap' data-transform_idle='o:1;' data-transform_hover='o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;' data-style_hover='c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);cursor:pointer;' data-transform_in='z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;' data-transform_out='auto:auto;s:700;' data-mask_out='x:inherit;y:inherit;s:inherit;e:inherit;' data-start='2000' data-splitin='none' data-splitout='none' data-actions='[{'event':'click', 'action':'scrollbelow','offset':'0px'}]' data-responsive_offset='on' data-responsive='off' style='z-index: 9; white-space: nowrap;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box; border: none; background: rgba(255, 255, 255, .6); color: #252525;'> OR CLICK HERE </div>"
//   })
// };
