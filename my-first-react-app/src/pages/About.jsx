import AboutMeCard from "../components/AboutMeCard"
import Title from "../components/Title"

function About() {
    return (
    <div>

      <Title myTitle="About us" mySubtitle="This is us" />
          <AboutMeCard 
          name = "Yunni Nguyen"
  bio = "I like Cat."
  funfact = "I can cooking"
  emoji = "😄"
        />

         <AboutMeCard 
          name = "Lulya"
  bio = "I like traveling"
  funfact = "i actually like cooking . i do"
  emoji = "😄"
        />
<AboutMeCard 
          name = "Lelena"
  bio = "I like swimming"
  funfact = "I was born in Ethiopia"
  emoji = "🤪"
        />
        <AboutMeCard 
          name = "Gracie"
  bio = "I like eating"
  funfact = "I have mild fear of heights!!!"
  emoji = "💀"
        />

       </div>)

         ;
}

export default About;