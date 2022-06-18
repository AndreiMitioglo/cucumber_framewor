




Feature: Google Search Functionality

   @Regression   @Google   @Integration   // can run whit any annotation names
  Scenario: Validate Google search
    Given user navigates to "http://google.com/"
    When user searches for "Tesla" on Google
    Then user should see "Tesla" in the url
    And user should see "Tesla" in the title

    @Smoke   @Google   @Functional
    Scenario: Validate Google Search result
      Given user navigates to "http://google.com/"
      When user searches for "Apple" on Google
      Then user should see results are more than 5000

