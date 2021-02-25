import React from 'react';
import {OneLaunch} from '../../container';
import {useSelector} from 'react-redux';

export function OneLaunchScreen() {
  const data = useSelector((state) => state.data);
  return <OneLaunch data={data} />;
}
