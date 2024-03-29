import { Location } from "react-router-dom"

export interface TextInputState {
  isLoading: boolean
}

export interface MeetingState {
  isAlreadyMuted: boolean
  isCameraAlreadyOn: boolean
  isHandAlreadyRaised: boolean
  isChatAlreadyDisplayed: boolean
  isAlreadyAskingToShareScreen: boolean
  numberOfParticipants: number
}

export type NavigateState = TextInputState | MeetingState

export interface Location<T> extends Location {
  state?: T
}
