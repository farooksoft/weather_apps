import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default (props) => {
  const height = props.height ? props.height : 80;
  const width = props.width ? props.width : 100;
  const color = props.color ? props.color : 'blue';
  const average = _.round(_.sum(props.data) / props.data.length);
  
  return (
    <div>
      <Sparklines 
        height={height} 
        width={width} 
        data={props.data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="average">{average} {props.units}</div>
    </div>

  );
};
