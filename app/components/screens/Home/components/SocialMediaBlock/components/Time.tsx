import moment from 'moment'
import { memo, useEffect, useState } from 'react'

export const ActualTime = memo(() => {
  const [dateState, setDateState] = useState(moment())

  useEffect(() => {
    setInterval(() => setDateState(moment()), 5000)
  }, [])
  return <>{moment(dateState).format('H:mm')}</>
})
