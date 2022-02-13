export const colorsBg = {
  danger: 'bg-red-600 text-white',
  dark: 'bg-slate-800 text-white',
  info: 'bg-blue-600 text-white',
  light: 'bg-gray-100 text-black',
  primary: 'bg-indigo-600 text-white',
  success: 'bg-emerald-600 text-white',
  warning: 'bg-yellow-600 text-white',
  white: 'bg-white text-black'
}

export const colorsBgHover = {
  danger: 'hover:bg-red-700',
  dark: 'hover:bg-slate-700',
  info: 'hover:bg-blue-700',
  light: 'hover:bg-gray-300',
  primary: 'hover:bg-indigo-700',
  success: 'hover:bg-emerald-700',
  warning: 'hover:bg-yellow-700',
  white: 'hover:bg-gray-50'
}

export const colorsBorders = {
  danger: 'border-red-700',
  dark: 'border-slate-800',
  info: 'border-blue-700',
  light: 'border-gray-300 dark:border-gray-400',
  primary: 'border-indigo-700',
  success: 'border-emerald-700',
  warning: 'border-yellow-700',
  white: 'border-gray-300'
}

export const colorsText = {
  danger: 'text-red-600',
  dark: 'text-slate-900',
  info: 'text-blue-600',
  light: 'text-gray-700 dark:text-gray-400',
  primary: 'text-indigo-600',
  success: 'text-emerald-600',
  warning: 'text-yellow-600',
  white: 'text-black dark:text-gray-100'
}

export const colorsOutline = {
  danger: [colorsText.danger, colorsBorders.danger],
  dark: [colorsText.dark, colorsBorders.dark],
  info: [colorsText.info, colorsBorders.info],
  light: [colorsText.light, colorsBorders.light],
  primary: [colorsText.primary, colorsBorders.primary],
  success: [colorsText.success, colorsBorders.success],
  warning: [colorsText.warning, colorsBorders.warning],
  white: [colorsText.white, colorsBorders.white]
}

export const colorsOutlineHover = {
  danger: 'hover:bg-red-700 hover:text-white',
  dark: 'hover:bg-slate-900 hover:text-white',
  info: 'hover:bg-blue-700 hover:text-white',
  light: 'hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-900',
  primary: 'hover:bg-indigo-700 hover:text-white',
  success: 'hover:bg-emerald-700 hover:text-white',
  warning: 'hover:bg-yellow-700 hover:text-white',
  white: 'hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-900'
}

export const colorRingFocus = 'focus:ring-indigo-500 focus:border-indigo-500'

export const getButtonColor = (color, isOutlined, hasHover) => {
  const base = [
    isOutlined ? colorsText[color] : colorsBg[color],
    colorsBorders[color],
    colorRingFocus
  ]

  if (hasHover) {
    base.push(isOutlined ? colorsOutlineHover[color] : colorsBgHover[color])
  }

  return base
}
