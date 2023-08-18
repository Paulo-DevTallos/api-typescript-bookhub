describe('Enviroment test', () => {
    it('should test if the sum of 1:1 is 2', () => {
        const firstValue = 1;
        const secondValue = 2;

        const result = firstValue + secondValue;

        expect(result).toBe(3); 
    }) 
})