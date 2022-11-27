Feature: Search Cause     
      
      As a user
      I want to search for causes
      So that I can choose the one I want to support


Scenario Outline:Verify Search Cause functionality for a Easyfundraising site.
 
    Given I am on the home page
    When  I clicked the link ‘Find a Cause’ on the top of the page
    And   I entered '<searchtext>' in the Search field
    And   I selected the 3rd cause from the suggestion list
    And   I clicked on Search cause
    Then  I should see the selected 3rd Cause in '<searchcauseresult>'

    Examples:
      | searchtext | searchcauseresult                 |
      | abc        | ABC Childcare - Ipswich           |
      | pqa        | Bradley Stoke PQA - Costume Fund  |

