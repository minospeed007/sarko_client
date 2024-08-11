import './about.css';
import girl from '../assets/girl.JPG'
import boy from '../assets/boy.JPG'

import sunday from '../assets/sunday.JPG'
import nixon from '../assets/nixon.JPG'
import nonso from '../assets/nonso.JPG'
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import MailList from '../mail/mail';
import { SiYoutube } from "react-icons/si";






  

const About= () => {
  
  return (
    <>
    <div className="about-root-div">
      <hr className='about-hr'/>
            <div className="about-parent-div">
                <div className='about-text-div'>

                 <div className='text-span-container'>

                  <div className='span-text-con'>
                  <h1 className="sarto-header">Who we are</h1>

                    <div className='sarto-text'>
                      <span className='sarto-text-desc'>
                  Sator was founded with a vision to create a space where fashion meets community. 
                  Inspired by the diverse and dynamic world of fashion, we wanted to build a platform 
                  that empowers both creators and consumers.
                  Since our inception, we have grown into a thriving community where you can explore, 
                  follow, and engage with your favorite brands and tailors.
                  </span>
                </div>
                </div>


                

                <div className='img-div-about'>
                  <img src={girl} alt="Fashion" className='about_header_img'/>
                  </div>
                  </div>
              </div>
            </div>

            <div className='mission-vision-div'>
              <div className='mission-div'>
                <span className='mission-span-text'>Mission</span>
                <span className='sarto-text-desc'> 
                    Our mission is to connect you 
                  with amazing fashion creators and provide a personalized shopping experience that reflects your unique style.
                </span>
              </div>
              <div className='vision-div'>
                <span className='mission-span-text'>Vision</span>
                <span className='sarto-text-desc'> 
           Our mission is to connect you 
                  with amazing fashion creators and provide a personalized shopping experience that reflects your unique style.
                </span>
              </div>
            </div>

            <div className='team-div'>
              <div className='team-title'>
                <span className='team-span-text'>Meet</span>
                <span className='team-span-text'>Our team</span>
              </div>
              <div className='founder-div'>
                <div className='founder-img-div'>
                  <div className='profile-img-div'>
                  <img src={sunday} alt='founder'   className='profile-img' />
                  </div>

                  <span className='founder-span-name'>Daniel Sunday</span>

                  <span className='founder-span-text'>CEO & Co-Founder</span>

                </div>
                <div className='founder-img-div'>
                <div className='profile-img-div'>

                  <img src={sunday} alt='founder'   className='profile-img'/>
                  </div>

                  <span className='founder-span-name'>Godslove Nixon</span>

                  <span className='founder-span-text'>HRM & Co-Founder</span>

                </div>
                <div className='founder-img-div'>
                <div className='profile-img-div'>

                  <img src={sunday} alt='founder' className='profile-img' />
                  </div>

                  <span className='founder-span-name'>Nonso Okeke</span>

                  <span className='founder-span-text'>CTO & Co-Founder</span>

                </div>
                <div> 
                </div>
               
              </div>
          </div>
          

         
        <div className='unique-title-div'>
          <h1>What makes us unique</h1>
          <div className='unique-text-div'>
          
          <div className='unique-subdiv'>
          <div className='unique-icon-div'>

            <div className='icon-div'><MdOutlineTravelExplore className='icon' /> </div>
            <h2 className='text-unique-header'>Curated Explore Page </h2>
          <div className='subdiv-span-div'>
          <span className='text-desc'>
             Discover a wide array of clothing items handpicked for their uniqueness and quality.</span>
          </div>
          </div>

          </div>
            <div className='unique-subdiv'>
            <div className='unique-icon-div'>

            <div className='icon-div'><FaPeopleGroup className='icon' /></div>
            <div  > 
               <h2 className='text-unique-header'>Community Focus </h2></div>

            

          <div className='subdiv-span-div'>

          <span className='text-desc'>
             Engage with other fashion enthusiasts, share your style, 
             and find inspiration within the Sator community.</span>
          </div>
          </div>
          </div>
          
          <div className='unique-subdiv'>
            <div className='unique-icon-div'>
            <div className='icon-div'>< FaUserGear  className='icon'/></div>

         <div> 
         
          <h2 className='text-unique-header'>Personalized Feed </h2>
          </div>

          
          <div className='subdiv-span-div'>

          <span className='text-desc'>
             Follow your favorite brands and tailors to see their latest creations in your personalized feed.</span>
          </div>
          </div>
          </div>

         
          </div>

        </div>

              <div className='commit-title-div'>
        <div className='commit-h1-div'>
        <h1 className='commit-h1'>Our Commitment to You</h1>
              </div>
              <div className='commit-root'>
              <div className='commit-img-div'>
            <img src={boy} alt='boy' className='commit-img'/>
          </div>
          <div className='commit-text-div'>
            <div className='div-commit'>
          <span className='text-desc'>
            We are committed to providing you with a shopping experience that is not only enjoyable but also reliable.
            Our platform ensures secure transactions, high-quality products, and exceptional customer service.
          </span>
          </div>
          </div>

          
        </div>
        </div>

        <div className='join-us-div'>
          <h1>Join Us on This Journey</h1>
          <div className='join-us-text-div'>
          <span className='text-desc'>
            We are committed to providing you with a shopping experience that is not only enjoyable but also reliable.
            Our platform ensures secure transactions, high-quality products, and exceptional customer service.
          </span>
          </div>
        </div>

        <div className='socials-div'>
           

          <div className='follow-div'>
            <div className='social-span-div'>
            <span className='text-desc'>
            Follow us on social media to 
            stay updated on the newest arrivals and exclusive offers.
            </span>
            </div>
            <div className='social-icon-div'>
              <div className='social-divs'><ImFacebook2 className='social-icon'/></div>
              <div className='social-divs'>< BsTwitterX className='social-icon'/></div>
              <div className='social-divs' ><BsInstagram className='social-icon'/></div>
              <div className='social-divs'><SiYoutube className='social-icon'/></div>

            </div>
            </div>
      </div>
      <MailList/>
    </div>
    </>
  );
};

export default About;
