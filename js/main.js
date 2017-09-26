/////////////////////////header////////////////////////////

 $(function($){
      /**
       * mobile clickMenu
       */
      {
        if (window.innerWidth <= 770) {
          var $menuBtn = $('#headerMenu');
          var $nav = $('#headerNav');
          
          $menuBtn.on("click", function(e){
            e.stopPropagation()
            var is_has_active = $menuBtn.hasClass('active');
              
            $menuBtn[(is_has_active?'remove':'add')+'Class']('active');
            $nav[(is_has_active?'remove':'add')+'Class']('nav-show');
          })

          $("body").on("click", function(){
            $menuBtn.removeClass('active');
            $nav.removeClass('nav-show');
          });
        }
      }

      //////////////////////////back to top////////////////////////////
      {
        var $back_2_top = $("#do-back2top");

        $(window).on("scroll", function(){
            // 页面顶部滚进去的距离
            var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

            if(scrollTop > 200) {
              $back_2_top.addClass('back-to-top-show');
            } else {
              $back_2_top.removeClass('back-to-top-show');
            }
        });
     
        $back_2_top.on("click", function(e){
           $("html,body").animate({scrollTop:0});
        });
      }

      //////////////////////////hover on demo//////////////////////////////
      (function() {
        var demoItems = document.querySelectorAll('.grid-item')
      }());
});

