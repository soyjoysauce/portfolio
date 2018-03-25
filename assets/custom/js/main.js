//**  this js file is created by Soyoung Bae **//
// 1.) Made dynamic objects to insert into the DOM to flow with template's dependencies
// I learned alot about Jquery and the source code's diffent methods of reading different types of wrap on strings. 

// 2.) Made a simple slide carousel to lessen the dependencies and load time on Javascript
// frustrated with the performance of dependencies. 
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
      "assets/custom/images/soy-image/paintings/IMG_0001.png",
      "assets/custom/images/soy-image/paintings/IMG_0002.png",
      "assets/custom/images/soy-image/paintings/IMG_0003.png",
      "assets/custom/images/soy-image/paintings/IMG_0004.png",
      "assets/custom/images/soy-image/paintings/IMG_0005.png",
      "assets/custom/images/soy-image/paintings/IMG_0006.png",
      "assets/custom/images/soy-image/paintings/IMG_0007.png",
      "assets/custom/images/soy-image/paintings/IMG_0008.png",
      "assets/custom/images/soy-image/paintings/IMG_0009.png",
      "assets/custom/images/soy-image/paintings/IMG_0010.png",
      "assets/custom/images/soy-image/paintings/IMG_0011.png",
      "assets/custom/images/soy-image/paintings/IMG_0012.png",
      "assets/custom/images/soy-image/paintings/IMG_0013.png",
      "assets/custom/images/soy-image/paintings/IMG_0014.png",
      "assets/custom/images/soy-image/paintings/IMG_0015.png"
    ];

    this.makeSlides();
    this.carousel();
  }
  carousel() {
    let box = document.querySelector(".carousel_box");
    let next = box.querySelector(".next");
    let prev = box.querySelector(".prev");
    let img_slide = box.querySelectorAll(".content li");

    let counter = 0;
    let amount = img_slide.length;
    let current = img_slide[0];
    //add the class of “active” to box to trigger it's CSS
    box.classList.add("active");

//function takes you thru the array by removing and adding class to selected DOM element
  //parameter(direction):defines if we should go backwards (negative) or forwards in the carousel  
  function navigate_carousel(direction) {
    //hides the current one
      current.classList.remove("current");
      // increments the counter in the new direction
      counter = counter + direction;
      //
      if (direction === -1 && counter < 0) {
        counter = amount - 1;
      }
      //make sure the counter does not go beyond the available
      if (direction === 1 && !img_slide[counter]) {
        counter = 0;
      }
      current = img_slide[counter];
      current.classList.add("current");
    }
//adds a event listener to the navigation buttons
    next.addEventListener("click", function(event) {
      navigate_carousel(1);
    });
    prev.addEventListener("click", function(event) {
      navigate_carousel(-1);
    });
    //show the first carousel item by calling navigate with 0 as the value
    navigate_carousel(0);
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

      // let divSlide3 = {
      //   info: $("<div>", {
      //     class: "tp-caption Hero-Button rev-btn  rs-parallaxlevel-2",
      //     "data-x": "['center','center','center','center']",
      //     "data-hoffset": "['0','0','0','0']",
      //     "data-y": "bottom",
      //     "data-voffset": "0",
      //     "data-width": "none",
      //     "data-height": "none",
      //     "data-whitespace": "nowrap",
      //     "data-transform_idle": "o:1;",
      //     "data-transform_hover":
      //       "o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;",
      //     "data-style_hover":
      //       "c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);cursor:pointer;",
      //     "data-transform_in":
      //       "z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;",
      //     "data-transform_out": "auto:auto;s:700;",
      //     "data-mask_out": "x:inherit;y:inherit;s:inherit;e:inherit;",
      //     "data-start": "2000",
      //     "data-splitin": "none",
      //     "data-splitout": "none",
      //     "data-actions":
      //       '[{"event":"click","action":"scrollbelow","offset":"0px"}]',
      //     "data-responsive_offset": "on",
      //     "data-responsive": "off",
      //     style:
      //       "z-index: 9; white-space: nowrap;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box; border: none; background: rgba(255, 255, 255, .6); color: #252525;",
      //     text: "OR CLICK HERE"
      //   })
      // };

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

      let my_new_Li = {
        info: $("<li>", {
          // "data-transition": "fade",
          // "data-slotamount": "1",
          // "data-masterspeed": "1000",
          // "data-saveperformance": "off",
          // "data-title": "Slide",
          id: "my_new_Li"
        })
      };

      let my_new_Img = {
        info: $("<img>", {
          // id: "my_new_Img",
          src: image,
          class: "my_new_Img"
          // style: "filter:brightness(20%)",
          // alt: "fullslide2",
          // "data-bgposition": "center center",
          // "data-bgfit": "cover",
          // "data-bgrepeat": "no-repeat"
        })
      };

      //create a node buffer that builds the array structure before sending to the dom

      $("#div_carousel").prepend(myLi.info.clone());
      $("#myLi").append(
        myImg.info.clone(),
        divSlide1.info.clone(),
        divSlide2.info.clone()
        // divSlide3.info.clone()
      );
      $("#new_carousel").prepend(my_new_Li.info.clone());
      $("#my_new_Li").append(
        my_new_Img.info.clone()
        // divSlide1.info.clone(),
        // divSlide2.info.clone(),
        // divSlide3.info.clone()
      );
    });
  }
}

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
