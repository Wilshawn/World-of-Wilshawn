(function() {
    
    var $imgs = $('.img-thumbnail img');
    var $filters = $('#filters ul');
    var tagged = {};
    
    $imgs.each(function() {
        var img = this;
        var tags = $(this).data('tags');
        
        if (tags) {
            tags.split(',').forEach(function(tagName) {
                if (tagged[tagName] == null) {
                    tagged[tagName] = [];
                }
                tagged[tagName].push(img);
            });
        }
    });
        
        $('<li/>', {
            text: 'All',
            class: 'active',
            click: function() {
                $(this)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
                $imgs.show(500);
            }
        }).appendTo($filters);
        
        $.each(tagged, function(tagName){
            $('<li/>', {
                text: tagName ,
                click: function() {
                    $(this)
                        .addClass('active')
                        .siblings()
                        .removeClass('active');
                    $imgs
                        .hide("fast")
                        .filter(tagged[tagName])
                        .show("slow");
                }
            }).appendTo($filters);
        });
    }());