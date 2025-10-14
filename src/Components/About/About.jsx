import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/user.jpeg'

function About() {
  return (
    <section
    id='about'
    className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >

      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

        {/* left side content */}

        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
{/* greetins */}
<h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
  Hi, I am 
</h1>
{/* name */}
<h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'> 
  Akshit Kumar
</h2>

{/* skills heading */}
<h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
<span className='text-white'>
I am a 
</span>
            <Typewriter
              words={[
                ' Full Stack Developer',
                ' Java Developer',
                ' UI/UX Developer',
                ' Programmer'
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h3>

            {/* abou me para */}
            <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
              Passionate Web Developer with skills in Java, React.js, and SQL.
Proficient in both frontend and backend development through personal projects.
Driven to deliver solutions while continuously enhancing technical expertise.
            </p>
            {/* resume button */}
            <a href="file:///C:/Users/Akshit/Downloads/Black%20and%20White%20Minimalist%20Accountant%20Resume%20(2)%20(1).pdf" target='_blank' rel='noopener noreferrer' className='text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:py-4 hover:px-10' style={{
              background:'linear-gradient(90deg,#8245ec, #a855f7)',
              boxShadow:'0 0 2px #8245ec,0 0 2px #8245ec,0 0 40px #8245ec',
            }}
            >Download CV</a>
        </div>

        
{/* right side */}

<div className='md:w-1/2 flex justify-center md:justify-end'>
<Tilt
className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
tiltMaxAngleX={20}
tiltMaxAngleY={20}
perspective={1000}
scale={1.05}
transitionSpeed={1000}
gyroscope={true}
>
  <img src={profileImage} alt="Akshit" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />
</Tilt>

</div>

      </div>

    </section>
  )
}

export default About
