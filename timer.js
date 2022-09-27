const input = process.argv.slice(2);

const alarmTimers = function(...delays) {
  if (input.length <= 0 || input < 0 || isNaN(input) ) {
    return;
  }
  for (let i = 0; i < input.length; i++) {
    input[i] += "000";
  }
  for (let i = 0; i < input.length; i++) {

    setTimeout(() => {
      process.stdout.write('\x07');
    }, input[i]);
  }
};

alarmTimers(input);