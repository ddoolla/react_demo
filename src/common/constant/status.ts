// 상수 객체 정의
export const STATUS = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR"
} as const; // 리터럴 타입으로 고정

// 타입 정의 (타입스크립트의 type 은 typeof 연산자로 타입을 추론할 수 있다.)
export type Status = typeof STATUS[keyof typeof STATUS];

/**
 * as const : 리터럴 타입으로 고정
 * ex)
 * const obj = {a: 'hello', b: 'world'}
 * -> 타입 추론 = {a: string, b: string} // 문자열 타입
 *
 * const obj = {a: 'hello', b: 'world'} as const
 * -> 타입 추론 = {a: 'hello', b: 'world'} // 리터럴 타입
 *
 * ========================================================================
 *
 * keyof - 객체 *타입* 에서 객체의 키 값들을 숫자나 문자열 리터럴 유니언을 생성한다.
 *
 * ex1) 객체 키를 타입으로
 * const obj = {a: 'hello', b: 'world'}
 * type objType = typeof obj // { a: string, b: string }
 * type objKeyType = keyof objType // 'a' | 'b'
 *
 * ex2) 객체 키를 타입으로2
 * const obj = {a: 'hello', b: 'world'} as const
 * type objType = typeof obj // { a: 'hello', b: 'world' }
 * type objKeyType = keyof objType // 'a' | 'b'
 *
 * ex3) 객체 키에 대한 값을 타입으로
 * const obj = {a: 'hello', b: 'world'} as const
 * type objType = typeof obj // { a: 'hello', b: 'world' }
 * type objKeyType = typeof obj[keyof objType] // obj[a] 와 obj[b] 를 유니온 타입으로 생성
 *
 * -> type objKeyType = typeof obj[keyof typeof obj] 와 같은 의미
 * typeof obj[keyof objType] 는 따지고 보면 typeof obj["a" | "b"] 와 같은 의미인데,
 * 자바스크립트에는 실제 저런 문법이 없어서 이해가 쉽지 않다..
 */
