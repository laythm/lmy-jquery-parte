(function ($) {
    var itemTemplate = '<div class="parte-item" > </div>';
    var itemTemplateLabel = '<label class="lbl" for=""></label>';
    var itemTemplateCheckBox = '<input type="checkbox"  autocomplete="off" />';

    var box = '<div id="parte-container" class="parte-container">' +
                '<div class="btn btn-app btn-xs btn-warning parte-btn" id="parte-btn">' +
                    '<i class="fa fa-cog bigger-130"></i>' +
                 '</div>' +
                 '<div  id="parte-box" class="parte-box clearfix" >' +
                    '<div id="parte-items" class="pull-left width-50"></div>' +
                 '</div>' +
            '</div>';

    var index = 0;
    $.fn.parte = function (options) {
        debugger
        var settings = $.extend({
            // These are the defaults.
            saveOriginalData: true,
            backgroundColor: "white",
            top:'20px'
        }, options);

        if (this.length && !$('#parte-container').length) {
            $('body').append(box);
        }

        $('#parte-container').css('top', settings.top);

        $('#parte-btn').click(function () {
            if ($('#parte-box').length) {
                if ($('#parte-box').hasClass('open'))
                    $('#parte-box').removeClass('open');
                else
                    $('#parte-box').addClass('open');
            }

        });

        var elements = this.each(function (i, e) {
            var item = $(itemTemplate);
            var label = $(itemTemplateLabel);
            var checkbox = $(itemTemplateCheckBox);

            $(item).append(checkbox);
            $(item).append(label);


            $("#parte-container #parte-items").append(item);

            //set label name
            if (e.getAttribute('data-parte-name')) {
                label.html(e.getAttribute('data-parte-name'));
            } else {
                label.html('parte-label' + index);
            }

            //save data if saveOriginalData is true
            if (settings.saveOriginalData) {
                e.setAttribute("data-parte-value", e.value);
            }

            //set checkbox id, label for and related element id
            label.attr('for', 'parte-checkbox' + index);
            checkbox.attr('id', 'parte-checkbox' + index);
                       $(checkbox).change(function () {
                var cb = this;
                if (cb.checked) {
                    $(e).hide();
                } else {
                    $(e).show();
                }
            });

            index++;
        });

        return elements;
    };


    $.fn.parte.update = function (options) {
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options);

        return this.each(function () {
            // Do something to each element here.
        });

        return this;
    };

}(jQuery));
