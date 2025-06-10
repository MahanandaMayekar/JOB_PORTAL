import type { JobType } from "../jobs/jobTypes";

export type HomeProps = {
    jobs: JobType[];
    isLoading: boolean;
    error: unknown; // or a more specific type if you know what `error` looks like
  };