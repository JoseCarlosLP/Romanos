import romanos from "./romanos";

describe("Romanos", () => {
  it("numero romano para el 1", () => {
    expect(romanos(1)).toEqual("I");
  });
  it("numero romano para el 2", () => {
    expect(romanos(2)).toEqual("II");
  });
  it("numero romano para el 3", () => {
    expect(romanos(3)).toEqual("III");
  });
  it("numero romano para el 4", () => {
    expect(romanos(4)).toEqual("IV");
  });
  it("numero romano para el 5", () => {
    expect(romanos(5)).toEqual("V");
  });
  it("numero romano para el 6", () => {
    expect(romanos(6)).toEqual("VI");
  });
  it("numero romano para el 8", () => {
    expect(romanos(8)).toEqual("VIII");
  });
  it("numero romano para el 9", () => {
    expect(romanos(9)).toEqual("IX");
  });
  it("numero romano para el 10", () => {
    expect(romanos(10)).toEqual("X");
  });
  it("numero romano para el 19", () => {
    expect(romanos(19)).toEqual("XIX");
  });
  it("numero romano para el 20", () => {
    expect(romanos(20)).toEqual("XX");
  });
  it("numero romano para el 24", () => {
    expect(romanos(24)).toEqual("XXIV");
  });
  it("numero romano para el 31", () => {
    expect(romanos(31)).toEqual("XXXI");
  });
  it("numero romano para el 44", () => {
    expect(romanos(44)).toEqual("XLIV");
  });
  it("numero romano para el 58", () => {
    expect(romanos(58)).toEqual("LVIII");
  });
  it("numero romano para el 79", () => {
    expect(romanos(79)).toEqual("LXXIX");
  });
  it("numero romano para el 60", () => {
    expect(romanos(60)).toEqual("LX");
  });
  it("numero romano para el 96", () => {
    expect(romanos(96)).toEqual("XCVI");
  });
  it("numero romano para el 100", () => {
    expect(romanos(100)).toEqual("C");
  });
  it("numero romano para el 109", () => {
    expect(romanos(109)).toEqual("CIX");
  });
});


