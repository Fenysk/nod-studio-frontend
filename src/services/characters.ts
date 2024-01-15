const baseUrl = import.meta.env.VITE_BASE_URL;

const getAllCharacters = async (page: number = 1) => {
    console.log('Fetching characters from API');
    try {
        const response = await fetch(`${baseUrl}/characters/all/?page=${page}`);
        return await response.json();
    } catch (error: any) {
        alert(error.message);
    }
};

const getCharacterById = async (id: number) => {
    try {
        const response = await fetch(`${baseUrl}/characters/${id}`);
        return await response.json();
    } catch (error: any) {
        alert(error.message);
    }
};

export {
    getAllCharacters,
    getCharacterById
};
