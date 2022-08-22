import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "store/store";

// firebase
import { doc, getDoc } from "firebase/firestore";
import { db } from "utils/firebase";

interface GameState {
  categories: Array<string>;
  gameId: string;
}

const initialState: GameState = {
  categories: [],
  gameId: "",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameData(state, action: PayloadAction<GameState>) {
      state.categories = action.payload.categories;
      state.gameId = action.payload.gameId;
    },
  },
});

export const fetchGame = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const docRef = doc(db, "sheets", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        dispatch(
          setGameData({
            categories: data.categories,
            gameId: data.gameId,
          })
        );
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("AUTH_ERROR: ", errorCode, " : ", errorMessage);
      // ..
    }
  };
};

export const { setGameData } = gameSlice.actions;

export default gameSlice.reducer;
