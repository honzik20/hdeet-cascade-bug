(function($){
    var ACTIVE = 'active'
    var wasScrolledByClick = false;
    var $tocLinks = $('#TableOfContents > ul').find('a');
    var $headers = $(".h1, h2, h3, h4, h5, h6").filter('[id]');

    $(window).scroll(function(){
        if(wasScrolledByClick) {
            wasScrolledByClick = false;
            return;
        }
        var closestHeading = '';
        var scrollTop = $(window).scrollTop();
        $headers.each(function(i,el){
            var $y = $(el).offset().top - scrollTop;
            if($y < 10) {
                closestHeading = el;
            }
        });

        var closestTocElement = $("#TableOfContents a[href='#"+ closestHeading.id +"']");        
        setSelectedElement(closestTocElement);
    });

    $tocLinks.click(function(){ 
        wasScrolledByClick = true;
        setSelectedElement($(this)); 
    });

    function setSelectedElement($el) {
        $tocLinks.removeClass(ACTIVE);
        $el.addClass(ACTIVE);
    }

})(jQuery);