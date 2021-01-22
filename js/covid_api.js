(function () {
	// Create the connector object
	var myConnector = tableau.makeConnector();

	// Define the schema
	myConnector.getSchema = function (schemaCallback) {
		var cols = [
			{
				id: "date",
				dataType: tableau.dataTypeEnum.string,
			},
			{
				id: "state",
				dataType: tableau.dataTypeEnum.string,
			},
			{
				id: "positive",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "probableCases",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "negative",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "pending",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "totalTestResultsSource",
				dataType: tableau.dataTypeEnum.string,
			},
			{
				id: "totalTestResults",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "hospitalizedCurrently",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "hospitalizedCumulative",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "inIcuCurrently",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "inIcuCumulative",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "onVentilatorCurrently",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "onVentilatorCumulative",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "recovered",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "dataQualityGrade",
				dataType: tableau.dataTypeEnum.string,
			},
			{
				id: "lastUpdateEt",
				dataType: tableau.dataTypeEnum.datetime,
			},
			{
				id: "dateModified",
				dataType: tableau.dataTypeEnum.datetime,
			},
			{
				id: "checkTimeEt",
				dataType: tableau.dataTypeEnum.datetime,
			},
			{
				id: "death",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "hospitalized",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "dateChecked",
				dataType: tableau.dataTypeEnum.datetime,
			},
			{
				id: "totalTestsViral",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "positiveTestsViral",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "negativeTestsViral",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "positiveCasesViral",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "deathConfirmed",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "deathProbable",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "totalTestEncountersViral",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "totalTestsPeopleViral",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "totalTestsAntibody",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "positiveTestsAntibody",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "negativeTestsAntibody",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "totalTestsPeopleAntibody",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "positiveTestsPeopleAntibody",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "negativeTestsPeopleAntibody",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "totalTestsPeopleAntigen",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "positiveTestsPeopleAntigen",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "totalTestsAntigen",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "positiveTestsAntigen",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "fips",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "positiveIncrease",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "negativeIncrease",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "total",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "totalTestResultsIncrease",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "posNeg",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "deathIncrease",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "hospitalizedIncrease",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "hash",
				dataType: tableau.dataTypeEnum.string,
			},
			{
				id: "commercialScore",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "negativeRegularScore",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "negativeScore",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "positiveScore",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "score",
				dataType: tableau.dataTypeEnum.float,
			},
			{
				id: "grade",
				dataType: tableau.dataTypeEnum.string,
			},
		];

		var tableSchema = {
			id: "COVIDTracker",
			alias: "The COVID Tracking Project Daily Tracker",
			columns: cols,
		};

		schemaCallback([tableSchema]);
	};

	// Download the data
	myConnector.getData = function (table, doneCallback) {
		$.getJSON(
			"https://api.covidtracking.com/v1/states/daily.json",
			function (resp) {
				var feat = resp,
					tableData = [];

				// Iterate over the JSON object
				for (var i = 0, len = feat.length; i < len; i++) {
					tableData.push({
						date: feat[i].date,
						state: feat[i].state,
						positive: feat[i].positive,
						probableCases: feat[i].probableCases,
						negative: feat[i].negative,
						pending: feat[i].pending,
						totalTestResultsSource: feat[i].totalTestResultsSource,
						totalTestResults: feat[i].totalTestResults,
						hospitalizedCurrently: feat[i].hospitalizedCurrently,
						hospitalizedCumulative: feat[i].hospitalizedCumulative,
						inIcuCurrently: feat[i].inIcuCurrently,
						inIcuCumulative: feat[i].inIcuCumulative,
						onVentilatorCurrently: feat[i].onVentilatorCurrently,
						onVentilatorCumulative: feat[i].onVentilatorCumulative,
						recovered: feat[i].recovered,
						dataQualityGrade: feat[i].dataQualityGrade,
						lastUpdateEt: feat[i].lastUpdateEt,
						dateModified: feat[i].dateModified,
						checkTimeEt: feat[i].checkTimeEt,
						death: feat[i].death,
						hospitalized: feat[i].hospitalized,
						dateChecked: feat[i].dateChecked,
						totalTestsViral: feat[i].totalTestsViral,
						positiveTestsViral: feat[i].positiveTestsViral,
						negativeTestsViral: feat[i].negativeTestsViral,
						positiveCasesViral: feat[i].positiveCasesViral,
						deathConfirmed: feat[i].deathConfirmed,
						deathProbable: feat[i].deathProbable,
						totalTestEncountersViral: feat[i].totalTestEncountersViral,
						totalTestsPeopleViral: feat[i].totalTestsPeopleViral,
						totalTestsAntibody: feat[i].totalTestsAntibody,
						positiveTestsAntibody: feat[i].positiveTestsAntibody,
						negativeTestsAntibody: feat[i].negativeTestsAntibody,
						totalTestsPeopleAntibody: feat[i].totalTestsPeopleAntibody,
						positiveTestsPeopleAntibody: feat[i].positiveTestsPeopleAntibody,
						negativeTestsPeopleAntibody: feat[i].negativeTestsPeopleAntibody,
						totalTestsPeopleAntigen: feat[i].totalTestsPeopleAntigen,
						positiveTestsPeopleAntigen: feat[i].positiveTestsPeopleAntigen,
						totalTestsAntigen: feat[i].totalTestsAntigen,
						positiveTestsAntigen: feat[i].positiveTestsAntigen,
						fips: feat[i].fips,
						positiveIncrease: feat[i].positiveIncrease,
						negativeIncrease: feat[i].negativeIncrease,
						total: feat[i].total,
						totalTestResultsIncrease: feat[i].totalTestResultsIncrease,
						posNeg: feat[i].posNeg,
						deathIncrease: feat[i].deathIncrease,
						hospitalizedIncrease: feat[i].hospitalizedIncrease,
						hash: feat[i].hash,
						commercialScore: feat[i].commercialScore,
						negativeRegularScore: feat[i].negativeRegularScore,
						negativeScore: feat[i].negativeScore,
						positiveScore: feat[i].positiveScore,
						score: feat[i].score,
						grade: feat[i].grade,
					});
				}

				table.appendRows(tableData);
				doneCallback();
			}
		);
	};

	tableau.registerConnector(myConnector);

	// Create event listeners for when the user submits the form
	$(document).ready(function () {
		$("#submitButton").click(function () {
			tableau.connectionName = "The COVID Tracking Project"; // This will be the data source name in Tableau
			tableau.submit(); // This sends the connector object to Tableau
		});
	});
})();
