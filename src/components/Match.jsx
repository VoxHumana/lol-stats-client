import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap'
import ChampionDetails from './ChampionDetails'
import KDA from './KDA'
import Stats from './Stats'
import ChampionBuild from './ChampionBuild'

export default function Match ({ matchDetails }) {
  const win = matchDetails.win
  const championDetails = (<ChampionDetails
    champion={matchDetails.champion}
    spells={matchDetails.summonerSpells}
  />)
  const kda = (<KDA
    kills={matchDetails.kills}
    deaths={matchDetails.deaths}
    assists={matchDetails.assists}
  />)
  const stats = (<Stats
    cs={matchDetails.cs}
    gold={matchDetails.gold}
    level={matchDetails.level}
    duration={Math.round(matchDetails.gameDuration / 60)}
  />)
  const build = (<ChampionBuild
    items={matchDetails.items}
    trinket={matchDetails.trinket}
  />)

  return (
    <Row
      className='match-container'
    >
      <Col xs='12'>
        <Card className={win ? 'bg-success' : 'bg-danger'}>
          <CardBody>
            <Container>
              <Row>
                <Col
                  xs='3'
                >
                  { championDetails }
                </Col>
                <Col
                  xs='3'
                >
                  { kda }
                </Col>
                <Col
                  xs='2'
                >
                  { stats }
                </Col>
                <Col
                  xs='4'
                >
                  { build }
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
