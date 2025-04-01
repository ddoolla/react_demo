export const GENDER = {
    MALE: "MALE",
    FEMALE: "FEMALE"
} as const;

export type Gender = typeof GENDER[keyof typeof GENDER];
