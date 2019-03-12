<script>
    $(function() {
        var reparseArr = function(rawArrStr) {
            //a bit of a hack, we get strings like "['foo', 'bar']"
            // this gives us actual arrays
            var rawStrs = rawArrStr.slice(1, rawArrStr.length-1);
            var strArr = rawStrs.split(',');
            var cleanArr = strArr.map(function(x) {return x.slice(1,x.length-1);});
            return cleanArr;
        };
        //var HTML = document.querySelector(".codepen-html").innerHTML;
        $(".codepen-wrap ").each(function(iterEl) {
                var el = $(this),
                        type = "js",
                        codeInside = el.find('.codepen-content')[0].innerText,
                        isCodeInside = codeInside.length,
                        CSS = "",
                        JS = JS = codeInside;
            var cssFilesStr = el.attr('data-codepen-cssfiles');
            var jsFilesStr = el.attr('data-codepen-jsfiles');
            // var cssExternal = JSON.parse(cssFilesStr);
            // var jsExternal =  JSON.parse(jsFilesStr);

            var ab = el.attr('data-codepen-jsfiles');
                var data = {
                  title              : el.attr('data-codepen-title'),
                  description        : "",
                  //html               : HTML,
                  html_pre_processor : "none",
                  css                : CSS,
                  css_pre_processor  : "none",
                  css_starter        : "neither",
                  css_prefix_free    : false,
                  js                 : JS,
                  js_pre_processor   : "none",
                  js_modernizr       : false,
                  js_library         : "",
                  html_classes       : "",
                    // css_external       : cssExternal,
                    // js_external        : jsExternal,
                    css_external       : cssFilesStr,
                    js_external        : jsFilesStr,
                  template           : true
                };
                var JSONstring =
                  JSON.stringify(data)
                  // Quotes will screw up the JSON
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&apos;");
                var jsonInput ='<input type="hidden" name="data" value=\'' +
                          JSONstring + '\'>';
                el.find('form').append(jsonInput);
          });
        });

</script>
