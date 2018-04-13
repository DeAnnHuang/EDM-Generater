// function fetchPostList() {
var axios = require('axios');
var _ = require('lodash');
var fs = require('fs');

axios.get("https://www.trendmicro.com/us/iot-security/products-and-solutions/api/IoT%20Threats%20And%20Solutions")
    .then(function (response) {
        // var month = new Date().getMonth();
        var month = 3;
        if(month == 0){month = 12};
        console.log('now month:' + month);
        
        var data = JSON.parse(response.data);
        console.log("data:"+data);
        data = _.compact(_.map(data, function (post) {
            var postMonth = new Date(post.ArticleDate).getMonth() + 1;
            if (postMonth == month) return post;
        }));
        
        var list = _.map(data, function (post) {
            const baseUrl = "https://www.trendmicro.com/us/iot-security/";

            var articalLink;
            post.OuterSiteUrl ? articalLink = post.OuterSiteUrl : articalLink = baseUrl + post.ArticleTypeName + "/" + post.Id;

            var postImg;
            post.ArticleType == 1 ? postImg = `${baseUrl}content${post.PhotoTh}` : postImg = `${baseUrl}content/main/rss/${post.Id}_m.jpg`

            var result = {
                date: post.ArticleDate,
                title: post.ArticleTitle,
                link: articalLink,
                img: postImg,
                text: post.ListContent
            }
            // console.log(result)
            return result;
        })
        console.log(list);

        fs.writeFile('input/data/thisMonth.json', JSON.stringify(list), function (err) {
            if (err) return console.log(err);
            console.log('data.json composed.');
        });

    })
    .catch(function (error) {
        console.log(error);
    });
// }