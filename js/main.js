document.querySelector(".facebook-share").addEventListener('click', function () {
    pagedata = {
        url: window.mainurl,
        fblikeurl: '{"href":"' + ($(this).data('social-url') || document.location.href) + '"}',
        text: $(this).data('social-text') || document.title,
        description: $(this).data('social-description') || $('meta[name=description]').attr('content'),
        via: $(this).data('social-via') || "",
        hashtags: $(this).data('social-hashtags') || "",
        image: $(this).data('social-image') || ""
    };
    socialActions = {
        'facebook-share': {
            url: "https://www.facebook.com/sharer/sharer.php?",
            params: {
                "u": "url"
            }
        },
        'facebook-like': {
            url: "https://www.facebook.com/plugins/error/confirm/like?",
            params: {
                "return_params": "fblikeurl"
            },
        },
        'twitter': {
            url: "http://twitter.com/intent/tweet?",
            params: {
                "url": "url",
                "text": "text",
                "via": "via",
                "hashtags": "hashtags"
            }
        },
        'pinterest': {
            url: "http://pinterest.com/pin/create/button/?",
            params: {
                "url": "url",
                "description": "text",
                "media": "image"
            }
        },
        'googleplus': {
            url: "https://plusone.google.com/_/+1/confirm?hl=en&",
            params: {
                "url": "url"
            }
        }
    };
    action = socialActions[$(this).data('social')];
    p = action['params'];
    $.each(p, function (k, v) {
        p[k] = pagedata[v]
    });
    window.open(action['url'] + $.param(p), "", "width=500,height=400");
});

document.querySelector(".twitter-share").addEventListener('click', function () {
    /* debugger; */
    pagedata = {
        url: window.mainurl,
        fblikeurl: '{"href":"' + ($(this).data('social-url') || document.location.href) + '"}',
        text: $(this).data('social-text') || document.title,
        description: $(this).data('social-description') || $('meta[name=description]').attr('content'),
        via: $(this).data('social-via') || "",
        hashtags: $(this).data('social-hashtags') || "",
        image: $(this).data('social-image') || ""
    };
    socialActions = {
        'facebook-share': {
            url: "https://www.facebook.com/sharer/sharer.php?",
            params: {
                "u": "url"
            }
        },
        'facebook-like': {
            url: "https://www.facebook.com/plugins/error/confirm/like?",
            params: {
                "return_params": "fblikeurl"
            },
        },
        'twitter': {
            url: "http://twitter.com/intent/tweet?",
            params: {
                "url": "url",
                "text": "text",
                "via": "via",
                "hashtags": "hashtags"
            }
        },
        'pinterest': {
            url: "http://pinterest.com/pin/create/button/?",
            params: {
                "url": "url",
                "description": "text",
                "media": "image"
            }
        },
        'googleplus': {
            url: "https://plusone.google.com/_/+1/confirm?hl=en&",
            params: {
                "url": "url"
            }
        }
    };
    action = socialActions[$(this).data('social')];
    p = action['params'];
    $.each(p, function (k, v) {
        p[k] = pagedata[v]
    });
    window.open(action['url'] + $.param(p), "", "width=500,height=400");
});