import React from 'react';

const ProgressBar = ({ currentValue, maxValue, valueName }) => <progress max={maxValue} value={currentValue}>{`${valueName}: ${currentValue}`}</progress>

export default ProgressBar;