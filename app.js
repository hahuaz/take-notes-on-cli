const fs = require('fs');
const yargs = require('yargs');

const functions = require('./functions');

/* command should be like this
node app.js add --subject="Edilen kar" --note="23 Lira"
*/

yargs.command({
  command: 'add',
  describe: 'Adds a note',
  builder: {
    subject: {
      demandOption: true,
    },
    note: {
      demandOption: true,
    },
  },
  handler: (argv) => {
    /* argv holds options for given command(subject, note) */
    functions.add(argv.subject, argv.note);
  },
});

yargs.parse();
