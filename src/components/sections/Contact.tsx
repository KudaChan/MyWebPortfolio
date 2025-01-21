import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import EmailForm from "../ui/EmailForm";
import { slideIn } from "../../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <EmailForm />
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;