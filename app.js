var express = require('express');
var app = express();

app.all('/api/:test', function (req, res) {

    switch (req.params.test) {
        case '500':
            res.status(500).json({error: '500'});
            break;
        case '404':
            res.status(404).json({error: '404'});
            break;
        case 'abort':
            setTimeout(function () {
                res.send('abort');
            }, 10000);
            break;
        case 'timeout':
            setTimeout(function () {
                res.json({
                    success: true,
                    content: {
                        id: 1
                    }
                });
            }, 1000); // 时间不要太大 否则单测太漫长
            break;
        case 'text':
            res.send('demo text');
            break;
        case 'jsonp-failed':
            res.jsonp({
                success: false,
                error: {
                    message: 'demo error'
                }
            });
            break;
        case 'jsonp-success':
            res.jsonp({
                success: true,
                content: {
                    id: 1
                }
            });
            break;
        case 'xhr-failed':
            res.json({
                success: false,
                error: {
                    message: 'demo error'
                }
            });
            break;
        case 'xhr-success':
            res.json({
                success: true,
                content: {
                    id: 1
                }
            });
            break;
        default:
            res.json({
                success: true,
                content: {
                    id: 1
                }
            });
            break;
    }

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});