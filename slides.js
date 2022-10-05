<script>
(function () {
    var sliderId = 'MultiImageSlider';
    var collectionListWrapperId = 'MultiImageCollectionWrapper';
    var slideClass = 'w-slide';
    var leftArrowClass = 'w-slider-arrow-left';
    var rightArrowClass = 'w-slider-arrow-right';
    var slideNavClass = 'w-slider-nav';
    var collectionItemClass = 'w-dyn-item';
    
    var $slider = $('#' + sliderId);
    var $slides = $slider.find('.' + slideClass);
    var $collectionWrapper = $('#' + collectionListWrapperId);
    var $images = $collectionWrapper.find('.' + collectionItemClass);
    if ($slider && $collectionWrapper) {
        $slider.css('opacity', 0);
        if (!$images || !$images.length) {
            $slider.remove();
        }
        else {
            var imgCount = $images.length;
            var slideCount = $slides.length;
            if (imgCount > slideCount) imgCount = slideCount;
            for (var i = 0; i < imgCount; i++) {
                $slides[i].style.backgroundImage = $images[i].style.backgroundImage;
            }
            for (var i = slideCount; i > imgCount; i--) {
                $slides[i - 1].remove();
            }

            if (imgCount < 2) {
                $slider.find('.' + leftArrowClass + ', .' + rightArrowClass + ', .' + slideNavClass).remove();
            }
            $slider.css('opacity', 1);
        }
        $collectionWrapper.remove();
    }
    var sliderId2 = 'MultiImageSlider2';
    var collectionListWrapperId2 = 'MultiImageCollectionWrapper2';
    var slideClass2 = 'w-slide';
    var leftArrowClass2 = 'w-slider-arrow-left';
    var rightArrowClass2 = 'w-slider-arrow-right';
    var slideNavClass2 = 'w-slider-nav';
    var collectionItemClass2 = 'w-dyn-item';
    
    var $slider2 = $('#' + sliderId2);
    var $slides2 = $slider2.find('.' + slideClass2);
    var $collectionWrapper2 = $('#' + collectionListWrapperId2);
    var $images2 = $collectionWrapper2.find('.' + collectionItemClass2);
    if ($slider2 && $collectionWrapper2) {
        $slider2.css('opacity', 0);
        if (!$images2 || !$images2.length) {
            $slider2.remove();
        }
        else {
            var imgCount2 = $images2.length;
            var slideCount2 = $slides2.length;
            if (imgCount2 > slideCount2) imgCount2 = slideCount2;
            for (var i = 0; i < imgCount2; i++) {
                $slides2[i].style.backgroundImage = $images2[i].style.backgroundImage;
            }
            for (var i = slideCount2; i > imgCount2; i--) {
                $slides2[i - 1].remove();
            }

            if (imgCount2 < 2) {
                $slider2.find('.' + leftArrowClass2 + ', .' + rightArrowClass2 + ', .' + slideNavClass2).remove();
            }
            $slider2.css('opacity', 1);
        }
        $collectionWrapper2.remove();
    }
    var sliderId3 = 'MultiImageSlider3';
    var collectionListWrapperId3 = 'MultiImageCollectionWrapper3';
    var slideClass3 = 'w-slide';
    var leftArrowClass3 = 'w-slider-arrow-left';
    var rightArrowClass3 = 'w-slider-arrow-right';
    var slideNavClass3 = 'w-slider-nav';
    var collectionItemClass3 = 'w-dyn-item';
    
    var $slider3 = $('#' + sliderId3);
    var $slides3 = $slider3.find('.' + slideClass3);
    var $collectionWrapper3 = $('#' + collectionListWrapperId3);
    var $images3 = $collectionWrapper3.find('.' + collectionItemClass3);
    if ($slider3 && $collectionWrapper3) {
        $slider3.css('opacity', 0);
        if (!$images3 || !$images3.length) {
            $slider3.remove();
        }
        else {
            var imgCount3 = $images3.length;
            var slideCount3 = $slides3.length;
            if (imgCount3 > slideCount3) imgCount3 = slideCount3;
            for (var i = 0; i < imgCount3; i++) {
                $slides3[i].style.backgroundImage = $images3[i].style.backgroundImage;
            }
            for (var i = slideCount3; i > imgCount3; i--) {
                $slides3[i - 1].remove();
            }

            if (imgCount3 < 3) {
                $slider3.find('.' + leftArrowClass3 + ', .' + rightArrowClass3 + ', .' + slideNavClass3).remove();
            }
            $slider3.css('opacity', 1);
        }
        $collectionWrapper3.remove();
    }
    var sliderId4 = 'MultiImageSlider4';
    var collectionListWrapperId4 = 'MultiImageCollectionWrapper4';
    var slideClass4 = 'w-slide';
    var leftArrowClass4 = 'w-slider-arrow-left';
    var rightArrowClass4 = 'w-slider-arrow-right';
    var slideNavClass4 = 'w-slider-nav';
    var collectionItemClass4 = 'w-dyn-item';
    
    var $slider4 = $('#' + sliderId4);
    var $slides4 = $slider4.find('.' + slideClass4);
    var $collectionWrapper4 = $('#' + collectionListWrapperId4);
    var $images4 = $collectionWrapper4.find('.' + collectionItemClass4);
    if ($slider4 && $collectionWrapper4) {
        $slider4.css('opacity', 0);
        if (!$images4 || !$images4.length) {
            $slider4.remove();
        }
        else {
            var imgCount4 = $images4.length;
            var slideCount4 = $slides4.length;
            if (imgCount4 > slideCount4) imgCount4 = slideCount4;
            for (var i = 0; i < imgCount4; i++) {
                $slides4[i].style.backgroundImage = $images4[i].style.backgroundImage;
            }
            for (var i = slideCount4; i > imgCount4; i--) {
                $slides4[i - 1].remove();
            }

            if (imgCount4 < 4) {
                $slider4.find('.' + leftArrowClass4 + ', .' + rightArrowClass4 + ', .' + slideNavClass4).remove();
            }
            $slider4.css('opacity', 1);
        }
        $collectionWrapper4.remove();
    }
    var sliderId5 = 'MultiImageSlider5';
    var collectionListWrapperId5 = 'MultiImageCollectionWrapper5';
    var slideClass5 = 'w-slide';
    var leftArrowClass5 = 'w-slider-arrow-left';
    var rightArrowClass5 = 'w-slider-arrow-right';
    var slideNavClass5 = 'w-slider-nav';
    var collectionItemClass5 = 'w-dyn-item';
    
    var $slider5 = $('#' + sliderId5);
    var $slides5 = $slider5.find('.' + slideClass5);
    var $collectionWrapper5 = $('#' + collectionListWrapperId5);
    var $images5 = $collectionWrapper5.find('.' + collectionItemClass5);
    if ($slider5 && $collectionWrapper5) {
        $slider5.css('opacity', 0);
        if (!$images5 || !$images5.length) {
            $slider5.remove();
        }
        else {
            var imgCount5 = $images5.length;
            var slideCount5 = $slides5.length;
            if (imgCount5 > slideCount5) imgCount5 = slideCount5;
            for (var i = 0; i < imgCount5; i++) {
                $slides5[i].style.backgroundImage = $images5[i].style.backgroundImage;
            }
            for (var i = slideCount5; i > imgCount5; i--) {
                $slides5[i - 1].remove();
            }

            if (imgCount5 < 5) {
                $slider5.find('.' + leftArrowClass5 + ', .' + rightArrowClass5 + ', .' + slideNavClass5).remove();
            }
            $slider5.css('opacity', 1);
        }
        $collectionWrapper5.remove();
    }
    var sliderId6 = 'MultiImageSlider6';
    var collectionListWrapperId6 = 'MultiImageCollectionWrapper6';
    var slideClass6 = 'w-slide';
    var leftArrowClass6 = 'w-slider-arrow-left';
    var rightArrowClass6 = 'w-slider-arrow-right';
    var slideNavClass6 = 'w-slider-nav';
    var collectionItemClass6 = 'w-dyn-item';
    
    var $slider6 = $('#' + sliderId6);
    var $slides6 = $slider6.find('.' + slideClass6);
    var $collectionWrapper6 = $('#' + collectionListWrapperId6);
    var $images6 = $collectionWrapper6.find('.' + collectionItemClass6);
    if ($slider6 && $collectionWrapper6) {
        $slider6.css('opacity', 0);
        if (!$images6 || !$images6.length) {
            $slider6.remove();
        }
        else {
            var imgCount6 = $images6.length;
            var slideCount6 = $slides6.length;
            if (imgCount6 > slideCount6) imgCount6 = slideCount6;
            for (var i = 0; i < imgCount6; i++) {
                $slides6[i].style.backgroundImage = $images6[i].style.backgroundImage;
            }
            for (var i = slideCount6; i > imgCount6; i--) {
                $slides6[i - 1].remove();
            }

            if (imgCount6 < 6) {
                $slider6.find('.' + leftArrowClass6 + ', .' + rightArrowClass6 + ', .' + slideNavClass6).remove();
            }
            $slider6.css('opacity', 1);
        }
        $collectionWrapper6.remove();
    }
    var sliderId7 = 'MultiImageSlider7';
    var collectionListWrapperId7 = 'MultiImageCollectionWrapper7';
    var slideClass7 = 'w-slide';
    var leftArrowClass7 = 'w-slider-arrow-left';
    var rightArrowClass7 = 'w-slider-arrow-right';
    var slideNavClass7 = 'w-slider-nav';
    var collectionItemClass7 = 'w-dyn-item';
    
    var $slider7 = $('#' + sliderId7);
    var $slides7 = $slider7.find('.' + slideClass7);
    var $collectionWrapper7 = $('#' + collectionListWrapperId7);
    var $images7 = $collectionWrapper7.find('.' + collectionItemClass7);
    if ($slider7 && $collectionWrapper7) {
        $slider7.css('opacity', 0);
        if (!$images7 || !$images7.length) {
            $slider7.remove();
        }
        else {
            var imgCount7 = $images7.length;
            var slideCount7 = $slides7.length;
            if (imgCount7 > slideCount7) imgCount7 = slideCount7;
            for (var i = 0; i < imgCount7; i++) {
                $slides7[i].style.backgroundImage = $images7[i].style.backgroundImage;
            }
            for (var i = slideCount7; i > imgCount7; i--) {
                $slides7[i - 1].remove();
            }

            if (imgCount7 < 7) {
                $slider7.find('.' + leftArrowClass7 + ', .' + rightArrowClass7 + ', .' + slideNavClass7).remove();
            }
            $slider7.css('opacity', 1);
        }
        $collectionWrapper7.remove();
    }
        var sliderId8 = 'MultiImageSlider8';
    var collectionListWrapperId8 = 'MultiImageCollectionWrapper8';
    var slideClass8 = 'w-slide';
    var leftArrowClass8 = 'w-slider-arrow-left';
    var rightArrowClass8 = 'w-slider-arrow-right';
    var slideNavClass8 = 'w-slider-nav';
    var collectionItemClass8 = 'w-dyn-item';
    
    var $slider8 = $('#' + sliderId8);
    var $slides8 = $slider8.find('.' + slideClass8);
    var $collectionWrapper8 = $('#' + collectionListWrapperId8);
    var $images8 = $collectionWrapper8.find('.' + collectionItemClass8);
    if ($slider8 && $collectionWrapper8) {
        $slider8.css('opacity', 0);
        if (!$images8 || !$images8.length) {
            $slider8.remove();
        }
        else {
            var imgCount8 = $images8.length;
            var slideCount8 = $slides8.length;
            if (imgCount8 > slideCount8) imgCount8 = slideCount8;
            for (var i = 0; i < imgCount8; i++) {
                $slides8[i].style.backgroundImage = $images8[i].style.backgroundImage;
            }
            for (var i = slideCount8; i > imgCount8; i--) {
                $slides8[i - 1].remove();
            }

            if (imgCount8 < 8) {
                $slider8.find('.' + leftArrowClass8 + ', .' + rightArrowClass8 + ', .' + slideNavClass8).remove();
            }
            $slider8.css('opacity', 1);
        }
        $collectionWrapper8.remove();
    }
    var sliderId9 = 'MultiImageSlider9';
    var collectionListWrapperId9 = 'MultiImageCollectionWrapper9';
    var slideClass9 = 'w-slide';
    var leftArrowClass9 = 'w-slider-arrow-left';
    var rightArrowClass9 = 'w-slider-arrow-right';
    var slideNavClass9 = 'w-slider-nav';
    var collectionItemClass9 = 'w-dyn-item';
    
    var $slider9 = $('#' + sliderId9);
    var $slides9 = $slider9.find('.' + slideClass9);
    var $collectionWrapper9 = $('#' + collectionListWrapperId9);
    var $images9 = $collectionWrapper9.find('.' + collectionItemClass9);
    if ($slider9 && $collectionWrapper9) {
        $slider9.css('opacity', 0);
        if (!$images9 || !$images9.length) {
            $slider9.remove();
        }
        else {
            var imgCount9 = $images9.length;
            var slideCount9 = $slides9.length;
            if (imgCount9 > slideCount9) imgCount9 = slideCount9;
            for (var i = 0; i < imgCount9; i++) {
                $slides9[i].style.backgroundImage = $images9[i].style.backgroundImage;
            }
            for (var i = slideCount9; i > imgCount9; i--) {
                $slides9[i - 1].remove();
            }

            if (imgCount9 < 9) {
                $slider9.find('.' + leftArrowClass9 + ', .' + rightArrowClass9 + ', .' + slideNavClass9).remove();
            }
            $slider9.css('opacity', 1);
        }
        $collectionWrapper9.remove();
    }
    var sliderId10 = 'MultiImageSlider10';
    var collectionListWrapperId10 = 'MultiImageCollectionWrapper10';
    var slideClass10 = 'w-slide';
    var leftArrowClass10 = 'w-slider-arrow-left';
    var rightArrowClass10 = 'w-slider-arrow-right';
    var slideNavClass10 = 'w-slider-nav';
    var collectionItemClass10 = 'w-dyn-item';
    
    var $slider10 = $('#' + sliderId10);
    var $slides10 = $slider10.find('.' + slideClass10);
    var $collectionWrapper10 = $('#' + collectionListWrapperId10);
    var $images10 = $collectionWrapper10.find('.' + collectionItemClass10);
    if ($slider10 && $collectionWrapper10) {
        $slider10.css('opacity', 0);
        if (!$images10 || !$images10.length) {
            $slider10.remove();
        }
        else {
            var imgCount10 = $images10.length;
            var slideCount10 = $slides10.length;
            if (imgCount10 > slideCount10) imgCount10 = slideCount10;
            for (var i = 0; i < imgCount10; i++) {
                $slides10[i].style.backgroundImage = $images10[i].style.backgroundImage;
            }
            for (var i = slideCount10; i > imgCount10; i--) {
                $slides10[i - 1].remove();
            }

            if (imgCount10 < 10) {
                $slider10.find('.' + leftArrowClass10 + ', .' + rightArrowClass10 + ', .' + slideNavClass10).remove();
            }
            $slider10.css('opacity', 1);
        }
        $collectionWrapper10.remove();
    }
    var sliderId11 = 'MultiImageSlider11';
    var collectionListWrapperId11 = 'MultiImageCollectionWrapper11';
    var slideClass11 = 'w-slide';
    var leftArrowClass11 = 'w-slider-arrow-left';
    var rightArrowClass11 = 'w-slider-arrow-right';
    var slideNavClass11 = 'w-slider-nav';
    var collectionItemClass11 = 'w-dyn-item';
    
    var $slider11 = $('#' + sliderId11);
    var $slides11 = $slider11.find('.' + slideClass11);
    var $collectionWrapper11 = $('#' + collectionListWrapperId11);
    var $images11 = $collectionWrapper11.find('.' + collectionItemClass11);
    if ($slider11 && $collectionWrapper11) {
        $slider11.css('opacity', 0);
        if (!$images11 || !$images11.length) {
            $slider11.remove();
        }
        else {
            var imgCount11 = $images11.length;
            var slideCount11 = $slides11.length;
            if (imgCount11 > slideCount11) imgCount11 = slideCount11;
            for (var i = 0; i < imgCount11; i++) {
                $slides11[i].style.backgroundImage = $images11[i].style.backgroundImage;
            }
            for (var i = slideCount11; i > imgCount11; i--) {
                $slides11[i - 1].remove();
            }

            if (imgCount11 < 11) {
                $slider11.find('.' + leftArrowClass11 + ', .' + rightArrowClass11 + ', .' + slideNavClass11).remove();
            }
            $slider11.css('opacity', 1);
        }
        $collectionWrapper11.remove();
    }
    var sliderId12 = 'MultiImageSlider12';
    var collectionListWrapperId12 = 'MultiImageCollectionWrapper12';
    var slideClass12 = 'w-slide';
    var leftArrowClass12 = 'w-slider-arrow-left';
    var rightArrowClass12 = 'w-slider-arrow-right';
    var slideNavClass12 = 'w-slider-nav';
    var collectionItemClass12 = 'w-dyn-item';
    
    var $slider12 = $('#' + sliderId12);
    var $slides12 = $slider12.find('.' + slideClass12);
    var $collectionWrapper12 = $('#' + collectionListWrapperId12);
    var $images12 = $collectionWrapper12.find('.' + collectionItemClass12);
    if ($slider12 && $collectionWrapper12) {
        $slider12.css('opacity', 0);
        if (!$images12 || !$images12.length) {
            $slider12.remove();
        }
        else {
            var imgCount12 = $images12.length;
            var slideCount12 = $slides12.length;
            if (imgCount12 > slideCount12) imgCount12 = slideCount12;
            for (var i = 0; i < imgCount12; i++) {
                $slides12[i].style.backgroundImage = $images12[i].style.backgroundImage;
            }
            for (var i = slideCount12; i > imgCount12; i--) {
                $slides12[i - 1].remove();
            }

            if (imgCount12 < 12) {
                $slider12.find('.' + leftArrowClass12 + ', .' + rightArrowClass12 + ', .' + slideNavClass12).remove();
            }
            $slider12.css('opacity', 1);
        }
        $collectionWrapper12.remove();
    }
        var sliderId13 = 'MultiImageSlider13';
    var collectionListWrapperId13 = 'MultiImageCollectionWrapper13';
    var slideClass13 = 'w-slide';
    var leftArrowClass13 = 'w-slider-arrow-left';
    var rightArrowClass13 = 'w-slider-arrow-right';
    var slideNavClass13 = 'w-slider-nav';
    var collectionItemClass13 = 'w-dyn-item';
    
    var $slider13 = $('#' + sliderId13);
    var $slides13 = $slider13.find('.' + slideClass13);
    var $collectionWrapper13 = $('#' + collectionListWrapperId13);
    var $images13 = $collectionWrapper13.find('.' + collectionItemClass13);
    if ($slider13 && $collectionWrapper13) {
        $slider13.css('opacity', 0);
        if (!$images13 || !$images13.length) {
            $slider13.remove();
        }
        else {
            var imgCount13 = $images13.length;
            var slideCount13 = $slides13.length;
            if (imgCount13 > slideCount13) imgCount13 = slideCount13;
            for (var i = 0; i < imgCount13; i++) {
                $slides13[i].style.backgroundImage = $images13[i].style.backgroundImage;
            }
            for (var i = slideCount13; i > imgCount13; i--) {
                $slides13[i - 1].remove();
            }

            if (imgCount13 < 13) {
                $slider13.find('.' + leftArrowClass13 + ', .' + rightArrowClass13 + ', .' + slideNavClass13).remove();
            }
            $slider13.css('opacity', 1);
        }
        $collectionWrapper13.remove();
    }
    var sliderId14 = 'MultiImageSlider14';
    var collectionListWrapperId14 = 'MultiImageCollectionWrapper14';
    var slideClass14 = 'w-slide';
    var leftArrowClass14 = 'w-slider-arrow-left';
    var rightArrowClass14 = 'w-slider-arrow-right';
    var slideNavClass14 = 'w-slider-nav';
    var collectionItemClass14 = 'w-dyn-item';
    
    var $slider14 = $('#' + sliderId14);
    var $slides14 = $slider14.find('.' + slideClass14);
    var $collectionWrapper14 = $('#' + collectionListWrapperId14);
    var $images14 = $collectionWrapper14.find('.' + collectionItemClass14);
    if ($slider14 && $collectionWrapper14) {
        $slider14.css('opacity', 0);
        if (!$images14 || !$images14.length) {
            $slider14.remove();
        }
        else {
            var imgCount14 = $images14.length;
            var slideCount14 = $slides14.length;
            if (imgCount14 > slideCount14) imgCount14 = slideCount14;
            for (var i = 0; i < imgCount14; i++) {
                $slides14[i].style.backgroundImage = $images14[i].style.backgroundImage;
            }
            for (var i = slideCount14; i > imgCount14; i--) {
                $slides14[i - 1].remove();
            }

            if (imgCount14 < 14) {
                $slider14.find('.' + leftArrowClass14 + ', .' + rightArrowClass14 + ', .' + slideNavClass14).remove();
            }
            $slider14.css('opacity', 1);
        }
        $collectionWrapper14.remove();
    }
    var sliderId15 = 'MultiImageSlider15';
    var collectionListWrapperId15 = 'MultiImageCollectionWrapper15';
    var slideClass15 = 'w-slide';
    var leftArrowClass15 = 'w-slider-arrow-left';
    var rightArrowClass15 = 'w-slider-arrow-right';
    var slideNavClass15 = 'w-slider-nav';
    var collectionItemClass15 = 'w-dyn-item';
    
    var $slider15 = $('#' + sliderId15);
    var $slides15 = $slider15.find('.' + slideClass15);
    var $collectionWrapper15 = $('#' + collectionListWrapperId15);
    var $images15 = $collectionWrapper15.find('.' + collectionItemClass15);
    if ($slider15 && $collectionWrapper15) {
        $slider15.css('opacity', 0);
        if (!$images15 || !$images15.length) {
            $slider15.remove();
        }
        else {
            var imgCount15 = $images15.length;
            var slideCount15 = $slides15.length;
            if (imgCount15 > slideCount15) imgCount15 = slideCount15;
            for (var i = 0; i < imgCount15; i++) {
                $slides15[i].style.backgroundImage = $images15[i].style.backgroundImage;
            }
            for (var i = slideCount15; i > imgCount15; i--) {
                $slides15[i - 1].remove();
            }

            if (imgCount15 < 15) {
                $slider15.find('.' + leftArrowClass15 + ', .' + rightArrowClass15 + ', .' + slideNavClass15).remove();
            }
            $slider15.css('opacity', 1);
        }
        $collectionWrapper15.remove();
    }                            
})();
</script> 