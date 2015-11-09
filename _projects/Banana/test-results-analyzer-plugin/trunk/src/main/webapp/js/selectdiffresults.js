// Creates the dropdown menus that allows the user to select which two builds they want to compare.

function createDropdown(resultData) {
    //var menus = $j('Compare build <select id="selectFirstBuild"></select> with build <select id="selectSecondBuild"></select>');
    var menus = $j('<select />');
    var numBuilds = resultData['builds'].length;

    for (var i = 0; i < numBuilds; i++) {
        var curBuildNumber = resultData['builds'][i];
        var option = $j('<option value="' + curBuildNumber + '">' + curBuildNumber + '</option');
        console.log(option);
        menus.append(option);
    }

    return menus;
}
