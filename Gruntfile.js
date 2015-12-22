module.exports = function(grunt) {
    grunt.initConfig({
        watch : {
            scripts : {
                files : [ "js/**" ],
                tasks : [ "js" ],
                options : {
                    spawn : false
                }
            }
        },
        qunit: {
            options: {
                timeout: 10000
            },
            all: [ "test/*.html", "test/*/*.html" ]
        },
        concat : {
            // jui all 
            dist : {
                src : [
                    // core
                    "js/base.js",

                    // related ui
                    "js/manager.js",
                    "js/collection.js",
                    "js/core.js",
                    "js/event.js",

                    // util
                    "js/util/sort.js",
                    "js/util/keyparser.js",
                    "js/util/base64.js",
                    "js/util/template.js",
                    "js/util/math.js",
                    "js/util/transform.js",
                    "js/util/time.js",
                    "js/util/scale.js",
                    "js/util/color.js",
                    "js/util/svgbase.js",
                    "js/util/svg3d.js",
                    "js/util/svg.js"
                ],
                dest : "dist/core.js"
            }
        },
        uglify: {
            dist : {
                files : {
                    "dist/core.min.js" : [ "dist/core.js" ]
                }
            }
        },
        pkg: grunt.file.readJSON("package.json")
    });

    require("load-grunt-tasks")(grunt);

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("js", [ "concat", "uglify" ]);
    grunt.registerTask("test", [ "qunit" ]);
    grunt.registerTask("default", [ "test", "js" ]);
};
