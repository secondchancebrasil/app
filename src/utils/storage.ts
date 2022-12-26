import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoadStorage {
  key: string;
}

interface SetStorage {
  key: string;
  value: any;
}

interface DestroyStorage {
  key: string;
}

export const loadStorage = async <T>({key}: LoadStorage): Promise<T | null> => {
  const storagedData = await AsyncStorage.getItem(key);

  return storagedData ? JSON.parse(storagedData) : null;
};

export const setStorage = async ({key, value}: SetStorage): Promise<void> => {
  const valueToString = JSON.stringify(value);

  await AsyncStorage.setItem(key, valueToString);
};

export const clearAllStorage = async (): Promise<void> => {
  await AsyncStorage.clear();
};

export const destroyStorage = async ({key}: DestroyStorage): Promise<void> => {
  await AsyncStorage.removeItem(key);
};
