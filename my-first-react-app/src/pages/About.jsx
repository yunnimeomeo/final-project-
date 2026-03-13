import AboutMeCard from "../components/AboutMeCard"

function About() {
    return (
    <div>
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