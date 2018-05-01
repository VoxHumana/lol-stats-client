import React from 'react'
import {
  DropdownItem
} from 'reactstrap'

export default function Region ({ handleClick, region }) {
  return (
    <DropdownItem onClick={handleClick}>{ region }</DropdownItem>
  )
}
