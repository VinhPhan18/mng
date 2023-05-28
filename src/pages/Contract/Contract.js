import React from 'react'
import classNames from "classnames/bind";

import style from "./Contract.module.scss"

export default function Contract() {
  const cx = classNames.bind(style)

  return (
    <div className={cx("wrapper")}>
      {/* Code vào đây */}
      Contract
    </div>
  )
}
