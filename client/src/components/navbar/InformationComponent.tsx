import React, { FC } from 'react'
import { IconType } from 'react-icons'

type InfoPropType = {
  Icon: IconType
  topText: string
  bottomText: string
}

const InformationComponent: FC<InfoPropType> = ({
  Icon,
  topText,
  bottomText,
}) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Icon className="text-[1.8rem] text-brand-white " />
      <div className="flex flex-col items-start justify-center">
        <div className="text-brand-white font-bold text-[1rem]">{topText}</div>
        <div className="text-brand-white text-[14px]">{bottomText}</div>
      </div>
    </div>
  )
}

export default InformationComponent
