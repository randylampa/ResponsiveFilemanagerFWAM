let mix = require('laravel-mix'),
        fs = require('fs');

mix.options({processCssUrls: false});
(() => {
    mix.less(
            'resources/assets/less/style.less',
            'resources/tmp/css/style.css'
            );

    mix.less(
            'node_modules/bootstrap-lightbox/less/bootstrap-lightbox.less',
            'resources/tmp/css/lib.css'
            );

    mix.styles(
            [
                'node_modules/bootstrap/docs/assets/css/bootstrap.css',
                'node_modules/bootstrap/docs/assets/css/bootstrap-responsive.css',
                'node_modules/jquery-contextmenu/dist/jquery.contextMenu.css',
                'node_modules/tui-color-picker/dist/tui-color-picker.css',
                'node_modules/tui-image-editor/dist/tui-image-editor.css',
                'resources/tmp/css/lib.css',
                'resources/tmp/css/style.css'
            ],
            'filemanager/css/style.css'
            );

    mix.styles(
            'resources/assets/less/rtl-style.less',
            'filemanager/css/rtl-style.css',
            );

    mix.scripts(
            [
                "node_modules/bootstrap/js/bootstrap-transition.js",
                "node_modules/bootstrap/js/bootstrap-affix.js",
                "node_modules/bootstrap/js/bootstrap-alert.js",
                "node_modules/bootstrap/js/bootstrap-button.js",
                "node_modules/bootstrap/js/bootstrap-collapse.js",
//                "node_modules/bootstrap/js/bootstrap-dropdown.js",
                "resources/assets/js/bootstrap-dropdown.js", // repaired "unrecognized expression #"
                "node_modules/bootstrap/js/bootstrap-modal.js",
                "node_modules/bootstrap/js/bootstrap-tooltip.js",
                "node_modules/bootstrap/js/bootstrap-popover.js",
                "node_modules/bootstrap/js/bootstrap-scrollspy.js",
                "node_modules/bootstrap/js/bootstrap-tab.js",
                "node_modules/bootstrap/js/bootstrap-typeahead.js",
                "node_modules/bootstrap-lightbox/js/bootstrap-lightbox.js",
                "node_modules/jquery-contextmenu/dist/jquery.contextMenu.js",
                "node_modules/vanilla-lazyload/dist/lazyload.js",
                "node_modules/jquery-scrollstop/jquery.scrollstop.js",
                "node_modules/bootbox.js/bootbox.js",
                "node_modules/jquery-touchswipe/jquery.touchSwipe.js",
                "node_modules/clipboard/dist/clipboard.js",
                "node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.js",
            ],
            'filemanager/js/plugins.js'
            );

    /* not used this way */
//    mix.scripts(
//            [
//                "node_modules/fabric/dist/fabric.js",
//                "node_modules/tui-code-snippet/dist/tui-code-snippet.js",
//                "node_modules/tui-color-picker/dist/tui-color-picker.js",
//                "node_modules/tui-image-editor/dist/tui-image-editor.js",
//            ],
//            'filemanager/js/tui-image-editor.js'
//            );

    mix.copy('node_modules/blueimp-file-upload/js', 'filemanager/js/');
    mix.copy('node_modules/blueimp-file-upload/css', 'filemanager/css/');

    mix.scripts(
            ['resources/assets/js/include.js'],
            'filemanager/js/include.js'
            );

    /* no need */
//    mix.scripts(
//            ['resources/assets/js/plugin.js'],
//            'filemanager/plugin.min.js'
//            );

    /* no need */
//    mix.scripts(
//            ['resources/assets/js/plugin_responsivefilemanager_plugin.js'],
//            'tinymce/plugins/responsivefilemanager/plugin.min.js'
//            );

    mix.scripts(
            ['resources/assets/js/modernizr.custom.js'],
            'filemanager/js/modernizr.custom.js'
            );

    let builddate = new Date();
    let content = `# Build date\n\n${builddate}`;
    fs.writeFile('filemanager/build_version.md', content, function (err, data) {
        if (err) {
            return console.log(err);
        }
    });
})();
