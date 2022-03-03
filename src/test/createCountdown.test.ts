import { createCountdown } from '../lib/createCountdown'

describe('createCountdown', () => {
    it('should return 0 days when the day is today', () => {
        expect(createCountdown('03/03/2022')).toBe('0')
    });
    it('should return correct number of days until event when in the future', () => {
        expect(createCountdown('03/04/2022')).toBe('1')
    });
    it('should return correct number of days since an event when in the past', () => {
        expect(createCountdown("03/01/2022")).toBe('-2')
    });
});