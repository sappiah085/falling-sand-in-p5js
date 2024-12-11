type args<T> = {
  array: T[][];
  callback: (T: T) => void;
};
export const loop = <T>({ array, callback }: args<T>) => {
  array.forEach((_, r) => {
    array[r].forEach((_, c) => {
      callback(array[r][c]);
    });
  });
};
