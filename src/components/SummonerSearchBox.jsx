import React from 'react'
import Region from './Region'
import Regions from '../regions'
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap'

export default class SummonerSearchBox extends React.Component {
  constructor (props) {
    super(props)

    this.selectRegion = this.selectRegion.bind(this)
    this.onClickSummon = this.onClickSummon.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.regions = Object.keys(Regions).map((region) =>
      <Region key={region} region={region.toUpperCase()} handleClick={this.selectRegion} />
    )
  }

  selectRegion (e) {
    e.preventDefault()
    this.props.selectRegion(e.target.textContent)
  };

  async onClickSummon () {
    if (this.props.isValid) {
      await this.props.fetchMatches(this.props.summonerName, this.props.region)
    } else {
      this.props.showError('Invalid Summoner name or region')
    }
  };

  handleInputChange (e) {
    const name = e.target.value
    this.props.validateName(name)
  };

  render () {
    return (
      <InputGroup
        size='lg'
      >
        <Input
          id='summoner-input-form'
          placeholder='Summoner Name e.g. RiotSchmick'
          type='text'
          value={this.props.summonerName}
          onChange={this.handleInputChange}
        />
        <InputGroupAddon>
          <ButtonGroup>
            <Dropdown
              isOpen={this.props.dropdown}
              toggle={this.props.toggle}
              size='lg'>
              <DropdownToggle caret
                className='rounded-0'
              >
                {this.props.region}
              </DropdownToggle>
              <DropdownMenu>
                {this.regions}
              </DropdownMenu>
            </Dropdown>
            <Button
              color='primary'
              size='lg'
              onClick={this.onClickSummon}> Summon
            </Button>
          </ButtonGroup>
        </InputGroupAddon>
      </InputGroup>)
  }
}
