Feature: Automation test for login


Scenario: Successful User Login
  When Click on Signup Login button
  When Enter a valid email address and password
  And Click on SignIn button
  Then Verify that welcome message with username is displayed

Scenario: Verify error message for invalid credentials
  When Click on Signup Login button
  When Enter an invalid email address and password
  And Click on SignIn button
  Then Verify that error message "Wrong credentials" is displayed

Scenario: Verify error message for blank credentials
  When Click on Signup Login button
  When Enter blank email address and password
  And Click on SignIn button
  Then Verify that error message "Fields can not be empty" is displayed



