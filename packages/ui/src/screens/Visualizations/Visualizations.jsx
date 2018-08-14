import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import AceEditor from 'react-ace'

import 'brace/mode/json'
import 'brace/theme/monokai'

import styles from './styles'
import DemoTree from './demos/DemoTree'
import defaultHierarchy from './data/hierarchy'

class Visualizations extends React.Component {
  state = {
    data: {
      tree: JSON.stringify(defaultHierarchy, null, 2)
    }
  }

  updateData = key => value => this.setState({ data: { [key]: value } })

  render() {
    const { data } = this.state
    const { classes } = this.props

    const parsedData = Object.entries(data).reduce((all, [key, value]) => {
      try {
        return {
          ...all,
          [key]: JSON.parse(value)
        }
      } catch (err) {
        return all
      }
    }, {})

    return (
      <div>
        <Typography variant="display3" align="center">
          Data Visualizations
        </Typography>
        <Card>
          <CardHeader title="Data Tree" />
          <CardContent>
            <Grid
              container
              spacing={24}
              classes={{ container: classes.demoWrapper }}
            >
              <Grid item md={6} sm={12} classes={{ item: classes.demoItem }}>
                <DemoTree data={parsedData.tree} />
              </Grid>
              <Grid item md={6} sm={12} classes={{ item: classes.demoItem }}>
                <AceEditor
                  mode="json"
                  theme="monokai"
                  value={data.tree}
                  onChange={this.updateData('tree')}
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  setOptions={{
                    showLineNumbers: false
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Visualizations)
