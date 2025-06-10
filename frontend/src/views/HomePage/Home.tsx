import{ Carousel} from "../../components/Carausal";
import SearchBox from "../../components/Hero";
import Title from "../../components/Title";
import StepCard from "../../components/StepCard";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaBlackTie } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import CategoryCard from "../../components/CategoryCard";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { SiAdblock } from "react-icons/si";
import { motion } from "framer-motion";

import { BiPhoneCall } from "react-icons/bi";
import { FaStarOfDavid } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import type { HomeProps } from "../../types/home/homeType";



const Home = ({  isLoading, error }: HomeProps) => {
  const token = localStorage.getItem("token");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  return (
    <div>
  
      <Carousel /> 

      <SearchBox />
      <Title
        text1="Your Job Hunt Made Simple"
        text2="Kickstart Your Journey in 3 Steps"
      />
      <div className="flex flex-row gap-10 justify-center items-center mt-16">
        <StepCard
          icon={<RiAccountPinCircleFill size={50} />}
          title="Create an Account"
          description="Sign up in seconds to start your job search journey. It's fast, simple, and absolutely free."
        />

        <StepCard
          icon={<FaBlackTie size={50} />}
          title="Search for Jobs"
          description="Explore thousands of job listings across industries. Filter by role, location, or company to find your match."
        />

        <StepCard
          icon={<IoDocumentText size={50} />}
          title="Apply with Resume"
          description="Submit your resume with a single click and start connecting with top employers instantly."
        />
      </div>
      <div>
        <motion.div
          initial={{ y: 140, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Title
            text1="Popular Categories"
            text2="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
          />
        </motion.div>
      </div>

      <div className="flex flex-row w-full gap-4 justify-evenly mt-6">
        <CategoryCard
          icon={<FaMoneyCheckDollar size={50} />}
          title="Acounting"
        />
        <CategoryCard icon={<AiFillSound size={50} />} title="Marketing" />
        <CategoryCard icon={<MdDesignServices size={50} />} title="Design" />
        <CategoryCard icon={<FaLaptopCode size={50} />} title="Developement" />
        <CategoryCard icon={<SiAdblock size={50} />} title="Human Resource" />
      </div>
      

      <div className="w-full px-4 md:px-10 lg:px-20 py-12 bg-white">
        <motion.div
          initial={{ y: 140, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <Title
            text1="Here's why you'll love it at Ai Smart Hunters"
            text2="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30,000+ companies worldwide."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 justify-items-center">
          <StepCard
            icon={<BiPhoneCall size={40} />}
            title="24/7 Support"
            description="Get assistance any time with our round-the-clock support team."
          />

          <StepCard
            icon={<FaStarOfDavid size={40} />}
            title="Tech & Startup Jobs"
            description="Explore jobs in fast-growing companies and tech startups."
          />

          <StepCard
            icon={<RiContactsFill size={40} />}
            title="Quick & Easy"
            description="Easily apply and track your applications without the hassle."
          />

          <StepCard
            icon={<GiSandsOfTime size={40} />}
            title="Save Time"
            description="Let our AI do the heavy lifting so you can focus on interviews."
          />
        </div>
      </div>
    </div>
  );
};

export default Home
