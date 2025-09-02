export const formatDate = (postedDate: string) => {
    return new Date(postedDate).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
};