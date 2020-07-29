/**
 * numericInput-js
 * https://github.com/nanachi-code/numericInput-js
 *
 * Force input fields to accept numeric value only.
 *
 * @version 1.0.1
 * @author Nanachi <github.com/nanachi-code>
 */
(function ($) {
    $.fn.numericInput = function (options) {
        options = $.extend(
            {},
            {
                max: null,
            },
            options
        );

        // Set attribute
        if (this.attr("numericinput") != undefined) {
            throw new Error("This element has already initialized numericInput!");
        } else {
            this.attr("numericinput", "");
            if (options.max) {
                this.attr("max", options.max);
            }
        }
        return this;
    };

    $(function () {
        $(document).on("input", "[numericinput]", function () {
            let max = $(this).attr("max");
            $(this).val(
                $(this)
                    .val()
                    .replace(/\D/g, "")
                    .substring(0, max ? max : $(this).val().length)
            );
        });
    });
})(jQuery);
