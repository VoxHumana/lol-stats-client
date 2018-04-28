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
    this.state = {
      dropdownOpen: false,
      region: 'NA',
      summonerName: '',
      isValid: false
    }

    this.toggle = this.toggle.bind(this)
    this.selectRegion = this.selectRegion.bind(this)
    this.onClickSummon = this.onClickSummon.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.regions = Object.keys(Regions).map((region) =>
      <Region key={region} region={region.toUpperCase()} handleClick={this.selectRegion} />
    )
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  selectRegion (e) {
    e.preventDefault()
    this.props.onHideError()
    this.setState({
      region: e.target.textContent
    })
  };

  async onClickSummon () {
    if (this.state.isValid) {
      this.props.onHideError()
      this.props.onLoading()
      this.props.onFetchSummonerMatches(this.state.summonerName, this.state.region)
    } else {
      this.props.onShowError('Invalid Summoner name or region')
    }
  };

  handleInputChange (e) {
    this.props.onHideError()
    const inputName = e.target.value
    const isValid = /^[\w\s]{3,16}$/g.test(inputName)
    this.setState({
      isValid: isValid,
      summonerName: inputName
    })
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
          value={this.state.summonerName}
          onChange={this.handleInputChange}
        />
        <InputGroupAddon>
          <ButtonGroup>
            <Dropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
              size='lg'>
              <DropdownToggle caret
                className='rounded-0'
              >
                {this.state.region}
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
