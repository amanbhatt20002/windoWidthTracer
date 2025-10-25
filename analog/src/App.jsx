import React ,{useState,useEffect} from 'react'

const App = () => {
  const [time,setTime]=useState(new Date());
  useEffect(()=>{
    const interval=setInterval(()=>{
      setTime(new Date());

    },1000)
    return () => clearInterval(interval);

  },[])
  const seconds=time.getSeconds();
  const minutes=time.getMinutes();
  const hours=time.getHours();


  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <>
    <div style={styles.clock}>
      {/* Clock face */}
      <div style={{ ...styles.hand, ...styles.hour, transform: `rotate(${hourDeg}deg)` }} />
      <div style={{ ...styles.hand, ...styles.minute, transform: `rotate(${minuteDeg}deg)` }} />
      <div style={{ ...styles.hand, ...styles.second, transform: `rotate(${secondDeg}deg)` }} />
      <div style={styles.centerDot}></div>
    </div>

    </>
  )
}
const styles = {
  clock: {
    position: "relative",
    width: "200px",
    height: "200px",
    border: "8px solid black",
    borderRadius: "50%",
    margin: "50px auto",
    background: "white",
  },
  hand: {
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transformOrigin: "bottom center",
    transform: "rotate(0deg)",
  },
  hour: {
    width: "6px",
    height: "50px",
    backgroundColor: "black",
  },
  minute: {
    width: "4px",
    height: "70px",
    backgroundColor: "gray",
  },
  second: {
    width: "2px",
    height: "80px",
    backgroundColor: "red",
  },
  centerDot: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "10px",
    height: "10px",
    backgroundColor: "black",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export default App