import facepaint from 'facepaint'

const mediaQuery = facepaint([
  // '@media(max-width: 1399.98px)',
  // '@media(max-width: 1199.98px)',
  '@media(max-width: 991.98px)',
  '@media(max-width: 767.98px)',
  '@media(max-width: 575.98px)'
])

const ellipsis = (line, width = '100%') => {
  if (line === 1) {
    return `
      max-width:${width};
      line-height:18px;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `
  }
  if (line > 1) {
    return `
      max-width:${width};
      line-height:18px;
      display: -webkit-box !important;
      overflow:hidden;
      text-overflow:ellipsis;
      -webkit-line-clamp: ${line};
      -webkit-box-orient: vertical;
    `
  }
}

const flex = (justifyContent, alignItems) => {
  return `
    display: flex;
    justify-content: ${justifyContent === 'unset' ? 'normal' : justifyContent};
    align-items: ${alignItems === 'unset' ? 'normal' : alignItems}
  `
}

const gridCols = (col, gap = '20px') => {
  if (col === 'none') {
    return `
      display: grid;
      grid-template-columns: none;
      `
  } else {
    return `
        display: grid;
        gap: ${gap};
        grid-template-columns: repeat(${col}, minmax(0, 1fr));
      `
  }
}

const bgBlur = (rgba, val) => {
  return `
    background-color: rgba(${rgba});
    -webkit-backdrop-filter: blur(${val});
    backdrop-filter: blur(${val});
  `
}

export default {
  'mobile-width': '576px',
  'table-width': '992px',
  'page-width': ['768px', '86vw', '90vw'],

  // function
  flex,
  mediaQuery,
  bgBlur,
  ellipsis,
  gridCols
}
