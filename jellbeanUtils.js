export default function isSick(numberOfJellyBeans) {
    return numberOfJellyBeans >= 10;
}

export function isAwesome(numberOfJellyBeans) {
    return numberOfJellyBeans >= 10;
}

// export const isSick = numberOfJellyBeans => numberOfJellyBeans >= 10;

/*

arrow functions:

Pros:
1) implicit return
2) they make "this" easy

Cons:
1) No hoisting--makes using functions in the same file annoying

*/