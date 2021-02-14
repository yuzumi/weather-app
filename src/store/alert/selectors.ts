import { RootState } from 'store';

export const selectMessage = (state: RootState) => state.alert.message;
