import React from 'react'
import { ColorRing, Radio } from 'react-loader-spinner';
	
function MainLoader() {
	const wrapperStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7',
	};
		
		return <ColorRing
                  visible={true}
                  ariaLabel="blocks-loading"
                  wrapperStyle={wrapperStyle}
                  colors={[
                    '#c17900',
                    '#f0bb29',
                    '#e7eceb',
                    '#b6d1df',
                    '#223f4a',
                  ]}
                />
}

function RequestLoader() {
	return <Radio
                  colors={['#DA6A00', '#EE9B01', '#14471E']}
                  visible={true}
                  height="30"
                  width="30"
                  ariaLabel="radio-loading"
                  wrapperStyle={{ width: '20%' }}
                  wrapperClass="radio-wrapper"
                />
}
	
export  {MainLoader, RequestLoader}