import romanos from "./romanos";

describe("Romanos", () => {
  it("numero romano para el 1", () => {
    expect(romanos()).toEqual("I");
  });
});


