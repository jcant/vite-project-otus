import { saveToStorage, getFromStorage, removeFromStorage } from "@/components/data/storage.js"
import { describe, it, expect, afterAll } from "vitest";

describe('local storage ', () => {

    let keyForString = 'test-key-string';
    let keyForObject = 'test-key-object';
    let stringValue = 'test string value';
    let objectValue = {'field1': 'test value 1', 'field2': 2, 'field3': true};

    it('imports', () => {
        expect(saveToStorage).toBeDefined();
        expect(getFromStorage).toBeDefined();
        expect(removeFromStorage).toBeDefined();
    });

    it('work without errors', () => {
        expect(() => saveToStorage(keyForString, stringValue)).not.toThrow();
        expect(() => getFromStorage(keyForString)).not.toThrow();  
        expect(() => removeFromStorage(keyForString)).not.toThrow();  
    });
    
    
    it('get string from localStorage', () => {       
        saveToStorage(keyForString, stringValue);
        let value = getFromStorage(keyForString);
        expect(value).toBe(stringValue);
    });

    it('get object from localStorage', () => {       
        saveToStorage(keyForObject, objectValue);
        let value = getFromStorage(keyForObject);
        expect(value).toEqual(objectValue);
    });

    it('removes object from localStorage', () => {       
        removeFromStorage(keyForObject);
        removeFromStorage(keyForString);
        let valueStr = getFromStorage(keyForString);
        let valueObj = getFromStorage(keyForObject);
        expect(valueStr).toBe(null);
        expect(valueObj).toBe(null);
    });

    afterAll(() => {
        removeFromStorage(keyForObject);
        removeFromStorage(keyForString);   
    });


})
