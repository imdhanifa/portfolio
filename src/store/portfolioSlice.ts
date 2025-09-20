import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PortfolioData } from "../@types/portfolio";

// Thunk: fetch portfolio data from API
export const fetchPortfolio = createAsyncThunk<PortfolioData>(
  "portfolio/fetchPortfolio",
  async () => {
    const response = await fetch("https://portfolio-api-w6sj.onrender.com/api/portfolio", {
      headers: {
        accept: "*/*",
        "x-api-key": "hanifa",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch portfolio data: ${response.status}`);
    }

    return (await response.json()) as PortfolioData;
  }
);

// ✅ Define state type
export interface PortfolioState {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: PortfolioState = {
  data: null,
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default portfolioSlice.reducer;
