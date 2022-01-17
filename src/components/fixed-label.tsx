import * as React from 'react'
import classNames from 'classnames'

const FixedLabel: React.FC<{
  className?: string
  title: string
  subtitleTop: string
  subtitleBottom: string
}> = ({className, title, subtitleTop, subtitleBottom}) => (
  <div
    className={classNames(
      'z-20 flex flex-col items-center justify-center h-32 p-3 text-xl text-center text-white uppercase rounded-l-full w-80 bg-blue font-headings shadow-[5px_10px_6px_0px_rgba(0,0,0,0.5)]',
      className,
    )}
  >
    <div>{subtitleTop}</div>
    <div className="absolute text-6xl text-pink font-accented">{title}</div>
    <div className="mt-10">{subtitleBottom}</div>
  </div>
)

export default FixedLabel
