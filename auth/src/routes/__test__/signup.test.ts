import request from 'supertest';
import { app } from '../../app';

const URL = '/api/users/signup';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post(URL)
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post(URL)
    .send({
      email: 'test@',
      password: 'password1',
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post(URL)
    .send({
      email: 'test@test.com',
      password: 'pas',
    })
    .expect(400);
});

it('returns a 400 with missing email and password', async () => {
  return request(app)
    .post(URL)
    .send({
      email: 'test@test.com',
      password: 'pas',
    })
    .expect(400);
});

it('does not allow duplicate emails', async () => {
  await request(app)
    .post(URL)
    .send({ email: 'test@test.com', password: 'password1' })
    .expect(201);

  await request(app)
    .post(URL)
    .send({ email: 'test@test.com', password: 'password1' })
    .expect(400);
});

it('sets a cookie after successfull sign up', async () => {
  const response = await request(app)
    .post(URL)
    .send({ email: 'test@test.com', password: 'password1' })
    .expect(201);
  expect(response.get('Set-Cookie')).toBeDefined();
});
