// node_modules
import React, { Component } from 'react';
import {connect} from 'react-redux';

// redux
import store from '@versus-store';

// sub-components
import InputGenerator from '../Common/InputGenerator/InputGenerator';

// data
import FormMap from './UploadGame-Form.json';

class UploadGame extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    let form = Object.assign({}, FormMap);
    this.setState({form});
  }

  onChange = (name, value) => {
    console.log('UploadGame', name, value);
  }

  render() {
    // const {} = this.props;
    // const {} = this.state;

    const LeagueSelect = InputGenerator(FormMap.league.input, 
      (n, v) => this.onChange(n, v));

    // let SeasonSelect = InputGenerator(FormMap.season.input, 
    //   (n, v) => this.onChange(n, v));

    // let StadiumSelect = InputGenerator(FormMap.stadium.input, 
    //   (n, v) => this.onChange(n, v));

    // let RefereeSelect = InputGenerator(FormMap.referee.input, 
    //   (n, v) => this.onChange(n, v));
    
    // let AttendanceSelect = InputGenerator(FormMap.attendance.input, 
    //   (n, v) => this.onChange(n, v)); 
      
    // let DateSelect = InputGenerator(FormMap.date.input,
    //   (n, v) => this.onChange(n, v));

    // let HalfTimeScoreSelect = InputGenerator(FormMap.score.ht.input,
    //   (n, v) => this.onChange(n, v));

    // let FullTimeScoreSelect = InputGenerator(FormMap.score.ft.input,
    //   (n, v) => this.onChange(n, v));

    // let HomeNameSelect = InputGenerator(FormMap.home.name.input,
    //   (n, v) => this.onChange(n, v)); // dropdown, no custom option select

    // let HomeGoalsSelect = InputGenerator(FormMap.home.goals.input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero (should match the score_select) 

    // let HomeYellowCardsSelect = InputGenerator(FormMap.home.cards.yellow.input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero 
    
    // let HomeRedCardsSelect = InputGenerator(FormMap.home.cards.red.input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero 

    // let HomeShotsOnTargetSelect = InputGenerator(FormMap.home.shots['on-target'].input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero 
    
    // let HomeShotsOffTarget = InputGenerator(FormMap.home.shots['off-target'].input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero 

    // let HomeCornersSelect = InputGenerator(FormMap.home.corners.input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero 

    // let HomeFreekicks = InputGenerator(FormMap.home.freekicks.input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero
    
    // // squad = [] // array of select boxes (min 16 in array)

    // let AwayNameSelect = InputGenerator(FormMap.away.name.input,
    //   (n, v) => this.onChange(n, v)); // dropdown, no custom option select

    // let AwayGoalsSelect = InputGenerator(FormMap.away.goals.input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero (should match the score_select) 

    // let AwayYellowCardsSelect = InputGenerator(FormMap.away.cards.yellow.input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero 
    
    // let AwayRedCardsSelect = InputGenerator(FormMap.away.cards.red.input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero 

    // let AwayShotsOnTargetSelect = InputGenerator(FormMap.away.shots['on-target'].input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero 
    
    // let AwayShotsOffTarget = InputGenerator(FormMap.away.shots['off-target'].input,
    //   (n, v) => this.onChange(n, v));  // number box cannot be below zero 

    // let AwayCornersSelect = InputGenerator(FormMap.away.corners.input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero 

    // let AwayFreekicks = InputGenerator(FormMap.away.freekicks.input,
    //   (n, v) => this.onChange(n, v)); // number box cannot be below zero
    
    // squad = [] // array of select boxes (min 16 in array)

    // let player_object = {
    //   number: null, // number box cannot be below zero (can be auto selected from dropdown)
    //   firstName: null, // text box (can be auto selected from dropdown)
    //   secondName: null, // text box (can be auto selected from dropdown)
    //   started: null, // checkbox
    //   substituted: null, // checkbox opening up a number box
    //   goals: [], // + button to add multiple number boxes
    //   cards: {
    //     yellow: null, // number box cannot be below zero 
    //     red: null // number box cannot be below zero 
    //   }
    // }

    return (
      <div className="UploadGame">
        <h1>Upload Game</h1>
        <div className="UploadGame__general">
          <h2>General data</h2>
          <LeagueSelect props={FormMap.league.input} callback={this.onChange}/>
          {/* <StadiumSelect />
          <RefereeSelect />
          <AttendanceSelect />
          <DateSelect />
          <HalfTimeScoreSelect />
          <FullTimeScoreSelect /> */}
        </div>
        <div className="UploadGame__team-container">
          <div className="UploadGame__home-team">
            <h3>Home team</h3>
            {/* <HomeNameSelect />
            <HomeGoalsSelect />
            <HomeYellowCardsSelect />
            <HomeRedCardsSelect />
            <HomeShotsOnTargetSelect />
            <HomeShotsOffTarget />
            <HomeCornersSelect />
            <HomeFreekicks /> */}
          </div> 
          <div className="UploadGame__away-team">
            <h3>Away team</h3>
            {/* <AwayNameSelect />
            <AwayGoalsSelect />
            <AwayYellowCardsSelect />
            <AwayRedCardsSelect />
            <AwayShotsOnTargetSelect />
            <AwayShotsOffTarget />
            <AwayCornersSelect />
            <AwayFreekicks /> */}
          </div>
        </div>
      </div>
    );
  }
}

const storeToProps = (store) => {
  return {
    leagues: store.leaguesReducer.leageus
  }
}

export default connect(storeToProps)(UploadGame);