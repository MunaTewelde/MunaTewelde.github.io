exports.add = function (req, res, vals) {
    var operators = vals.opt;
    if (operators == "add")
        var result = parseInt(vals.first) + parseInt(vals.second);
    else if (operators == "subtract")
        var result = parseInt(vals.first) - parseInt(vals.second);
    else if (operators == "multiply")
        var result = parseInt(vals.first) * parseInt(vals.second);
    else
        var result = parseInt(vals.first) / parseInt(vals.second);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The result is: ");
    res.write(String(result));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};