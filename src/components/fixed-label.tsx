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
    rel="noreferrer"
    className={classNames(
      'z-20 flex flex-col items-center justify-center rounded-l-full bg-blue pr-4 pl-6 text-center font-headings uppercase text-white shadow-[5px_10px_6px_0px_rgba(0,0,0,0.5)] md:py-1 md:text-xl lg:pr-5 lg:pl-8',
      className,
    )}
  >
    <div className="translate-y-2">{subtitleTop}</div>
    <div className="relative z-10 -rotate-3 font-accented text-3xl text-pink lg:text-4xl">
      {title}
    </div>
    <div className="-translate-y-2">{subtitleBottom}</div>
  </a>
)

export default FixedLabel
