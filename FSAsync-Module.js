import { readFile, writeFile } from 'fs'


console.log('Start task')
readFile('./content/first.txt', 'utf-8',  (error, resultFirst) => {
    if(error){
        console.log(error)
        return
    } else {
        const first = resultFirst
        readFile('./content/second.txt', 'utf-8', (error, resultSecond) => {
            if(error){
                console.log(error)
                return
            } else {
                const second = resultSecond
                writeFile('./content/third.txt', 
                `${first} ${second}`, (error, result) => {
                    if(error) {
                        console.log(error)
                        return
                    } else {
                        console.log(result)
                    }
                    console.log('Done with this task')
                })
            }
        })
    }
})

console.log('Starting next task')