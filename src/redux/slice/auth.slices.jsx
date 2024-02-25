import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ name, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://task-mgr-899d.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          body: JSON.stringify({ name, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ name, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://task-mgr-899d.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          body: JSON.stringify({ name, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Registration failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logoutAction = createAction("auth/logout");

const initialState = {
  isLoggedIn: false,
  currentUser: null,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
      state.isLoading = false;
      state.isError = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.currentUser = action.payload;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isError = true;
        console.log(action.payload);
      })
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log(action.payload);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
