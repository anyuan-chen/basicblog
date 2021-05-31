import React, { Component } from "react"

export default class AutoTyper extends Component {
  static debugProps = {
    dataText: ["DEBUG THIS NOW"],
  }
  constructor(props) {
    super(props)
    this.state = {
      curText: "",
      curColor: "rgba( 74, 77, 105, 50%)",
      deleting: false,
      curIndex: 0,
      color: [
        "rgba( 74, 77, 105, 50%)",
        "rgba( 153, 139, 152, 50%)",
        "rgba( 200, 173, 166, 50%)",
        "rgba( 241, 233, 227, 50%)",
        "rgba( 34, 33, 59, 50%)",
      ],
    }
  }

  componentDidMount() {
    this.type();
  }

  type = () => {
    const { dataText } = this.props
    const { deleting, curIndex, curText} = this.state
    const moduloCurText = curIndex % dataText.length
    const currentWord = dataText[moduloCurText]

    this.setState({
      curText: deleting
        ? currentWord.substring(0, curText.length - 1)
        : currentWord.substring(0, curText.length + 1),
      typingSpeed: deleting ? 200 : 400,
    })

    if (!deleting && curText.length === currentWord.length) {
      setTimeout(() => {
        this.setState({ deleting: true })
      }, 500)
    } 
    else if (deleting && curText.length === 0) {
      this.setState({
        deleting: false,
        curIndex: curIndex + 1,
        curColor: this.state.color[moduloCurText],
      })
    }
    setTimeout(this.type, 400)
  }

  render() {
    return (
        <p style={{ color: this.state.curColor }}>{this.state.curText}</p>
    )
  }

}
