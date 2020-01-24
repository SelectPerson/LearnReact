import React, {useState} from 'react';
import First from './hw/first'
import Input from './hw/input'
import Lazy from './hw/lazy'
import Derived from './hw/deriveds'

export default function () {
    let [someMin, setSomeMin] = useState(20);

    setTimeout(() => {
        setSomeMin(40);
    },2000);

    return (
      <div>
          <h2>Simple</h2>
          <First min={1} max={5}/>
          <h2>Input</h2>
          <Input min={1} max={10}/>
          <h2>Lazy</h2>
          <Lazy min={20} max={50}/>
          <h2>Derived Input</h2>
          <Lazy min={someMin} max={50}/>
      </div>
    );
}