import lifeBar from '../lifeBar';

test('returns correct health-state', () => {
  const result = lifeBar({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
});
