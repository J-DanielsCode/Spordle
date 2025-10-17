
export const poundToKilos = (pounds: string) => {
    const poundsNum = Number(pounds);
    return Math.ceil(poundsNum / 2.2);
}