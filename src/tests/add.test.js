const add = (a,b,c) => {
    return a + b +c;
};

const generateGreeting = (name = 'Anonymous') => {
    return `Hello ${name}!`;
}


test('should add two numbers', () => {
    const result = add(5,7,4);
    expect(result).toBe(16);
})

test('should generate greeting from name', () => {
    const result = generateGreeting('Pellie');
    expect (result).toBe('Hello Pellie!')
})