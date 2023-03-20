import romanos from "./romanos";

describe("Romanos", () => {
  it("numero romano para el 1", () => {
    expect(romanos(1)).toEqual("I");
  });
  it("numero romano para el 2", () => {
    expect(romanos(2)).toEqual("II");
  });
});


