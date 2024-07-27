

const SkillsProgress = () => {
    return (
        <div className="relative mx-5">
       
        <div className="skill-box">
          <span className="title">React Development</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="toltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Web Design</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="toltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">MERN Stack Development</span>
          <div className="skill-bar">
            <span className="skill-per js">
              <span className="toltip">85%</span>
            </span>
          </div>
        </div>
        {/* <div className="card">
          <div className="box">
            <div className="main-box">
              <div className="parcent">
                <svg>
                  <circle cx={70} cy={70} r={70}/>
                  <circle cx={70} cy={70} r={70}/>
                </svg>
                <div className="number">
                  <h2>96<span>%</span></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="text">
            <h2>React Development</h2>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="main-box">
              <div className="parcent">
                <svg>
                  <circle cx={"70"} cy={"70"} r={"70"}/>
                  <circle cx={"70"} cy={"70"} r={"70"}/>
                </svg>
                <div className="number">
                  <h2>80<span>%</span></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="text">
            <h2>Web Design</h2>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="main-box">
              <div className="parcent">
                <svg>
                  <circle cx={70} cy={70} r={70}/>
                  <circle cx={70} cy={70} r={70}/>
                </svg>
                <div className="number">
                  <h2>85<span>%</span></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="text">
            <h2>MERN Stack Development</h2>
          </div>
        </div> */}
      </div>
    );
};

export default SkillsProgress;