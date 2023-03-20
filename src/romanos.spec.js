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
  it("numero romano para el 4", () => {
    expect(romanosHasta9(4)).toEqual("IV");
  });
  it("numero romano para el 5", () => {
    expect(romanosHasta9(5)).toEqual("V");
  });
  it("numero romano para el 6", () => {
    expect(romanosHasta9(6)).toEqual("VI");
  });
  it("numero romano para el 8", () => {
    expect(romanosHasta9(8)).toEqual("VIII");
  });
});


