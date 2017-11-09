import React, { PureComponent } from "react"
import classNames               from "classnames"

export default class Button extends PureComponent {
  render() {
    const { color, size, icon, text, disabled, onClick } = this.props
    const buttonClass = classNames("button", { [`is-${color}`]: color, [`is-${size}`]: size })
    const iconClass = classNames("fa", { [`fa-${icon}`]: icon })
    return (
      <button
        onClick={onClick}
        className={buttonClass}
        disabled={disabled}
      >
        {icon && (
          <span className="icon is-small">
            <i className={iconClass} />
          </span>
        )}
        <span>{text}</span>
      </button>
    )
  }
}