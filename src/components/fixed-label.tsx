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
      'z-20 flex flex-col items-center justify-center pr-6 pl-8 py-1 lg:pr-6 lg:pl-10 lg:py-3 lg:text-xl text-center text-white uppercase rounded-l-full bg-blue font-headings shadow-[5px_10px_6px_0px_rgba(0,0,0,0.5)]',
      className,
    )}
  >
    <div>{subtitleTop}</div>
    <div className="absolute text-4xl lg:text-6xl text-pink font-accented">
      {title}
    </div>
    <div className="mt-5 lg:mt-10">{subtitleBottom}</div>
  </div>
)

export default FixedLabel
