import lifeBar from '../lifeBar';

test('returns correct health-state', () => {
  const result = lifeBar({ name: 'Маг', health: 30 });

  expect(result).toBe('wounded');
});
