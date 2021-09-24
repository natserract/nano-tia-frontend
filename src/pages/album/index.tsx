import React, { useCallback, useEffect } from 'react'
import { useToastData } from '../../hooks'
import { get } from '../../api/API'

type Props = {}

const Album: React.FC<Props> = () => {
  const [toastData, setToastData] = useToastData()

  const fetchAlbumsData = useCallback(() => {
    get('https://jsonplaceholder.typicode.com/albums')
      .then((data) => {
        console.log('RESULT', data)
      })
      .catch((error) => {
        setToastData({ error: `Error: ${error.what}`, show: true })
      })
  }, [setToastData])

  useEffect(fetchAlbumsData, []);

  return <h2>Album Pages { JSON.stringify(toastData.show) }</h2>
}

export default Album