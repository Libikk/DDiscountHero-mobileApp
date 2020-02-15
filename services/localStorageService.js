import {AsyncStorage} from 'react-native';

const saveData = async (itemName, value) => {
    try {
      return await AsyncStorage.setItem(itemName, value);
    } catch (error) {
        console.warn(error)
      return null;
    }
  };

  const loadData = async (itemName) => {
    try {
      return await AsyncStorage.getItem(itemName);
    } catch (error) {
        console.warn(error)
      return null;
    }
  };

export {
    saveData,
    loadData
}