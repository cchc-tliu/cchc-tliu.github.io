(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "date",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "state",
            dataType: tableau.dataTypeEnum.geometry
        }, {
            id: "positive",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "probableCases",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "negative",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "pending",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "totalTestResultsSource",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "totalTestResults",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "hospitalizedCurrently",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "hospitalizedCumulative",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "inIcuCurrently",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "inIcuCumulative",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "onVentilatorCurrently",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "onVentilatorCumulative",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "recovered",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "dataQualityGrade",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "lastUpdateEt",
            dataType: tableau.dataTypeEnum.datetime
        }, {
            id: "dateModified",
            dataType: tableau.dataTypeEnum.datetime
        }, {
            id: "checkTimeEt",
            dataType: tableau.dataTypeEnum.datetime
        }, {
            id: "death",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "hospitalized",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "dateChecked",
            dataType: tableau.dataTypeEnum.datetime
        }, {
            id: "totalTestsViral",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "positiveTestsViral",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "negativeTestsViral",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "positiveCasesViral",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "deathConfirmed",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "deathProbable",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "totalTestEncountersViral",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "totalTestsPeopleViral",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "totalTestsAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "positiveTestsAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "negativeTestsAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "totalTestsPeopleAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "positiveTestsPeopleAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "negativeTestsPeopleAntibody",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "totalTestsPeopleAntigen",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "Positive",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "positiveTestsPeopleAntigen",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "totalTestsAntigen",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "positiveTestsAntigen",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "fips",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "positiveIncrease",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "negativeIncrease",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "total",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "totalTestResultsIncrease",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "posNeg",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "deathIncrease",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "hospitalizedIncrease",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "hash",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "commercialScore",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "negativeRegularScore",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "negativeScore",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "positiveScore",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "score",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "grade",
            dataType: tableau.dataTypeEnum.string
        }];

        var tableSchema = {
            id: "COVIDTracker",
            alias: "The COVID Tracking Project Daily Tracker",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://api.covidtracking.com/v1/states/daily.json", function(resp) {
            var feat = resp.features,
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
		    "date": feat[i].properties.date,
"state": feat[i].geometry,
"positive": feat[i].properties.positive,
"probableCases": feat[i].properties.probableCases,
"negative": feat[i].properties.negative,
"pending": feat[i].properties.pending,
"totalTestResultsSource": feat[i].properties.totalTestResultsSource,
"totalTestResults": feat[i].properties.totalTestResults,
"hospitalizedCurrently": feat[i].properties.hospitalizedCurrently,
"hospitalizedCumulative": feat[i].properties.hospitalizedCumulative,
"inIcuCurrently": feat[i].properties.inIcuCurrently,
"inIcuCumulative": feat[i].properties.inIcuCumulative,
"onVentilatorCurrently": feat[i].properties.onVentilatorCurrently,
"onVentilatorCumulative": feat[i].properties.onVentilatorCumulative,
"recovered": feat[i].properties.recovered,
"dataQualityGrade": feat[i].properties.dataQualityGrade,
"lastUpdateEt": feat[i].properties.lastUpdateEt,
"dateModified": feat[i].properties.dateModified,
"checkTimeEt": feat[i].properties.checkTimeEt,
"death": feat[i].properties.death,
"hospitalized": feat[i].properties.hospitalized,
"dateChecked": feat[i].properties.dateChecked,
"totalTestsViral": feat[i].properties.totalTestsViral,
"positiveTestsViral": feat[i].properties.positiveTestsViral,
"negativeTestsViral": feat[i].properties.negativeTestsViral,
"positiveCasesViral": feat[i].properties.positiveCasesViral,
"deathConfirmed": feat[i].properties.deathConfirmed,
"deathProbable": feat[i].properties.deathProbable,
"totalTestEncountersViral": feat[i].properties.totalTestEncountersViral,
"totalTestsPeopleViral": feat[i].properties.totalTestsPeopleViral,
"totalTestsAntibody": feat[i].properties.totalTestsAntibody,
"positiveTestsAntibody": feat[i].properties.positiveTestsAntibody,
"negativeTestsAntibody": feat[i].properties.negativeTestsAntibody,
"totalTestsPeopleAntibody": feat[i].properties.totalTestsPeopleAntibody,
"positiveTestsPeopleAntibody": feat[i].properties.positiveTestsPeopleAntibody,
"negativeTestsPeopleAntibody": feat[i].properties.negativeTestsPeopleAntibody,
"totalTestsPeopleAntigen": feat[i].properties.totalTestsPeopleAntigen,
"positiveTestsPeopleAntigen": feat[i].properties.positiveTestsPeopleAntigen,
"totalTestsAntigen": feat[i].properties.totalTestsAntigen,
"positiveTestsAntigen": feat[i].properties.positiveTestsAntigen,
"fips": feat[i].properties.fips,
"positiveIncrease": feat[i].properties.positiveIncrease,
"negativeIncrease": feat[i].properties.negativeIncrease,
"total": feat[i].properties.total,
"totalTestResultsIncrease": feat[i].properties.totalTestResultsIncrease,
"posNeg": feat[i].properties.posNeg,
"deathIncrease": feat[i].properties.deathIncrease,
"hospitalizedIncrease": feat[i].properties.hospitalizedIncrease,
"hash": feat[i].properties.hash,
"commercialScore": feat[i].properties.commercialScore,
"negativeRegularScore": feat[i].properties.negativeRegularScore,
"negativeScore": feat[i].properties.negativeScore,
"positiveScore": feat[i].properties.positiveScore,
"score": feat[i].properties.score,
"grade": feat[i].properties.grade
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "The COVID Tracking Project"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();