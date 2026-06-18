type MyPick<I, T extends keyof I> = {
  [t in T]: I[t];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type TupleToObject<T extends readonly PropertyKey[]> = {
  [k in T[number]]: k;
};

type First<T extends any[]> = T extends [] ? never : T[0];

type MyExclude<T, U> = T extends U ? never : T;

type MyAwaited<T extends PromiseLike<any>> =
  T extends PromiseLike<infer U>
    ? U extends PromiseLike<any>
      ? MyAwaited<U>
      : U
    : never;

type If<C extends boolean, T, F> = C extends true ? T : F;

type Tuple = readonly unknown[];
type Concat<T extends Tuple, U extends Tuple> = [...T, ...U];

type Push<T extends any[], U> = [...T, U];

type Unshift<T extends any[], U> = [U, ...T];

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;
