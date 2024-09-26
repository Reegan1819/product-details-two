// hooks.ts (new file)

import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";

// Use this instead of plain `useDispatch` in components
export const useAppDispatch = () => useDispatch<AppDispatch>();
