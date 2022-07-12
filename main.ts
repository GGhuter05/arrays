let anything: number[] = []
for (let index = 0; index < 7; index++) {
    anything.push(randint(0, 9))
}
for (let value of anything) {
    basic.showNumber(value)
}
