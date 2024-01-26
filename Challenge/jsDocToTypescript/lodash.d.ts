declare module "lodash" {
  function head<T>(arr: T[]): T | undefined;

  function hasIn<T>(object: { [key: string]: T }, key: string): boolean;

  function isBoolean<T>(value: T): boolean;

  function toString(value: any): string;

  function split(
    string: string,
    separator: string | RegExp,
    limit: number
  ): string[];

  function hasPath(
    object: { [key: string]: any } | string,
    path: string[] | string
  ): boolean;

  function filter<T>(
    arr: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
  ): T[];

  function every<T>(
    arr: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
  ): boolean;

  function map<T>(
    array: T[],
    iteratee: (value: T, index: number, array: T[]) => T
  ): T[];
}
