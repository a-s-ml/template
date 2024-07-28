import { useEffect, useState } from "react"

export const useDebounce = (string: string, delay: number = 500): string => {
    const [debounced, setDebounced] = useState(string)

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(string), delay)
        return () => clearTimeout(handler)
    }, [string, delay])

    return debounced
}   