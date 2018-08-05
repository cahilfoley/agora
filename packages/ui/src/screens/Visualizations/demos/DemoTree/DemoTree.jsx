import React from 'react'
import withTheme from '@material-ui/core/styles/withTheme'

import { Group } from '@vx/group'
import { Tree } from '@vx/hierarchy'
import { LinkHorizontal } from '@vx/shape'
import { hierarchy } from 'd3-hierarchy'

const Node = ({ node, theme: { palette, typography } }) => {
  const width = 100
  const height = 30
  const darkMode = palette.type === 'dark'
  const activePalette = darkMode ? palette.secondary : palette.primary

  return (
    <Group top={node.x} left={node.y}>
      {node.depth === 0 && <circle r={20} fill={activePalette.main} />}
      {node.depth !== 0 && (
        <rect
          height={height}
          width={width}
          y={-height / 2}
          x={-width / 2}
          fill={palette.background.default}
          stroke={activePalette.main}
          strokeWidth={!darkMode ? 3 : node.children ? 1 : 2}
          strokeDasharray={!node.children ? '2,2' : '0'}
          strokeOpacity={!node.children ? 0.6 : 1}
          rx={!node.children ? 10 : 0}
        />
      )}
      <text
        dy={'.33em'}
        fontSize={12}
        fontFamily={typography.fontFamily}
        textAnchor={'middle'}
        style={{ pointerEvents: 'none', fontWeight: 500 }}
        fill={
          node.depth === 0
            ? activePalette.contrastText
            : node.children
              ? palette.text.primary
              : activePalette.main
        }
      >
        {node.data.name}
      </text>
    </Group>
  )
}

const Link = ({ link, theme: { palette } }) => {
  const darkMode = palette.type === 'dark'
  const activePalette = darkMode ? palette.secondary : palette.primary
  return (
    <LinkHorizontal
      data={link}
      stroke={activePalette.main}
      strokeWidth={darkMode ? '1' : '2'}
      fill="none"
    />
  )
}

const DemoTree = ({
  width,
  height,
  parentWidth,
  parentHeight,
  margin = {
    top: 0,
    right: 80,
    bottom: 10,
    left: 80
  },
  data,
  theme
}) => {
  let structuredData
  let error = !!data ? undefined : 'Unable to parse JSON'

  if (!error) {
    try {
      structuredData = hierarchy(data)
    } catch (err) {
      error = 'Unable to identify hierarchy'
    }
  }

  const w = width || parentWidth
  const h = height || parentHeight

  const { palette, typography } = theme

  return (
    <svg width={w} height={h}>
      {/* <rect width={w} height={h} rx={14} fill={palette.background.paper} /> */}
      {error ? (
        <text
          x={w / 2}
          y={h / 2}
          dy={'.33em'}
          fontSize={20}
          fontFamily={typography.fontFamily}
          textAnchor={'middle'}
          fill={palette.error.main}
        >
          ERROR: {error}
        </text>
      ) : (
        <Tree
          top={margin.top}
          left={margin.left}
          root={structuredData}
          size={[
            h - margin.top - margin.bottom,
            w - margin.left - margin.right
          ]}
          nodeComponent={withTheme()(Node)}
          linkComponent={withTheme()(Link)}
        />
      )}
    </svg>
  )
}

export default withTheme()(DemoTree)
