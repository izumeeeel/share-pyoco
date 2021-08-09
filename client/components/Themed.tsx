/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { IconProps as DefaultIcon } from '@expo/vector-icons/build/createIconSet'
import React, { ComponentProps } from 'react'
import { Text as DefaultText, View as DefaultView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
): string {
  const theme = useColorScheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return Colors[theme][colorName]
  }
}

type ThemeProps = {
  lightColor?: string
  darkColor?: string
}

export type TextProps = ThemeProps & DefaultText['props']
export type ViewProps = ThemeProps & DefaultView['props']

type GlyphNames = ComponentProps<typeof AntDesign>['name']
export type IconProps = ThemeProps & DefaultIcon<GlyphNames>

export function Text(props: TextProps): JSX.Element {
  const { style, lightColor, darkColor, ...otherProps } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return <DefaultText style={[{ color }, style]} {...otherProps} />
}

export function View(props: ViewProps): JSX.Element {
  const { style, lightColor, darkColor, ...otherProps } = props
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  )

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

export const IconAntDesign = (props: IconProps): JSX.Element => {
  const { lightColor, darkColor, name, size = 16 } = props
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
  return <AntDesign name={name} size={size} color={color} />
}
