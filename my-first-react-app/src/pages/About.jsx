import AboutMeCard from "../components/AboutMeCard"
import Title from "../components/Title"

function About() {
    return (
    <div>

      <Title myTitle="About us" mySubtitle="this is us" />
         <h1>About Page</h1>
          <AboutMeCard 
          name = "Yunni Nguyen"
  bio = "I like Cat."
  funfact = "Fun fact: I can cooking"
  emoji = "😄"
        />

         <AboutMeCard 
          name = "Lulya"
  bio = "I like traveling"
  funfact = "i actually like cooking . i do"
  emoji = "😄"
        />
       </div>)

         ;
}

export default About;