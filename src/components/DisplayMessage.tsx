import './DisplayMessage.css'
import { Component } from 'react'

export interface DisplayMessageProps {
  message: string
  isRight?: boolean
}

interface DisplayMessageState {
  isRight: boolean
}

export class DisplayMessage extends Component<DisplayMessageProps, DisplayMessageState> {
  constructor(props: DisplayMessageProps) {
    super(props)

    this.state = {
      isRight: props.isRight ?? false
    }
  }

  render() {
    const isRightClassName = this.state.isRight ? ' isRight' : ''
    const className = `message${isRightClassName}`
    return (
      <article className={className}><p className="content">{this.props.message}</p></article>
    )
  }
}