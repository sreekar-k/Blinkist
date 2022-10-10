import React from 'react'
import NavHead from './NavHead'

import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('to check nav head element',()=>{
    render(<NavHead name={'Heading'}></NavHead> )
    const headElement = screen.getByText(/Heading/i);
  expect(headElement).toBeInTheDocument();
})