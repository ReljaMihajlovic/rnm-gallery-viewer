export const getCharacterSet = async (url) => {
    try {
        const response = await fetch(url);
        const set = await response.json();
        return set;
    } catch (error) {
        console.log(error);
    }
}