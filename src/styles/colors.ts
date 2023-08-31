import {
  gray,
  blue,
  red,
  green,
  violet,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
  violetDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,
    ...violet,
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...violetDark,
  },
}
