export function putNamesTogether(firstName: string, lastName: string) {
    // return the first and last names with a space between them
    return `${firstName} ${lastName}`;
}

export function capitaliseFirstString(str: string) {
    // return the passed string with its first letter capitalised
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1)
}

export function capitaliseString(str: string) {
    // return the passed string with its first letter capitalised
    if (!str) {
        return str;
    }
    return str
        .split(' ') // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the array back into a string
}

export function convertToCamelCase(words: string): string {
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

/**
 * check if the input is valid 
 * if yes preform a reverse
 * @param input 
 * @returns 
 */
export function reversString(input: string | null | undefined): string {
    if (input === null || input === undefined) {
        return 'Please provide valid input';
    }
    return input.split('').reverse().join('');
}

/**
 * check if the input is valid 
 * if yes preform a chek if the input is palindrome 
 * @param input: string | null | undefined
 * @returns boolean
 */
export function isPalindrome(input: string | null | undefined): boolean {
    if (input === null || input === undefined) {
        return false
    }
    const processed = input.replace(/\s+/g, '').toLocaleLowerCase()
    return processed === processed.split('').reverse().join('')
}


export function charFrequency(input: string | null | undefined): Record<string, number> {
    if (input === null || input === undefined) {
        return { "Please insert valid input": 0 }
    }

    const processed = input.replace(/\s+/g, '').toLocaleLowerCase().split('')
    const countedCharacters = Object.create(null);
    for (const character of processed) {
        const currCount = countedCharacters[character] ?? 0
        countedCharacters[character] = currCount + 1;
    }
    return countedCharacters
}

/**
 * we have big string which could have capitals and lowercase and spaces
 * split the string in to individual characeter in to array so we can loop around
 * we need store non repeating characters and their occurencies in a object
 * loop the the object and find out if which of the value is equal of 1 and rerurn the key
 */
export function firstNonRepeatingChar(input: string): string | null {
    if (input.length === 0) {
        return null;
    }
    const countedCharacters: Record<string, number> = Object.create(null);
    const processed = input.split('')
    for (const character of processed) {
        countedCharacters[character] = (countedCharacters[character] ?? 0) +1
    }

    for (const character of input) {
        if (countedCharacters[character] === 1) {
            return character
        }
    }
    return null
}

export function firstRepeatingChar(input: string): string | null {
    if (input.length === 0) {
        return null;
    }
    const countedCharacters: Record<string, number> = Object.create(null);
    for (const character of input) {
        if (countedCharacters[character]) {
            return character;
        }
        countedCharacters[character] = 1; 
    }

    return null;
}
