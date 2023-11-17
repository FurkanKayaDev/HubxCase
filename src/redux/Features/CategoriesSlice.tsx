import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

export interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

const url = 'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  },
);

const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.loading = false;
          state.categories = action.payload;
        },
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
