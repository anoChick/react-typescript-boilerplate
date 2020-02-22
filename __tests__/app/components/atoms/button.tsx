import * as React from 'react'
import { shallow } from 'enzyme'
import * as TestRenderer from 'react-test-renderer'

import Button from '@app/components/atoms/button'

describe('button', () => {
  test('ok', () => {
    const wrapper = shallow(<Button />)
    const buttonWrapper = wrapper.find('button')
    expect(buttonWrapper).toHaveLength(1)
  })
  test('snapshot', () => {
    const tree = TestRenderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
