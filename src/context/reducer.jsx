
export const globalAppState = {
    expenseData: JSON.parse(localStorage.getItem('expenseData')) || []
};


export const appStateReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            const updatedState = {
                ...state,
                expenseData: [
                    ...state.expenseData,
                    {
                        ...action.payload,
                        value: Number(action.payload.value)
                    }
                ]
            };
            localStorage.setItem('expenseData', JSON.stringify(updatedState.expenseData));
            return updatedState;
        default:
            return state;
    }
};
