export const SET_ALERT = 'SET_ALERT';

interface SetAlertAction {
  type: typeof SET_ALERT,
  payload: string;
}

export type AlertAction = 
  | SetAlertAction;

export interface AlertState {
  message: string;
}
