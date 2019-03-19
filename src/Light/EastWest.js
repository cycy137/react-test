import React from 'react';
import Red from "../color/red";
import Yellow from "../color/yellow";
import Green from "../color/green";

class EastWest extends React.PureComponent {

  state = {
    greenNorth: true,
    yellowNorth: false,
    redNorth: false,
    greenEast: false,
    yellowEast: false,
    redEast:true
  };

  transition = () => {
    if (this.state.greenNorth ||this.state.greenEast) {
        if(this.state.greenNorth) {
            this.setState({
                greenNorth: !this.state.greenNorth,
                yellowNorth: !this.state.yellowNorth,
            });
        }
        else {
            this.setState({
                greenEast: !this.state.greenEast,
                yellowEast: !this.state.yellowEast,
            });
        }
      this.waitShortInterval();
      return;
    }

    if (this.state.yellowNorth|| this.state.yellowEast) {
        if(this.state.yellowNorth){
          this.setState({
            yellowNorth: !this.state.yellowNorth,
            redNorth: !this.state.redNorth,
            greenEast:!this.state.greenEast,
            redEast: !this.state.redEast
          });
        }
        else {
          this.setState({
            yellowEast: !this.state.yellowEast,
            redEast: !this.state.redEast,
            greenNorth:!this.state.greenNorth,
            redNorth:!this.state.redNorth
          });
        }
      this.waitLongInterval();
      return;
    }

    // if (this.state.redNorth || this.state.redEast) {
    //     if(this.state.redNorth){
    //         this.setState({
    //             redNorth: !this.state.redNorth,
    //             redEast: !this.state.redEast,
    //             greenEast:!this.state.greenEast
    //         });
    //     }
    //     else {
    //         this.setState({
    //             redNorth: !this.state.redNorth,
    //             redEast: !this.state.redEast,
    //             greenNorth:!this.state.greenNorth
    //         });
    //     }
    //   this.waitLongInterval();
    //   return;
    // }
  };

  waitLongInterval() {
    setTimeout(this.transition, 2000);
  }

  waitShortInterval() {
    setTimeout(this.transition, 800);
  }

    componentDidMount () {
        this.waitLongInterval()

    }

  render() {
    const { greenEast, yellowEast, redEast } = this.state;

    return (
      <div className='container traffic-background'>
        <Red isOn={redEast} />
        <Yellow isOn={yellowEast} />
        <Green isOn={greenEast} />
      </div>
    );
  }
}
export default EastWest