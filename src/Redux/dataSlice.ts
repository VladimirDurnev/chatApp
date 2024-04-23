import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Redux/store";
import { IDataItem } from "../type";

interface IState {
    data: IDataItem[];
    filterStatus?: boolean
}

const initialState: IState = {
    data: [],
    filterStatus: undefined
};

export const counterSlice = createSlice({
    name: "dataSlice",
    initialState,
    reducers: {
        reorderList: (state, action) => {
            state.data = action.payload;
          },
        addItem: (state, action: PayloadAction<IDataItem>) => {
            state.data.push(action.payload);
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter(
                (item) => item.id !== action.payload
            );
        },
        setValue: (state, action: PayloadAction<{ id: string; value: string }>) => {
            const { id, value } = action.payload;
            state.data = state.data.map((item) => 
                item.id ===id ? {...item, value} : item
            )
        },
        setFinished: (
            state,
            action: PayloadAction<{ id: string; finished: boolean }>
        ) => {
            const { id, finished } = action.payload;
            state.data = state.data.map((item) =>
                item.id === id ? { ...item, finished } : item
            );
        
        },
        setFilterStatus: (state, action) => {
            state.filterStatus = action.payload
            
        },
    },
});

export const {reorderList, addItem, deleteItem, setValue, setFilterStatus, setFinished } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectData = (state: RootState) => state.dataSlice;

export default counterSlice.reducer;
