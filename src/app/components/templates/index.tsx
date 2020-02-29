import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMyUser } from '@app/stores/user/slice'
import { useEffect } from 'react'
import { selectMyUser } from '@app/stores/user/selector'
const IndexTemplate = () => {
  const dispatch = useDispatch()
  const myUser = useSelector(selectMyUser)
  useEffect(() => {
    dispatch(
      setMyUser({
        id: 'xxx',
        name: 'Demo Account',
        displayName: 'Demo Account',
        firstName: 'Demo',
        lastName: 'Account',
        email: 'test@example.com',
        imageUrl: 'https://robohash.org/1.png'
      })
    )
  }, [])

  return <div>ユーザ名: {myUser?.displayName || ''}</div>
}

export default IndexTemplate
