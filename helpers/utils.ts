import { sortByValidations } from '@/constants/filter';
import { Product } from '@/store/interface';

export const debounce = (func: Function, delay: number) => {
  let timer: any;
  return function (...args: any) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(func, args);
    }, delay);
  };
};

export const filterFunc = (response: Product[], searchParam: string, selectedBrands: string[], selectedModels: string[]) => {
  return response.filter((item: Product) => {
    const nameMatch = !searchParam || item.name.toLowerCase().includes(searchParam.toLowerCase());
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
    const modelMatch = selectedModels.length === 0 || selectedModels.includes(item.model);

    return nameMatch && brandMatch && modelMatch;
  });
};

export const filterByIDFunc = (id: string, response: Product[]): Product | null => {
    return response.find((item: Product) => item.id === id) || null;
  };

interface ItemSortKey {
  createdAt: string;
  price: string;
}

const compareValues = (key: keyof ItemSortKey, order: 'asc' | 'desc') => {
  return function (a: ItemSortKey, b: ItemSortKey) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = a[key];
    const varB = b[key];

    // Price alanını sayısal değere dönüştürme
    if (key === 'price') {
      const numA = Number(varA);
      const numB = Number(varB);
      return numA > numB ? (order === 'asc' ? 1 : -1) : order === 'asc' ? -1 : 1;
    }

    // Tarih karşılaştırması yapılacaksa
    if (key === 'createdAt') {
      const dateA = new Date(varA).getTime();
      const dateB = new Date(varB).getTime();

      if (dateA > dateB) {
        return order === 'asc' ? 1 : -1;
      }
      if (dateA < dateB) {
        return order === 'asc' ? -1 : 1;
      }
      return 0;
    }

    // Sayısal karşılaştırma
    return 0;
  };
};

export const sortItems = (response: Product[], sortValue: string): Product[] => {
  let key: keyof ItemSortKey;
  let order: 'asc' | 'desc';

  switch (sortValue) {
    case sortByValidations.DATEASC:
      key = 'createdAt';
      order = 'asc';
      break;
    case sortByValidations.DATEDESC:
      key = 'createdAt';
      order = 'desc';
      break;
    case sortByValidations.PRICEDESC:
      key = 'price';
      order = 'desc';
      break;
    case sortByValidations.PRICEASC:
      key = 'price';
      order = 'asc';
      break;
    default:
      return response;
  }

  return response.sort(compareValues(key, order));
};

export const setLocalStorageData = (data: any) => {
  localStorage.setItem('cartData', JSON.stringify(data));
};

export const getLocalStorageData = <T>(key: string): T | null => {
  const dataString: string | null = localStorage.getItem(key);
  if (dataString) {
    return JSON.parse(dataString) as T;
  }
  return null;
};
