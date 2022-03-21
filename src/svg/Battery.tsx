const Battery = () => (
  <svg width="24" height="24" viewBox="0 0 512 512">
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="256"
        y1="385.15"
        x2="256"
        y2="126.85"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" />
      </linearGradient>
    </defs>
    <path
      d="M256,335.05H51.52V176.94H256ZM477.85,220.46v-51.9a41.57,41.57,0,0,0-41.33-41.72H41.35A41.57,41.57,0,0,0,0,168.56V343.45a41.56,41.56,0,0,0,41.35,41.7H436.52a41.56,41.56,0,0,0,41.33-41.7v-51.9H512V220.46Zm-28.58,125.6a12.83,12.83,0,0,1-12.81,12.77H41.4a12.82,12.82,0,0,1-12.79-12.77V166A12.83,12.83,0,0,1,41.4,153.15H436.47A12.84,12.84,0,0,1,449.27,166Z"
      fill="url(#linear-gradient)"
    />
  </svg>
);

export default Battery;
