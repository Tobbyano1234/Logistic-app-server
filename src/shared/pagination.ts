export const getPagination = (page = 1, limit = 10) => ({skip: (page <= 1) ? 0 : (page - 1) * limit, limit });
