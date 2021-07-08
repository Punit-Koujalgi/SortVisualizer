export const resetVisualState = (array) => {
  return {
    array,
    originalArray: [...array],
    sortedIndices: [],
    groupA: [],
    groupB: [],
    groupC: [],
    groupD: [],
  };
};

export const resetTraceState = (traceArray) => {
  return { trace: traceArray, traceStep: -1 };
};

export const clearTimeoutIds = (timeoutIds) => {
  timeoutIds.forEach((id) => {
    clearTimeout(id);
  });
  return [];
};

// export const changeVisualState=()=>{};
