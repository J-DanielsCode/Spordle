const API_KEY = import.meta.env.VITE_NBA_API_KEY;
const BASE_URL = "https://api.balldontlie.io/v1";
import idArrayData from "./player-data-array.json";

const randomNum = (maxNum: number) => {
    return Math.floor(Math.random() * maxNum);
}

export const fetchNbaTargetData = async () => {
    
    const idArray = idArrayData.id_array;
    const randomIndex = randomNum(idArray.length)
    const playerId = idArray[randomIndex];


}