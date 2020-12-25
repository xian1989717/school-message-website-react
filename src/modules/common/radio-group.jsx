import React, { Component } from 'react'

import { Radio } from 'antd'

class RadioGroup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }
  }

  onChange = (e) => {
    const { value } = e.target
    this.setState({
      value
    })
    this.props.select = value
  }


  render () {
    const radioList = this.props.list.map(i => {
      return <Radio value={i.value}>{i.data}</Radio>
    })
    const { value } = this.state
    return (
      <Radio.Group
        onChange={this.onChange}
        value={value}>
        {radioList}
      </Radio.Group>
    )
  }
}

export default RadioGroup