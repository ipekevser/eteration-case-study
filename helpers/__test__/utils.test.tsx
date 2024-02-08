import { filterFunc, filterByIDFunc, sortItems, setLocalStorageData, getLocalStorageData } from '@/helpers/utils';
import { Product } from '@/store/interface';
import { sortByValidations } from '@/constants/filter';

describe('Utility Functions', () => {
  const testResponse: Product[] = [
    { id: '1', image: '', description: '', name: 'Product 1', brand: 'Brand A', model: 'Model X', createdAt: '2023-01-01', price: '100' },
    { id: '2', image: '', description: '', name: 'Product 2', brand: 'Brand B', model: 'Model Y', createdAt: '2023-02-01', price: '200' },
  ];

  describe('filterFunc', () => {
    it('filters products correctly based on search parameters', () => {
      const filteredResponse = filterFunc(testResponse, 'product', [], []);
      expect(filteredResponse.length).toBe(2);
    });
  });

  describe('filterByIDFunc', () => {
    it('returns the correct product when ID is found', () => {
      const product = filterByIDFunc('1', testResponse);
      expect(product).toEqual(testResponse[0]);
    });

    it('returns null when ID is not found', () => {
      const product = filterByIDFunc('3', testResponse);
      expect(product).toBeNull();
    });
  });

  describe('sortItems', () => {
    it('sorts products correctly based on sort value', () => {
      const sortedResponse = sortItems(testResponse, sortByValidations.DATEASC);
      expect(sortedResponse[0].createdAt).toBe('2023-01-01');
    });
  });

  describe('setLocalStorageData', () => {
    it('sets data to local storage correctly', () => {
      setLocalStorageData(testResponse);
      const storedDataString = localStorage.getItem('cartData');
      const storedData = JSON.parse(storedDataString || 'null');
      expect(storedData).toEqual(testResponse);
    });
  });

  describe('getLocalStorageData', () => {
    it('gets data from local storage correctly', () => {
      localStorage.setItem('cartData', JSON.stringify(testResponse));
      const data = getLocalStorageData<Product[]>('cartData');
      expect(data).toEqual(testResponse);
    });

    it('returns null when data is not found in local storage', () => {
      localStorage.removeItem('cartData');
      const data = getLocalStorageData<Product[]>('cartData');
      expect(data).toBeNull();
    });
  });
});
