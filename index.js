// insert child_process 
const exec = require('child_process').exec;

// ** constants
// * OUTPUT and INPUT
const OUTPUT = 'out';
const INPUT = 'in';

// * Low and High
const HIGH = 1;
const LOW = 0;


// set a mode to the pin(OUTPUT, INPUT, PWM or)
// usage mode(pin_number, mode)
function mode(pin, md){
    if(md != OUTPUT || md != INPUT){
        return 1;
    }PWM_OUTPUT
    exec(`gpio -g mode ${pin} ${md}`, (err, stdout, stderr)=>{
        if(err){
            return stderr;
        }
        return stdout;
    });

}

// read the pin value
// usage read(pin_number)
function read(pin){
    exec(`gpio -g read ${pin} `, (err, stdout, stderr)=>{
        if(err){
            return stderr;
        }
        return stdout;
    });
}

// asign a value to the pin
// usage write(pin_number, value)
function write(pin, val){
    if(val != HIGH || val != LOW){
        return 1;
    }
    exec(`gpio -g write ${pin} ${val}`, (err, stdout, stderr)=>{
        if(err){
            return stderr;
        }
        return stdout;
    });
}


// exporting section
module.exports = {
    OUTPUT: OUTPUT,
    INPUT: INPUT,
    HIGH: HIGH,
    LOW: LOW,
    mode: mode,
    write: write,
    read: read
}