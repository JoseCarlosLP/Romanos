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
});


