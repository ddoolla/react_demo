export const STATUS = {
    IDLE: "IDLE",
    LOADING: "LOADING"
} as const;

export type Status = typeof STATUS[keyof typeof STATUS];
