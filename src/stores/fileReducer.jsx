import { createSlice } from "@reduxjs/toolkit";

const initialFile = {
 
}

const fileReducer = {
 
}

const fileSlice = createSlice({
  name: "files",
  initialState: initialFile,
  reducers: fileReducer,
});

export const { setSelectedFile, setFileList } = fileSlice.actions;
export default fileSlice.reducer;
