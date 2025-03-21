import { isTriplet } from "./pythagoras";

test("valid pythagorean triplet (3,4,5)", () => {
    expect(isTriplet(3, 4, 5)).toBe(true);
});

test("invalid pythagorean triplet (2,3,4)", () => {
    expect(isTriplet(2, 3, 4)).toBe(false);
});
