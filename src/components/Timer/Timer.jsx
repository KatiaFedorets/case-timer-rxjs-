import React from 'react';
import { useEffect, useState } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import styles from './Timer.module.css';
import Button from '../Button/Button'


const Timer = () => {

  const [time, setTime] = useState(0);
  const [stop, setStop] = useState(0);
  const [statusQuery, setStatusQuery] = useState('stop');
  
        
  const visibleTime = new Date(time).toISOString().slice(11, 19);

  useEffect(() => {

    const observer = new Subject();
    const timeInterval = interval(1000);
      timeInterval
      .pipe(takeUntil(observer))
      .subscribe(() => {
        if (statusQuery === 'start') {
          setTime(time => time + 1000);
        }
      });
    
    return () => {
      observer.next();
      observer.complete();
    };
  }, [statusQuery]);


    const onStartTimer = () => {
        setStatusQuery('start')
    };

    const onStopTimer = () => {
      setStatusQuery('stop');
      setTime(0);
    };

    const onResetTimer = () => {
      setTime(0);
    };

    const onWaitTimer = () => {
        const stopTimer = Date.now();
        console.log(stopTimer);
        console.log(stop);
        if (stopTimer - stop <= 300) {
         setStatusQuery('wait');
        }
          setStop(stopTimer);
    };
    
  
    return (
      <>
        <div className={styles.timer}>{visibleTime}</div>
        <Button
            onStartTimer={onStartTimer}
            onStopTimer={onStopTimer}
            onResetTimer={onResetTimer}
            onWaitTimer={onWaitTimer}
        />
     
      </>
   
  );
};

export default Timer;