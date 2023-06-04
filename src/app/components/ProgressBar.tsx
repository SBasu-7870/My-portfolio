import { CSSProperties } from 'react'


interface Progress_BarProps {
    bgcolor: string;
    backgroundColor: string;
    borderRadius: number;
    progress: number;
    height: number;
}

const ProgressBar = ({
    bgcolor,
    backgroundColor,
    borderRadius,
    progress,
    height,
  }: Progress_BarProps) => {
    const parentDivStyle: CSSProperties = {
      height,
      width: '100%',
      backgroundColor,
      borderRadius: `${borderRadius}px`,
      marginTop: '10'
    };
  
    const childDivStyle: CSSProperties = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: bgcolor,
      borderRadius: `${borderRadius}px`,
      textAlign: 'right',
    };
  
        
    return (
    <div style={parentDivStyle}>
      <div style={childDivStyle}>
      </div>
    </div>
    )
}
  
export default ProgressBar;