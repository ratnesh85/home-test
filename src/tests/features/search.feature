Feature: Automation test for search

Scenario: Verify successfull search
  When Click on Signup Login button
  When Enter a valid email address and password
  And Click on SignIn button
  And Click on Search tab
  And Enter a valid search term "automation"
  And Click on Search button
  Then Verify search results are displayed and it contains "Found one result for"

Scenario: Verify empty search
  When Click on Signup Login button
  When Enter a valid email address and password
  And Click on SignIn button
  And Click on Search tab
  And Enter a valid search term ""
  And Click on Search button
  Then Verify search results are displayed and it contains "Please provide a search word."
