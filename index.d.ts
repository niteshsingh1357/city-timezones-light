declare module 'city-timezones-light' {
    interface CityData {
        readonly city: string;
        readonly timezone: string;
    }

    /**
     * Search for city info by searching by city name.
     * 
     * @param input City name.
     * @returns All the matching cities from search criteria.
     */
    export function lookupViaCity(input: string): CityData[];
    
    /**
     * Array of all city objects
     * 
     * @returns All the cities.
     */
    export const cityMapping: CityData[];
}
