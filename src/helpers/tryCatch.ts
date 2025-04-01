type Success<T> = {
  response: T;
  error: null;
};

type Failure<E extends Error> = {
  response: null;
  error: E;
};

type Result<T, E extends Error = Error> = Success<T> | Failure<E>;

export default async function tryCatch<T, E extends Error = Error>(
  promise: Promise<T>
): Promise<Result<T, E>> {
  try {
    const response = await promise;
    return { response, error: null };
  } catch (error) {
    return {
      response: null,
      error: (error instanceof Error ? error : new Error(String(error))) as E,
    };
  }
}
