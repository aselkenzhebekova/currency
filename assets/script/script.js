const btn = document.querySelector('button')
const som = document.querySelector('#som')
const dollar = document.querySelector('#dollar')
const output = document.querySelector('output')

let text = ''
som.addEventListener('input', (event) => {
  text = event.target.value
})

dollar.addEventListener('input', (event) => {
  text = event.target.value
})

btn.addEventListener('click', () => {
    console.log(text);
  })

let cent = ''
if (doll === 1) {
  cent = 100
}

let cents = 0
let kgs = 1
let usd = ''
const moneyTransfer = () => {
  if (kgs === 1) {
    usd = 0.012
  }
  console.log(`${usd}${kgs}`)
}

let result = usd + kgs

btn.addEventListener('click', () => {
  moneyTransfer()
})


