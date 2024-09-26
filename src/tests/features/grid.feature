Feature: Automation test for search

Scenario: Verify Items in the grid
  When Click on Signup Login button
  When Enter a valid email address and password
  And Click on SignIn button
  And Click on Grid tab
  Then Verify that in position 7 the product shown is "Super Pepperoni"
  And Verify that in position 7 the price shown is "$10"

Scenario: Verify all the items have a non empty title, price, image and a button
  When Click on Signup Login button
  When Enter a valid email address and password
  And Click on SignIn button
  And Click on Grid tab
  Then Verify that all the items have a non empty title, price, image and a button