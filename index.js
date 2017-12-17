const request = require('request');
const cheerio = require('cheerio');
const city = require('./city');
const url = 'http://www.cwb.gov.tw/V7/forecast/week/week.htm';

request(url, (err, res, body) => {
    const $ = cheerio.load(body);
    //const cityId = [];
    let weathers = [];
    //console.log("data",city.getAllCityNames());
    //抓白天天氣
    $('.BoxTableInside tbody tr').eq(1).find('img').each(function(i, elem) {
        weathers.push($(this).attr('src'));
      })
     //抓晚上天氣
    $('.BoxTableInside tbody tr').eq(2).find('img').each(function(i, elem) {
        weathers.push($(this).attr('src'));
      })
    console.log(weathers);
    //console.log(weathers[49][3]);
})
