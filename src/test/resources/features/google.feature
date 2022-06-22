




Feature: Google Search Functionality
# Each future file must have a Feature name
  # To declare all scenarios n the feature file with a tag, we can put tag on the top of Feature

  Background: # only for before center steps "Given" "When"...,  not for after like "And"
    Given user navigates to "http://google.com/"

   @Regression     # can run whit any annotation names
    Scenario: Validate Google search

    When user searches for "Tesla" on Google
    Then user should see "Tesla" in the url
    And user should see "Tesla" in the title

    @Smoke  # @Google   @Functional  // can run whit any annotation names
      Scenario: Validate Google Search result

      When user searches for "Apple" on Google
      Then user should see results are more than 5000

