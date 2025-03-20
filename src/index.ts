const lang: string = "TypeScript";
const greeting: string = `Hello, ${lang}!`;

console.log(greeting);

import { isTriplet } from "./pythagoras";

function findPythagoreanTriplets(limit: number): void {
    console.log("Searching for Pythagorean triplets...");

    for (let a = 1; a <= limit; a++) {
        for (let b = a; b <= limit; b++) {
            for (let c = b; c <= limit; c++) {
                if (isTriplet(a, b, c)) {
                    console.log(`Found triplet: (${a}, ${b}, ${c})`);
                }
            }
        }
    }
}

findPythagoreanTriplets(50);
