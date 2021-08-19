import NodeCache from "node-cache";
const myCache = new NodeCache({ stdTTL: 0, checkperiod: 0 });

export default class CacheProvider {

    public static set(key: string, value: any): void {
        myCache.set(key, value);
    }

    public static get<TType>(key: string): any {
        let result = myCache.get(key);
        return result;
    }

    public static delete(key: string): void {
        myCache.del(key);
    }

}

// utility class for caching, Is implemeneted by babak
