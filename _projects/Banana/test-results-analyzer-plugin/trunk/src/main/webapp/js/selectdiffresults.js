// Creates the dropdown menus that allows the user to select which two builds they want to compare.

function createDropdown(resultData) {
    //var menus = $j('Compare build <select id="selectFirstBuild"></select> with build <select id="selectSecondBuild"></select>');
    var menus = $j('<select id="selectFirstBuild"></select>');
    var numBuilds = resultData['builds'].length;


    return menus;
}
