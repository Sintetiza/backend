import { describe, test, expect } from "@jest/globals";
import superTest from "supertest";
import { server } from "../../src/index.js";

describe("bateria de teste com o banco de dados", () => {
  test("inserindo usuario", async () => {
    const response = await superTest(server).post("/user").send({
      name: "test",
      age: 17,
    });
    const expectedResponse = { ok: 1 };
    const data = JSON.parse(response.text);
    expect(data).toStrictEqual(expectedResponse);
    // await superTest(server).delete("/");
  });
});
