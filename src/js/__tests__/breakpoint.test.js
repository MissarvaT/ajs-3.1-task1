import lifeBar from '../lifeBar';

test('returns correct health-state', () => {
  const result = lifeBar({ name: 'Стрелок', health: 15 });

  expect(result).toBe('critical');
});
