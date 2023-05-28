import React from 'react'
import classNames from "classnames/bind";

import style from "./Transaction.module.scss"

export default function Transaction() {
  const cx = classNames.bind(style)

  return (
    <div className={cx("wrapper")}>
      {/* Code vào đây */}
      Transaction
    </div>
  )
}
