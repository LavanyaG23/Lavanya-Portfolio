import React, { useState } from 'react'
import ParticleEffectButton from 'react-particle-effect-button'


export default function Animate(){
  const [ hidden, setHidden ] = useState(false);
  return (
    <div className='Animate'>
      <ParticleEffectButton color="#00adef" hidden={true}>
        Connect
      </ParticleEffectButton>
    </div>
  );
}