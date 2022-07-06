// A few constants for the keyboard
export const alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z"

export const getKeyboardLayout = (
  hasNumpad : boolean,
  numpadActivated : boolean,
  caps: boolean,
) : string[] => {
  if (numpadActivated) {
    return [
      "1 2 3",
      "4 5 6",
      "7 8 9",
      "{switchToABC} 0 {bksp}",
    ]
  } if (caps) {
    return [
      "1 2 3 4 5 6 7 8 9 0 {bksp}",
      "A Z E R T Y U I O P",
      "Q S D F G H J K L M",
      `{shift} W X C V B N ${hasNumpad ? "{enter}" : "{switchTo123}"}`,
    ]
  }
  return [
    "1 2 3 4 5 6 7 8 9 0 {bksp}",
    "a z e r t y u i o p",
    "q s d f g h j k l m",
    `{shift} w x c v b n ${hasNumpad ? "{enter}" : "{switchTo123}"}`,
  ]
}