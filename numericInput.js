/**
 * numericInput-js
 * https://github.com/nanachi-code/numericInput-js
 *
 * Force input fields to accept numeric value only.
 *
 * @version 1.0.0
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

        this.attr("numericinput", "");
        this.on("input", function () {
            $(this).val($(this).val().replace(/\D/g, "").substring(0, options.max));
        });

        return this;
    };

    $(function () {
        $("[numericinput]").numericInput();
    });
})(jQuery);
