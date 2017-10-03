import React from 'react';
import LoadingSvg from '../../styles/github.svg';
class Loading extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (<div style={{textAlign: 'center'}}><img src={LoadingSvg} alt="Loading" /></div>);
  }
}



export default Loading;