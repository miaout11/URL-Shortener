function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function newShorten() {

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  const collection = lowerCaseLetters + upperCaseLetters + numbers

  let shortenUrl = ''
  for (let i = 0; i < 5; i++) {
    shortenUrl += sample(collection)
  }
  return shortenUrl
}

module.exports = newShorten