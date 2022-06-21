import React from 'react';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';

class MyApp extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const elements = [
       { data: { id: 'one', label: 'Node 1' }, position: { x: 150, y: 50 } },
       { data: { id: 'two', label: 'Node 2' }, position: { x: 250, y: 140 } },
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
    ];

    return <CytoscapeComponent elements={elements} style={ { width: '600px', height: '600px' } } />;
  }
}

export default MyApp;
