import lifeBar from '../lifeBar';

test('returns correct health-state', () => {
  const result = lifeBar({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});
