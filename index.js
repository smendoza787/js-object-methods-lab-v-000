class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return "NO!";
  }

  passBill() {
    return "You can do that!"
  }

  doCharity() {
    return "I like to help people."
  }

  conductPressInterview() {
    return "I am proud to be an American."
  }

  sayHi() {
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + "."
  }
}

// George Washington, Abraham Lincoln, Richard Nixon, and Jimmy Carter

var george = new President("George Washington", "Democrat", "1776 - 1790", "Delaware");
var abraham = new President("Abraham Lincoln", "Republican", "1222-4432", "Texas");
var richard = new President("Richard Nixon", "Republican", "1344-2323", "Chicago");
var jimmy = new President("Jimmy Carter", "Democrat", "2344-4554", "Chicago");
