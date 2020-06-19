import { expect } from 'chai';
import app from './index';
import dotenv from 'dotenv';
dotenv.config();

describe("app", function () {
  it("app should exist.", function () {
    expect(app).to.exist;
  });
  it("app can listen.", function () {
    expect(app.listen).to.exist;
  });
});