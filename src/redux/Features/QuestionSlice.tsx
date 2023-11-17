import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

interface Image {
  id: number;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: null | any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | any;
  createdAt: string;
  updatedAt: string;
}

export interface Question {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

export interface CategoriesState {
  questions: Question[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: CategoriesState = {
  questions: [],
  loading: false,
  error: null,
};

const url = 'https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions';

export const fetchQuestions: any = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

const CategoriesSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuestions.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchQuestions.fulfilled,
        (state, action: PayloadAction<Question[]>) => {
          state.loading = false;
          state.questions = action.payload;
        },
      )
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
