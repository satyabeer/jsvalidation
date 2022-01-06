jQuery.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
}, 'File size must be less than {0}');

jQuery.validator.addMethod("regex", function(value, element, regexp) {
    let result = value.match(regexp)

    return result
}, "Please check your input.");