export const formatCategory = (key: string): string => {
    if (key === "devOps_tools")
        return "DevOps & Tools";
    return key
        .replace(/\b\w/g, (char) => char.toUpperCase());
};