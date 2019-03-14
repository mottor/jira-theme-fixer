// Скрипт для скролла доски с помощью мыши по образу Трелло
// $('#ghx-pool').off('mousedown.trello-scroll');
$(window).on('mousedown.trello-scroll', '#ghx-pool', function(e){
    var $target = $(e.target);
    var $closestParent = $target.closest('.ghx-issue, #ghx-pool');

    if ($closestParent.hasClass('ghx-issue')){
        return;
    }

    var $pool = $('#ghx-pool');
    var startX = e.clientX;
    var startY = e.clientY;
    var startScrollX = $pool.scrollLeft();
    var startScrollY = $pool.scrollTop();

    $(window).on('mousemove.trello-scroll', function(moveEvent){
        $('#ghx-pool')
            .scrollLeft(startScrollX + (startX - moveEvent.clientX))
            .scrollTop(startScrollY + (startY - moveEvent.clientY));
    });

    $(window).on('mouseup.trello-scroll', function(z){
        $(window).off('mousemove.trello-scroll');
        $(window).off('mouseup.trello-scroll');
    });

    e.preventDefault();
});


/* if ($('body').hasClass('ghx-scroll-columns')) {
    $(window).on('keydown.close-issue-preview', function(e) {
        if (e.keyCode == 27) {
            var $detailsWnd = $('.ghx-detail-view');
            if ($detailsWnd.length && $detailsWnd.is(':visible')) {
                $('.ghx-detail-view .aui-iconfont-close-dialog').click();
            }
        }
    });
} */
