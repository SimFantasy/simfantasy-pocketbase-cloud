import { generate } from '@ant-design/colors'

function generateColorTemplates(colors, theme, backgroundColor, prefix = 'sim') {
  let css = `:root[data-color-mode='${theme}']{\n`
  colors.forEach(({ name, color }) => {
    const colorShades = generate(color, {
      theme,
      backgroundColor
    })
    css += `  --${prefix}-${name}: ${color};\n`
    colorShades.forEach((shade, index) => {
      css += `  --${prefix}-${name}-${index}: ${shade};\n`
    })
  })
  css += '}'
  return css
}

const normalColor = [
  { name: 'gray', color: '#adb5bd' },
  { name: 'red', color: '#ff6b6b' },
  { name: 'pink', color: '#f06595' },
  { name: 'grape', color: '#cc5de8' },
  { name: 'violet', color: '#845ef7' },
  { name: 'indigo', color: '#5c7cfa' },
  { name: 'blue', color: '#339af0' },
  { name: 'cyan', color: '#22b8cf' },
  { name: 'teal', color: '#22b8cf' },
  { name: 'green', color: '#51cf66' },
  { name: 'lime', color: '#94d82d' },
  { name: 'yellow', color: '#fab005' },
  { name: 'orange', color: '#ff922b' }
]
// console.log(generateColorTemplates(normalColor, 'light', '#fff', 'sim'))
console.log(generateColorTemplates(normalColor, 'dark', '#141414', 'sim'))
