import Home from "./Home"
import { useFetchJobsQuery } from "../../store/jobs/jobService"
import { useEffect } from "react";

const HomeContainer = () => {
    const { data: jobs, isLoading, error } = useFetchJobsQuery();
    useEffect(() => {
        console.log("jobs",jobs);
        
    })
    
    return <Home jobs={jobs} isLoading={isLoading} error={error} />;
}

export default HomeContainer
