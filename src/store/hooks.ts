import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { AppDispatch, RootState } from "./index1";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;