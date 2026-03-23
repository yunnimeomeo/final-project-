import Title from "../components/Title"
import AboutMeCard from "../components/AboutMeCard"


function Home() {
    return (
    <>
          <Title myTitle="Gogett3r" mySubtitle="welcome!" />
          <h1></h1>
       <div>
        <Title myTitle="About us" mySubtitle="This is us" />
         <h1>About us Page</h1>
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
<AboutMeCard 
          name = "Lelena"
  bio = "I like swimming"
  funfact = "I was born in Ethiopia"
  emoji = "😄"
        />
        <AboutMeCard 
          name = "Gracie"
  bio = "I like eating"
  funfact = "I have mild fear of heights!!!"
  emoji = "😄"
        />

       </div>)

         ;

    </>
    )
}

export default Home;