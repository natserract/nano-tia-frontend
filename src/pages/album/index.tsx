import React, { useEffect } from 'react'
import { useToastData } from '../../hooks'

type Props = {}

const Album: React.FC<Props> = () => {
  const [toastData] = useToastData()

  return <h2>Album Pages { JSON.stringify(toastData.show) }</h2>
}

export default Album