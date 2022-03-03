export const createCountdown = (date: string): number => {
    const today = Date.now()
    const eventDate = Date.parse(date)

    const total = eventDate - today
    const days = Math.floor(total / (1000 * 60 * 60 * 24)) + 1

    return days
}