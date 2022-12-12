import os from "os"

// info about the current user
const user = os.userInfo()
// console.log(user)

// how long the computer has been running in seconds. This method returns the system uptime in seconds
const upTime = os.uptime()
// console.log(`System uptime is ${upTime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)



