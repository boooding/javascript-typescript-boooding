// 代码零散
// 可读性差, 维护性差
localStorage.setItem('key', 'value');
let key2 = {key: 'key2', value: 'value2'};
localStorage.setItem('key2', JSON.stringify(key2));
let value = localStorage.getItem('key2');
let a = value != null? JSON.parse(value): null;

// without singleton
class LocalstorageWithoutSingleton {

    public setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    public getItem(key: string) {
        const itemValue = localStorage.getItem(key);
        return itemValue != null ? JSON.parse(value) : null;
    }
}

// with singleton
/**
 * 1. set constructor as private
 * 2. provide at least one method or property
 */

class LocalstorageWithSingleton {

    static myLocalStorage: LocalstorageWithSingleton;

    private constructor() {

    }

    public static getInstance() {
        if (!this.myLocalStorage) {
            this.myLocalStorage = new LocalstorageWithSingleton()
        }
        return this.myLocalStorage
    }

    public getInstance() {

    }

}