import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmExampleHeader extends Component {
  state = { open: false }

  delete = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button onClick={this.delete}>Delete</Button>
        <Confirm
          open={this.state.open}
          header='Deleting!'
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default ConfirmExampleHeader
