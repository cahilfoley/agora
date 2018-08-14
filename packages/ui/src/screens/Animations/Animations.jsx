import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import P5Sketch from 'components/Embeds/P5Sketch'

import smartRockets from 'content/sketches/smartRockets'

class Animations extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <Typography variant="display3" align="center">
          Data Visualizations
        </Typography>
        <Card>
          <CardHeader title="Smart Rockets" />
          <CardContent>
            <P5Sketch sketch={smartRockets} />
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Animations
