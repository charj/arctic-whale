exports.index = function(req, res) {
    var jsonData = {};
    
    jsonData.test = 'blah';
    jsonData.hello = 'world';

    res.status(200).json(jsonData);
}
