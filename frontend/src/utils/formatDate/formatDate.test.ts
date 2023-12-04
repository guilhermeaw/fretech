import { formatDate, formatDateTime } from './formatDate';

describe('formatDate util', () => {
  describe('formatDate', () => {
    it.each`
      date                         | expected
      ${'2021-01-01'}              | ${'01/01/2021'}
      ${'2023-08-09 18:57:21.166'} | ${'09/08/2023'}
      ${null}                      | ${' - '}
    `('should return $expected when $date is passed', ({ date, expected }) => {
      expect(formatDate(date)).toBe(expected);
    });
  });

  describe('formatDateTime', () => {
    it.each`
      date                         | expected
      ${'2021-01-01'}              | ${'01/01/2021, 00:00:00'}
      ${'2023-08-09 18:57:21.166'} | ${'09/08/2023, 18:57:21'}
      ${null}                      | ${' - '}
    `('should return $expected when $date is passed', ({ date, expected }) => {
      expect(formatDateTime(date)).toBe(expected);
    });
  });
});
