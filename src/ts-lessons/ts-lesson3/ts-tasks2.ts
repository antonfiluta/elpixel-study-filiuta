type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer U
  ? U
  : never;

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview1 = MyOmit<Todo, 'description' | 'title'>;

const todo9: TodoPreview1 = {
  completed: false,
};

type MyReadonly2<T, K extends keyof T = keyof T> = MyOmit<T, K> & {
  readonly [R in K]: T[R];
};

type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>;
};

type TupleToUnion<T extends any[]> = T[number];

type Last<T extends unknown[]> = [unknown, ...T][T['length']];

type Pop<T> = T extends [...infer R, unknown] ? R : T;

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [P in keyof T]: T[P] extends Promise<infer R> | infer R ? R : never;
}>;

type LookUp<U, T> = U extends { type: T } ? U : never;

type Space = ' ' | '\n' | '\t';

type TrimLeft<T extends string> = T extends `${Space}${infer R}`
  ? TrimLeft<R>
  : T;

type Trim<T extends string> = T extends
  | `${Space}${infer R}`
  | `${infer R}${Space}`
  ? Trim<R>
  : T;

type MyCapitalize<T extends string> = T extends `${infer F}${infer S}`
  ? `${Uppercase<F>}${S}`
  : T;

type Replace<
  S extends string,
  From extends string,
  To extends string,
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${R}`
    : S;

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${ReplaceAll<R, From, To>}`
    : S;

type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer Args
) => infer Res
  ? (...args: [...Args, A]) => Res
  : never;

type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation<Exclude<T, K>>]
    : never;

type LengthOfString<
  S extends string,
  T extends string[] = [],
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...T, F]>
  : T['length'];

type Flatten<S extends unknown[], T extends unknown[] = []> = S extends [
  infer X,
  ...infer Y,
]
  ? X extends unknown[]
    ? Flatten<[...X, ...Y], T>
    : Flatten<[...Y], [...T, X]>
  : T;

type AppendToObject<T, U extends PropertyKey, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}`
  ? U
  : `${T}`;

type StringToUnion<T extends string> = T extends `${infer Letter}${infer Rest}`
  ? Letter | StringToUnion<Rest>
  : never;

type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
      ? F[K]
      : never;
};

type KebabCase<S> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`
    : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : S;

type Diff<O, O1> = {
  [K in keyof (O & O1) as K extends keyof (O | O1) ? never : K]: (O & O1)[K];
};

type Falsy =
  | 0
  | ''
  | false
  | []
  | undefined
  | null
  | { [key: PropertyKey]: never };

type AnyOf<T extends any[]> = T[number] extends Falsy ? false : true;

type Sample1 = AnyOf<[1, '', false, [], {}]>;
type Sample2 = AnyOf<[0, '', false, [], {}]>;
