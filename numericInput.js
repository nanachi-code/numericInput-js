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

        this.attr("numericinput", "");
        $(document).on("input", "[numericinput]", function () {
            $(this).val(
                $(this)
                    .val()
                    .replace(/\D/g, "")
                    .substring(0, options.max ? options.max : $(this).val().length)
            );
        });

        return this;
    };

    $(function () {
        $("[numericinput]").numericInput();
    });
})(jQuery);
