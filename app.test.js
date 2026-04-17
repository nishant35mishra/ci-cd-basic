const request = require('supertest');
const app = require('./index');

describe('Basic API Tests', () => {
  test('GET / should return hello world', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toContain('CI/CD Pipeline');   // Updated
});

  test('GET /health should return healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });
});