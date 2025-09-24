import { URLS } from "../utils/constants/urls"

export const getViews = async () => {
    const res = await fetch(`${URLS.API_BASE}/portfolio/views`, {
        method: "GET",
        headers: {
            accept: "application/json",
            "x-api-key": "hanifa",
        }
    });
    return res.json();
};

export const incrementViews = async () => {
    const res = await fetch(`${URLS.API_BASE}/portfolio/views`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "x-api-key": "hanifa",
        },
    });
    return res.json();
};

export const getLikes = async () => {
    const res = await fetch(`${URLS.API_BASE}/portfolio/likes`, {
        method: "GET",
        headers: {
            accept: "application/json",
            "x-api-key": "hanifa",
        }
    });
    return res.json();
};

export const incrementLikes = async () => {
    const res = await fetch(`${URLS.API_BASE}/portfolio/likes`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "x-api-key": "hanifa",
        },
    });
    return res.json();
};
