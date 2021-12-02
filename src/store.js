import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const store = configureStore ({
    reducer: {
        //define a top-level state field named `todos`, handle by `todoReducer`
        todos: todosReducer,
        filters: filtersReducer,
    },
})

export default store;