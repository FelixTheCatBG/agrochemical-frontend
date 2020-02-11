export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const decapitalize = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
};

export const removeWhiteSpace = (string) => {
    return string.replace(/ /g, '');
};

export const addWhiteSpace = (string) => {
    return string.replace(/([A-Z])/g, ' $1').trim();
};
