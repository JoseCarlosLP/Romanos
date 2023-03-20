import romanosHasta9 from "./romanos";

describe("Romanos", () => {
  it("numero romano para el 1", () => {
    expect(romanosHasta9(1)).toEqual("I");
  });
  it("numero romano para el 2", () => {
    expect(romanosHasta9(2)).toEqual("II");
  });
  it("numero romano para el 3", () => {
    expect(romanosHasta9(3)).toEqual("III");
  });
});


