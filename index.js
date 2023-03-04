const yargs = require('yargs')
const Users = require('./Users')

yargs.command({
    command: "add",
    describe: "Adding new user",
    builder: {
        fname: {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        },
        id: {
            describe: "adding the id",
            demandOption: true,
            type: "string"
        },
        grade: {
            describe: "Adding array of 6 marks",
            demandOption: true,
        }
    },
    handler: (argv) => {
        console.log("Adding new user...");
        let user = new Users(argv.id, argv.lname, argv.fname,argv.age,argv.city,argv.grade)
        user.save()
    }
})
yargs.command({
    command: "delete",
    describe: "Adding new user",
    builder: {
        id: {
            describe: "deleting user",
            demandOption: true,
            type: "number"
        }
    },
    handler: (argv) => {
        console.log("Deleting user...");
        Users.delete(argv.id)
    }
})
yargs.command({
    command: "list",
    describe: "list user",
    handler: (argv) => {
        console.log("Deleting user...");
        Users.list()
    }
})
 yargs.parse()
