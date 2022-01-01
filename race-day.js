let raceNumber = Math.floor(Math.random() * 1000); //Generate Random Race Number from 0 to 1000
let registeredEarly = true;
let runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`Runner with number ${raceNumber}, you'll begin your race at 9:30pm`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Runner with number ${raceNumber}, you'll begin your race at 11:00am`);
} else if (runnerAge < 18) {
  console.log(`Runner with number ${raceNumber} you'll begin your race at 12:30pm`);
} else {
  console.log('Please see the registration desk!');
}
