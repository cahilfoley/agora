import React from 'react'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function externalLink(target) {
  class ExternalLink extends React.Component {
    componentDidMount() {
      window.location.href = this.targetUrl
    }

    render() {
      return (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <Typography variant="display3">Redirecting</Typography>
          <div
            // Have to wrap the spinner in a fixed size div otherwise it bounces all over the place
            style={{
              height: 50,
              width: 50
            }}
          >
            <CircularProgress size={50} />
          </div>
        </div>
      )
    }
  }

  ExternalLink.isExternalLink = true
  ExternalLink.targetUrl = target

  return ExternalLink
}
