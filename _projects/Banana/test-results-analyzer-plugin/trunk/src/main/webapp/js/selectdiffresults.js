// Creates the dropdown menus that allows the user to select which two builds they want to compare.

function addOptions(resultData) {
    var numBuilds = resultData['builds'].length;
    for (var i = 0; i < numBuilds; i++) {
        var buildNumber = resultData['builds'][i];
        $j("#selectFirstBuild").append($j("<option>")
            .val(i)
            .html(buildNumber)
        );
        $j("#selectSecondBuild").append($j("<option>")
            .val(i)
            .html(buildNumber)
        );
    }
}

function showDiffs() {
    var noOfBuilds = $j('#noofbuilds').val();
    var statusFilter = $j('#teststatus').val();
    displayValues = $j("#show-durations").is(":checked");

    remoteAction.getTreeResult(noOfBuilds, statusFilter, $j.proxy(function(t) {
        var itemsResponse = t.responseObject();
        var firstBuildIndex = $j('#selectFirstBuild').val();
        var secondBuildIndex = $j('#selectSecondBuild').val();
        console.log("Comparing build " + itemsResponse['builds'][firstBuildIndex] + " to build " + itemsResponse['builds'][secondBuildIndex]);
        testResultData = itemsResponse; //gets data out for other uses
        var diffList = getDiffs(itemsResponse, firstBuildIndex, secondBuildIndex);
        if (diffList.html() != "") {
            $j("#diffList").html(diffList); // add list with differences
        } else {
            $j("#diffList").html("No differences between these two builds");
        }
    }, this));
}

function createCheckboxButton() {
    var checkbutton = '<button id="getcheckedbuilds">Compare Checked Builds</button>';
    return checkbutton;
}
