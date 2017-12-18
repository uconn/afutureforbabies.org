/**
 * Accessible Smooth Scrolling
 * @link https://codepen.io/theandyyates/pen/dGovD/
 */
$(function() {
  $("a[href*='#']:not([href='#'])", "#primary").click(function(event) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 875, function(){
          target.attr('tabindex', '-1');
          target.focus();
          });
      location.hash = target;
      return false;
      }
    }
  });
});


$(function(){
    $navList = document.querySelector('nav#primary');
    $shadowStart = document.querySelector('.nav-shadow--start');
    $shadowEnd = document.querySelector('.nav-shadow--end');

    function handleShadowVisibility() {
      maxScrollStartReached = $navList.scrollLeft <= 0;
      maxScrollEndReached = $navList.scrollLeft >= $navList.scrollWidth - $navList.offsetWidth;

      toggleShadow($shadowStart, maxScrollStartReached);
      toggleShadow($shadowEnd, maxScrollEndReached);
    }

    function toggleShadow($el, maxScrollReached) {
      shadowIsVisible = $el.classList.contains('is-visible');
      showShadow = !maxScrollReached && !shadowIsVisible;
      hideShadow = maxScrollReached && shadowIsVisible;

      // Using requestAnimationFrame for optimal scroll performance.
      // https://stackoverflow.com/a/44779316
      if (showShadow) {
        window.requestAnimationFrame(function(e){
            $el.classList.add('is-visible');
        });
      } else if (hideShadow) {
        window.requestAnimationFrame(function(e){
            $el.classList.remove('is-visible');
        });
      }
    }

    handleShadowVisibility();
    $navList.addEventListener('scroll', function(e){
        handleShadowVisibility(e);
        // console.log('running');
    });
});
