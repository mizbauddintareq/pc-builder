import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  components: [],
};

export const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(state);
      const exist = state.components?.find(
        (item) => item.category === action.payload.category
      );
      if (!exist) {
        state.components.push(action.payload);
      } else {
        toast.error("One item already added for this category.");
      }
    },
    removeItem: (state, action) => {
      state.components = state.components.filter(
        (product) => product._id.toString() !== action.payload._id.toString()
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
