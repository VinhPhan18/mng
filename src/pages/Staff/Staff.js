import React from 'react'
import classNames from "classnames/bind";

import style from "./Staff.module.scss"

export default function Staff() {
  const cx = classNames.bind(style)

  return (
    <div className={cx("wrapper")}>
      {/* Code vào đây */}
      Staff
    </div>
  )
}
