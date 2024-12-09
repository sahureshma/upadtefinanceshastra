import React from 'react'

import Mutualxray from '../Mutualxray/Mutualxray';
import { MutualCandleStickChart } from '../Mutualcandlestick/Mutualcandlestick';

function Mutualfund() {
  return (
    <div>
      <MutualCandleStickChart/>
   
      <Mutualxray/>
    </div>
  )
}

export default Mutualfund;