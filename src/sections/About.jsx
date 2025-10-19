import SectionInfo from "../components/SectionInfo"
import data from "../data"

function About() {
  return (
    <div className="flex" id="about">
      <SectionInfo section={data.sectionInfo[2]} />
    </div>
  )
}

export default About