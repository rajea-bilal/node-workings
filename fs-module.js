import { readFileSync,writeFileSync } from 'fs'

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/third.txt', 
`Here is the result: ${first}, ${second}`,
{ flag: 'a'}
)