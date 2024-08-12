import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { ProjectActions } from "./actions";
import { RootState } from "./store";

export const useAppDispatch = useDispatch<ThunkDispatch<RootState,void,ProjectActions>>
export const useAppSelector :TypedUseSelectorHook<RootState> = useSelector