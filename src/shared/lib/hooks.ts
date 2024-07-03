import { AppDispatch, RootState } from '@app/store';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';

/** Typed `useDispatch` hook. */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;