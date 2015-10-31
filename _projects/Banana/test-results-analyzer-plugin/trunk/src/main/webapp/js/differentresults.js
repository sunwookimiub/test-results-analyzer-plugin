//differentresults.js


//get package level of JSON object as set in testresults.js
var packages = testResultsData['results'];

//iterate packages
var numPackages = packages.length;
for (var pkgIdx = 0; pkgIdx < numPackages; pkgIdx++) {
    //iterate classes
    var classes = packages['children'];
    var numClasses = classes.length;
    for (var clsIdx = 0; clsIdx < numClasses; clsIdx++) {
        //iterate tests
        var testCases = classes['children'];
        var numTestCases = testCases.length;
        for (var tstIdx = 0; tstIdx < numTestCases; tstIdx++) {
            //get results for current test case
            var testCaseResults = testCases[tstIdx]['buildResults'];

        }

    }

}

/*
//get last build results and second to last build results
//list differencess
var list = $j('<ul />');
function getDiffs(latestBuildResults, secondToLatestBuildResults) {
    
}
getDiffs();
*/

