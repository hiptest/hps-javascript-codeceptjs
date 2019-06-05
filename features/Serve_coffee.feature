@sprint-1 @JIRA-CMM-1
Feature: Serve coffee
    As a coffee lover
    I can get coffee from the machine
    So I can enjoy the rest of the day

  @priority-0
  Scenario Outline: Simple use (<hiptest-uid>)
    Well, sometimes, you just get a coffee.
    Given the coffee machine is started
    When I take a coffee
    Then coffee should be served

    Examples:
      | content_type | hiptest-uid |
      | image |  |
      | article |  |
      | page (PDF) |  |
      | graphic |  |
