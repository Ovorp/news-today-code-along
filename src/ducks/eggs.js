// initial state
const initialState = {
    buttonCount: 0,
};

// action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const CHANGE_COUNT = 'CHANGE_COUNT';

// actions creator

const increment = () => {
    return {
        type: INCREMENT,
    }
}

const decrement = () => {
    return {
        type: DECREMENT,
    }
}

const changeCount = (count) => {
    return {
        type: CHANGE_COUNT,
        payload: count,
    }
}

export {
    increment,
    decrement,
    changeCount
}

// reducer

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case INCREMENT:
        return { ...state, buttonCount: state.buttonCount + 1};

    case DECREMENT:
        return {...state, buttonCount: state.buttonCount - 1};

    case CHANGE_COUNT:
        return {
            ...state,
            buttonCount: state.buttonCount + payload,
        }

    default:
        return state
    }
}

