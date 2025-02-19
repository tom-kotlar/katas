export function removeDuplicates(arr: string[]): string[] {
   const seen: Record<string, boolean> = {}
   const result: string[] = []

   for (let i = 0; i < arr.length; i++) {
    const value = arr[i] 
    if (!seen[value] ) {
        seen[value] = true
        result.push(value)
    }
   }
    // or just to use [...new Set(arr)]
    return result
}