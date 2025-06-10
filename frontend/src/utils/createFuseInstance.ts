import Fuse from "fuse.js";
import type { JobType } from "../types/jobs/jobTypes";

export function createFuseInstance(jobs: JobType[] | null) {
    if (!jobs) return null;

    return new Fuse(jobs, {
        keys: [
            "title",
            "description",
            "job_category",
            "category",
            "company",
            "location",
        ],
        threshold: 0.3,
    });
}
