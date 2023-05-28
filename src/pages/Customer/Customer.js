import React from 'react'
import classNames from "classnames/bind";

import style from "./Customer.module.scss"

export default function Customer() {
  const cx = classNames.bind(style)

  return (
    <div className={cx("wrapper")}>
      <span>gyguydg</span>
    </div>
  )
}
