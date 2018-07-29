/**
 * Converts a provided string into a 2 or 3 letter acronym
 *
 * @param {string} title
 * @returns {string}
 */
export default title => {
  let words = title
    .split(/ |\.|_|,/g)
    .map(word => word.trim())
    .filter(word => word.length > 0)

  if (words.length === 1) {
    return words[0].substring(0, 3).toUpperCase()
  } else if (words.length > 3) {
    words = words.filter(word => word.length > 3)
    const longerWords = words.filter(word => word.length > 3)
    if (longerWords.length > 1) {
      words = longerWords
    }
  } else if (words.length === 0) {
    words = ['N', 'A']
  }

  return words
    .map(word => word[0].toUpperCase())
    .join('')
    .substring(0, 3)
}
