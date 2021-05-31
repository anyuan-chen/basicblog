import React, { Component } from "react"

export default class AutoTyper extends Component {
  static debugProps = {
    dataText: ["DEBUG THIS NOW"],
  }
  constructor(props) {
    super(props)
    this.state = {
      curText: "",
      curColor: "rgba( 42, 55, 86, 100%)",
      deleting: false,
      curIndex: 0,
      color: [
        "rgba( 42, 55, 86, 70%)",
        "rgba( 42, 55, 86, 80%)",
        "rgba( 42, 55, 86, 100%)",
      ],
    }
  }

  componentDidMount() {
    this.type()
  }

  type = () => {
    const { dataText } = this.props
    const { deleting, curIndex, curText } = this.state
    const moduloCurText = curIndex % dataText.length
    const currentWord = dataText[moduloCurText]

    this.setState({
      curText: deleting
        ? currentWord.substring(0, curText.length - 1)
        : currentWord.substring(0, curText.length + 1),
      typingSpeed: deleting ? 100 : 200,
    })

    if (!deleting && curText.length === currentWord.length) {
      setTimeout(() => {
        this.setState({ deleting: true })
      }, 500)
    } else if (deleting && curText.length === 0) {
      this.setState({
        deleting: false,
        curIndex: curIndex + 1,
        curColor: this.state.color[moduloCurText],
      })
    }
    setTimeout(this.type, 200)
  }

  render() {
    return <p style={{ color: this.state.curColor }, {display:"inline"}}>{this.state.curText}</p>
  }
}
