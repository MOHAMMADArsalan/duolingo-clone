import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveAsyncStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {}
}

export const getAsyncStorage = async (key) => {
    let content = null;
    try {
       content = await AsyncStorage.getItem(key);
    } catch (error) {}
    return content;
}

export const clearStorage = async () =>{ 
   await AsyncStorage.clear();
}