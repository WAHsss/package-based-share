import { Input, Button,Space } from 'antd';
import styles from './is-even.module.scss';
import { useState } from 'react';
import { isEven } from '../utils';

/* eslint-disable-next-line */
export interface IsEvenProps {}

export function BaseFunction(props: {text:string;judge:(v:number)=>boolean}){
 const [data,setData] = useState('');
  return (
    <div className={styles['container']}>
      <Space>
        <Input value={data} onChange={(e)=>setData(e.target.value)} />
         <Button onClick={()=>{
          if(props.judge(Number(data))) {
            alert(props.text);
          }else{
            alert("is no" + props.text);
          }
         }}>点我</Button>
      </Space>
    </div>
  );
}

export function IsEven(props: IsEvenProps) {
  return (
    <BaseFunction text='是Even' judge={isEven} />
  );
}

export default IsEven;
