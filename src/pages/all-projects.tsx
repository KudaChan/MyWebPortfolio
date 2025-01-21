import { AllProjects, StarsCanvas} from "../components"

const All_Projects = () => {
  return (
    <div className="relative z-0 min-h-screen w-full bg-primary">
      <div className=" flex justify-center">
        <AllProjects />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default All_Projects