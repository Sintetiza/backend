import {
  jest,
  expect,
  test,
  describe
} from '@jest/globals';

import superTest from 'supertest';
import Server from '../../src/server';

describe('API E2E Test Suite', () => {

  test('GET / - should return all the data', async () => {
    const response = await superTest(Server).get('/');
    const data = JSON.parse(response.text);
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toEqual(0);
  });

  test('POST / - should save an item and return ok', async () => {
    const response = await superTest(Server)
      .post('/')
      .send({
        name: 'test',
        age: 17,
      });
    const expectedResponse = { ok: 1 }
    const data = JSON.parse(response.text);
    expect(data).toStrictEqual(expectedResponse);
    await superTest(Server).delete('/');
  });



  test('GET AFTER POST / - should return data array with size zero', async () => {
    const response = await superTest(Server).get('/');
    const data = JSON.parse(response.text);
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toEqual(0);
  });


  test('DELETE / - should delete all the data', async () => {
    const response = await superTest(Server).delete('/');
    const data = JSON.parse(response.text);
    expect(data).toStrictEqual({ ok: 1 });
    expect(data).toBeInstanceOf(Object);
  });


  test('GET AFTER DELETE / - should return data array with size zero', async () => {
    const response = await superTest(Server).get('/');
    const data = JSON.parse(response.text);
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toEqual(0);
  });

})