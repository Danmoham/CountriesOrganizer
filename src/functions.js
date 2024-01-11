export const makeReadable =(population) => {
        let populationStr = population.toString();
    
        // Add commas every three digits from the right
        let formattedPopulation = '';
        let count = 0;
    
        for (let i = populationStr.length - 1; i >= 0; i--) {
            formattedPopulation = populationStr[i] + formattedPopulation;
            count++;
    
            if (count % 3 === 0 && i !== 0) {
                formattedPopulation = ',' + formattedPopulation;
            }
        }
    
        return formattedPopulation;
}
