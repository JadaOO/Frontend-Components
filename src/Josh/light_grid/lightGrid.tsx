import './styles.css'

/** 
 * 
 * 
 * 1. Layout of lights
 * 2. Light State and memorized order of clicks
 *    - Disable clicks when light is green or when 8 are selected
 *    - If enabled lights state contains ID number, turn it green
 *    - Clicking light turns the light green
 *    - Store as an array
 * 
 * 3. Turn lights back to initial state, in order 
 *    - Pop from lights array at a specific interval until it's empty
 *    - Disable all clicks when active
 * 
 * 
*/

import { MouseEventHandler, useState } from 'react';

interface ILightProps {
    handleClick: MouseEventHandler<HTMLButtonElement>
    isActive: boolean; 
    isDisabled: boolean;

}


const Light = ({handleClick, isActive, isDisabled}: ILightProps) => {

  return <button 
    className={`light ${isActive && 'active'}`}
    onClick={handleClick}
    disabled={isDisabled}
  />

}

const LightGrid: React.FC = () => {

  const [activeLights, setActiveLights] = useState<number[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const layout = [
    [0,1,2],
    [3,4],
    [5,6,7]
  ]

  const handleClick = (id: number) => {

    let temp = [...activeLights]
    temp.push(id);
    setActiveLights(temp);

    if (temp.length === 8) {

      setIsDisabled(true);

      const intervalId = setInterval( () => {
        
        setActiveLights((oldActiveLights) => {
          let newActiveLights = oldActiveLights.slice();
          newActiveLights.pop();

          if (newActiveLights.length === 0){ 
            clearInterval(intervalId);
            setIsDisabled(false);
          }

          return newActiveLights;
        });
      }, 300)
    }
  }
  
  return (
    <div className="light-container">
      {
        layout.map( row => {
          return (
            <div className="light-row">
            {row.map( (id: number) => {
                return (<Light 
                    key={id}
                    isActive={activeLights.includes(id)}
                    isDisabled={!isDisabled && activeLights.includes(id)}
                    handleClick={() => handleClick(id)}
                />)
            })}
            </div>
          )
        })
      }
    </div>
  )
}

export default LightGrid