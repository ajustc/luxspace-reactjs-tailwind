import React from "react";
import useSafeDispatch from "./useSafeDispatch";

const defaultState = {
  data: null,
  status: "idle",
  error: null,
};

export default function useAsync(initialState) {
  const initialStateRef = React.useRef({
    ...defaultState,
    ...initialState,
  });

  const [{ data, status, error }, setState] = React.useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    initialStateRef.current
  );

  const safeSetState = useSafeDispatch(setState);

  const run = React.useCallback(
    (promise) => {
      if (!promise || !promise.then)
        throw new Error(
          "The argument passed to useAsync().run must be a promise"
        );
      safeSetState({ status: "pending" });

      return promise.then(
        (data) => {
          safeSetState({ data, status: "resolved" });

          return data;
        },
        (error) => {
          safeSetState({
            status: "rejected",
            error: JSON.parse(error.message),
          });
        }
      );
    },
    [setState]
  );

  const setData = React.useCallback(
    (data) => {
      safeSetState({ data });
    },
    [safeSetState]
  );

  const setError = React.useCallback(
    (error) => {
      safeSetState({ error });
    },
    [safeSetState]
  );

  const reset = React.useCallback(() => {
    safeSetState(initialStateRef.current);
  }, [safeSetState]);

  return {
    data,
    status,
    error,
    run,
    setData,
    setError,
    reset,
    isIdle: status === "idle",
    isLoading: status === "idle" || status === "pending",
    isError: status === "rejected",
    isSuccess: status === "resolved",
  };
}
