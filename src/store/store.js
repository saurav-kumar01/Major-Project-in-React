import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        // TODO: add more slice here for post
    }
})

export default store;