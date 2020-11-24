import interval, { IntervalState } from ".";
let time = 0;
describe("interval", () => {
  beforeEach(() => (time = 0));

  it("should default ms delay to zero", async () => {
    await mockInterval(300);
    expect(time / 300 < 2).toEqual(true);
  });

  it("should use default ms delay when interval returns Continue or undefined", async () => {
    await mockInterval(IntervalState.Continue, 600);
    expect(time / 300 > 2).toEqual(true);
  });
});

function mockInterval(returnValue?: any, ms?: any) {
  const now = Date.now();
  let count = 0;
  return interval(() => {
    time = Date.now() - now;
    count++;
    return count === 2 ? IntervalState.Stop : returnValue;
  }, ms);
}
