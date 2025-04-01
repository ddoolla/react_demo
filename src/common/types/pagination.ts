export interface Pagination {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    blockSize: number;
    blockStartNumber: number;
    blockEndNumber: number;
    isFirstPageButton: boolean;
    isPrevButton: boolean;
    isNextButton: boolean;
    isLastPageButton: boolean;
}