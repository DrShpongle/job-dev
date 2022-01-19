import * as React from 'react'
import classNames from 'classnames'

const FixedLabel: React.FC<{
  className?: string
  title: string
  subtitleTop: string
  subtitleBottom: string
}> = ({className, title, subtitleTop, subtitleBottom}) => (
  <a
    href="#"
    target="_blank"
    className={classNames(
      'z-20 flex flex-col items-center justify-center pr-4 pl-6 md:py-1 lg:pr-5 lg:pl-8 md:text-xl text-center text-white uppercase rounded-l-full bg-blue font-headings shadow-[5px_10px_6px_0px_rgba(0,0,0,0.5)]',
      className,
    )}
  >
    <div className="translate-y-2">{subtitleTop}</div>
    <div className="relative z-10 text-3xl lg:text-4xl text-pink font-accented -rotate-3">
      {title}
    </div>
    <div className="-translate-y-2">{subtitleBottom}</div>
  </a>
)

export default FixedLabel
