function putNamesTogether(firstName: string, lastName: string) {
    // return the first and last names with a space between them
    return `${firstName} ${lastName}`;
}

function capitaliseFirstString(str: string) {
    // return the passed string with its first letter capitalised
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1)
}

function capitaliseString(str: string) {
    // return the passed string with its first letter capitalised
    if (!str) {
        return str;
    }
    return str
        .split(' ') // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the array back into a string
}

function convertToCamelCase(words: string): string {
    // convert the passed string of space-separated words to camel case
    // camel case looks like this --> camelCaseLooksLikeThis

    // Split the string into an array of words using space as the delimiter.
    const wordsArray = words.split(' ');
    // Transform each word: capitalize the first letter of subsequent words, lower case the first word.
    const camelCaseWords = wordsArray.map((word: string, index: number) => {
        // Lowercase the first word, capitalize the first letter of subsequent words
        if (index === 0) {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });
    return camelCaseWords.join('');
}







export {
  putNamesTogether,
  capitaliseFirstString,
  capitaliseString,
  convertToCamelCase,
};  