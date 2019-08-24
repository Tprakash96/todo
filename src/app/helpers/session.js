const mainKeyName = "UlkX_BfQ5weNK_RfIybBm67";

export const setUserInfo = (userInfo) => {
    localStorage.setItem(mainKeyName, JSON.stringify(userInfo));
}

export const getUserId = () => {
    const userInfo = localStorage.getItem(mainKeyName);
    return (userInfo && userInfo != null ? JSON.parse(userInfo).user_id : null);
}

export const getUserName = () => {
    const userInfo = localStorage.getItem(mainKeyName);
    return (userInfo && userInfo != null ? JSON.parse(userInfo).user_name : null);
}

export const clearSession = () => localStorage.clear();