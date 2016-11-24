/**
 * Created by lixuejiang on 15/9/4.
 */
var agent = require("superagent"),
    cheerio = require('cheerio'),
    url = process.argv[2];

agent.get(url)
     .end(function(err,res){
        if(err) throw err;
        //console.log(res);
        var $ = cheerio.load(res.text),
            aList = $("ol li a"),info_list = [];

        aList.each(function(index,data){
            var href = $(data).attr('href');
            if(href.indexOf('ed2k') > -1){
                console.log(href);
            }
        });
    });