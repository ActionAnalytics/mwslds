import React from 'react'
import PropTypes from 'prop-types'

import BaseTable from './BaseTable'
import withData from './DataLoader'
import withToken from './Token'


const propTypes = {
  route: PropTypes.string,
}

const defaultProps = {
  route: null,
}

const WrappedTable = withToken(withData(BaseTable))

class DataTable extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.route === nextProps.route) {
      return false
    }
    return true
  }

  render() {
    if (!this.props.route) {
      return <BaseTable />
    }
    return <WrappedTable {...this.props} />
  }
}

DataTable.propTypes = propTypes
DataTable.defaultProps = defaultProps

export default DataTable
