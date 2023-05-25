type TShuffle = <T>(arr: T[]) => T[]

export const shuffle: TShuffle = (arr) => {
    const clone = [...arr];
    // eslint-disable-next-line no-plusplus
    for (let i = clone.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
};