class Formatter {
  // Method to capitalize the first letter of a string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  // Method to sanitize a string that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }
  
  // Method to titleize a string
  static titleize(str, exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']) {
    const exceptionsSet = new Set(exceptions)
    const words = str.split(' ')
    const result = words.map((word, index) => {
      if (exceptionsSet.has(word.toLowerCase()) && index !== 0) {
        return word.toLowerCase()
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      }
    }).join(' ')
    return result
  }
}
