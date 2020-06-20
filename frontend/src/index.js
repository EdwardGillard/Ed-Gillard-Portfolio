import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './App'
import googleAnalytics from '@analytics/google-analytics'
import { AnalyticsProvider } from 'use-analytics'
import Analytics from 'analytics'

const analytics = Analytics({
  app: 'My portfolio',
  plugins: [
    googleAnalytics({
      trackingId: 'UA-170087079-1'
    })
  ]
})

analytics.page()

ReactDOM.render(<AnalyticsProvider instance={analytics}><App /></AnalyticsProvider>, document.getElementById('root'))