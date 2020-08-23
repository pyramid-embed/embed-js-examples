const $ = require('jquery');
const pyramidApi = require('@pyramid-embed/embed-js').PyramidEmbedClient;

$(document).ready(function(){
    pyramidApi.quickEmbed({
        container:$('#embed-container').get(0),
        host:'<HOST>',
        userName:'<USERNAME>',
        password:'<PASSWORD>',
        contentId: '<CONTENT>',
    });
});

