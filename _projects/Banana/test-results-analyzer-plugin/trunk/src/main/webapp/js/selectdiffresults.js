// Creates the dropdown menus that allows the user to select which two builds they want to compare.

function createDropdown(resultData) {
    var select = '';
    var numBuilds = resultData['builds'].length;
    for (var i = 0; i < numBuilds; i++) {
        var buildNumber = resultData['builds'][i];
        var option = '<option value="'+buildNumber+'">'+buildNumber+'</option>';
        select = select + option;
    }
    select = select + '</select>';

    var menus = $j('<span>Compare build <select id="selectFirstBuild">'+select+' with build <select id="selectSecondBuild">'+select+'.</span>');
    return menus;
}
