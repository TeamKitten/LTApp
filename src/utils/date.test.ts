import { getEndStr, getStartStr } from "./date";

describe("getStartStr", () => {
  it("正しい時刻が返される", () => {
    const start = "2018/12/20 19:10";
    const str = getStartStr(start);
    expect(str).toBe("19:10");
  });
  it("0が追加された時刻が返される", () => {
    const start = "2018/12/20 19:00";
    const str = getStartStr(start);
    expect(str).toBe("19:00");
  });
});

describe("getEndStr", () => {
  it("正しい時刻が返される(5分)", () => {
    const start = "2018/12/20 19:10";
    const str = getEndStr(start, false);
    expect(str).toBe("19:15");
  });
  it("正しい時刻が返される(10分)", () => {
    const start = "2018/12/20 19:10";
    const str = getEndStr(start, true);
    expect(str).toBe("19:20");
  });
  it("0が追加された時刻が返される(5分)", () => {
    const start = "2018/12/20 19:00";
    const str = getEndStr(start, false);
    expect(str).toBe("19:05");
  });
  it("0が追加された時刻が返される(10分)", () => {
    const start = "2018/12/20 18:50";
    const str = getEndStr(start, true);
    expect(str).toBe("19:00");
  });
});
