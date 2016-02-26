var key = getApiKey();

function files() {
    $(function() {
        $.get(
            "/files",
            function(result) {
                list = JSON.parse(result);
                console.log(list);
                for (var i = 0; i < list['files'].length; i++) {
                    // Exclude these core files
                    if (list['files'][i] == "Main.js" || list['files'][i] == "dashboard" || list['files'][i] == "node_modules" ||
                        list['files'][i] == ".git" || list['files'][i] == "server_files" || list['files'][i] == "README.md" ||
                        list['files'][i] == "package.json") {} else {
                            var download = encodeURIComponent(list['files'][i]);
                        //console.log(list['files'][i]);
                        $('#filelist tbody').append('<tr><td><a class="btn" href="/edit.html#' + list['files'][i] +
                            '">' + list['files'][i] + '</td><td><a class="btn" href="/download/' + download + '">Download <a href="#" class="btn" onclick="delete(' +
                            list['files'][i] + ')">Delete</td></tr>');
                    }
                }
            });
    });
}
files();