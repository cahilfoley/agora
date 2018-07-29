/**
 * Transforms the provided camel-case string into seperate capitalized words
 *
 * @param {string} string The camel-case string to transform
 * @return {string}
 *
 * @example camelToTitle('iLoveCamels') // => 'I Love Camels'
 */
export default string =>
  string
    .replace(/([A-Z]|[0-9]+)/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace(/\s+/g, ' ')
