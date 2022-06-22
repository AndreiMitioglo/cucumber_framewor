$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/google.feature");
formatter.feature({
  "name": "Google Search Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "# only for before center steps \"Given\" \"When\"...,  not for after like \"And\"",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"http://google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Google Search result",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "#"
    },
    {
      "name": "@Google"
    },
    {
      "name": "@Functional"
    },
    {
      "name": "//"
    },
    {
      "name": "can"
    },
    {
      "name": "run"
    },
    {
      "name": "whit"
    },
    {
      "name": "any"
    },
    {
      "name": "annotation"
    },
    {
      "name": "names"
    }
  ]
});
formatter.step({
  "name": "user searches for \"Apple\" on Google",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSteps.user_searches_for_on_google(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see results are more than 5000",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSteps.userShouldSeeResultsAreMoreThan(long)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});