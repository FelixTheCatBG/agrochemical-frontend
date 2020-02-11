export const buildParams = (data) => {
    let params = {};

    Object.keys(data).forEach(key => { params[key] = data[key].value; });

    return params;
};