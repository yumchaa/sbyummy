import Header from '@/containers/common/Header'
import Parent from '@/containers/Parent'
import store from '@/store'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Provider } from 'react-redux'

storiesOf('Header', module).add('to Header', () => <Header />)

storiesOf('Parent', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('to Parent', () => <Parent />)
