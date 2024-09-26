Feature: Automation test for form
@test
Scenario: Verify checkout form order success
  When Click on Signup Login button
  When Enter a valid email address and password
  And Click on SignIn button
  And Click on Form tab
  Then Verify that if Shipping address same as billing checkbox is not checkmarked then checkmark it
  And Fill all the details in the form
  When Click on Continue to checkout button
  Then Verify that the order confirmation number is not empty

Scenario: Verify checkout form alert
  When Click on Signup Login button
  When Enter a valid email address and password
  And Click on SignIn button
  And Click on Form tab
  Then Verify that if Shipping address same as billing checkbox is checkmarked, then uncheckmark it
  When Fill all the details in the form
  Then Submit the form and verify the alert message is shown and confirm the alert
  When Click on Grid tab

Scenario: Verify Items in the grid
  When Click on Signup Login button
  When Enter a valid email address and password
  And Click on SignIn button
  And Click on Form tab
  Then Verify that the cart total shown is correct for the item prices added