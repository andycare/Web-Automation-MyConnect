Feature: Login Feature
  Description: The purpose of this feature is to login page

  @CorrectCredential
  Scenario: Login with correct credential
    Given I navigate to login page
    And I enter username
    And I enter password
    When I click push button
    Then I should be able to access the dashboard

  @IncorrectPassword
  Scenario: Login with incorrect password
    Given I navigate to login page
    And I enter username
    And I enter wrong password
    When I click push button
    Then I should see warning message incorrect password

  @IncorrectUsername
  Scenario: Login with incorrect username
    Given I navigate to login page
    And I enter wrong username
    And I enter password
    When I click push button
    Then I should see warning message incorrect username