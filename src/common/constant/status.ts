export const STATUS = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR"
} as const;

export type Status = typeof STATUS[keyof typeof STATUS];
