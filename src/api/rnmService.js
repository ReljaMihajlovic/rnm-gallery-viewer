export const getCharacterSet = async (api) => {
    try {
        const response = await fetch(api);
        const set = await response.json();
        return set;
    } catch (error) {
        console.log(error);
    }
}