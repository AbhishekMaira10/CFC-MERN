function happy() {
  console.log('I AM HAPPy')
}

setInterval(happy, 1000) // runs for 1 second
setTimeout(happy, 1000) // runs once for 1 second

let arr = [10, 21, 20, 0, '']

let out = arr.filter(function (item) {
  return item
})

let arr2 = []

function hey(name) {
  console.log('Hurray  , ' + name)
}

arr2.push(hey)

arr2[0]('Harry')
