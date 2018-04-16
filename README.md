# E-newsletter

### Auto generate the E-newsletter

Run `yarn run edm` to generate the E-newsletter.

It include two part:
- `node ./input/js/getData.js` use node to parse JSON data from API.
- `gulp fileinclude` use gulp to merge the template and data, compose the E-newsletter.

#### Parse JSON Data back
please note the limitation: the API could get the last 8 records of IoT SH articles data back for maximum (total). 
if this month's number of posts is more than 8 articles, please adjust/add the `./input/data/thisMonth.json` manually.

<img src="https://imgur.com/RJnDgoA.jpg" width="100%">

As shown above, the `now month` is `3` means now it get the March's articles data back now, it will get the last month's data back and omit other month's article. 

that is - the appropriate time of compsing the E-newsletter is on the first day of every month, 
so it will get the last month's articles and generate E-newsletter for you.

#### Use gulp for generatation 

if you adjust the `thisMonth.json` manually, you might want change the reference data file,
you can change it in the `input/index.html` like below

<img src="https://imgur.com/KJGnBNg.jpg" width="70%">

just run `gulp fileinclude` instead `yarn run edm` to generate what you want.

<img src="https://imgur.com/EgCOsYJ.jpg" width="70%">

Grab the generated EDM filein the 
**_output_ >_index.html_**


### schdule the generate time
#### crontab
use [crontab](https://code.tutsplus.com/tutorials/scheduling-tasks-with-cron-jobs--net-8800) to schedule the time every month let it  auto-generate.

<img src="https://imgur.com/Xd47M6W.jpg" width="70%">


please change those files to fit your related folder path
- [generateEdm.command](https://github.com/DeAnnHuang/EDM-Generater/blob/master/crontab/generateEdm.command)
- [ftpUpload.command](https://github.com/DeAnnHuang/EDM-Generater/blob/master/crontab/ftpUpload.command)

after run above 2 commands , remember to go [here](http://jp-publishweb.jp.trendnet.org/production/iotsec_us/) to publish.

the web version will show up on: [https://www.trendmicro.com/us/iot-security/content/edm/](https://www.trendmicro.com/us/iot-security/content/edm/)
